const TeachersUsecase = require('../../domain-layer/use-cases/teachers.use-cases');
const {name} = require('../../server')
exports.getTeachers = async (req, res) => {
 const teachersUseCase = new TeachersUsecase();
 console.log(name);
 console.log('YPPPPPPPPPP');
  // const teachers = await db.query('SELECT * FROM teachers')
  // res.json(teachers.rows)
  // try {
  //  if (req?.query?.id) {
  //     const id = req.query.id;
  //     const teacher = await teachersUseCase.getOneTeacher(id);
     
  //     return res.status(200).send(teacher)
  //   }
  // } catch (error) {
  //   return res.status(400).send(error);
  // }
  
  // try {
  //   const teachers = await teachersUseCase.getTeachers();
    
  //   return res.status(200).send(teachers);
  // } catch (error) {
  //   console.log(error)
  //   return res.status(400).send(error);
  // }

}