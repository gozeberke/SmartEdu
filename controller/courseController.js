const Course = require('../model/Course');

exports.creatCourse = async (req, res) => {
  
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      status: 'success',
      course,
    }); 
  } catch(error){
    res.status(400).json({
      status: 'fail',
      error
    });
  }
};


exports.getAllCourse = async (req, res) => {
  
    try {
      const courses = await Course.find();
      res.status(200).render('courses',{
          courses,
          page_name:'courses'
        })
    } catch(error){
      res.status(400).json({
        status: 'fail',
        error
      });
    }
  };

  exports.getSingleCourse = async (req, res) => {
  
    try {
      const course = await Course.findOne({slug:req.params.slug});
      res.status(200).render('course',{   //course.ejs render edecek
          course,
          page_name:'courses'
        })
    } catch(error){
      res.status(400).json({
        status: 'fail',
        error
      });
    }
  };
