const teachersController = require('../controllers/teachers.controller');

module.exports = app => {
  app.get('/api/teachers/', teachersController.getTeachers);
  // app.patch('/api/teacher/', teachersController.updateTeachers);
  // app.delete('/api/teacher/', teachersController.removeTeachers);
  // app.post('/api/teacher/', teachersController.addTeachers);
}