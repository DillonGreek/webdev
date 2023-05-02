var httpRequest;

document.getElementById("rocket").addEventListener('click', () => {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", 'https://ll.thespacedevs.com/2.2.0/launch/?limit=4');
    httpRequest.send();
    httpRequest.onreadystatechange = aFunction;
    
})


function aFunction(){
    if (httpRequest.readyState == 4 && httpRequest.status == 200){
        var rocketJSON = httpRequest.responseText;
        var rocketObj = JSON.parse(rocketJSON);

        console.log(rocketObj);

        for(let i = 0; i < rocketObj.results.length; i++){
            console.log(rocketObj.results[i].name);
        }
    }
}


