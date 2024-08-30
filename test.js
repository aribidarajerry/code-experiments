import {
    sortArr,
    listArr,
    itemExist,
    exist,
    print
} from './functions.js';

/* the use strict should be used after import else it won't work */
"use strict";
/*
    Creating a program to store data
    from users input:

    1. Name, age, gender and subjects
    2. Sort them
    3. There should be an id used to identify each user
    4. Add, delete, correct, update, some should be not be able to be corrected
    5. Display each users data together
    6. Get data separately e.g only name...
    7. Delete any one of their data e.g only name, or all of them together.
*/

/*
let date = new Date();
let y, m, d, t;
y = date.getFullYear();
m = date.getMonth();
d = date.getDay();
t = date.getTime();
*/

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


/*
    Create an object that collects users info,
    groups them into various subject from department,
    calculate how many students
    get the nationality of each new person objects
    calculates how long they were in school
*/

const students = [];
const verified = {};


function Person(firstName, lastName, age, gender) {
    // use this object to get names and list data with these names
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.department = null;
    this.subjects = ["mathematics",
        "english",
        "data processing"];
    this.info = {
        firstname: this.firstName,
        lastname: this.lastName,
        age: this.age,
        gender: this.gender,
        subjects: sortArr(this.subjects)
    };
}

// Person methods
Person.prototype.fullName = function() {
    return this.lastName + " " + this.firstName;
}

Person.prototype.setDepartment = function(department) {
    if (department.toLowerCase() == "arts") {
        this.info.department = department;
        const subjects = ["literature",
            "government",
            "agriculture",
            "crs"];
        this.info.subjects = subjects.concat(this.subjects);
        this.info.subjects = sortArr(this.info.subjects);
    } else if (department.toLowerCase() == "science") {
        this.info.department = department;
        const subjects = ["biology",
            "chemistry",
            "physics",
            "technical drawing"];
        this.info.subjects = subjects.concat(this.subjects);
        this.info.subjects = sortArr(this.info.subjects);
    } else {
        return "Invalid department!";
    }
}

Person.prototype.addSubject = function(subject) {
    let exist = itemExist(this.info.subjects, subject);
    if (exist == true) {
        return subject + " already exist.";
    } else {
        this.info.subjects.push(subject);
        return subject + " was successfully added!";
    }
}

Person.prototype.removeSubject = function(subject) {
    let exist = itemExist(this.info.subjects, subject);
    if (exist == true) {
        this.info.subjects.splice(this.info.subjects.indexOf(subject), 1);
        return subject + " was successfully removed!";
    } else {
        return subject + " does not exist.";
    }
}

Person.prototype.getData = function(data = false) {
    sortArr(this.info.subjects);

    if (data) {
        if (itemExist(this.info, data) == true) {
            if (Array.isArray(this.info[data]) == true) {
                let lst = listArr(this.info[data]);
                return this.fullName() + " " +data + ": " + lst;
            } else {
                return this.fullName() + " " + data + ": " + this.info[data];
            }
        } else {
            return data.toUpperCase() + " does not exist in user's data!";
        }
    } else {
        for (let i in this.info) {
            if (Array.isArray(this.info[i]) == true) {
                let lst = listArr(this.info[i]);
                print(i + ": " + lst);
            } else {
                print(i + ": " + this.info[i]);
            }
        }
    }
}


// End Person Methods

const student1 = new Person("Jerry", "Aribidara", 19, "Male");
const student2 = new Person("Wonder", "Aribidara", 18, "Male");
const student3 = new Person("Comfort", "Aribidara", 16, "Female");

student2.setDepartment("science");

//print(student2.getData());
//student1.getData();
// Try, getting data through a person's firstname
// Either get the full details or a specific detail about the person e.g subjects


// if this line is inside the setUser, it will not work because the i++ will not update it inside the loop but start from 0 again
let i = 0;
function setUser(firstname, lastname, age, gender) {
    students.push(firstname);

    const person = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    }

    verified[i] = person;

    const user = new Person(firstname, lastname, age, gender);
    i++;
    return user;
}

function fullData(studentName, data = false) {
    let o = 0;
    while (o < Object.keys(verified).length) {
        /*
        Now lets check since the studentName is verified, we can get the data from the key i.e o, associated with that name
        */
        if (verified[o]["firstname"] == studentName) {
            let firstname = verified[o]["firstname"];
            let lastname = verified[o]["lastname"];
            let age = verified[o]["age"];
            let gender = verified[o]["gender"];
            const verifiedStudent = new Person(firstname, lastname, age, gender);
            if (data) {
                print(verifiedStudent.getData(data));
            } else {
                print(verifiedStudent.getData());
            }
            break;
        } else {
            // check if the end of the object has been reached
            if (o == Object.keys(verified).length-1) {
                print("False");
                break;
            } else {
                o++;
            }
        }
    }
}

// Because of the way i linked the setUser to Person object, it now has access to all its methods
setUser("Jerry", "Aribidara", 19, "Male");
setUser("Wonder", "Aribidara", 18, "Male");
setUser("Comfort", "Aribidara", 16, "Female");



// Open this comment to check the verified students
//print(JSON.stringify(verified));

//It finally works... Hurray!!!
fullData("Jerry", "age");




//print(JSON.stringify(verified));