
const Chance = require('chance');
const chance = new Chance();

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const host = `http://localhost:${PORT}`;

const io = require('socket.io-client');
const socket = io.connect(host);

const airline = 'Royal Jordanian Airlines';

setInterval(() => {
    let payload = {
        airLine: airline,
        flightID: chance.guid(),
        pilot: chance.name(),
        destination: chance.city() + ', ' + chance.state()
    };

    console.log(`Manager: new flight with ID '${payload.flightID}' has been scheduled`);

    socket.emit('new-flight', (payload));
    socket.emit('get-all');
}, 10000)

socket.on('connect', () => {
    console.log('Manager: Connected to the server');
});

socket.on('arrived', (flight) => {
    console.log(`Manager: we're greatly thankful for the amazing flight, ${flight.pilot}`);
});