const urlsModel = require("../models/urls");


exports.findURL = (url) => {
  return new Promise((resolve, reject) => {
    urlsModel.find({url}, (err, data) => {
      if (err) {
        console.log(err)
        reject(err);
      }
      resolve(data);
    });
  });
};
exports.findById = (id) => {
    return new Promise((resolve, reject) => {
      urlsModel.findById(id, (err, data) => {
        if (err) {
         console.log(err)
          reject(err);
        }
        resolve(data);
      });
    });
  };
exports.setURL = (url)=>{
    return new Promise((resolve,reject)=>{
        const newURL = new urlsModel({
           url : url
        })
        newURL.save((err,data)=>{
            if(err){
                console.log(err)
                reject(err)
            }
            resolve(data)
        })
    })
}

exports.getAllUrls = ()=>{
    return new Promise((resolve,reject)=>{
        urlsModel.find({},(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}

