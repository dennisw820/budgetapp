const router = require('../routes/router');

module.exports.getData  = async () => {

}

module.exports.getAllData = async() => {
    
}

module.exports.createData = async() => {
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
    var query = `INSERT INTO expenses (title, category,amount) VALUES(${data.title}, ${data.category}, ${data.amount})`;
    db.query(query);
    db.end();
}

module.exports.updateData = async() => {
    
}
module.exports.deleteData = async() => {
    
}