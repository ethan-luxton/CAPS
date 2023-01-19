jest.mock("socket.io-client");
const io = require("socket.io-client");
io.mockImplementation(() => {
    return {
        on: jest.fn(),
        emit: jest.fn(),
    }
});

const { EVENT_NAMES } = require("../src/utils");
const { toTest: { events, acknowledgeDelivery, sendPickup } } = require("../src/vendor/handler");


describe('Testing handler for vendor', () => {

    beforeAll(() => {
        jest.useFakeTimers();
    });
    
    afterAll(() => {
        jest.clearAllTimers();
    });

    test("Vendor sends pickup event", () => {
        // Arrange
        // const emitMock = jest.spyOn(events, "emit");

        // Act
        sendPickup();

        // Assert
        expect(events.emit).toHaveBeenCalledWith(EVENT_NAMES.pickup, expect.objectContaining({
            store: expect.stringContaining(""),
            orderId: expect.stringMatching(/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i)
        }));
    });

    test("Testing of vendor acknowledging delivery", () => {
        // Arrange
        const orderId = "1234";
        const logMock = jest.spyOn(console, "log");

        // Act
        acknowledgeDelivery(orderId);

        // Assert
        expect(logMock).toHaveBeenCalledWith("Vendor thank you for the delivery!", orderId);
    });

 
  
});

