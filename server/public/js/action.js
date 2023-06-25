//Get User Credentials
var userName = document.getElementById('email').value;
//var password = document.getElementById('pwd').value;
//var password2 = document.getElementById('pwd-confirm').value;
var btn = document.getElementById('btn-reset');

try {
    btn.addEventListener('submit', function submitData (userName) {
        if (userName.length > 0 ) {
            console.log(userName);
        }
        else {
            console.log('There is no username!');
        }
    })
    
}
catch (error) {
    console.log('There was an error.')
}
