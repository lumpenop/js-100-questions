// # 문제16 : 로꾸거

// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

function reverse(str){
    let result = '';
    for(var i=str.length-1; i>=0; i--){
        result += str[i];
    }
    console.log(result);
}   


reverse('거꾸로');