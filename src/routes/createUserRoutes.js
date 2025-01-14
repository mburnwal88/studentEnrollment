import express from "express";
import { addStudent, fetchAllStudentDetails } from "../controllers/enrollStudentController.js";
import { validateUserInput } from '../middleware/userInputValidation.js'

const router = express.Router();
router.post("/student", validateUserInput, addStudent);
router.get("/student", fetchAllStudentDetails);
export default router;
