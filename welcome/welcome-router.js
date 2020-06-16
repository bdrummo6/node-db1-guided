const express = require("express")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json({
			message: "Welcome to the Node DB 1 Guided Project API",
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router