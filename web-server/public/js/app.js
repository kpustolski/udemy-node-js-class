console.log("this is a client side js file");

//Select element from the HTML document that we want to work with
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

// The default behavior of forms is to refresh the page when we hit
// submit. We'll use the fetch call to dynamically add the output
// onto the page so we don't need to refresh the page a bunch (can cause a flash of input, confusing the user)
weatherForm.addEventListener('submit', (event)=>{
    // Prevents the default behavior of refreshing the page.
    event.preventDefault();
    
    const location = search.value;
    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error);
            }else{
                console.log(data.location);
                console.log(data.forecast);
            }
        });
    });
});