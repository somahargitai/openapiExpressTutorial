import express from 'express';

import addMovie from './addMovie';
import delMovie from './deleteMovie';
import modMovie from './modifyMovie';

const movieRouter = express.Router();

movieRouter.post('/add', addMovie);
movieRouter.delete('/delete', delMovie);
movieRouter.put('/update', modMovie);

export default movieRouter;
