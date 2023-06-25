////////////////////////////////////////////////////////////////////////*
//
//  Arthor: Dennis Williams 
//  Project: Budget App 
//  Version: 1.0
//
//
////////////////////////////////////////////////////////////////////////


//Navbar: Toggle Navbar Menu
let menuButton = document.getElementById('nav-btn');
let closeButton = document.getElementById('close-btn');
let nav = document.getElementById("navbar");

function toggleMenu (nav) {
    nav.style.visibility = 'visible';
    toggleMenu();
}
function closeMenu (nav) {
    nav.style.visibility = 'hidden';
    closeMenu();
}

menuButton.addEventListener('click',toggleMenu());
closeButton.addEventListener('click', closeMenu());

////////////////////////////////////////////////////////////////////////////////////////////


//Summary: Background change based on time of day

    var banner = document.getElementById('banner');

    //Time of Days
    var morning = '';
    var afternoon = '';
    var evening = 'https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    var night = '';

    var timeOfDay = '';

    //Get time
    let time = new Date().getHours();


    //Display Banner (Duration: 5s)
    setTimeout( () => {
        //Conditional: If time of day change image (Switch Statement)
        switch (time, timeOfDay) {
            case 0:
                timeOfDay = 'morning';
                if ( 7 <= time <= 12) {
                    console.log(timeOfDay)
                }

            case 1:
                timeOfDay = 'afternoon';
                if ( 12 <= time <= 18) {
                    console.log(timeOfDay)
                }

            case 3:
                timeOfDay = 'evening';
                if (18 <= time <= 19) {
                    console.log(timeOfDay)
                }

            case 4:
                timeOfDay = 'night';
                if (19 <= time <= 7) {
                    console.log(timeOfDay)
                }
        }
    }, 5000);

////////////////////////////////////////////////////////////////////////////////////////////


//Summary: Display Categories
var summary = document.getElementsByClassName('summary');

for (var i = 0; i < 5; i++) {
    var elements = '';
    elements += `
        <div>
            <i class="fa fas-lock"></i>
        </div>
    `
    summary.innerHTML = elements;
}

////////////////////////////////////////////////////////////////////////////////////////////


//Expenses: Show Expenses and Add Expense Form
var viewExpenses = document.getElementById('view-expense');
var addExpense = document.getElementById('add-expense');
var expenses = document.getElementById('expenses');
var newExpense = document.getElementById('new-expense');
var submitBtn = document.getElementById('submit-expense');

viewExpenses.addEventListener('click', function showExpenses() {
    addExpense.classList.remove('active');
    viewExpenses.classList.add('active');
    newExpense.style.visibility = 'hidden';
    viewExpenses.style.visibility = 'visible';
    var table = `
        <table style="width:100%">
            <tr>
                <th>Name</th>
                <th colspan="2">Telephone</th>
            </tr>
            <tr>
                <td>Bill Gates</td>
                <td>55577854</td>
                <td>55577855</td>
            </tr>
        </table>
    `
    for (var i = 0; i.length > 0; i++) {
        expenses.innerHTML = table;
    }
    expenses.innerHTML = table;
});
showExpenses();

addExpense.addEventListener('click', function addExpense(){
    viewExpenses.classList.remove('active');
    addExpense.classList.add('active');
    expenses.style.visibility = 'hidden';
    newExpense.style.visibility = 'visible';
    
});
addExpense();

submitBtn.addEventListener('submit', function submitData(){
    try{
        var title = document.getElementById('title').value;
        var category = document.getElementById('category').value;
        var amount = document.getElementById('amount').value;
        var date = document.getElementById('date').value;

        console.log(title, category, amount, date);
    }
    catch{
        throw 'Unable to get data. Please try again or contact your admin.';
    }
    submitData();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////
