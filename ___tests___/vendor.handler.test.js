const { events, EVENT_NAMES } = require("../src/events");
const { startVendor, toTest: { acknowledgeDelivery, sendPickup } } = require("../src/vendor/handler");


describe('Testing handler for vendor', () => {

    beforeAll(() => {
        jest.useFakeTimers();
    });
    
    afterAll(() => {
        jest.clearAllTimers();
    });

    test("Vendor sends pickup event", () => {
        // Arrange
        const emitMock = jest.spyOn(events, "emit");

        // Act
        sendPickup();

        // Assert
        expect(emitMock).toHaveBeenCalledWith(EVENT_NAMES.pickup, expect.objectContaining({
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

    test("Vendor starts and sends periodic pickup events", () => {
        // Arrange
        const emitMock = jest.spyOn(events, "emit");
        const logMock = jest.spyOn(console, "log");
        startVendor();
        jest.advanceTimersByTime(1000); 
        // Assert
        expect(logMock).toHaveBeenCalledWith("Vendor ready!");
        expect(emitMock).toHaveBeenCalledWith(EVENT_NAMES.pickup, expect.any(Object));
    });

  
});

