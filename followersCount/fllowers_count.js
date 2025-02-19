let count = 0;//initial value

function increaseCount() {
    count++;//increment count by 1
    displayCount();//display the count
    checkCountValue();//check if the count has reached a certain value
}

function checkCountValue() {
    if (count === 10) {
        alert("Congratulations! You have reached 10 followers!");
    } else if (count === 20) {
        alert("Congratulations! You have reached 20 followers!🥳");
    }
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;//Display the count in the HTML
}