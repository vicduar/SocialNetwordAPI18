const router = require("express").Router();
const thoughtRoute = require("./thoughts");
const userRoute = require("./user");

router.use("/user", userRoute);
router.use("/thought", thoughtRoute);
module.exports = router;
