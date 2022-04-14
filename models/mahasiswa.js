let mahasiswa = [
  {
    nim: "1120101937",
    nama: "Mansuri",
    angkatan: "2020",
    prodi: "Teknik Informatika",
    create: new Date(),
  },
  {
    nim: "1120101931",
    nama: "Dina Azizah",
    angkatan: "2020",
    prodi: "Teknik Informasi",
    create: new Date(),
  },
  {
    nim: "1120101980",
    nama: "Merlina Wati",
    angkatan: "2020",
    prodi: "Teknik Informasi",
    create: new Date(),
  },
];

const cari = (arrData, nim) => {
  ketemu = -1;
  indeks = 0;
  while (ketemu == -1 && indeks < arrData.length) {
    if (arrData[indeks].nim == nim) {
      ketemu = indeks;
      return indeks;
    }
    indeks++;
  }
  return -1;
};

module.exports = {
  getMahasiswa: mahasiswa,

  insert: (req) => {
    const newItem = {
      nim: req.body.nim,
      nama: req.body.nama,
      angkatan: req.body.angkatan,
      prodi: req.body.prodi,
    };
    mahasiswa.push(newItem);
    return newItem;
  },
  getMahasiswabynim: (req) => {
    nim = req.params.nim;
    indeks = cari(mahasiswa, nim);
    if (indeks != -1) {
      const dataMahasiswa = {
        nim: mahasiswa[indeks].nim,
        nama: mahasiswa[indeks].nama,
        angkatan: mahasiswa[indeks].angkatan,
        prodi: mahasiswa[indeks].prodi,
      };
      return dataMahasiswa;
    }
    return indeks;
  },

  update: (req) => {
    nim = req.params.nim;
    indeks = cari(mahasiswa, nim);
    if (indeks != -1) {
      mahasiswa[indeks].nim = nim;
      mahasiswa[indeks].nama = req.body.nama;
      mahasiswa[indeks].angkatan = req.body.angkatan;
      mahasiswa[indeks].prodi = req.body.prodi;

      return mahasiswa[indeks];
    }
    return -1;
  },

  delete: (req) => {
    nim = req.params.nim;
    indeks = cari(mahasiswa, nim);
    ket = "Data mahasiswa tidak ditemukan";
    if (indeks != -1) {
      mahasiswa.splice(indeks, 1);
      ket = "Mahasiswa Dengan NIM " + nim + "telah dihapus";
    }
    return ket;
  },
};
