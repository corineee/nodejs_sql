var mysql = require("mysql");

var db = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});
db.connect();

module.exports = db;

//버전관리할 때는 이 파일을 저장한다.
