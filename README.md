# js-intersect
This is demo of polygons intersection algorithm written in JS. Visual part of project based on template provided by [kottans.org](http//kottans.org).
Demo site is available via GitHub Pages here: [vrd.github.io/js-intersect] (http://vrd.github.io/js-intersect).

Project consists of following files:
- __index.html__ - main demo page 
- __test.html__ - page with test results for checking algorithm correctness
- __index.js__ - code for drawing polygons and calling intersects() function
- __solution.js__ - script with `intersects()` function and many other functions that realize algorithm
- __test.js__ - script with tests
- __index.css__ - styles for index.html
- __test.css__ - styles for test.html

##### How to use:
Function `intersects()` in file __solution.js__ is a top-level function of an algotithm. Function takes two arguments. Each argument is a polygon given in a form of list of its vertexes. Every vertex is an object with two keys: "x" and "y". Example of polygon:
`[{x: 100, y: 200}, {x: 150, y: 200}, {x:150, y: 270}]` Polygon can consist of 3 to 100 vertexes.
Function returns list of polygons (result of polygons intersection) in same format. 

P.S. Algorithm can perform not only intersection of two polygons but other actions: union, complement etc. Look at function `filterPolygons()` in file solution.js for more information.


