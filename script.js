function dogImage (){
    fetch('dog.jpg')
    .then(response => {
        console.log(response);
        return response.blob();
    })
    .then(blob => {
        console.log(blob);
        document.getElementById('dog').src = URL.createObjectURL(blob);
    });
}

async function dogImage1() {
    const response = await fetch('dog.jpg');
    const blob = await response.blob();
    document.getElementById('dog').src = URL.createObjectURL(blob);
}

async function getDog() {
    const api_url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(api_url);
    const data = await response.json();    
    console.log(data);
    document.getElementById('dog_ref').innerHTML = data.message;
    document.getElementById('dog').src = data.message;
}

getDog();

// dogImage();
// dogImage1();
