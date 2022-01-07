const nested=(req,res,next)=>{
    console.log("nested middleware");
    next();
};

//exporting nested middleware as a function called nestedExp
module.exports= nested;