const express = require("express")
const logger = require("morgan")
const path = require("path")
const app = express()
const ejs = require("ejs")
app.use(logger("dev"))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended : true}))

app.use(express.json())
//Ajax response
var student = { status : "OK",
                name : "Ha Minh Tam",
                MSSV : 19020428}

app.get("/ajax/students", (req, res) => {
    res.send(student)
})
app.get("/ajax/students/:id", (req, res) => {
    student.MSSV = req.params.id
    res.send(student)
})
app.put("/ajax/students/:id", (req,res) => {
    student.MSSV = req.body.masv
    student.name = req.body.hoten
    res.send(student)
})

//Render view
app.get("/students", ((req, res) => {
    res.render("get")
}))
app.get("/update_info", ((req, res) => {
    res.render("update")
}))
app.get("*", ((req, res) => {
    res.render("list")
}))
app.listen(80)
