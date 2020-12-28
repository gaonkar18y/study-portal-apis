import db from './index';

export const insertCourse = (title, desc, imageUrl, price, teacher) => {
    return db.query('INSERT INTO courses (title, description, imageUrl, price, teacher) values($1, $2, $3, $4, $5)',
    [title, desc, imageUrl, price, teacher])
}

export const getAllCourses = () => {
    return db.query('SELECT c.id, c.title, c.description, c.imageUrl, c.price, c.teacher, users.firstname, users.lastname, users.id as userid from courses as c LEFT OUTER JOIN users on c.teacher = users.id;')
}