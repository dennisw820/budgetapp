const router = require('../routes/expenseRouter');

module.exports.getItem  = async (req, res, err, results, next) => {
    // Get ID
    const id = req.params.id;

    // Write & Execute Query 
    var query = `SELECT * from expenses WHERE id = ${id};`;
    try {
        await db.query(query);
        res.status(200).json({
            status: "OK",
            "message": "Submission successful.",
            data: results
        })

    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            "message": "sorry, your submission was unsuccessful."
        })
    }
    db.destroy();
    next();
}

module.exports.getAllItems = async(req, res, err, results, next) => {
    // Write & Execute Query 
    var query = `SELECT * from expenses;`;
    try {
        db.query(query);
        res.status(200).json({
            status: "OK",
            "message": "Submission successful.",
            data: results
        })

    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            "message": "sorry, your submission was unsuccessful."
        })
    }
    db.destroy();
    next();
}

module.exports.createItem = async(req, res, err, next) => {
    // Get Data
    const {data} = req.body;
    // Validate Data
    if (
        !data.name,
        !data.category,
        !data.amount,
        !data.date
    ) {
        console.log('Fields cannot be empty.')
    }
    else {

    }
    // Submit Data
    var newExpense = {
        title: data.name,
        category:
        data.category,
        amount: data.amount
    }
    // Query DB & Send confirmation
    var query = `INSERT INTO expenses (title, category, amount) VALUES(${newExpense.title}, ${newExpense.category}, ${newExpense.amount})`;
    try {
        db.query(query);
        res.status(200).json({
            status: "OK",
            "message": "Data submission sucessful"
        })
    }
    catch(err) {
        res.status(400).json({
            status: "Failed",
            "message": "Sorry, your submission was unsuccessful."
        })
    }
    db.destroy();
    next();
}

// Review Cases for Updating Different Properties
module.exports.updateItem = async(req, res, updateData, err, next) => {
    // Get ID & Data to Update
    const id = req.params.id;
    const updatedData = req.body;

    // Write & Execute Query 
    var query = `UPDATE expenses SET /*property.to.change*/ = /*thing.to.change*/ WHERE id = ${id}`;
    try {
        db.query(query);
        res.status(200).json({
            status: "OK",
            "message": "Submission successful."
        })

    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            "message": "sorry, your submission was unsuccessful."
        })
    }
    db.destroy();
    next();
}
module.exports.deleteItem = async(req, res, err, next) => {
    // Get ID
    const id = req.params.id;

    // Write & Execute Query 
    var query = `DELETE FROM expenses WHERE id = ${id};`;
    try {
        db.query(query);
        res.status(200).json({
            status: "OK",
            "message": "Submission successful."
        })
    }
    catch (err) {
        res.status(400).json({
            status: "Failed",
            "message": "sorry, your submission was unsuccessful."
        })
    }
    db.destroy();
    next();
}
module.exports.handleSignUp = async (req, res, next) => {
    
}
module.exports.handleLogoutReq = async (req, res, next) => {
    // Destroy User Session
    // Redirect to Login
    res.render('login.ejs', {msg: "Logout successful."});
}