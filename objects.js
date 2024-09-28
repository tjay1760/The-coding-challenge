let [CLOSED,OPEN] = [{},{}]

CLOSED = {
    now:OPEN
}
// OPEN = {
//     world:"today"
// }
OPEN.today = "wow"
console.log(CLOSED)
// console.log(OPEN)