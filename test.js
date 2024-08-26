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
"use strict";

let date = new Date();
let y, m, d, t;
y = date.getFullYear();
m = date.getMonth();
d = date.getDay();
t = date.getTime();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let user = {
    name: {
        firstName: "Wonder",
        lastName: "Aribidara"
    },
    age: 18,
    gender: "M",
    subjects: ["mathematics",
        "english",
        "literature",
        "government"].sort(),
    enrolled: y
}


// Methods

user.fullName = function() {
    return this.name.lastName + " " + this.name.firstName;
}

user.addSubject = function(subject) {
    let sub = "";
    for (let s of this.subjects) {
        if (subject == s) {
            console.log(subject + " already exists.");
            break;
        }
    }
    this.subjects.push(subject);
    for (let s of this.subjects) {
        sub += s + ", ";
    }
    console.log("Updated list of Subjects are: " + sub);
}

user.removeSubject = function(subject) {
    if (item_exist(this.subjects, subject) == true) {
        this.subjects.splice(this.subjects[this.subjects.indexOf(subject)], 1);
    } else {
        console.log(subject + " does not exist.");
    }
    show_arr_items(this.subjects);
}

user.listData = function() {
    let data = "";
    for (let u in user) {
        if (typeof(user[u]) == "function") {
            continue;
        } else {
            console.log(u + " ");
            data += u + " ";
        }
    }
    console.log(data);
}

user.getData = function(data = false) {
    if (data) {
        let d = "";
        for (let u in user) {
            if (data.toLowerCase() == u) {
                //check if input is in users data
                d += u;
            } else {
                continue;
            }
        }
        if (user[d] == undefined) {
            // if d is undefined, that means that data != u so d += u = ""
            console.log(data.toUpperCase() + " does not exist!");
        } else {
            console.log(this.fullName() + " " + d + " = " + user[d]);
        }
    } else {
        list_full_info(user);
    }
}

// End methods


function show_arr_items(arr) {
    let items = "";
    for (let a of arr) {
        items += a + " ";
    }
    console.log("List of items are: " + items);
}

function item_exist(arr, item) {
    for (let a of arr) {
        if (item.toLowerCase() == a) {
            return true;
        } else {
            return false;
        }
    }
}

function list_full_info(user, func=false) {
    //Display users full data
    for (let u in user) {
        let i = 0;
        for (let x in user[u]) {
            i++;
        }
        if (typeof(user[u]) == "function") {
            continue;
        } else if (Array.isArray(user[u]) == true) {
            // subjects = [...]
            let a = 0;
            for (let s of user[u]) {
                a++;
                console.log(u + a + " data = " + s);
            }
        } else if (i > 1) {
            let a = 0;
            for (let x in user[u]) {
                a++;
                console.log(u + a + " data = " + x + " = " + user[u][x]);
            }
        } else {
            console.log(u + " = " + user[u]);
        }
    }
}


//console.log(Object.values(user));
