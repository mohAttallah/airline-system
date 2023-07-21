const events = require('../events');

events.on('new-flight', (flight) => {

    setTimeout(() => {
        console.log(`Pilot: flight with ID '${flight.flightID}' took off`);
        events.emit('took-off', flight);
    }, 4000);
});

events.on('took-off', (flight) => {
    setTimeout(() => {
        console.log(`Pilot: flight with ID '${flight.flightID}' has arrived`);
        events.emit('arrived', flight);
    }, 3000);
});



