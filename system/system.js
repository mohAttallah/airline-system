'use strict'
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);
const Chance = require('chance');
const chance = new Chance();
require("dotenv").config();
const airlineSocket = io.of('/airline');


let queue = {
    flights: []
};


function newFlightHandler(flight) {
    const newFlightID = chance.guid();

    flight.id = newFlightID;

    queue.flights.push(flight);

    console.log('Flight {');
    console.log(`  id: ${newFlightID},`);
    console.log(`  event: 'new-flight',`);
    console.log(`  time: ${new Date().toLocaleString()}`);
    console.log('Details:', flight, '}');
    io.emit('new-flight', flight);
}

function deleteFlight(flightID) {
    queue.flights = queue.flights.filter(flight => flight.id !== flightID);
}

function getAllFlights() {
    io.emit('flight', queue.flights);
}


io.on('connection', (socket) => {
    console.log('System: Client connected with ID:', socket.id);
    socket.on('new-flight', newFlightHandler);

    socket.on('arrived', (flight) => {
        console.log('Flight {');
        console.log(`  event: 'arrived',`);
        console.log(`  time: ${new Date().toLocaleString()}`);
        console.log('Details:', flight, '}');
    });
});

airlineSocket.on('connection', (socket) => {
    socket.on('took-off', flight => {
        console.log('Flight {');
        console.log(`  event: 'took-off',`);
        console.log(`  time: ${new Date().toLocaleString()}`);
        console.log('Details:', flight, '}');
        socket.emit('arrived', flight);
    });

    // console.log(queue)
    socket.on('get-all', getAllFlights);
    socket.on('delete-flight', deleteFlight);
});


// console.log(queue)


