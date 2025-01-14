import { StudentModel } from "../models/studentModel.js";

export const addStudent = async (req, res) => {
    try {
        const studentName = req.body.studentName;
        const studentId = req.body.studentId;
        const course = req.body.course;
        const fee = req.body.fee;
        const course_start_date = req.body.course_start_date;
        const course_end_date = req.body.course_end_date;

        const newStudent = new StudentModel({ name: studentName, id: studentId, course, fee, course_start_date, course_end_date });
        await newStudent.save();
        res.status(201).json({ message: "Student has been enrolled succesfully" });
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Error Unable to enroll sturent" });
    }
}

export const fetchAllStudentDetails = async (req, res) => {
    try {
        const allStudent = await StudentModel.find();
        res.status(202).json(allStudent);
    } catch (error) {
        res.status(400).json({ message: "Unable to find any student details" });
    }
}