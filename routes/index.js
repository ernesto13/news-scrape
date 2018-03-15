module.exports = function(router) {


    //RENDERING FOR index PAGE
    router.get("/", function(req, res) {
        res.render("index");
    });

}