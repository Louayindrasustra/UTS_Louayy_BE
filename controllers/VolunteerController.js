import Volunteer from "../models/VolunteerModels.js";


export const createVolunteer = async (req, res) => {
    try{
        const { name, email, phone  } = req.body;
        const volunteer = await Volunteer.create({name, email, phone});
        res.status(200).json(volunteer);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createVolunter"})
    }
}
// console.log(createTugas);
export const getVolunteerById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const volunteer = await Volunteer.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!volunteer) {
            return res.status(404).json({ message: "volunteer tidak ditemukan" });
        }
        res.status(200).json(volunteer);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const getAllVolunteer = async (req, res) => {
    try{
        const volunteer = await Volunteer.findAll();
        res.status(200).json(volunteer)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllVolunteer"})
    }
};

export const updateVolunteer = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const [updated] = await Volunteer.update({ name, email, phone }, { where: { id } });
        const updatedVolunteer = await Volunteer.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "volunteer tidak ter-update"})
        }else{
            res.status(200).json(updatedVolunteer);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate volunteer"})
    }
}

export const deleteVolunteer = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Volunteer.destroy({where: {id}});
        res.status(200).json(deleted + ` Volunteer ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Volunteer"})
    }
}