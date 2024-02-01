class User {
    constructor(db) {
        this.db = db;
    }

    // 사용자 찾기
    findByUsername(username, callback) {
        return this.db.get(
            "SELECT * FROM users WHERE username = ?",
            [username],
            function (err, row) {
                callback(err, row);
            }
        );
    }

    // 사용자 추가
    createUser(username, password, callback) {
        return this.db.run(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, password],
            function (err) {
                callback(err, this.lastID);
            }
        );
    }
}

module.exports = User;
