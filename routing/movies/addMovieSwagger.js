export default {
  post: {
    tags: ['Movies'],
    summary: '',
    description: '',
    parameters: [],
    responses: {
      201: {
        description: 'new mvie added',
      },
      400: {
        description: 'bad request',
      },
      503: {
        description: 'add movie error',
        schema: {
          $ref: '#/components/schemas/error',
        },
      },
    },
  },
};
