const events = require('../events');
// const { v4: uuidv4 } = require('uuid');
// const faker = require('faker');
const Chance = require('chance');
const chance = new Chance();


const airline = 'Royal Jordanian Airlines';
const flightID = chance.guid();
const pilotName = chance.name();
const destination = chance.city() + ', ' + chance.state();



require('../pilot/pilot');

function handleNewFlight() {
    let payload = {
        airLine: airline,
        flightID: flightID,
        pilot: pilotName,
        destination: destination
    };
    console.log(`Manager: new flight with ID '${flightID}' has been scheduled`);
    events.emit('new-flight', payload);
}

handleNewFlight();

events.on('arrived', (flight) => {
    console.log(`Manager: we're greatly thankful for the amazing flight, ${flight.pilot}`);
});
