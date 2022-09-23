const title = document.querySelector(".Hello h1");

title.style.color = "blue";

function clicktitle() {
  console.log("wow!! you was click me!!");
}

title.addEventListener("click", clicktitle);
//텍스트를 클릭하면 clicktitle에 만들어 놓은 console.log가 출력이 된다
//click은 event이다.
//event뒤에는 어떤 funtion 실행시킬지 정해야한다.

//또한 event 뒤에 funfion을 실행 시켜서도 안된다.
//예)title.addEventListener("click", clicktitle());  X
//title.addEventListener("click", clicktitle);      O
