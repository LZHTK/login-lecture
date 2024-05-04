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
 console.log(req);
}
