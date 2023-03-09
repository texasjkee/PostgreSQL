const knex = require('../../config/knex.config');
const TEACHERS_TABLE = 'teachers';

module.exports = class TeachersRepository {
  async getTeachers() {
    try {
     const teachers = await knex(TEACHERS_TABLE)
     .leftOuterJoin('subject', 'teachers.subject_id', '=', 'subjects.id') 
     .select(
      "teachers.name as teacher_name",
      "teachers.id",
      "teachers.is_union_member",
      "teachers.work_experience",
      "subjects.name as subject_name"
     )   
      
    if (!teachers.lengh) throw 'No data'  

     return teachers;
    } catch (error) {
     throw error; 
    }
  }
  
  async getOneTeacher(id) {
   try {
    const teacher = knex(TEACHERS_TABLE)
    .innerJoin("subjects", "teachers.subject_id", "subjects.id")
    .select(
      "teachers.name as teacher_name",
      "teachers.id",
      "teachers.is_union_member",
      "teachers.work_experience",
      "subjects.name as subject_name"
    )
    .where({ "teachers.id": id });
     
    if(!teacher[0]) throw 'No data';

    return teacher[0]

   } catch (error) {
    throw error 
   } 
  }
}