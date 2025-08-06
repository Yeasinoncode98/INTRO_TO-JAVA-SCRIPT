//Array er vetore chaile object o thakte pare
//Array er vetore chaile Array o thakte pare 

const numbers = [ 1,2,3,4,5];
const tournament_runs = [[],[],[]];
const exam_marks = [
    [98, 87, 45, 12, 65],
    [54, 26, 29, 24, 21],
    [53, 21, 22, 10, 11],
    [94, 20, 19, 44, 91],
]

/**
 * 1.two dimensioal array
 */

// console.log(numbers[0]);

// console.log(exam_marks[0]);

const first_class_marks = exam_marks[0];
// console.log(first_class_marks[0]);

//it can be done in one line like 
// console.log(exam_marks[0][0]);

exam_marks[0][1] = 66; //0 index er 1 number index e change anse 

exam_marks[1].pop();

exam_marks[1].push(44);

// console.log(exam_marks);

for (const marks of exam_marks){
    console.log(marks);
}

