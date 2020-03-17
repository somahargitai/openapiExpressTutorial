export default {
  put: {
    tags: ['User management'],
    summary: '',
    description: '',
    parameters: [],
    responses: {
      200: {
        description: 'user updated successfully',
      },
      400: {
        description: 'bad request',
      },
      404: {
        description: 'not found',
      },
      503: {
        description: 'update user error',
      },
    },
  },
};
