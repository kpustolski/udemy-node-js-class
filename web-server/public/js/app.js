console.log("this is a client side js file");

//Select element from the HTML document that we want to work with
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (event)=>{
    // Prevents the default behavior of refreshing the page.
    event.preventDefault();
    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";

    const location = search.value;
    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error;
            }else{
                messageOne.textContent = "Location: " + data.location;
                messageTwo.textContent = "Forecase: " + data.forecast;
            }
        });
    });
});