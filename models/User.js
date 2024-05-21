"use strict";

const UserStorage = require("./UserStorage");

class User {
 constructor(body) {
    this.body = body;
 }

 login() {
    const client = this.body;
    const { id, psword } = UserStorage.getUserInfo(client.id);
    // 유저가 로그인 실행시 올바른 아이디 패스워드인지 확인을 위해
    // 클라이언트가 보낸 정보를 스토리지의 메서드로 전달하여 처리 후
    // 클래스가 그 과정을 반환하여 받아온 후 저장한다. 
    
    if (id) {
    if ( id === client.id && psword === client.psword) {
        return { success: true };
   }
   return { success: false, msg: "잘못된 비밀 번호"};
  }
  return { success: false, msg: "존재하지 않는 아이디"};
 }

 register() {
   const client = this.body;
   const response = UserStorage.save(client);  // UserStorage의 save 메소드의 파라미터를 client로 던진다.
   return response;
   //저장될 데이터를 스토리지로 던져주는 부분
 }
} // 그 후 위에 로직에 따라 id와 psword가 올바른지 확인한다.

module.exports = User;