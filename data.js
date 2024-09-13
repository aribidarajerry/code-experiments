import {
    sortArr,
    listArr,
    itemExist,
    objValue,
    print
} from './functions.js';

/* the use strict should be used after import else it won't work */
"use strict";


/*
    Creating a program to store student's data:

    1. Name, age, gender and subjects ✔️
    2. There should be an id used to identify each user ✔️
    3. Update data, add/remove subjects some should be not be able to be corrected ✔️
    4. Display each users data together ✔️
    5. Get data separately e.g only name...✔️
    6. Delete student. ✔️
    7. Get the date each student was enrolled
*/

/*
let date = new Date();
let y, m, d, t;
y = date.getFullYear();
m = date.getMonth();
d = date.getDay();
t = date.getTime();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
*/

/*
    Create an object that collects students info, ✔️
    Update students info ✔️
    groups them into various subject from department, ✔️
    calculates how long they were in school
*/

// Database to host all studrents data
const verified = {};

function Person(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.department = null;
    // Default subjects for all students
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
    if (itemExist(this.subjects, subject) == true) {
        return subject + " is a compulsory subject and cannot be removed!";
    } else if (exist == true) {
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







// Try, getting data through a person's firstname ✔️
// Either get the full details or a specific detail about the person e.g subjects ✔️

/*
    First use this function to register new student and link it to the Person object and access all its methods
    If student has the same name, better use another name
*/
// if this line is inside the registerStudent, it will not work because the i++ will not update it inside the loop but start from 0 again
let i = 0;
function registerStudent(firstname, lastname, age, gender) {
    const person = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    }
    // Replace the first instance of null value with a new student
    let o = 0;
    for (let x in verified) {
        if (verified[x]["firstname"] == firstname) {
            print(firstname + " is already a student, preferably use other names!");
            o++;
            break;
        } else if (verified[x] == "null") {
            verified[x] = person;
            o++;
            break;
        }
    }
    if (o == 0) {
        verified[i] = person;
    }
    const user = new Person(firstname, lastname, age, gender);
    i++;
    return user;
}


function updateStudent(firstname, key, value) {
    let length = Object.keys(verified).length;
    let e = false;
    let x = false;
    for (let i = 0; i < length; i++) {
        if (key == "subjects") {
            x = true;
            e = true;
            break;
        } else if (verified[i]["firstname"] == value) {
            e = true;
        }
    }
    if (e == false) {
        for (let i = 0; i < length; i++) {
            if (verified[i]["firstname"] == firstname) {
                verified[i][key] = value;
            }
        }
    } else if (x == true) {
        print("Subjects can only be removed or added to!")
    } else {
        print("Invalid firstname or updated name already exist!");
    }
}


function deleteStudent(firstname) {
    for (let o = 0; o < Object.keys(verified).length; o++) {
        if (verified[o]["firstname"] == firstname.toLowerCase()) {
            verified[o] = "null";
            return firstname + " successfully deleted!";
            break;
        } else {
            if (o == Object.keys(verified).length-1) {
                print(firstname + " does not exist!");
                break;
            }
        }
    }
}


function studentData(studentName) {
    for (let o = 0; o < Object.keys(verified).length; o++) {
        /*
        Now lets check since the studentName is verified, we can get the data from the key i.e o, associated with that name
        */
        if (verified[o]["firstname"] == studentName.toLowerCase()) {
            let firstname = verified[o]["firstname"];
            let lastname = verified[o]["lastname"];
            let age = verified[o]["age"];
            let gender = verified[o]["gender"];
            const verifiedStudent = new Person(firstname, lastname, age, gender);
            return verifiedStudent;
            break;
        } else if (verified[o] == "null") {
            verified[o] == "null";
        } else {
            if (o == Object.keys(verified).length-1) {
                print(studentName + " does not exist!");
                break;
            }
        }
    }
}


function verifiedStudents() {
    print(JSON.stringify(verified));
}


// Caplculate the length of verified students excluding the null values
function studentsPopulation() {
    let length = 0;
    for (let i = 0; i < Object.keys(verified).length; i++) {
        /*
        When a student is deleted, it's position becomes null so we can't count that as a student
        */
        if (verified[i] == "null") {
            length++;
        }
    }
    length = Object.keys(verified).length - length;
    print("The number of verified students is " + length);
}
/*
    This is how to register a student
    
let student1 = registerStudent("jerry","aribidara",19,"male");

    To get the students data, use the firstname of the student
    
let student = studentData("jerry");

    The student has been linked to my Person object so you can call any Person method

student.setDepartment("arts");
print(student.getData());

*/