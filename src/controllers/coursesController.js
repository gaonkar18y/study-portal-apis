import { insertCourse, getAllCourses} from '../db/courses';

export const createCourse = (req, res, next ) => {
    // TODO
}

export const getCourses = (req, res, next ) => {
    // TODO
    getAllCourses().then(result => {
        res.status(200).send(result.rows);
    }).catch(err => {
        res.status(500).send({
            message: 'Internal server error'
        })
    })
}