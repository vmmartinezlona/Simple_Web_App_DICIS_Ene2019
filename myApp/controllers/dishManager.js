var dish = require('../models/Dishes');

// GET ALL
exports.findAll = function(req, res){
   dish.find(function(error, dishList){
       if(error) { return res.status(500).send(error.message); }
       // first argument is the name of the view that render the info
       return res.render('index',{
           dishList: dishList
       });
       // return res.status(200).jsonp(dishList)
   });
};

// GET
exports.findById = function(req, res){
    var dishId = req.params.id;
    dish.findById(dishId, function(error, resDish){
        if(error) { return res.status(500).send(console.error.message); }
        return res.render('view-name', {
            dish: resDish
        });
    });
};

// PUT
exports.updateDish = function(req, res){
    var dishId = req.params.id;
    dish.updateDish(id, function(error, upDish){
        if(error){ return res.status(500).send(console.error.message); }
        // new info
        upDish.Name = req.body.name;
        upDish.Description = req.body.description;
        upDish.Price = req.body.price;
        upDish.Category = req.body.category;
        // save the dish
        upDish.save(function(error){
            if(error) { return res.status(500).send(console.error.message); }
            dish.find(function(error, dishList){
                if(error) { return res.status(500).send(error.message); }
                return res.render('index', {
                    dishList: dishList
                });
            });
        });
    });
};

// POST
exports.addDish = function(req, res){
    // Create new instance
    var newDish = new dish({
        //dishId
        Name: req.body.name,
        Description: req.body.description,
        Price: req.body.price,
        Category: req.body.category
    });
    // Save the book
    newDish.save(function(error){
        if(error) { return res.status(500).send(error.message); }
        dish.find(function(error, dishList){
            if(error){ return res.status(500).send(error.message); }
            return res.render('index', {
                dishList: dishList
            });
        });
    });
}

// DELETE
exports.deleteDish = function(req, res){
    dish.remove({_id: req.params.Id }, function(error, selDish){
        if(error){ return res.status(500).send(error.message); }
        dish.find(function(error, dishList){
            if(error){ return res.status(500).send(error.message); }
            return res.render('index', {
                dishList: dishList
            });
        });
    });
}
