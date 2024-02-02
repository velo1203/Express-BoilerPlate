const express = require("express");
const authRouter = require("../internal/routes/authRouter");
const authenticate = require("../internal/middleware/authenticate");
const logRequest = require("../internal/middleware/log_request");
const app = express();
const port = 3000;

app.use(express.json()); // JSON 요청 본문 파싱을 위한 미들웨어
app.use(logRequest); // 로그 미들웨어 등록
app.use(authRouter); // 인증 라우터 등록

// 인증된 사용자만 접근 가능한 임시 라우트
app.get("/api/protected", authenticate, (req, res) => {
    // 인증된 사용자 정보는 req.user에서 가져올 수 있습니다 (미들웨어에서 설정)
    res.json({ message: "Hello, authenticated user!", user: req.user });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
