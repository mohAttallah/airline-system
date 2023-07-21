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


setInterval(() => {
    let payload = {
        airLine: airline,
        flightID: chance.guid(),
        pilot: chance.name(),
        destination: chance.city() + ', ' + chance.state()
    };
    console.log(`----------------------------------------------------------------------------`);

    console.log(`Manager: new flight with ID '${flightID}' has been scheduled`);

    events.emit('new-flight', payload);
}, 10000)


events.on('arrived', (flight) => {
    console.log(`Manager: we're greatly thankful for the amazing flight, ${flight.pilot}`);
});
