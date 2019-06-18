var space = 0;
var displayArray = function(array, index, swappedNum) {
    fill(0, 0, 0);
    text(array + " switching : " + index + ", with next smallest: " + swappedNum,10, 15 + space);
         space += 22;
};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    displayArray(array, array[secondIndex], array[firstIndex]);
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var minIndex = 0;
    var minValue = array[0];
    for ( var i = 0; i < array.length; i++) {
        swap(array, indexOfMinimum(array, i), i);
    }

};

selectionSort([4, 2, 10, 7]);
selectionSort([200, 5, 60, 3, 1]);
selectionSort([4, 7, 2]);
selectionSort([5, 4, 3, 2, 1]);
