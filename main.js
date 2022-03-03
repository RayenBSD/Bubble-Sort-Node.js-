function BubbleSort (arr) {

    let z;
    
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            if (arr[j] < arr[j+1]) {
                z = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = z;
            }
        }
    }
    return arr;
}
    
    
let size = prompt("enter the size: ");
let arr = [];
    
for (let i = 0; i < size; i++) {
    let x = prompt("enter a number: ");
    arr[i] = x; 
}
    
let arr1 = BubbleSort(arr);
    
for (let value of arr1){
    console.log(value);
}