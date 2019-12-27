var category = require('../models/Categories');

exports.findAll = function(req, res){
    category.find(function(error, categoryList){
        if(error){ return res.status(500).send(error.message); }
        // return res.render('index',{
        //     categoryList: categoryList
        // });
        return res.status(200).jsonp(dishList)
    });
}