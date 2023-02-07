// BOJ 17291
let input = +require('fs').readFileSync('예제.txt').toString().trim();
// 1년 2월, 1마리 탄생
// 2년 1월, 분열 > 1 + 1 = 2마리 생존
// 3년 1월, 분열 > 2 + 2 = 4마리 생존
// 4년 1월, 분열 > 4 + 4 = 8 ( 1년 2월에 태어난 1마리 사망 ) 7마리 생존 
// 4년 말, 7마리 생존
// 5년 1월, 분열 > 7 + 7 = 14마리 생존 
// 6년 1월, 분열 > 14 + 14 = 28 ( 2년(1마리), 3년(2마리)사망 ) 25마리 생존 
// 7년 1월, 분열 > 25 + 25 = 50마리 생존 
// 8년 1월, 분열 > 50 + 50 = 100  ( 4년(4마리), 5년(7마리)사망 ) 89마리 생존 
// 9년 1월, 분열 > 89 + 89 = 178마리 생존 
// 10년 1월, 분열 > 178 + 178 = 356  ( 6년(14마리), 7년(25마리)사망 ) 317마리 생존 
const bugs = new Array(input + 1).fill(0);
bugs[1] = 1;

for(let i = 2 ; i <= input ; i++) {
    bugs[i] = bugs[i-1] * 2;
    
    // 짝수년에만 사망
    if(i % 2 === 0) {
        if(i >= 4) {
            // 4년에만 1년의 벌레 사망, 6년부터는 2개의 년도씩 사망
            {i === 4 ? bugs[i] -= bugs[i-3] : bugs[i] -= (bugs[i-5]+bugs[i-4]) }
        } 
    }
}
console.log(bugs[input]);