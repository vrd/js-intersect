//default test
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

//test #1 from @HatScripts
// fig1 = [
//   { x:  5.35328472172063, y:  3.3464605876540254 },
//   { x: 31.10025450900146, y:  3.3464605876540254 },
//   { x: 31.10025450900146, y: 38.65353941234598   },
//   { x:  5.35328472172063, y: 38.65353941234598   }
// ];
// fig2 = [
//   { x: 31.10025450900146, y: 6.964961212615723  },
//   { x:  5.35328472172063, y: 3.3464605876540254 },
//   { x: 26.64671527827937, y: 38.65353941234598  }
// ];

//test #2 from @HatScripts
// fig1 = [
//   { x: 10.143593539448977, y: 18.143593539448986 },
//   { x: 37.856406460551014, y: 18.143593539448986 },
//   { x: 37.856406460551014, y: 45.856406460551014 },
//   { x: 10.143593539448977, y: 45.856406460551014 }
// ];
// fig2 = [
//   { x: 37.856406460551014, y: 18.14359353944898  },
//   { x: 10.143593539448977, y:  2.143593539448986 },
//   { x: 21.85640646055102,  y: 45.856406460551014 }
// ];

//test #1 from @Skeptron
// var fig1 = [
//   {x: 1000, y: 800},
//   {x: 800, y: 500},
//   {x: 600, y: 500},
//   {x: 474, y: 800},
//   {x: 1000, y: 800}
// ];
// var fig2 = [
//   {x: 1000, y: 400},
//   {x: 400, y: 200},
//   {x: 200, y: 200},
//   {x: 200, y: 300},
//   {x: 449, y: 800},
//   {x: 1000, y: 800}
// ];

//test #2 from @Skeptron
// fig1 = [
//   {x: 926, y: 0},
//   {x: 600, y: 500},
//   {x: 600, y: 600},
//   {x: 799, y: 600},
//   {x: 1000, y: 559},
//   {x: 1000, y: 0}
// ];
// fig2 = [
//   {x: 1000, y: 400},
//   {x: 400, y: 200},
//   {x: 200, y: 200},
//   {x: 200, y: 300},
//   {x: 449, y: 800},
//   {x: 1000, y: 800}
// ];

//test from @clemosm
// fig1 = [
//   {x:383.11684890961,y:822.2939549877},
//   {x:383.08019699532,y:824.4200341334},
//   {x:381.523363302535,y:824.3935903418},
//   {x:381.46925809573,y:827.5166057295},
//   {x:379.9211510492,y:827.4901618769},
//   {x:378.91933205856,y:827.4742955655},
//   {x:379.01183450892,y:822.2278456159},
//   {x:380.21087570504,y:822.2463562398},
//   {x:380.18120510776,y:823.9942891567},
//   {x:380.844430223515,y:824.0075110482},
//   {x:380.874100820794,y:822.2542893642}
// ];
// fig2 = [
// {x:383.08019699532,y:824.4200341334},
// {x:381.523363302535,y:824.3935903418},
// {x:380.823486272486,y:824.3909459626},
// {x:380.844430223515,y:824.0075110482},
// {x:380.874100820794,y:822.2542893642},
// {x:383.11684890961,y:822.2939549877}
// ];

//test from @prendradjaja
// fig1 = [
//   {"x":1,"y":0},
//   {"x":1.0000000000000002,"y":1},
//   {"x":0.29289321881345287,"y":1.7071067811865477},
//   {"x":0.2928932188134526,"y":0.7071067811865477}
// ];
// fig2 = [
//   {"x":0.29289321881345254,"y":0.7071067811865476},
//   {"x":1.0000000000000002,"y":1.414213562373095},
//   {"x":2.220446049250313e-16,"y":1.4142135623730951},
//   {"x":-0.7071067811865476,"y":0.7071067811865479}
// ];

//second test from @prendradjaja
// fig1 = [
//   {"x":99.99999999999999,"y":0},
//   {"x":200,"y":-1.2246467991473532e-14},
//   {"x":200,"y":99.99999999999999},
//   {"x":100,"y":100.00000000000003}
// ];
// fig2 = [
//   {"x":0,"y":0},
//   {"x":200,"y":0},
//   {"x":270.71067811865476,"y":70.71067811865476},
//   {"x":270.71067811865476,"y":270.71067811865476},
//   {"x":200,"y":341.4213562373095},
//   {"x":0,"y":341.4213562373095},
//   {"x":-70.71067811865476,"y":270.71067811865476},
//   {"x":-70.71067811865476,"y":70.71067811865474}
// ];

// Test for issue #8 from @northernstream
// fig1=[
//   { x: 10, y: 0 },
//   { x: -10, y: 1.2246467991473533e-15 },
//   { x: -10, y: 1.2246467991473533e-15 },
//   { x: -9.92546151641322, y: 1.2186934340514755 },
//   { x: -9.702957262759965, y: 2.4192189559966772 },
//   { x: -9.335804264972015, y: 3.5836794954530067 },
//   { x: -8.82947592858927, y: 4.694715627858907 },
//   { x: -8.191520442889919, y: 5.73576436351046 },
//   { x: -7.431448254773944, y: 6.691306063588581 },
//   { x: -6.560590289905072, y: 7.547095802227721 },
//   { x: -5.591929034707467, y: 8.290375725550417 },
//   { x: -4.5399049973954675, y: 8.910065241883679 },
//   { x: -3.420201433256687, y: 9.396926207859085 },
//   { x: -2.249510543438648, y: 9.743700647852352 },
//   { x: -1.0452846326765333, y: 9.945218953682733 },
//   { x: 0.174524064372836, y: 9.998476951563912 },
//   { x: 1.3917310096006545, y: 9.902680687415703 },
//   { x: 2.5881904510252074, y: 9.659258262890683 },
//   { x: 3.746065934159122, y: 9.271838545667872 },
//   { x: 4.848096202463371, y: 8.746197071393958 },
//   { x: 5.877852522924732, y: 8.090169943749475 },
//   { x: 6.819983600624985, y: 7.313537016191704 },
//   { x: 7.66044443118978, y: 6.4278760968653925 },
//   { x: 8.386705679454241, y: 5.44639035015027 },
//   { x: 8.98794046299167, y: 4.383711467890774 },
//   { x: 9.455185755993169, y: 3.255681544571567 },
//   { x: 9.781476007338057, y: 2.079116908177593 },
//   { x: 9.961946980917455, y: 0.8715574274765816 },
//   { x: 10, y: 0 }
//   ];
//   fig2=[
//   { x: -3.4641016151399997, y: 3.6399999999999997 },
//   { x: -2.7767585183349683, y: 3.5979602952570557 },
//   { x: -2.099662123957873, y: 3.47246789619662 },
//   { x: -1.4429063797045063, y: 3.265393605444218 },
//   { x: -0.816282001027576, y: 2.979824423724347 },
//   { x: -0.22913051412010077, y: 2.620017529789913 },
//   { x: 0.30979500472396015, y: 2.1913368156925035 },
//   { x: 0.7924604173164336, y: 1.70017292350646 },
//   { x: 1.211670294070434, y: 1.1538479755750122 },
//   { x: 1.5611751812823944, y: 0.5605064185310433 },
//   { x: 1.8357647660925234, y: -0.07100639164322864 },
//   { x: 2.031345550248726, y: -0.7312760535006015 },
//   { x: 2.1450018747370607, y: -1.4104594671704347 },
//   { x: 2.1750393855420467, y: -2.0984315723062843 },
//   { x: 2.1210102925624557, y: -2.7849362894147713 },
//   { x: 1.9837200451303452, y: -3.4597394143782165 },
//   { x: 1.7652153246166802, y: -4.112781186865746 },
//   { x: 1.468753533126192, y: -4.7343262581893395 },
//   { x: 1.0987542331347027, y: -5.315108822929549 },
//   { x: 0.6607332619921222, y: -5.84647075075249 },
//   { x: 0.16122050349208106, y: -6.320490659191036 },
//   { x: -0.3923374576552501, y: -6.730102003212193 },
//   { x: -0.9916883472496036, y: -7.069198421127302 },
//   { x: -1.6278972240016387, y: -7.332724766380148 },
//   { x: -2.2914796789278418, y: -7.516752468138664 },
//   { x: -2.97254322604321, y: -7.618538097237445 },
//   { x: -3.6609347765421094, y: -7.636564264387699 },
//   { x: -4.3463919979669035, y: -7.570562240956576 },
//   { x: -5.018696301947874, y: -7.4215159650921185 },
//   { x: -5.667825179819504, y: -7.1916473734717625 },
//   { x: -6.284101615140003, y: -6.884383277344233 },
//   { x: -6.858338345717552, y: -6.504304276666732 },
//   { x: -7.381974824528745, y: -6.057076473909991 },
//   { x: -7.847204837757316, y: -5.549367005521084 },
//   { x: -8.247092877462244, y: -4.988744650275275 },
//   { x: -8.575677534026706, y: -4.383566996217544 },
//   { x: -8.828060367044666, y: -3.742855848274705 },
//   { x: -9.000478929784824, y: -3.076162733923712 },
//   { x: -9.09036285860541, y: -2.393426511916864 },
//   { x: -9.096372191155796, y: -1.7048252067897969 },
//   { x: -9.018417342128853, y: -1.0206242779585133 },
//   { x: -8.85766043877152, y: -0.3510235853637631 },
//   { x: -8.616497996244268, y: 0.2939946669475142 },
//   { x: -8.298525191099912, y: 0.9048147424927064 },
//   { x: -7.908482265481911, y: 1.4723307208367133 },
//   { x: -7.452183861032127, y: 1.988082245892128 },
//   { x: -6.936432335976713, y: 2.4443806503419117 },
//   { x: -6.368916357632706, y: 2.8344235759599137 },
//   { x: -5.758096282087513, y: 3.1523963811042695 },
//   { x: -5.113078029776235, y: 3.39355882363152 },
//   { x: -4.443477337181487, y: 3.554315726988853 },
//   { x: -3.7592764083502024, y: 3.632270576015796 },
//   { x: -3.4641016151399997, y: 3.6399999999999997 }
//   ];


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


describe("intersect", function() {
  it("returns polygons intersection", function() {
    assert.deepEqual(intersect(fig1, fig2), [polygons[1]]);
  });
});

describe("edgify", function() {
  it("returns edges and points from polygons", function() {
    assert.deepEqual(edgify(fig1, fig2), mesh);
  });
});

describe("polygonate", function() {
  it("returns nonintersecting polygons from edges", function() {
    assert.deepEqual(polygonate(mesh), polygons);
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

// describe("getPointInsidePolygon", function() {

//   it("returns point located inside polygon 1", function() {
//     assert.deepEqual(getPointInsidePolygon(fig1), {x: 200, y: 200});
//   });
//   it("returns point located inside polygon 2", function() {
//     assert.deepEqual(getPointInsidePolygon(fig2), {x: 275, y: 200});
//   });
// });

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

describe("getMidpoints", function() {
  it("returns midpoints of edges", function() {
    assert.deepEqual(getMidpoints([[{x: 3, y: 3}, {x: 5, y: 5}], [{x: -1, y: 2}, {x: 0, y: 4}]]),
     [{x: 4, y: 4}, {x: -0.5, y: 3}]);
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