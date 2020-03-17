export default {
  delete: {
    tags: ['Movies'],
    summary: '',
    description: '',
    parameters: [],
    responses: {
      200: {
        description: 'movie deleted',
      },
      404: {
        description: 'not found',
      },
      503: {
        description: 'delete movie error',
        schema: {
          $ref: '#/components/schemas/error',
        },
      },
    },
  },
};
