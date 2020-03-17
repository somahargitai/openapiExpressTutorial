export default {
  get: {
    tags: ['User management'],
    summary: '',
    description: '',
    parameters: [],
    responses: {
      200: {
        description: '',
      },
      400: {
        description: 'bad request',
      },
      503: {
        description: 'search user error',
        schema: {
          $ref: '#/components/schemas/error',
        },
      },
    },
  },
};
