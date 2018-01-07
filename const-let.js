//var can be redeclared
    // var name = 'Ashish';
    // console.log(name);
    // var name = 'Ashish Verma';
    // console.log(name);

//let const dont allow redeclaration
    // let name = 'Ashish';
    // let name = 'Ashish Verma';
    // console.log(name);

// Additional we cannot reassign
    // const name = 'Ashish';
    // name = 'Ashish Verma';
    // console.log(name);

// var are function scoped where as let and const are block scoped
    var fullname = "Ashish Verma";
    if(fullname) {
        // let firstName = fullname.split(' ')[0];
        var firstName = fullname.split(' ')[0];
        console.log(firstName);
    }
    //we can access firstname here to as its function scoped but cannot be applicable with let and const
    console.log(firstName);

