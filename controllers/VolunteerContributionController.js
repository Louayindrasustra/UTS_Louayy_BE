import VolunteerContribution from "../models/volunteerContributionModels.js";

export const createContribution = async (req, res) => {
    try{
        const { task_description, status } = req.body;
        const contribution = await VolunteerContribution.create({task_description, status});
        res.status(200).json(contribution);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createContibution"})
    }
}

export const getContributionById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const status = await VolunteerContribution.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!status) {
            return res.status(404).json({ message: "contribution tidak ditemukan" });
        }
        res.status(200).json(contribution);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const getAllContribution = async (req, res) => {
    try{
        const contribution = await VolunteerContribution.findAll();
        res.status(200).json(contribution)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllContribution"})
    }
};

export const updateContribution = async (req, res) => {
    try{
        const { id } = req.params;
        const { task_description, status } = req.body;
        const [updated] = await VolunteerContribution.update({ task_description, status }, { where: { id } });
        const updatedContribution = await VolunteerContribution.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "contribution tidak ter-update"})
        }else{
            res.status(200).json(updatedContribution);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate contribution"})
    }
}

export const deleteContribution = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await VolunteerContribution.destroy({where: {id}});
        res.status(200).json(deleted + ` contribution ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus contribution"})
    }
}