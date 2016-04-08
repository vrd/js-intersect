// пример многоугольников
var examples = {
  first: [
    { x: 60,  y: 60  },
    { x: 180, y: 0   },
    { x: 300, y: 60  },
    { x: 300, y: 300 },
    { x: 240, y: 180 },
    { x: 210, y: 180 },
    { x: 180, y: 240 },
    { x: 150, y: 180 },
    { x: 120, y: 180 },
    { x: 60,  y: 300 },
  ],
  second: [
    { x: 300,  y: 240 },
    { x: 330, y: 220 },
    { x: 330, y: 210 },
    { x: 270, y: 90  },
    { x: 230, y: 270 },
    { x: 210, y: 90  },
    { x: 180, y: 60  },
    { x: 150, y: 90  },
    { x: 140, y: 280 },
    { x: 90,  y: 90  },
    { x: 30,  y: 210 }
  ]

};

function drawPolygon(data, container, color) {
  var pol = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  var str = '';
  str += data.map(function (point) {
    return point.x + ',' + point.y;
  }).join(' ');
  pol.setAttribute('points', str);
  pol.style.fill = color;
  container.appendChild(pol);
}

function drawAllPolygons(pol1, pol2) {
  drawPolygon(pol1, document.querySelector('svg.base'), 'navy');
  drawPolygon(pol2, document.querySelector('svg.base'), 'yellow');
  intersects(pol1, pol2).forEach(function (p) {
    drawPolygon(p, document.querySelector('svg.intersections'), 'red');
  });
}

function getTwoRandomPolygons(num1, num2) {
  var twoPolygons = [[],[]]; 
  var x, y;
  nums = [num1, num2];
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums[i]; j++) {
      x = Math.round(380*Math.random() + 10);
      y = Math.round(380*Math.random() + 10);
      twoPolygons[i].push({x: x, y: y});
    }
  }
  //log(twoPolygons);
  return twoPolygons;
}

function drawDefault() {
  drawAllPolygons(examples.first, examples.second);
}

function drawRandom() {
  var svg1 = document.querySelector('svg.base');
  var base = svg1.getElementsByTagName('*');
  for (i = base.length - 1; i >= 0; i--) {
    svg1.removeChild(base[i]);
  } 
  var svg2 = document.querySelector('svg.intersections');
  base = svg2.getElementsByTagName('*');
  for (i = base.length - 1; i >= 0; i--) {
    svg2.removeChild(base[i]);
  } 
  var polygons = getTwoRandomPolygons(5, 5);
  drawAllPolygons(polygons[0], polygons[1]);
}


