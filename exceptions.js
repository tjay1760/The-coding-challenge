function power(n,p){
    try{
        if (n<0||p<0){
            throw new Error(" cannot power negative")
        }
        return Math.pow(n,p)
    } catch (error){
        return error.message
    }

}
console.log(power(-2,"s"))