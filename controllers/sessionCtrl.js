const SessionSchema = require('../models/sessionsModel');


exports.getUserSessions = async (req, res, next) => {
  try {
    const session = await SessionSchema.findOne({username: req.body.username}).exec();
    return res.status(200).json({
      success: true,
      data: session
    })
  }
  catch(e){
    return res.status(500).send(e)
  }
}



