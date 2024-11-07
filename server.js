// app.js에서 설정한 Express 애플리케이션 불러오기
const app = require('./app');  

// 서버 포트 설정 
const PORT = process.env.PORT || 3000;

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});