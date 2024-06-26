const rows = 6

let triangle = []
for(let row=0;row<rows;row++){
    triangle[row] = []   //[[],[],[],[]]
    triangle[row][0] = 1 // [[1],[1],[1],[1]]
    for(let col=1;col<row;col++){ // loop starts from row = 2
        triangle[row][col] = triangle[row-1][col-1] +triangle[row-1][col]  
    }
    triangle[row][row] = 1  //triangle[0][0] = 1, triangle[1][1] = 1, triangle[2][2]=1

}
console.log(triangle)