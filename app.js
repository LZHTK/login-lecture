"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 앱 세팅
app.set("views", "./views"); // views라는 폴더로 views 파일을 관리
app.set("view engine","ejs"); // view 엔진을 ejs로 사용함을 지정
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식 되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));

const home = require("./routes/home") // 현재 폴더에서 라우터스 폴더에서 홈 경로에 있는 걸 받아와라.

app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드

module.exports = app;
