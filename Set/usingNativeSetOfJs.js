// Sets
const setA = new Set();
setA.add(1);
setA.add(2);
const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

// Union
console.log(new Set([...setA, ...setB]));

// Intersection
console.log(new Set([...setA].filter((x) => setB.has(x))));

// Difference
console.log(new Set([...setA].filter((x) => !setB.has(x))));
