const express = require("express");
const authRouter = require("../internal/routes/authRouter");
const app = express();
const port = 3000;

app.use(express.json()); // JSON 요청 본문 파싱을 위한 미들웨어
app.use("/api/auth", authRouter); // 인증 라우터 등록
app.use();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
