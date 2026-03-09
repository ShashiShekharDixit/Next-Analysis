const express = require("express")
const router = express.Router()

const {
 addEntry,
 getEntries
} = require("../controllers/entryController")

router.post("/", addEntry)
router.get("/", getEntries)

module.exports = router