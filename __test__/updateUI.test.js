// Import the js file to test
import createTripElement from "../src/client/js/updateUI";

describe("Testing the createTripElement functionality", () => {
  test("Testing the createTripElement() function", () => {
    expect(createTripElement).toBeDefined();
  });
});
