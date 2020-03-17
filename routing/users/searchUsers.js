export default (req, res) => {
  res.type('application/json');

  const {
    searchPhrase,
  } = req.query;

  const ifErrorHappened = true;

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

  const successResponse = {
    firstName: 'John',
    lastName: 'Doe',
    birthLocation: 'New York',
    birthDate: '1950',
  };
  res.status(200);
  return res.json(successResponse);
};
