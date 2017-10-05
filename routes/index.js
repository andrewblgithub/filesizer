var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ storage: multer.memoryStorage() });
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.single('fileupload'), function(req, res, next) {
  var fileSize = req.file.size;
  var fileSizeFormatted = { "FileSizeBytes":fileSize };
  console.log(fileSizeFormatted);
  res.json(fileSizeFormatted);
})

function getFileSize(file) {
  var stats = fs.statSync(file);
  return stats.size;
}

module.exports = router;
