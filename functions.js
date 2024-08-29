"use strict";
/*
iterate the array
check each number if greater than the other
store the largest in a list an delete from previous list
*/


// This function looks for the minimum number in an array
function arrMinNum(arr) {

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
function arrMaxNum(arr) {

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

export function listArr(arr) {
    // List array items
    let newArr = arr.join(", ");
    return newArr;
}

export function itemExist(arr, item) {
    // Checks if an item exists in an array or object
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

export function exist(item, obj) {
    let a = 0;
    for (let o in obj) {
        if (item==o) {
            print(item + ": " + obj[item]);
            break;
        } else {
            if (a == Object.keys(obj).length-1) {
                print(item + " does not exist!");
                break;
            } else {
                a++;
            }
        }
    }
    /*
    for (let item in obj) {
        if (Array.isArray(obj[item]) == true) {
            let lst = listArr(obj[item]);
            print(item + ": " + lst);
        } else {
            print(item + ": " + obj[item]);
        }
    }
    */
}

export function print(message) {
    console.log(message);
}