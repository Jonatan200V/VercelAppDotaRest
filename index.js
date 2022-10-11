const app = require("./src/app.js");

PORT = 4000;
app.listen(PORT, () => {
  console.log(`Corriendo en el puerto ${PORT}`);
});
