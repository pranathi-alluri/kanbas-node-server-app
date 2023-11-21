import Database from "../Database/index.js";
function CourseRoutes(app) {
    app.put("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = req.body;
        Database.courses = Database.courses.map((c) =>
                                                    c._id === id ? { ...c, ...course } : c
        );
        res.sendStatus(204);
    });

    app.post("/api/courses", (req, res) => {
        const newCourse = { _id: new Date().getTime().toString(),
            ...req.body,
        };
        Database.courses.unshift(newCourse);
        res.json(newCourse);
    });

    app.delete("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        Database.courses = Database.courses
            .filter((c) => c._id !== id);
        res.sendStatus(204);
    });

    app.get("/api/courses", (req, res) => {
        const courses = Database.courses;
        res.send(courses);
    });

    app.get("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = Database.courses
            .find((c) => c._id === id);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }
        res.json(course);
    });

}
export default CourseRoutes;