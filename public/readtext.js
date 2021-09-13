//경로를주고 텍스트 파일 읽고 랭킹을 출력하는 함수
function openTextFile() {
    var input = document.getElementById('text')
    processFile(input);
}
function processFile(file) {
    var client = new XMLHttpRequest()
    var text=""
    var result=""
    //상호작용이 있을때 실행하는 함수
    client.onreadystatechange = function(){
        text = client.responseText
    }
    client.open('get', file.src, false)
    client.send()
    var array = text.split('\n')
    array=array.sort((a,b)=>{
       return Number(b.split(":")[1]) - Number(a.split(':')[1])
    })
    if(array.length>=10){
        for (var i=0 ;i<10;i++){
            result = result+String(i+1)+"등 "+array[i]+'\n'
        }
    }
    else{
        for (var i=0 ;i<array.length;i++){
            result = result+String(i+1)+"등 "+array[i]+'\n'
        }
    }
    output.innerText = result;
}
//다시하기 버튼클릭시 로딩화면으로 넘어감
function button_click(){
    location.href = 'http://localhost:8080/loading'
  }