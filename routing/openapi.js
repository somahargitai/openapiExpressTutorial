import healthCheck from './healthCheckSwagger';
import createUser from './users/createUserSwagger';
import updateUser from './users/updateUserSwagger';
import deleteUser from './users/deleteUserSwagger';
import getUserList from './users/getUserListSwagger';
import searchUsers from './users/searchUsersSwagger';
import addMovie from './movies/addMovieSwagger';
import deleteMovie from './movies/deleteMovieSwagger';
import modifyMovie from './movies/modifyMovieSwagger';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Openapi Express Tutorial',
    description: 'this is a web tutorial. Find related article under the link',
    termsOfService: '',
    contact: {
      name: 'Soma Hargitai',
      email: '',
      url: 'https://github.com/somahargitai',
    },
    license: {},
  },
  servers: [
    {
      url: 'http://localhost:8080',
      description: 'Local server',
    }
  ],
  tags: [
    {
      name: 'User management',
    },
    {
      name: 'Movies',
    },
  ],
  paths: {
    '/': healthCheck,
    '/users/create': createUser,
    '/users/delete/{userId}': deleteUser,
    '/users/update/{userId}': updateUser,
    '/users/search': searchUsers,
    '/users/all': getUserList,
    '/movies/add': addMovie,
    '/movies/delete/{movieId}': deleteMovie,
    '/movies/update/{movieId}': modifyMovie,
  },
  components: {
    schemas: {
      error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
      },
      user: {
        name: 'user',
        in: 'body',
        description: '',
        required: false,
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          birthLocation: {
            type: 'string',
          },
          birthDate: {
            type: 'string',
            format: 'date-time',
          },
        },
      },
    },
  },
};
