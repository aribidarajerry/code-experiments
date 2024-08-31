"use strict";


/*
iterate the array
check each number if greater than the other
store the largest in a list an delete from previous list
*/

// This function looks for the minimum number in an array
function arrMinNum(arr) {
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
function arrMaxNum(arr) {
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
    Sort array by looping it to find the min number (using
    the arrMinNum function, pushing to an empty list then
    deleting from the original array
    Then return new array
*/
export function sortArr(myArr, rev = false) {
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
            let max = arrMaxNum(myArr);
            newArr.push(max);
            myArr.splice(myArr.indexOf(max), 1);
        } else {
            let min = arrMinNum(myArr);
            newArr.push(min);
            myArr.splice(myArr.indexOf(min), 1);
        }
    }

    return newArr;
}


// This basically lists the array items in an organized form using the join()
export function listArr(arr) {
    // List array items
    let newArr = arr.join(", ");
    return newArr;
}


// Checks if an item exists in an array or object
export function itemExist(arr, item) {
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
        // This block is for object, only check if key exists
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


// This function checks if a key exist in an object and returns the value
export function objValue(item, obj) {
    let a = 0;
    for (let o in obj) {
        if (item == o) {
            return obj[item];
            break;
        } else {
            if (a == Object.keys(obj).length-1) {
                return false;
                break;
            } else {
                a++;
            }
        }
    }
}

// For easier display of variables or data rather than console.log 😏
export function print(message) {
    console.log(message);
}