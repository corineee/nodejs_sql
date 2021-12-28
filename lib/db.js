var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "opentutorials",
});
db.connect();

module.exports = db;

//버전관리 시스템으로 관리하지 않는다.
/*실제로 개발환경을 세팅할 때 db.template.js파일을 복사해서
db.js라는 파일을 만들고 비밀번호를 입력해서 실제서비스에서 이용한다.*/
