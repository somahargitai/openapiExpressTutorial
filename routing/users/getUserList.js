export default (req, res) => {
  res.type('application/json');

  const ifErrorHappened = false;

  if (ifErrorHappened) {
    const errorMessage = {
      message: 'bad request',
    }
    res.status(400);
    return res.json(errorMessage);
  }

  if (ifErrorHappened) {
    const errorMessage = {
      message: 'error happened on user search',
    }
    res.status(503);
    return res.json(errorMessage);
  }

  const successResponse = [
    {
      firstName: 'John',
      lastName: 'Doe',
      birthLocation: 'New York',
      birthDate: '1950',
    },
    {
      firstName: 'Jill',
      lastName: 'Doe',
      birthLocation: 'Nairobi',
      birthDate: '1950',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      birthLocation: 'Dakka',
      birthDate: '1950',
    }
  ] ;
  res.status(200);
  return res.json(successResponse);
};
