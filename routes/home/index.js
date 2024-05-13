"use strict"; // 자바 스크립트 파일을 만들때는 맨 위에 에크마 스트릭트 문법을 준수하겠다는 걸 명시

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello); 
router.get("/login", ctrl.output.login);
router.get("/register",ctrl.output.register);
router.post("/login", ctrl.process.login); 

  // 라우터의 역할은 해당 도메인으로 들어 왔을때 클라이언트의 요청을 연결하는 부분
  // /login, 뒤에 부분이 이러한 요청에 해당하는 기능을 수행하는 컨트롤러이다.

  module.exports = router; // index.js에서 설정한 라우터를 외부에서 쓸 수 있게 하는 부분