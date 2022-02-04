const Course = require('../model/Course');

exports.creatCourse = async (req, res) => {
  const course = await Course.create(req.body);
  try {
    res.status(201).json({
      stetus: 'success',
      course,
    });
  } catch {
    res.status(400).json({
      stetus: 'fail',
      error,
    });
  }
};
