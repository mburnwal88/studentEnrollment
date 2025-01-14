import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
    name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    course: { type: [String], required: true },
    fee: { type: Number, required: true },
    course_start_date: { type: Date, required: true },
    course_end_date: { type: Date, required: true }
})

export const StudentModel = mongoose.model("Student", studentSchema);