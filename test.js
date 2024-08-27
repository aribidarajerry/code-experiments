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

/*
iterate the array
check each number if greater than the other
store the largest in a list an delete from previous list
*/


// This function looks for the minimum number in an array
function arr_min_num(arr) {

    // Note that each block of code can take only one return
    let i = 0;
    let min = 0;

    while (i < arr.length-1) {
        if (i > 0) {
            min = Math.min(min, arr[i + 1]);
            i++;
        } else {
            min = Math.min(arr[i], arr[i + 1]);
            i++;
        }
    }
    return min;
    i = 0; min = 0;
}

// This function looks for the maximum number in an array
function arr_max_num(arr) {

    // Note that each block of code can take only one retu>
    let i = 0;
    let max = 0;

    while (i < arr.length-1) {
        if (i > 0) {
            max = Math.max(max, arr[i + 1]);
            i++;
        } else {
            max = Math.max(arr[i], arr[i + 1]);
            i++;
        }
    }
    return max;
    i = 0; max = 0;
}

/*
sort array by looping it to find the min number (using
the arr_min_num function, pushing to an empty list then
deleting from the original array
Then return new array
*/

function sort_arr(myArr, rev = false) {
    let j = 0;
    const newArr = [];

    if (rev == true && typeof(myArr[j]) == "string") {
        myArr.reverse();
        return myArr;
    } else if (typeof(myArr[j]) == "string") {
        myArr.sort();
        return myArr;
    } else if (myArr.length == 1) {
        return myArr;
    }

    while (j < myArr.length) {
        if (myArr.length == 1) {
            newArr.push(myArr);
            break;
        } else if (rev == true) {
            let max = arr_max_num(myArr);
            newArr.push(max);
            myArr.splice(myArr.indexOf(max), 1);
        } else {
            let min = arr_min_num(myArr);
            newArr.push(min);
            myArr.splice(myArr.indexOf(min), 1);
        }
    }

    return newArr;
}

// End of experiment


let date = new Date();
let y, m, d, t;
y = date.getFullYear();
m = date.getMonth();
d = date.getDay();
t = date.getTime();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


/*
    Create an object that collects users info,
    groups them into various subject from department,
    calculate how many students
    get the nationality of each new person objects
    calculates how long they were in school
*/

function Person(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.subjects = ["mathematics",
        "english",
        "data processing"];
    this.info = {
        firstname: firstName,
        lastname: lastName,
        age: age,
        gender: gender,
        subjects: sort_arr(this.subjects)
    };
}

// Person methods
Person.prototype.fullName = function() {
    return this.lastName + " " + this.firstName;
}

Person.prototype.setDepartment = function(department) {
    if (department.toLowerCase() == "arts") {
        const subjects = ["literature",
            "government",
            "agriculture",
            "crs"];
        this.info.subjects = subjects.concat(this.subjects);
        this.info.subjects = sort_arr(this.info.subjects);
    } else if (department.toLowerCase() == "science") {
        const subjects = ["biology",
            "chemistry",
            "physics",
            "technical drawing"];
        this.info.subjects = subjects.concat(this.subjects);
        this.info.subjects = sort_arr(this.info.subjects);
    } else {
        return "Invalid department!";
    }
}

Person.prototype.removeSubject = function(subject) {
    let exist = item_exist(this.info.subjects, subject);
    if (exist == true) {
        this.info.subjects.splice(this.info.subjects.indexOf(subject), 1);
        console.log(subject + " was successfully removed!");
    } else {
        console.log(subject + " does not exist.");
    }
}

Person.prototype.getData = function(data = false) {
    sort_arr(this.info.subjects);
    if (data) {
        let d = "";
        if (item_exist(this.info, data) == true) {
            if (Array.isArray(this.info[data]) == true) {
                let lst = list_arr(this.info[data]);
                console.log(this.fullName() + " " +data + ": " + lst);
            } else {
                console.log(this.fullName() + " " + data + ": " + this.info[data]);
            }
        } else {
            console.log(data.toUpperCase() + " does not exist in user's data!");
        } 
    } else {
        for (let i in this.info) {
            if (Array.isArray(this.info[i]) == true) {
                let lst = list_arr(this.info[i]);
                console.log(i + ": " + lst);
            } else {
                console.log(i + ": " + this.info[i]);
            }
        }
    }
}
// End Person Methods

// Assistant functions

function list_arr(arr) {
    let newArr = arr.join(", ");
    return newArr;
}

function item_exist(arr, item) {
    let i = 0;
    if (Array.isArray(arr) == true) {
        for (let a of arr) {
            i++;
            if (item == a) {
                return true;
                break;
            } else {
                if (arr.length == i) {
                    return false;
                }
            }
        }
    } else {
        for (let a in arr) {
            i++;
            if (item.toLowerCase() == a) {
                return true;
                break;
            } else {
                if (Object.keys(arr).length == i) {
                    return false;
                }
            }
        }
    }
}


// End Assistant functions

const student1 = new Person("Jerry", "Aribidara", 19, "Male");
const student2 = new Person("Wonder", "Aribidara", 18, "Male");

student1.setDepartment("arts");
student1.removeSubject("english");
console.log(student1.getData());
//console.log(student2.getData());