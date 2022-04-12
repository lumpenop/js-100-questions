
// 프로그램을 작성해 주세요.

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

const printStars =(n)=>{
    num = n*2;
    for(let i=1; i<num; i+=2){
        let spaces = " ".repeat((num-1-i)/2);
        let stars =  "*".repeat(i);
        let result = spaces.concat(stars, spaces);
        console.log(result);        
    }
}

printStars(6);