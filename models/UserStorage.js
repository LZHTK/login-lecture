"use strict";

class UserStorage {
     static #users = { // 다이렉트로 접근하지 못하게 #표시로 은닉화함.
        id: ["LZHTK","이응생","아가소나"],
        psword: ["1234", "0808","0808"],
        name: ["김현기", "이은샘", "뚱띠"],
    }; // 유저스토리지의 데이터베이스들임

   static getUsers(...fields) { // 파라미터로 넘긴 변수들이 배열로 들어옴   
    const users = this.#users; // 은닉화된 private 변수를 반환하여 사용함
    const newUsers = fields.reduce((newUsers, field) => {
        if(users.hasOwnProperty(field)){ // users에 해당하는 키 값이 있나 물어봄
            newUsers[field] = users[field];
        } // reduce가 fields에서 받아온 값들은 반복하여 변수들을 저장함
        return newUsers;
    }, {}); 

    return newUsers;
   }

   static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    // 유저의 id에서 인덱스 값을 넣어두는 곳
    const userkeys = Object.keys(users); 
    // => 키 값들을 [id, psword, name]과 같은 배열로 만드는 과정
    const userInfo = userkeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
    }, {});

     return userInfo;
   }
} // 데이터베이스에 접근해서 데이터를 반환하는 작업을 하는 부분



module.exports = UserStorage;