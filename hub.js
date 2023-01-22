
const { Server } = require("socket.io");
const { EVENT_NAMES } = require("./src/utils");

const io = new Server(3333);
// Both queues in hub
const Queue = require('./src/queue');
const driverQueue = new Queue();
const vendorQueue = new Queue();


function startEventServer() {
  io.on("connection", (socket) => {
    

    socket.on('enqueue driver', () => {
      console.log('ENQUEUE DRIVER AFTER DELIVERY')
      driverQueue.enqueue(socket)
    });
    // New driver socket on initialization
    socket.on('Hi, Driver here!', () => {
      console.log("have new driver connection", socket.id);
      driverQueue.enqueue(socket)
    })


    // BUSY WORK! Whenever the hub gets a pickup or delivered event, send it to everyone!
    socket.on(EVENT_NAMES.delivered, (delivered) => {
      console.log("HUB delivered", delivered);
      io.emit(EVENT_NAMES.delivered, delivered);
      
    });
    socket.on('In-transit', () => {
      // Console log to say that driver is in transit
      console.log('DRIVER In-transit');
      // Dequeue driver while in transit.
      driverQueue.dequeue();
    });
    socket.on(EVENT_NAMES.pickup, (pickup) => {
      // Queue package in vendorQueue
      vendorQueue.enqueue(pickup);
      if (driverQueue.front !== null) {
        // Log and emit showing package ready for pickup
        console.log("HUB pickup", pickup);
        io.emit(EVENT_NAMES.pickup, pickup);
        
        // Console log driver queue to ensure driver is in queue
        console.log(driverQueue.toString(), "IDENTIFIER")
        // Dequeue package as it has been picked up
        vendorQueue.dequeue()
        // Console log package queue to ensure package has been dequeued.
        console.log(vendorQueue.toString())
      } 
    });
  });

  console.log("Everything is started!");
}

startEventServer();

module.exports = { startEventServer }

// const { startDriver } = require("./src/driver/handler");
// const { startVendor } = require("./src/vendor/handler");

// startDriver();
// startVendor();

// console.log("Everything is started!");