
const express = require('express');
var fs = require('fs');
const app = express();
const PORT=8080; 
//웹서버로 부터 온 카운트갯수 담을 변수
var cnt =0
//정적 파일들을 웹서버로 로드 시킴
app.use(express.static('public'))
app.use(express.json())

//시작화면 웹페이지 
app.get('/', function (req, res, next) {
    fs.readFile('./start.html', function (err, file) {
        res.send(file.toString())
    });
});

//게임 웹페이지
app.get('/game', function (req, res, next) {
    fs.readFile('./game.html', function (err, file) {
        res.send(file.toString())
    })
})
//결과 웹페이지
app.get('/result', function(req, res, next) { 
    fs.readFile('./result.html', function (err, file) {
        res.send(file.toString());
    })
})
//로딩 웹페이지
app.get('/loading', function (req, res, next) {
    fs.readFile('./loading.html', function (err, file) {
        res.send(file.toString())
    });
});
// 게임웹페이지로 부터 받은 post신호를 받고 txt파일에 저장
app.post('/game',function(req,res,next){
    cnt = req.body.cnt
    name = req.body.name
    fs.appendFile('./public/data.txt', name+':'+cnt+'\n', function(err) {
        if (err) throw err;
        console.log('Updated!');
      })
})

// 웹서버를 만들었을때 실행시키는 콜백함수
app.listen(PORT, function(){
    console.log(PORT+"포트 웹페이지가 생성되었습니다.")
});
