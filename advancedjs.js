const outer = ()=>{
    let counter = 0
    const inner = () =>{
        counter++
        console.log(counter)
    } 
    return inner
}
outer();


