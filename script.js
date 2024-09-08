function printArrow (lines, direction){
    let arrow = '-'.repeat(lines);{
        if (direction){
            console.log(arrow + ">");}
        else{
            console.log("<" + arrow);}
        }
        }
printArrow(5, true)
printArrow(15, false)

