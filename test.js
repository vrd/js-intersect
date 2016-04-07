fig1 = [
  { x: 100, y: 200  },
  { x: 300, y: 150  },
  { x: 300, y: 250  }
];

fig2 = [
  { x: 200, y: 100  },
  { x: 200, y: 300  },
  { x: 350, y: 300  },
  { x: 350, y: 100  }
];



edges = [
  [
    { x: 100, y: 200  },
    { x: 300, y: 150  } 
  ],
  [
    { x: 300, y: 150  },
    { x: 300, y: 250  } 
  ]
];

polygons = [
  [
    {x: 100, y: 200},
    {x: 200, y: 175},
    {x: 200, y: 225}
  ],
  [
    {x: 200, y: 175},
    {x: 300, y: 150},
    {x: 300, y: 250},
    {x: 200, y: 225}
  ],
  [
    {x: 200, y: 175},
    {x: 300, y: 150},
    {x: 300, y: 250},
    {x: 200, y: 225},
    {x: 200, y: 300},
    {x: 350, y: 300},
    {x: 350, y: 100},
    {x: 200, y: 100}
  ]
];

small = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 1, y: 1}
];

mesh = [
  [
    {x: 100, y: 200},
    {x: 200, y: 175}
  ],
  [
    {x: 200, y: 175},
    {x: 300, y: 150}
  ],
  [
    {x: 300, y: 150},
    {x: 300, y: 250}
  ], 
  [
    {x: 300, y: 250},
    {x: 200, y: 225}
  ], 
  [
    {x: 200, y: 225},
    {x: 100, y: 200}
  ], 
  [
    {x: 200, y: 100},
    {x: 200, y: 175}
  ], 
  [
    {x: 200, y: 175},
    {x: 200, y: 225}
  ], 
  [
    {x: 200, y: 225},
    {x: 200, y: 300}
  ], 
  [
    {x: 200, y: 300},
    {x: 350, y: 300}
  ], 
  [
    {x: 350, y: 300},
    {x: 350, y: 100}
  ], 
  [
    {x: 350, y: 100},
    {x: 200, y: 100}
  ]        
];

points = [fig1[0], {x: 200, y: 175}, fig1[1], fig1[2], {x: 200, y: 225}].concat(fig2);


describe("intersects", function() {
  it("returns polygons intersection", function() {
    assert.deepEqual(intersects(fig1, fig2), [polygons[1]]);
  });
});

describe("edgify", function() {
  it("returns edges and points from polygons", function() {
    assert.deepEqual(edgify(fig1, fig2), [mesh, points]);
  });
});

describe("polygonate", function() {
  it("returns nonintersecting polygons from edges", function() {
    assert.deepEqual(polygonate(mesh, points), polygons);
  });
});

describe("filterPolygons", function() {
  it("returns polygons that satisfy condition: intersect", function() {
    assert.deepEqual(filterPolygons(polygons, fig1, fig2, "intersect"), [polygons[1]]);
  });
  it("returns polygons that satisfy condition: cut1", function() {
    assert.deepEqual(filterPolygons(polygons, fig1, fig2, "cut1"), [polygons[0]]);
  });
  it("returns polygons that satisfy condition: cut2", function() {
    assert.deepEqual(filterPolygons(polygons, fig1, fig2, "cut2"), [polygons[2]]);
  });
  it("returns polygons that satisfy condition: sum", function() {
    assert.deepEqual(filterPolygons(polygons, fig1, fig2, "sum"), polygons);
  });
});

describe("polygonArea", function() {
  it("returnes polygon area", function() {
    assert.deepEqual(polygonArea(small), 0.5);
  });
});

describe("removeSmallPolygons", function() {
  it("returnes array without small polygons", function() {
    assert.deepEqual(removeSmallPolygons(polygons.concat(small), 0.00000001), polygons);
  });
});

describe("sortPoints", function() {
  it("returns array of points sorted by t value", function() {
    assert.deepEqual(sortPoints([{x: 1, y: 2, t: 3}, {x: 4, y: 5, t: 1}, {x: 6, y: 7, t: -1}]),
     [{x: 6, y: 7, t: -1}, {x: 4, y: 5, t: 1}, {x: 1, y: 2, t: 3}]);
  });
});

describe("findPointInsidePolygon", function() {
  it("returns true if point is inside polygon", function() {
    assert.deepEqual(findPointInsidePolygon({x: 200, y: 200}, fig1), true);
  });
  it("returns false if point is outside polygon", function() {
    assert.deepEqual(findPointInsidePolygon({x: 50, y: 200}, fig1), false);
  });
});

describe("getSize", function() {
  it("returns size of polygon", function() {
    assert.deepEqual(getSize(fig1), {x: {min: 100, max: 300}, y: {min: 150, max: 250}});
  });
});

describe("getPointInsidePolygon", function() {

  it("returns point located inside polygon 1", function() {
    assert.deepEqual(getPointInsidePolygon(fig1), {x: 200, y: 200});
  });
  it("returns point located inside polygon 2", function() {
    assert.deepEqual(getPointInsidePolygon(fig2), {x: 275, y: 200});
  });
});

describe("checkPolygons", function() {
  it("returns true if polygons are valid", function() {
    assert.equal(checkPolygons(fig1, fig2), true);
  });
  it("returns false if first polygon is invalid", function() {
    assert.equal(checkPolygons(fig1.slice(0, 2), fig2), false);
  });
  it("returns false if second polygon is invalid", function() {
    assert.equal(checkPolygons(fig1, fig2.slice(0, 2)), false);
  });
});

describe("getEdges", function() {
  it("returns edges from polygon specified with points", function() {
    assert.deepEqual(getEdges(fig1), [
      [fig1[0], fig1[1]],
      [fig1[1], fig1[2]],
      [fig1[2], fig1[0]]
    ]);
  });
});

describe("pointExists", function() {
  it("returns true if point exists in array", function() {
    assert.deepEqual(pointExists(fig1[0], fig1), true);
  });
  it("returns false if point doesn't exist in array", function() {
    assert.deepEqual(pointExists(fig2[0], fig1), false);
  });
});

describe("edgeExists", function() {
  it("returns true if edge exists in array", function() {
    assert.deepEqual(edgeExists(edges[0], edges), true);
  });
  it("returns false if edge doesn't exist in array", function() {
    assert.deepEqual(edgeExists([{x: 110, y: 220}, {x: 280, y: 180}], edges), false);
  });
});

describe("equalEdges", function() {
  it("returns true if edges have same points", function() {
    assert.deepEqual(equalEdges(edges[0], edges[0]), true);
  });
  it("returns false if edges don't have same points", function() {
    assert.deepEqual(equalEdges(edges[0], edges[1]), false);
  });
});

describe("findEdgeIntersection", function() {
  it("returns false if edges are parallel", function() {
    assert.equal(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 3, y: 4}, {x: 5, y: 6}]), false);
  });
  it("returns false if edges don't intersect", function() {
    assert.equal(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 1, y: 7}, {x: 3, y: 5}]), false);
  });  
  it("returns false if edges are collinear and don't intersect", function() {
    assert.equal(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 6, y: 6}, {x: 8, y: 8}]), false);
  });
  it("returns point if edges are collinear and intersect at one endpoint", function() {
    assert.deepEqual(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 4, y: 4}, {x: 6, y: 6}]),
     [{x: 4, y: 4, t: 0.5}]);
  });
  it("returns two points if edges are collinear and intersect at two endpoints", function() {
    assert.deepEqual(findEdgeIntersection([{x: 3, y: 3}, {x: 7, y: 7}], [{x: 4, y: 4}, {x: 6, y: 6}]),
     [{x: 4, y: 4, t: 0.25}, {x: 6, y: 6, t: 0.75}]);
  });
  it("returns point if edges intersect", function() {
    assert.deepEqual(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 3, y: 5}, {x: 5, y: 3}]),
     [{x: 4, y: 4, t: 0.5}]);
  });  
});

describe("classifyPoint", function() {
  it("point is at right", function() {
    assert.deepEqual(classifyPoint({x: 5, y: 3}, [{x: 3, y: 3}, {x: 5, y: 5}]), {loc: "LEFT", theta: 315});
  });
  it("point is at left", function() {
    assert.deepEqual(classifyPoint({x: 3, y: 5}, [{x: 3, y: 3}, {x: 5, y: 5}]), {loc: "RIGHT", theta: 45});
  });
  it("point is beyond", function() {
    assert.deepEqual(classifyPoint({x: 6, y: 6}, [{x: 3, y: 3}, {x: 5, y: 5}]), {loc: "BEYOND", theta: 180});
  });
  it("point is between", function() {
    assert.deepEqual(classifyPoint({x: 4, y: 4}, [{x: 3, y: 3}, {x: 5, y: 5}]), {loc: "BETWEEN", t: 0.5});
  });
});

describe("polarAngle", function() {

  it("returns false if edge has zero length", function() {
    assert.equal(polarAngle([{x: 3, y: 3}, {x: 3, y: 3}]), false);
  });

  it("returns 45 if angle is 45", function() {
    assert.equal(polarAngle([{x: 3, y: 3}, {x: 5, y: 5}]), 45);
  });

  it("returns 315 if angle is 315", function() {
    assert.equal(polarAngle([{x: 0, y: 0}, {x: 5, y: -5}]), 315);
  });

});

describe("polygonExists", function() {
  it("returns false if polygons array is empty", function() {
    assert.equal(polygonExists([fig2[0], fig1[1], fig1[2]], []), false);
  });
  it("returns false if polygon doesn't exist in array", function() {
    assert.equal(polygonExists([fig2[0], fig1[1], fig1[2]], [fig1, fig2]), false);
  });
  it("returns true if polygon existsin array", function() {
    assert.equal(polygonExists([fig1[0], fig1[1], fig1[2]], [fig1, fig2]), true);
  });
});