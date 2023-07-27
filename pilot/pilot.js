require("dotenv").config();
const PORT = process.env.PORT || 3000;
const io = require('socket.io-client');

const server = `http://localhost:${PORT}`;
const airlineServer = `http://localhost:${PORT}/airline`;
const socket = io.connect(server);
const airlineSocket = io.connect(airlineServer);

socket.on('connect', () => {
    console.log('Pilot: Connected to the server');
    socket.emit('get-all');
});

socket.on('flight', (flight) => {
    console.log(`Pilot: Flight with ID '${flight.flightID}' took off`);
    socket.on('fligt', (flightID) => {
        console.log(`Pilot: Sorry, I didn't have this flight ID '${flightID}'.`);
    });
});

socket.on('new-flight', (flight) => {
    setTimeout(() => {
        console.log(`Pilot: flight with ID '${flight.flightID}' took off`);
        airlineSocket.emit('took-off', flight);
    }, 4000);
});

airlineSocket.on('connect', () => {
    console.log('Pilot: Connected to the airline server');
});

airlineSocket.on('arrived', (flight) => {
    setTimeout(() => {
        console.log(`Pilot: flight with ID '${flight.flightID}' has arrived`);
        socket.emit('arrived', flight);
    }, 3000);
});
