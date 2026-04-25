function solution(numbers, obstacle) {
    // TODO: quantify player progress on a board game assuming different starting positions.
    let result = []
    for(let i=0;i<numbers.length;i++) {
        let number=numbers[i]
        console.log(number, i, numbers.length)
        let position =i
        let moves=0
        while(position<numbers.length) {
            if(numbers[position] === obstacle) {
                console.log("obstacle")
                result.push(-1)
                break
            } else {
                moves +=1
            }
            position +=numbers[position]
        }
        if(numbers[position] !== obstacle) {
            console.log("no obstacle")
            result.push(moves)
        } 
    }
    console.log(result)
    return result;
}

module.exports = { solution };
