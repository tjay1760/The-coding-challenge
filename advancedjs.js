let a = 10
const outer =()=>{
    b = 20
    const inner = () =>{
        c = 30
        console.log(a,b,c)
    }
    inner()
}
outer()
