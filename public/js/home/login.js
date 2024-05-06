"use strict";

// DOM -> Documonet Object Model 문서객체모델로써 
// DOM이라는 인터페이스를 사용해 
// 자바스크립트에서 HTML에 존재하는 가져오는 데이터를 가져와 제어함

const id = document.querySelector("#id"),
      psword = document.querySelector("#psword"),
      loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
 const req = {
    id: id.value,
    psword: psword.value,
 };
  
 fetch("/login", {
   method: "POST",
   headers: {
      "CONTENT-Type": "application/json",
   },
   body: JSON.stringify(req),
 }).then((res) => res.json())
   .then(console.log);
 // 패치로 전달을 하고 서버에서 응답한 데이터를 받는 파트

}

 // rq를 통해 데이터를 서버로 보내야한다
 // 서버와 같은 프론트는 어떠한 경로로 데이터를 주고 받을지 결정해야하는데
 // 해당 경로에 API가 이미 만들어 져야 하는데 우리는 route에 API를 만듦