
const l = () => console.log(arguments[0]);

{
    // Negative example
    const arr = [1, 2]
    const arrAdd = (value) => {
        arr.push(value)
        return arr
    }

    arrAdd(3) // [1, 2, 3] 
    console.log(' // Negative example arr=', arr);
    arrAdd(3) // [1, 2, 3, 3] 
    console.log(' // Negative example arr=', arr);
}

{
    // Positive example
    const arr = [1, 2]

    const arrAdd = (value) => {
        return arr.concat(value)
    }
    arrAdd(3) // [1, 2, 3] 
    arrAdd(3) // [1, 2, 3] 
    console.log(' // Positive example', arrAdd(3));
    console.log('ARRAY', arr);

}

{
    const add = (x) => x + x
    const mult = (x) => x * x
    const addAndMult = (x) => add(mult(x))
    console.log('add3=', add(3));
    console.log('mult3=', mult(3));
    l('hey', addAndMult(4))
}
