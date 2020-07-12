const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const userRouter = require("./users/users-routers")


const server = express()
const port = process.env.PORT || 7000

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(cookieParser())
server.use(userRouter)


server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "something went wrong"
    })
})


server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
