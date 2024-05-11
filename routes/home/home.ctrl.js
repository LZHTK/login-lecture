"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {

    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
         psword = req.body.psword;

         
       const users = UserStorage.getUsers("id","psword");

         const response = {};
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = " 로그인 실패";
        return res.json(response);
    },
};
// 로그인이 가능하기 위해서는 프론트에서 받은 아이디와 패스워드를 서버에서 인증해야하는데
// 그러기 위해서는 서버가 해당 정보를 가져야한다. 

module.exports = {
    output,
    process,
};
// 에크마 스크립트 문법에 의해 { key : value }처럼 정의해야하는데
// 그냥 key 값인 helllo만 입력했으므로 hello : hello 이렇게 저장된 느낌이다.
