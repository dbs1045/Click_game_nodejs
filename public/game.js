//클릭 변수와 시간을 카운트해줄 변수 선언
var cnt = 0;
var time = 10;

    //게임 BGM 함수
    function play_bgm(){
      var audio = document.getElementById("audio");
      audio.play();
      setTimeout(function(){
        audio.paused();
      })
    }
    
    //이름 입력 시 실행되는 함수
    function nameinput(){
      //bgm함수 호출
      play_bgm();

      //시간표시 함수 호출
      setInterval("timecount()",1000);

      //게임 결과 알려주는 콜백함수
      setTimeout(function(){
        var input = document.getElementById("username").value;
        alert(cnt+"회 클릭했다");
        
        //웹페이지 전환
        location.href = 'http://localhost:8080/result'
        //클릭 수와 이름을 서버로 객체로 전달
        axios.post('./game',{
          cnt : cnt.toString(),
          name: input
        })
      }, 10000)
    }

    //button1 클릭 시 클릭 수 누적
    function button1_click() {
      cnt++;
    }

    //시간 출력 함수
    function timecount(){
      //실행할 때마다 time을 1씩 감소시킴
      time = time-1;
      document.getElementById("countdown").innerHTML = time +"s";
      
      //시간이 0이 되면 초기화
      if(time == 0){
        clearInterval(time);
      }
    }

    //치트키 함수
    function cheatinput(){
      var cheatkey = document.getElementById("cheatkey").value;
      if(cheatkey == "kyproject"){
        cnt = 99999999;
        input = "cheater"
        alert(cnt+"회 클릭했다");
        location.href = 'http://localhost:8080/result'
        axios.post('./game',{
          cnt : cnt.toString(),
          name: input
        })
      }
    }

    