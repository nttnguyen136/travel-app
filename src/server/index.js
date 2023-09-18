const app = require("./server");

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log("Server running...");
  console.log(`Running on localhost: ${PORT}`);
});

module.exports = server;
