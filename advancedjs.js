let base = 2;
const outer = ()=>{
    let counter = 0
    const inner = () =>{
        counter++;
        base+=5;
        console.log(`base =${base} counter =${counter} `)
    } 
    return inner
    // the return statement returns the function as well as its scope
}
const fn = outer();
fn()
fn()


