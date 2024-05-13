"use strict";

const User = require("../../models/User");

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
        const user = new User(req.body);
        const response = user.login();
        return res.json(response); 
    // 클라이언트가 전달한 rq 데이터를 갖고 있는 user라는 인스턴스를 만듦
    // 해당하는 body의 내용을 user가 계속 들고 다닌다.
    // 불러온 로그인 정보를 유저를 검증하는 로직으로 유저가 로그인 처리시 
    // User로 넘어가서 처리
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
