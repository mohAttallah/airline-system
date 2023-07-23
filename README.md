# airline-system

---
Author : Mohammad Attallah
PR:[LINK](https://github.com/mohAttallah/airline-system/pull/1)
--- 

### Description
This repo involves building a control system for an airline. The system consists of three components: the manager, the pilot, and the system. Each component has specific tasks and responsibilities. 

### System Components

- **Manager**
Alert the pilot and the system when there is a new flight.
 Be notified when a flight has arrived.

- **Pilot**
Alert the system when a flight took off.
Alert the manager and the system when a flight has arrived.
Be notified when a new flight is scheduled.

- **System**
Be notified when a new flight is scheduled.
Be notified when a flight took off.
Be notified when a flight has arrived.


### Output

```json
Manager: new flight with ID 'fca81896-9648-5573-b4b4-a56eaf4398de' has been scheduled
Flight {
  event: 'new-flight',
  time: 7/17/2023, 12:02:30 PM
Details: {
  airLine: 'Royal Jordanian Airlines',
  flightID: 'fca81896-9648-5573-b4b4-a56eaf4398de',
  pilot: 'Lura Delgado',
  destination: 'Fawiboli, NV'
} }
Pilot: flight with ID 'fca81896-9648-5573-b4b4-a56eaf4398de' took off
Flight {
  event: 'took-off',
  time: 7/17/2023, 12:02:31 PM
Details: {
  airLine: 'Royal Jordanian Airlines',
  flightID: 'fca81896-9648-5573-b4b4-a56eaf4398de',
  pilot: 'Lura Delgado',
  destination: 'Fawiboli, NV'
} }
Pilot: flight with ID 'fca81896-9648-5573-b4b4-a56eaf4398de' has arrived
Flight {
event: 'arrived',
time: 7/17/2023, 12:02:35 PM
Details: {
  airLine: 'Royal Jordanian Airlines',
  flightID: 'fca81896-9648-5573-b4b4-a56eaf4398de',
  pilot: 'Lura Delgado',
  destination: 'Fawiboli, NV'
} }
Manager: we're greatly thankful for the amazing flight, Lura Delgado
```

### UML
![UML](system.jpg)


## lab 12 (Socket.io)

### Description

Refactor the previous code with Socket.io


### Output 

#### system.js

```
light {
  event: 'new-flight',
  time: 7/23/2023, 8:46:37 AM
Details: {
  airLine: 'Royal Jordanian Airlines',
  flightID: '74835ff8-6205-5146-9fa1-84e288c7b540',
  pilot: 'Fannie Cain',
  destination: 'Vamsooje, CT'
} }
Flight {
  event: 'took-off',
  time: 7/23/2023, 8:46:41 AM
Details: {
  airLine: 'Royal Jordanian Airlines',
  flightID: '74835ff8-6205-5146-9fa1-84e288c7b540',
  pilot: 'Fannie Cain',
  destination: 'Vamsooje, CT'
} }
Flight {
  event: 'arrived',
  time: 7/23/2023, 8:46:44 AM
Details: {
  airLine: 'Royal Jordanian Airlines',
  flightID: '74835ff8-6205-5146-9fa1-84e288c7b540',
  pilot: 'Fannie Cain',
  destination: 'Vamsooje, CT'
} }

```
#### pilot.js

```
Pilot: flight with ID '74835ff8-6205-5146-9fa1-84e288c7b540' took off
Pilot: flight with ID '74835ff8-6205-5146-9fa1-84e288c7b540' has arrived
```

#### manger.js
```
Manager: new flight with ID '74835ff8-6205-5146-9fa1-84e288c7b540' has been scheduled
Manager: we're greatly thankful for the amazing flight, Fannie Cain
```