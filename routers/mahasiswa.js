const express = require("express");
const routerMahasiswa = express.Router()
const conrollerMahasiswa = require('../controllers/mahasiswa')

routerMahasiswa.route('/mahasiswa')
    .get(conrollerMahasiswa.getMahasiswa)
    .post(conrollerMahasiswa.insert)

routerMahasiswa.route('/mahasiswa/:nim')
    .put(conrollerMahasiswa.update)
    .delete(conrollerMahasiswa.delete)
    .get(conrollerMahasiswa.getMahasiswabynim)


module.exports = routerMahasiswa