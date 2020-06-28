module.exports = {
    
  
  Entrepreneurist: (req, res, next) => { 
  
       
      console.log(req.userdata.userType.toString());
      console.log(req.userdata.userType);
      if (!(req.userdata.userType.toLowerCase().toString() == "entrepreneurist")) return res.status(403).send('Access denied.');
      next();
    },
    

    Doner: (req, res, next) => { 
  
       
      console.log(req.userdata.userType.toString());
      console.log(req.userdata.userType);
      if (!(req.userdata.userType.toLowerCase().toString() == "doner")) return res.status(403).send('Access denied.');
      next();
    },
    


}