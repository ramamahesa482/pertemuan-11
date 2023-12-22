const students = require("../data/students.js");

class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan data student",
            data: students,
        };
        res.json(data);
    }

    store(req, res) {
        const { nama } = req.body;
        students.push(nama)

        const data = {
        message: `Menambahkan data students ${nama}`,
        data: students,
    };
    res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        students[id] = nama;
        const data = {
        message: `Mengedit data students id ${id} nama ${nama}`,
        data: students,
    };
    res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;
        students.splice(req, 1);
        const data = {
        message: `Menghapus data students ${id}`,
        data: students,
    };
    res.json(data);
    }
}

const object = new StudentController();

module.exports = object;