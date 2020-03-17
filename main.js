import express from 'express';
import router from './routing/router';

const app = express();

app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});