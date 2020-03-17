export default {
  get: {
    tags: ['User management'],
    summary: '',
    description: '',
    parameters: [],
    responses: {
      200: {
        description: 'user list query successful',
      },
      400: {
        description: 'bad request',
      },
      503: {
        description: 'userlist error',
      },
    },
  },
};
