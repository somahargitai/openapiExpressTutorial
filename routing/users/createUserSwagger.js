export default {
  post: {
    tags: ['User management'],
    summary: '',
    description: '',
    parameters: [
      {
        $ref: '#/components/schemas/user',
      },
    ],
    responses: {
      201: {
        description: 'new user added',
      },
      400: {
        description: 'bad request',
      },
      503: {
        description: 'create user error',
        schema: {
          $ref: '#/components/schemas/error',
        },
      },
    },
  },
};
