const fs=require('fs'); //fs.js => 파일 io 관련 모듈

// 콜백
// fs.readFile('js_basic.js', 'utf-8', function(err, data) {
//     console.log(data);
// });

console.log('start...')

//익명함수는 화살표로 표시
fs.readFile('hello.js', 'utf-8', (err, data) => {
     console.log(data);
});

console.log('end of code...'); //비동기로 동작하므로 코드가 끝나지 않아도 실행됨