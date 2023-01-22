jest.mock("socket.io-client");
const io = require("socket.io-client");
io.mockImplementation(() => {
    return {
        on: jest.fn(),
        emit: jest.fn()
    }
});

const { EVENT_NAMES } = require("../src/utils");
const {
  toTest: { events, deliver, handlePickup },
} = require("../src/driver/handler");

jest.useFakeTimers();


test("Driver deliver", () => {
  // Arrange
  

  // Act
  deliver("1234", events);

  // Assert
  expect(events.emit).toHaveBeenCalledWith(EVENT_NAMES.delivered, "1234");

});

test("Driver handlePickup", () => {
  // Arrange
  

  // Act
  handlePickup({
    store: "test",
    orderId: "1234",
    customer: "customer",
    address: "111 Main",
  }, events);

  // Timers - skip setTimeout
  jest.runAllTimers();

  // Assert
  expect(events.emit).toHaveBeenCalledWith(EVENT_NAMES.delivered, "1234");
  
  
});

