const modelMahasiswa = require("../models/mahasiswa");

module.exports = {
  getMahasiswa: (req, res) => {
    mahasiswa = modelMahasiswa.getMahasiswa;
    res.json(mahasiswa);
  },

  insert: (req, res) => {
    newItem = modelMahasiswa.insert(req);
    res.status(201).json(newItem);
  },

  getMahasiswabynim: (req, res) => {
    dataMahasiswa = modelMahasiswa.getMahasiswabynim(req);
    if (dataMahasiswa != -1) {
      res.json(dataMahasiswa);
    } else {
      res.send("Mahasiswa dengan Nim " + req.params.nim + "tidak ditemukan");
    }
  },

  update: (req, res) => {
    mahasiswa = modelMahasiswa.update(req);
    if (mahasiswa != -1) {
      res.json(mahasiswa);
    }
    res.send("Data mahasiswa tidak ditemukan");
  },
  
  delete: (req, res) => {
    ket = modelMahasiswa.delete(req);
    res.send(ket);
  },
};
