const app = require('./server/app');
// require('./server/app/database');

const config = require('./server/app/config');

app.listen(config.APP_PORT, () => {
    console.log(`server is on ${config.APP_PORT}`);
  });
