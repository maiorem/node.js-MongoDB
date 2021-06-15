const express=require('express');
const morgan=require('morgan'); //미들웨어의 한 종류. 콘솔에 요청로그를 남김.
const app=express()

// //미들웨어 : express는 순서대로 실행하므로 모든 요청에서 공통적으로 수행하는 미들웨어는 라우트 앞에 위치해야 함.
// app.use((req,res,next)=>{
//     console.log('미들웨어 1을 통과하고 있습니다.');
//     next(); //다음 미들웨어로 넘어감
// });
//
// app.use((req,res,next)=>{
//     console.log('미들웨어 2를 통과하고 있습니다.');
//     //res.send('미들웨어 2에서 응답합니다.'); //응답을 만나면 끝. 라우트요청까지 가지 않음. 이후 미들웨어도 실행하지 않음.
//     next();
// });

app.use(morgan('tiny')); // 'dev', 'combined', 'tiny' 로그



// 라우터
app.get('/', (req, res) => {
   res.json('홈입니다');
});

app.get('/users', (req, res)=>{
    res.redirect('/users/1');
});

app.get('/users/1', (req, res)=>{
   res.send('1번 글 상세보기');
});

//모든 경로(express는 순서대로 실행하므로 제일 아래에 있어야 위의 라우트를 제외하고 받음)
app.get('*', (req, res)=>{
    res.send('잘못된 경로입니다.');
});

app.listen(3000, () => {
    console.log('server ready on port 3000...');
});
