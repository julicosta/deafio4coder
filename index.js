const express = require('express');

const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');
const errorRouter = require('./routes/error');

const app = express();
const port = 8080;






app.listen(port, () => {
    console.log(`Server listeting on port ${port}`)
});