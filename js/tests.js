const calc = require('./calc');

const tests = [
    [8,5,'+'],
    [5,3,'-'],
    [3,7,'*'],
    [14,2,'/'],
]

for(let i = 0; i < tests.length; i++) {
    const [a,b,c] = tests[i];
    console.log(calc(a,b,c));
}