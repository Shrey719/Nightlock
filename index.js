import express from "express"

const app = express()

app.use(express.static("dist"))
app.use(express.static("testing"))
app.listen(8080)