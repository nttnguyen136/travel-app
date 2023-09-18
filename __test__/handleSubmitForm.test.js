// Import the js file to test
import { handleSubmitForm } from "../src/client/js/handleSubmitForm";

describe("Testing the handleSubmitForm functionality", () => {
  test("Testing the handleSubmitForm() function", () => {
    expect(handleSubmitForm).toBeDefined();
  });
});
