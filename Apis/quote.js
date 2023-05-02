var httpRequest;

document.getElementById("button").addEventListener('click', () => {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", 'https://quote-garden.onrender.com/api/v3/quotes');
    httpRequest.send();
    httpRequest.onreadystatechange = aFunction;
    
})


function aFunction(){
    if (httpRequest.readyState == 4 && httpRequest.status == 200){

        var quoteJSON = httpRequest.responseText;
        var quoteObj = JSON.parse(quoteJSON);

        quoteObj.forEach(element => {
            console.log(element);
        }) 
    }
}
