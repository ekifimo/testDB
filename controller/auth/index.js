const db = require('../../config/db');
const Auth = db.auth;

module.exports = {
    login: async (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "NIP atau Password Tidak Boleh Kosong"
            });
            return;
        }

        Auth.findOne({
            where: {nip: req.body.nip, password: req.body.password},
            attributes: ['nip', 'password']
        })
            .then((data) => {
                if (data) {
                    res.status(200).json({
                        message: "Login Berhasil !",
                        data: data.dataValues
                    });
                } else {
                    res.status(200).json({
                        message: "Akun tidak ditemukan, periksa kembali email dan password Anda"
                    });
                }
            })
            .catch((err) => res.status(500).json(err.message));
    },

    Cek: async (req, res) => {
        try {
            await Auth.findAll()
            .then((result) => {
                if (result.length > 0) {
                    res.status(200).json({
                        message: "Get Method User",
                        data: result
                    })
                }
            })
        } catch (error) {
            res.status(404).json({
                message: error
            })
            
        }
    }
}