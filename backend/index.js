const express = require('express');

const unitRouter = require('./routers/unit.router');
const positionRouter = require('./routers/position.router');
const employeeRouter = require('./routers/employee.router');

const port = process.env.PORT || 3002;

const app = express();

app.use(unitRouter);
app.use(positionRouter);
app.use(employeeRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});