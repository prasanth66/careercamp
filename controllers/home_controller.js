

module.exports.home=async function(req,res){
    try {
        res.render('home');
        
    } catch (error) {
        console.log("error in rendering home page",error);
    }
}