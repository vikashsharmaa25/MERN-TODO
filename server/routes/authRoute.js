const router = require("express").Router();
const { register, login, test } = require("../controllers/authController");
const { authenticateToken } = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get("/test", authenticateToken, test);

module.exports = router;
