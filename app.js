//Select + Handlers
document.querySelector('button').addEventListener('click',continueReading);


//function for button click
function continueReading (e) {
    e.preventDefault();
    console.log("Clicked");
    window.location="blogpost1.html"
}
