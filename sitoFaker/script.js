document.getElementById('loadVehicleInfo').addEventListener('click', function() {
    fetch('https://automatic-space-memory-vx5ppvg4566c6p46-4000.app.github.dev/vehicle/info')
        .then(response => response.json())
        .then(data => {
            const infoContainer = document.getElementById('vehicleInfo');
            infoContainer.innerHTML = `
                <p>Veicolo: ${data.vehicle}</p>
                <p>Produttore: ${data.manufacturer}</p>
                <p>Modello: ${data.model}</p>
                <p>Tipo: ${data.type}</p>
                <p>Colore: ${data.color}</p>
                <p>Carburante: ${data.fuel}</p>
                <p>VIN: ${data.vin}</p>
                <p>VRM: ${data.vrm}</p>
            `;
        })
        .catch(error => {
            console.error('Errore nel caricamento delle informazioni sul veicolo:', error);
            document.getElementById('vehicleInfo').textContent = 'Impossibile caricare le informazioni sul veicolo.';
        });
});
