import express from 'express';
import swaggerUi from "swagger-ui-express";

import pjson from '../package.json';
import swaggerDoc from './openapi.js';

import movies from './movies';
import users from './users'; 

const router = express.Router();

// It is good to hide it into an if(devMode) condition. We do not
// want anybody to be able to see it.
swaggerDoc.info.version = pjson.version;
// $RefParser.dereference(swaggerDoc, (err, schema) => {
//   if (err) {
//     console.error(err);
//   } else {
//     router.use('/docs', swaggerUi.serve, swaggerUi.setup(schema));
//   }
// })
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.get('/', (req, res) => {
  console.log('health check')
  return res.json('health check okay');
});

router.use('/movies', movies);
router.use('/users', users);

router.get('/soma',(req, res) => {
  console.log('soma log')
  return res.json('soma resp');
});

router.get('/kacsa',(req, res) => {
  console.log('kacsa log')
  return res.json('kacsa resp');
});

router.put('/kacsa',(req, res) => {
  console.log('kacsa log')
  return res.json('kacsa resp');
});

router.post('/kacsa',(req, res) => {
  console.log('kacsa log')
  return res.json('kacsa resp');
});

export default router;