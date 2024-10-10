import express from "express"
import { createVolunteer, deleteVolunteer, getAllVolunteer, getVolunteerById, updateVolunteer } from "../controllers/VolunteerController.js";
const router = express.Router();

router.get("/volunteer", getAllVolunteer)
router.get("/volunteer/find/:id", getVolunteerById)
router.post("/volunteer/create", createVolunteer)
router.put("/volunteer/update/:id", updateVolunteer)
router.delete("/volunteer/delete/:id", deleteVolunteer)

export default router