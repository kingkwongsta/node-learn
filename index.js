const { EventEmitter } = require("event");
const eventEmitter = new EventEmitter();
eventEmitter.on("lunch", () => {
  console.log("hello world");
});

eventEmitter.emit("lunch");
