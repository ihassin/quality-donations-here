const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3();

function uploadFile(req, res, next){
  console.log("Attempting to upload file to AWS...");
  // const currentFile = req.files["images"];
  const currentFile = req.files["file"];
  const lastIndex = currentFile.path.lastIndexOf("/");
  let newName = currentFile.path.substring(lastIndex + 1);

  //My Storage Bucket is setup as a configuration variable
  //For this I used the .env file for the development environment

  // console.log("Bucket Name", process.env.BUCKET_NAME);
  // console.log("Current File", currentFile);
 

  newName = newName.includes('\\') ? newName.substring(newName.lastIndexOf('\\') + 1, newName.length) : newName;

  // console.log("New Name", newName);

  const data = {
    Bucket: process.env.BUCKET_NAME,
    Key: newName,
    Body: fs.createReadStream(currentFile.path),
    ContentType: currentFile.type
  };

  s3.putObject(data, function(err, data) {
    if (err){
      console.log("Error uploading File to AWS", err);
      return next(err);
    }
    else{
      console.log(`${newName} has been successfully uploaded!`);

      s3.getSignedUrl("getObject", {
        Bucket: process.env.BUCKET_NAME,
        Key: newName,
        // Expires: 86400 // seconds in 1 day
        Expires: 3.154e+7 // seconds in 1 year
      }, (err, url) => {
        if(err){
          return next(err);
        }
        console.log("Picture Uploaded", url);
        res.json(url);
      });

    }
  });
}

module.exports = {
  uploadFile
};
