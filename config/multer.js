const multer = require("multer");
const path = require('path')


module.exports = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/",
  filename: function(req, file, cb){
     cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
  }
  }),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/jpe|jpeg|png|gif/)) {
      cb(console.log("file not suported"), false);
      return;
    }
    cb(null, true);
  },
  limits: { fileSize: 5242880 }
});