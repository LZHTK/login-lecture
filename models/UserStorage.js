"use strict";

class UserStorage {
     static #users = {
        id: ["LZHTK","이응생","아가소나"],
        psword: ["1234", "0808","0808"],
        name: ["김현기", "이은샘", "뚱띠"],
    }; // 유저스토리지의 데이터베이스들임

   static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
        if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
        }
        return newUsers;
    }, {}); 

    return newUsers;
   }
} // 데이터베이스에 접근해서 데이터를 반환하는 작업을 하는 부분



module.exports = UserStorage;