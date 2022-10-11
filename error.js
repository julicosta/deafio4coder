const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.render("error", { errorMsj: 'producto no encontrado' });
});

module.exports = router;