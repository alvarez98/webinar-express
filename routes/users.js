const express = require("express")
const routes = express.Router()
const controllers = require("../controllers/users")

routes.get('/', async (req, resp) => {
    try {
        const users = await controllers.getUsers()
        resp.status(200).send({ data: users })
    } catch (error) {
        resp.status(500).send({ msg: "Something went wrong" });
    }
})


module.exports = routes