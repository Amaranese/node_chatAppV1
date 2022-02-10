const choice = 'b';

if(choice=='a'){
    // sync demo
    fs = require('fs');
    data = fs.readdirSync('./');
    console.log('data: ',data);
    console.log('this comes afters')

}else if(choice=='b'){
    fs = require('fs');
    function phoneNumber(err,data){
        console.log('data: ', data);
    }
    fs.readdir('./',phoneNumber);
    console.log('this comes after');
}