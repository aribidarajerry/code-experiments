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

function sort_arr(myArr, rev=false) {
    let j = 0;
    const newArr = [];

    if (rev==true && typeof(myArr[j]) == "string") {
	myArr.reverse();
	return "Sorter array strings = " + myArr;
    } else if (typeof(myArr[j]) == "string") {
        myArr.sort();
        return "Sorter array strings = " + myArr;
    } else if (myArr.length == 1) {
        return myArr + "<br> Doesn't need to be sorted.";
    }

    while (j < myArr.length) {
        if (myArr.length == 1) {
            newArr.push(myArr);
            break;
        } else if (rev==true) {
            let max = arr_max_num(myArr);
            newArr.push(max);
            myArr.splice(myArr.indexOf(max), 1);
        } else {
            let min = arr_min_num(myArr);
            newArr.push(min);
            myArr.splice(myArr.indexOf(min), 1);
        }
    }

    return "Sorted array numbers = " + newArr;
}

// End of experiment
