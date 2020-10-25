//inisialisasi library
const express = require("express")
const app = express()

//import route siswa
const siswa = require("./router/siswa")
app.use("/siswa", siswa)
const guru = require("./router/guru")
app.use("/guru" , guru)
//membuat web server dengan port 8020
app.listen(8020, () => {
    console.log("server run on port 8020")
})
