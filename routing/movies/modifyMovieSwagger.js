export default {
  put: {
    tags: ['Movies'],
    summary: '',
    description: '',
    parameters: [],
    responses: {
      200: {
        description: 'movie updated successfully',
      },
      400: {
        description: 'bad request',
      },
      404: {
        description: 'not found',
      },
      503: {
        description: 'update movie error',
      },
    },
  },
};
