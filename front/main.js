


document.getElementById('Jugar').addEventListener('click', () => {
    console.log("yes");
    // URL del endpoint en el backend
    
    const url = 'http://localhost:3001/api/data';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Datos recibidos del backend:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
});

