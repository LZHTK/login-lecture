"use strict";

const hello = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login
};
// 에크마 스크립트 문법에 의해 { key : value }처럼 정의해야하는데
// 그냥 key 값인 helllo만 입력했으므로 hello : hello 이렇게 저장된 느낌이다.
