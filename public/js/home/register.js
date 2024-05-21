"use strict";

const id = document.querySelector("#id"),
      name = document.querySelector("#name"),
      psword = document.querySelector("#psword"),
      confirmPsword = document.querySelector("#confirm-psword"),
      // 자바스크립트에서 사용할땐 공백을 대문자로 구분 
      registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
   if (!id.value) return alert("아이디를 입력해주세요");
   if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
   
 const req = {

    id: id.value,
    name: name.value,
    psword: psword.value,

 };
 
  
 fetch("/register", {
   method: "POST", // 버튼이 눌릴시 해당하는 정보를 아래의 바디에 담아서 전달하기에 POST로 전달
   headers: {
      "CONTENT-Type": "application/json",
   },
   body: JSON.stringify(req),
 }).then((res) => res.json()) // 서버로부터 응답이 오면 해당 Json 메소드를 호출해서 
   .then((res) => {           // 서버의 응답을 다 받는 순간 promise객체를 반환하여 해당 then에 접촉
      if(res.success) {       // 그 후 res에 접근하여 이가 true일 경우 login 페이지
         location.href ="/login";
      } else{
         alert(res.msg); // 실패시 alert를 리스폰스 메시지로 띄움
      }
   })
   .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
   });

}

