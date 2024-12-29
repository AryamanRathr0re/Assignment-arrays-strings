let marks = [20, 50, 40, 70, 95, 91, 26, 33, 55, 61]

console.log("Array before modification : ", marks)

for (let i = 0; i < marks.length; i++) {

    if (marks[i] <= 40) {
        marks[i] += 20
    }
    if (marks[i] > 90) {
        marks[i] = 90
    }
}
console.log("Array after modification : ", marks)