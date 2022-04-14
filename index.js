const express = require("express");
const app = express();
const port = 3001;
const routerMahasiswa = require("./routers/mahasiswa");

//untuk menerima req body dari req client
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routerMahasiswa);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
