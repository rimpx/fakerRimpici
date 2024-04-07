import express from 'express';
import cors from 'cors';
import { faker } from '@faker-js/faker';
const app = express();
app.use(cors());

if (!faker) {
    console.error('Errore nell\'importazione di Faker.js. Assicurati di avere installato @faker-js/faker.');
    process.exit(1);
}

// Crea la porta 4000 (perché la 3000 è quella del sito web)
const PORT = process.env.PORT || 4000;

// Endpoint per le informazioni sui veicoli
app.get('/vehicle/info', (_req, res) => {
    const vehicleInfo = {
        vehicle: faker.vehicle.vehicle(),
        manufacturer: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        color: faker.vehicle.color(),
        fuel: faker.vehicle.fuel(),
        vin: faker.vehicle.vin(),
        vrm: faker.vehicle.vrm(),
    };

    res.json(vehicleInfo);
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
