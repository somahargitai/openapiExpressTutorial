export default {
  delete: {
    tags: ['User management'],
    summary: '',
    description: '',
    parameters: [
      {
        name: 'userId',
        in: 'path',
        description: 'ID of user',
        required: true,
        type: 'integer',
        format: 'uuid',
      }
    ],
    responses: {
      200: {
        description: 'user deleted',
      },
      404: {
        description: 'not found',
      },
      503: {
        description: 'delete user error',
        schema: {
          $ref: '#/components/schemas/error',
        },
      },
    },
  },
};
