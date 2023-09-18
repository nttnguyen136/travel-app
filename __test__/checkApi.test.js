// Import the js file to test
import { postData, deleteData, getAllTrips } from "../src/client/js/api";

describe("Testing the postData functionality", () => {
  test("Testing the postData() function", () => {
    expect(postData).toBeDefined();
  });
});

describe("Testing the deleteData functionality", () => {
  test("Testing the deleteData() function", () => {
    expect(deleteData).toBeDefined();
  });
});
describe("Testing the getAllTrips functionality", () => {
  test("Testing the getAllTrips() function", () => {
    expect(getAllTrips).toBeDefined();
  });
});
