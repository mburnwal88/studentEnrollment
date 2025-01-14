export const validateUserInput = (req, res, next) => {
    const studentName = validateStudentInput(req.body.studentName);
    const studentId = validateStudentInput(req.body.studentId);
    const course = validateCourse(req.body.course);
    const fee = validateFee(req.body.fee);
    const course_start_date = req.body.course_start_date;
    const course_end_date = req.body.course_end_date;
    if (studentName || studentId || course.length || fee || course_start_date || course_end_date) {
        next();
    } else {
        res.status(400).json({ message: "Please provide proper details of user" });
    }
}

function validateStudentInput(input) {
    const student = input.trim();
    if (typeof student === "string" && student.length <= 100) {
        return true;
    } else {
        return false;
    }
}

function validateCourse(course) {
    if (Array.isArray(course) && course.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateFee(fee) {
    if (typeof fee == "number" && fee > 50) {
        return true;
    } else {
        return false;
    }
}