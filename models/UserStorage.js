"use strict";

const fs = require("fs").promises;
// promises는 상태를 알려주기에 비동기 처리에 효과적
                                  

class UserStorage {
     

   static getUsers(...fields) { // 파라미터로 넘긴 변수들이 배열로 들어옴   
    //const users = this.#users; // 은닉화된 private 변수를 반환하여 사용함
    const newUsers = fields.reduce((newUsers, field) => {
        if(users.hasOwnProperty(field)){ // users에 해당하는 키 값이 있나 물어봄
            newUsers[field] = users[field];
        } // reduce가 fields에서 받아온 값들은 반복하여 변수들을 저장함
        return newUsers;
    }, {}); 

    return newUsers;
   }

    static #getUserInfo(data, id) {
      const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      // 유저의 id에서 인덱스 값을 넣어두는 곳
      const userKeys = Object.keys(users); 
      // => 키 값들을 [id, psword, name]과 같은 배열로 만드는 과정
      const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
      }, {});
      
      return userInfo;
   }

   static getUserInfo(id) {
    return fs
    .readFile("./databases/users.json")
    .then((data) => {
        return this.#getUserInfo(data, id);
     }) // 해당 로직이 성공했을 때
     .catch(console.error); // 해당 로직이 실패했을때
   }


   static save(userInfo) { // save가 유저의 정보이기에 userInfo로 받는다.
     //const users = this.#users;
     users.id.push(userInfo.id);
     users.name.push(userInfo.name);
     users.psword.push(userInfo.psword);
     return { success: true };
   }
} // 데이터베이스에 접근해서 데이터를 반환하는 작업을 하는 부분



module.exports = UserStorage;