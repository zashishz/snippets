// general es6 arrow function
const square = (x) => x * x;
console.log(square(3));


// one more diff apart from syntax;
// arguments object is no longer bound
    // Example 1
    // function sum(a, b) {
    //     //access to arguments in es5 functions
    //     console.log(arguments);
    //     return a + b;
    // }

    // const sum = (a,b) => {
    //     //no access to arguments in es6 function
    //     console.log(arguments); // Not defined error
    //     return a + b;
    // }

// this keyword is no longer bound in arrow
// ARROW functions doesn't bind its own this value
    // Example 2
    // const user = {
    //     name: 'Ashish',
    //     cities: ['Ballia', 'Hyderabad', 'Bangalore'],
    //     hasBeenTo: function () {
    //         //this works here
    //         console.log(this.name);
    //         console.log(this.cities);

    //         //this won't work here in anonymous func (not bound)
    //         this.cities.forEach(function (city) {
    //             console.log(`${this.name} has been to ${city}`);
    //         })
    //     }
    // };

    // Example 3
    // const user = {
    //     name: 'Ashish',
    //     cities: ['Ballia', 'Hyderabad', 'Bangalore'],
    //     hasBeenTo: function () {
    //         //this works here
    //         console.log(this.name);
    //         console.log(this.cities);

    //         //this will work here as es6 func
    //         this.cities.forEach((city) => {
    //             console.log(`${this.name} has been to ${city}`);
    //         })
    //     }
    // };

    //THIS WONT WORK same reason arrow func doesn't have their own this binding
    // Example 4
    // const user = {
    //     name: 'Ashish',
    //     cities: ['Ballia', 'Hyderabad', 'Bangalore'],
    //     //changed to arrow fun here
    //     hasBeenTo: () => {
    //         //this works here
    //         console.log(this.name);
    //         console.log(this.cities);

    //         //this will work here as es6 func
    //         this.cities.forEach((city) => {
    //             console.log(`${this.name} has been to ${city}`);
    //         })
    //     }
    // };

    // Example 5 new es6 function having 
    const user = {
        name: 'Ashish',
        cities: ['Ballia', 'Hyderabad', 'Bangalore'],
        //changed to new es6 function here
        hasBeenTo() {
            //this works here
            console.log(this.name);
            console.log(this.cities);

            //this will work here as es6 func
            this.cities.forEach((city) => {
                console.log(`${this.name} has been to ${city}`);
            })
        }
    };

    user.hasBeenTo();