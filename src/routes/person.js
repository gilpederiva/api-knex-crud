const express = require("express")
const router = express.Router()

const db = require('../config/db')



router.get('/', async(req, res) => {

    const person = await db.select('*').from('person')

    res.json(person)
})


router.post('/', async(req, res) => {

    console.log(req.body)

    res.json('created')
})



module.exports = router