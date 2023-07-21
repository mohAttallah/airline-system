const events = require('./events');


events.on('new-flight', (flight) => {
    console.log('Flight {');
    console.log(`  event: 'new-flight',`);
    console.log(`  time: ${new Date().toLocaleString()}`);
    console.log('Details:', flight, '}');

});

events.on('took-off', (flight) => {
    console.log('Flight {');
    console.log(`  event: 'took-off',`);
    console.log(`  time: ${new Date().toLocaleString()}`);
    console.log('Details:', flight, '}');

});


events.on('arrived', (flight) => {
    console.log('Flight {');
    console.log(`event: 'arrived',`);
    console.log(`time: ${new Date().toLocaleString()}`);
    console.log('Details:', flight, '}');
});
require('./manger/manger');




