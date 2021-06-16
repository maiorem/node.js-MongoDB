const express=require('express'); //임포트 하는 법
const morgan=require('morgan'); //미들웨어의 한 종류. 콘솔에 요청로그를 남김.
const bodyParser=require('body-parser'); //json 형태로 들어오는 데이터를 파싱하는 미들웨어
const app=express();

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
app.use(bodyParser.json()); //프론트에서 받아온 json data를 바디로 파싱


// 라우터
app.get('/posts', (req, res) => {
    const dataFromDB=[
        {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            postId: 1,
            id: 2,
            name: "quo vero reiciendis velit similique earum",
            email: "Jayne_Kuhic@sydney.com",
            body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            postId: 1,
            id: 3,
            name: "odio adipisci rerum aut animi",
            email: "Nikita@garfield.biz",
            body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        }
    ];
    res.json(dataFromDB);
});

//파라미터를 url로 받아 상세페이지 표시
app.get('/posts/:id', (req, res) => {
   if (req.params.id==='1') {
       res.json({
           postId: 1,
           id: 1,
           name: "id labore ex et quam laborum",
           email: "Eliseo@gardner.biz",
           body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
       });
   } else if (req.params.id==='2') {
       res.json({
           postId: 1,
           id: 2,
           name: "quo vero reiciendis velit similique earum",
           email: "Jayne_Kuhic@sydney.com",
           body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
       });
   } else if (req.params.id==='3') {
       res.json({
           postId: 1,
           id: 3,
           name: "odio adipisci rerum aut animi",
           email: "Nikita@garfield.biz",
           body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
       });
   } else {
       res.json('error....')
   }
});

app.post('/posts', (req, res) => {
    const fromFrontend=req.body;
    res.json(fromFrontend);
});

app.put('/posts', (req,res)=>{
    const fromFrontend=req.body;
    res.json(fromFrontend);
});

app.delete('/posts/:id', (req,res)=>{
    res.json(req.params.id+"번 글 삭제");
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
