import express from 'express';

import addUser from './createUser';
import delUser from './deleteUser';
import modUser from './updateUser';
import usrList from './getUserList';
import findUsr from './searchUsers';

const movieRouter = express.Router();

movieRouter.post('/add', addUser);
movieRouter.delete('/delete', delUser);
movieRouter.put('/update', modUser);
movieRouter.get('/search', findUsr);
movieRouter.get('/all', usrList);

export default movieRouter;
