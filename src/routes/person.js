const express = require("express")
const router = express.Router()



router.get('/', async(req, res) => {

    res.json('listed')
})


router.post('/', async(req, res) => {

    console.log(req.body)

    res.json('created')
})



module.exports = router