function intersects(fig1, fig2) {
  if (!checkPolygons(fig1, fig2)) {
    return false;
  }
  var [edges, points] = edgify(fig1, fig2);
  var polygons = polygonate(edges, points);
  var filteredPolygons = filterPolygons(polygons, fig1, fig2, "intersect");
  return filteredPolygons;
}

//check polygons for correctness
function checkPolygons(fig1, fig2) {
  var figs = [fig1, fig2];
  for (var i = 0; i < figs.length; i++) {
    if (figs[i].length < 3) {
      console.error("Polygon " + (i+1) + " is invalid!");
      return false; 
    } 
  }
  return true;  
}

//create array of edges of all polygons
function edgify(fig1, fig2) {
  //create primary array from all edges
  var primEdges = getEdges(fig1).concat(getEdges(fig2));
  var secEdges = [];
  var interPoints;
  var allPoints = [];
  var points;
  var p;
  //check every edge
  for(var i = 0; i < primEdges.length; i++) {
    points = [];
    //for intersection with every edge except itself
    for(var j = 0; j < primEdges.length; j++) {
      if (i == j) continue;
      interPoints = findEdgeIntersection(primEdges[i], primEdges[j]);
      //if intersections found (array but not false returned)
      if (interPoints) {
        //check for uniqueness
        for (var k = 0; k < interPoints.length; k++) {
          if (!pointExists(interPoints[k], points)) {
            //and push to array
            points.push(interPoints[k]);
          }
        }                   
      }
    }
    p = primEdges[i][0];
    p.t = 0;
    points.push(p);
    p = primEdges[i][1];
    p.t = 1;
    points.push(p);
    //sort all points by position on edge
    points = sortPoints(points);
    //break edge to parts
    for (var k = 0; k < points.length - 1; k++) {
      var part = [
        { x: points[k].x, y: points[k].y },
        { x: points[k+1].x, y: points[k+1].y}
      ];
      // check for existanse in sec.array
      if (!edgeExists(part, secEdges)) {
        //push if not exists
        secEdges.push(part);
      }          
    }
    //save points
    for (k = 0; k < points.length; k++) {
      // check for existanse in allPoints array
      if (!pointExists(points[k], allPoints)) {
        //push if not exists
        allPoints.push(points[k]);
      }          
    }    
  }
  console.log("edgify: " + JSON.stringify(secEdges));
  return [secEdges, allPoints];
}

function sortPoints(points) {
  var p = points;
  p.sort((a,b) => {
        if (a.t > b.t) return 1;
        if (a.t < b.t) return -1;
      });
  return p;
}

function getEdges(fig) {
  var edges = [];
  var len = fig.length;
  for (var i = 0; i < len; i++) {
    edges.push([{x: fig[(i % len)].x, y: fig[(i % len)].y}, {x: fig[((i+1) % len)].x,
      y: fig[((i+1) % len)].y}]);
  }
  return edges;
}

function findEdgeIntersection(edge1, edge2) {
  var x1 = edge1[0].x;
  var x2 = edge1[1].x;
  var x3 = edge2[0].x;
  var x4 = edge2[1].x;
  var y1 = edge1[0].y;
  var y2 = edge1[1].y;
  var y3 = edge2[0].y;
  var y4 = edge2[1].y;
  var nom1 = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
  var nom2 = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
  var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
  var t1 = nom1 / denom;
  var t2 = nom2 / denom;
  var interPoints = [];
  var x, y;
  //1. lines are parallel or edges don't intersect 
  if (((denom === 0) && (nom1 !== 0)) || (t1 <= 0) || (t1 >= 1) || 
      (t2 < 0 ) || (t2 > 1)) {
    return false;
  //2. lines are collinear  
  } else if ((nom1 === 0) && (denom === 0)) {
    //check if endpoints of edge2 lies on edge1
    for (var i = 0; i < 2; i++) {
      var classify = classifyPoint(edge2[i], edge1);
      //find position of this endpoints relatively to edge1
      if (classify.loc == "BETWEEN") {
        x = +((x1 + classify.t*(x2 - x1)).toPrecision(10));
        y = +((y1 + classify.t*(y2 - y1)).toPrecision(10));
        interPoints.push({x: x, y: y, t: classify.t});
      }
    }
    //return positions of endpoints
    if (interPoints.length > 0) {
      return interPoints;  
    } else {
      return false;
    }       
  //3. edges intersect
  } else {
    x = +((x1 + t1*(x2 - x1)).toPrecision(10));
    y = +((y1 + t1*(y2 - y1)).toPrecision(10))
    interPoints.push({x: x, y: y, t: t1});
    return interPoints;
  }
}

function classifyPoint(p, edge) {
  var ax = edge[1].x - edge[0].x;
  var ay = edge[1].y - edge[0].y;
  var bx = p.x - edge[0].x;
  var by = p.y - edge[0].y;
  var sa = ax * by - bx * ay;
  if ((p.x === edge[0].x) && (p.y === edge[0].y)) {
    return {loc: "ORIGIN"};
  }
  if ((p.x === edge[1].x) && (p.y === edge[1].y)) {
    return {loc: "DESTINATION"};
  }
  var theta = (polarAngle([edge[1], edge[0]]) - 
    polarAngle([{x: edge[1].x, y: edge[1].y}, {x: p.x, y: p.y}])) % 360;
  if (theta < 0) {
    theta = theta + 360;
  } 
  if (sa < 0) {    
    return {loc: "LEFT", theta: theta};
  }
  if (sa > 0) {    
    return {loc: "RIGHT", theta: theta};
  }
  if (((ax * bx) < 0) || ((ay * by) < 0)) {
    return {loc: "BEHIND", theta: 0};
  }
  if ((Math.sqrt(ax * ax + ay * ay)) < (Math.sqrt(bx * bx + by * by))) {
    return {loc: "BEYOND", theta: 180};
  }
  var t;
  if (ax !== 0) {
    t = bx/ax;
  } else {
    t = by/ay;
  }
  return {loc: "BETWEEN", t: t};
}

function polarAngle(edge) {
  var dx = edge[1].x - edge[0].x;
  var dy = edge[1].y - edge[0].y;
  if ((dx === 0) && (dy === 0)) {
    //console.error("Edge has zero length.");
    return false;
  }
  if (dx === 0) {
    return ((dy > 0) ? 90 : 270);
  }
  if (dy === 0) {
    return ((dx > 0) ? 0 : 180);
  }
  var theta = Math.atan(dy/dx)*360/(2*Math.PI);
  if (dx > 0) {
    return ((dy >= 0) ? theta : theta + 360);
  } else {
    return (theta + 180);
  }
}
 
function pointExists(p, points) {
  if (points.length === 0) {
    return false;
  }
  for (var i = 0; i < points.length; i++) {
    if ((p.x === points[i].x) && (p.y === points[i].y)) {
      return true;
    }
  }
  return false;
}

function edgeExists(e, edges) {
  if (edges.length === 0) {
    return false;
  }
  for (var i = 0; i < edges.length; i++) {
    if (equalEdges(e, edges[i]))
      return true;
  }
  return false;  
}

function equalEdges(edge1, edge2) {
  if (((edge1[0].x === edge2[0].x) &&
      (edge1[0].y === edge2[0].y) &&
      (edge1[1].x === edge2[1].x) &&
      (edge1[1].y === edge2[1].y)) || (
      (edge1[0].x === edge2[1].x) &&
      (edge1[0].y === edge2[1].y) &&
      (edge1[1].x === edge2[0].x) &&
      (edge1[1].y === edge2[0].y))) {
    return true;
  } else {
    return false;
  }
}
// 
function polygonate(edges, points) {
  var polygons = [];
  var polygon = [];
  var len = edges.length;
  var allPoints = points;
  //start from every edge and create non-selfintersecting polygons
  for (var i = 0; i < len - 2; i++) {
    polygon  = [];
    var org = {x: edges[i][0].x, y: edges[i][0].y};    
    var dest = {x: edges[i][1].x, y: edges[i][1].y};
    var currentEdge = i;
    var point;
    var p;
    var direction = "clockwise";
    var correct = false;
    //while we havn't come to the starting edge again
    while ((polygon.length === 0) || (!correct)) {
      //add point to polygon
      polygon.push({x: org.x, y: org.y});
      point = undefined;
      //look for edge connected with end of current edge
      for (var j = 0; j < len; j++) {
        p = undefined;
        //except itself
        if (!equalEdges(edges[j], edges[currentEdge])) {
          //if some edge is connected to current edge in one endpoint
          if ((edges[j][0].x === dest.x) && (edges[j][0].y === dest.y)) {
            p = edges[j][1];
          }
          if ((edges[j][1].x === dest.x) && (edges[j][1].y === dest.y)) {
            p = edges[j][0];
          }
          //compare it with last found connected edge for minimum angle between itself and current edge 
          if (p) {
            var classify = classifyPoint(p, [org, dest]);
            //if this edge has smaller theta then last found edge update data of next edge of polygon
            if (!point || 
                ((classify.theta < point.theta) && (direction === "clockwise")) ||
                ((classify.theta > point.theta) && (direction === "counterclockwise"))) {
              point = {x: p.x, y: p.y, theta: classify.theta, edge: j};
            }
          }
        }
      }
      //change current edge to next edge
      org.x = dest.x;
      org.y = dest.y;
      dest.x = point.x;
      dest.y = point.y;
      currentEdge = point.edge;
      //if we reach start edge
      if ((org.x == edges[i][0].x) &&
          (org.y == edges[i][0].y) &&
          (dest.x == edges[i][1].x) &&
          (dest.y == edges[i][1].y)) {
        //presume polygon is correct 
        correct = true;
        //but check this
        for (var k = 0; k < allPoints.length; k++) {
          //if some point is inside polygon it is incorrect
          if ((!pointExists(allPoints[k], polygon)) && (findPointInsidePolygon(allPoints[k], polygon))) {
            correct = false;
            polygon = [];
            direction = "counterclockwise";
            break;
          }
        }
      }   
    }
    //add created polygon if it was not found before
    if (!polygonExists(polygon, polygons)) {
      polygons.push(polygon);
    }
  }
  console.log("polygonate: " + JSON.stringify(polygons));
  return polygons;
}

function polygonExists(polygon, polygons) {
  //if array is empty element doesn't exist in it
  if (polygons.length === 0) return false;
  //check every polygon in array
  for (var i = 0; i < polygons.length; i++) {
    //if lengths are not same go to next element
    if (polygon.length !== polygons[i].length) continue;
    //if length are same need to check
    else {
      //if all the points are same
      for (var j = 0; j < polygon.length; j++) {
        //if point is not found break forloop and go to next element
        if (!pointExists(polygon[j], polygons[i])) break;
        //if point found
        else {
          //and it is last point in polygon we found polygon in array!
          if (j === polygon.length - 1) return true;
        }        
      }
    }
  }
  return false;
}

function filterPolygons(polygons, fig1, fig2, mode) {
  var filtered = [];
  var c1, c2;
  var point;
  var bigPolygons = removeSmallPolygons(polygons, 0.0001);
  for(var i = 0; i < bigPolygons.length; i++) {
    point = getPointInsidePolygon(bigPolygons[i]);
    c1 = findPointInsidePolygon(point, fig1);
    c2 = findPointInsidePolygon(point, fig2);
    if (
        ((mode === "intersect") && c1 && c2) ||
        ((mode === "cut1") && c1 && !c2) ||
        ((mode === "cut2") && !c1 && c2) ||
        ((mode === "holes") && !c1 && !c2) ||
        ((mode === "sum") && (c1 || c2)) ||
        (mode === "all")) {
      filtered.push(bigPolygons[i]);
    }
  }
  console.log("filtered: " + JSON.stringify(filtered));
  return filtered;
}

function removeSmallPolygons(polygons, minSize) {
  var big = [];
  for (var i = 0; i < polygons.length; i++) {
    if (polygonArea(polygons[i]) >= minSize) {
      big.push(polygons[i]);
    }
  }
  return big;
}

function polygonArea(p) {
  var len = p.length;
  var s = 0;
  for (var i = 0; i < len; i++) {
     s += Math.abs((p[i % len].x + p[(i + 1) % len].x)*(p[i % len].y - 
      p[(i + 1) % len].y));
  }
  return s/2;
}

function getPointInsidePolygon(polygon) {
  var point;
  var size = getSize(polygon);
  var edges = getEdges(polygon);
  var y = (size.y.max + size.y.min) / 2;
  var dy = (size.y.max - size.y.min) / 17;
  var line = [];
  var points;
  var interPoints = [];
  var pointsOK = false;
  while (!pointsOK) {
    line = [{x: -50, y: y},{x: 450, y: y}];
    //find intersections with all polygon edges
    for (var i = 0; i < edges.length; i++) {
      points = findEdgeIntersection(line, edges[i]);
      //if edge doesn't lie inside line
      if (points && (points.length === 1)) {
         interPoints.push(points[0]);      
      }
    }
    interPoints = sortPoints(interPoints);
    //find two correct interpoints
    for (var i = 0; i < interPoints.length - 1; i++) {
      if (interPoints[i].t !== interPoints[i+1].t) {
        //enable exit from loop and calculate point coordinates
        pointsOK = true;
        point = {x: ((interPoints[i].x + interPoints[i+1].x) / 2), y: y};
      }
    }
    //all points are incorrect, need to change line parameters
    y = y + dy;
    if (((y > size.y.max) || (y < size.y.min)) && (pointsOK === false)) {
      pointsOK = true;
      point = undefined;
    }
  }
  return point;
}

function getSize(polygon) {
  var size = {
    x: {
      min: polygon[0].x,
      max: polygon[0].x
    },
    y: {
      min: polygon[0].y,
      max: polygon[0].y
    }
  };
  for (var i = 1; i < polygon.length; i++) {
    if (polygon[i].x < size.x.min) size.x.min = polygon[i].x;
    if (polygon[i].x > size.x.max) size.x.max = polygon[i].x;
    if (polygon[i].y < size.y.min) size.y.min = polygon[i].y;
    if (polygon[i].y > size.y.max) size.y.max = polygon[i].y;
  }
  return size;
}

function findPointInsidePolygon(point, polygon) {
  var cross = 0;
  var edges = getEdges(polygon);
  var classify;
  var org, dest;
  for (var i = 0; i < edges.length; i++) {
    [org, dest] = edges[i];
    classify = classifyPoint(point, [org, dest]);
    if (  (
            (classify.loc === "RIGHT") &&
            (org.y < point.y) &&
            (dest.y >= point.y)
          ) ||
          (
            (classify.loc === "LEFT") &&
            (org.y >= point.y) &&
            (dest.y < point.y)
          )
        ) {
      cross++;
    }
  }
  if (cross % 2) {
    return true;
  } else {
    return false;
  }
}
  
function log(obj) {
  console.log(JSON.stringify(obj));
}



  

