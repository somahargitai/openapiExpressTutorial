export default (req, res) => {
  res.type('application/json');

  const {
    firstName,
    lastName,
    birthLocation,
    birthDate,
  } = req.body;

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
      message: 'error happened on adding a usere',
    }
    res.status(503);
    return res.json(errorMessage);
  }

  const successResponse = {
    message: 'user added',
    itemAdded: {
      id: 'b0a76404-8bb0-4986-8293-cdea88acf4d1',
      firstName,
      lastName,
      birthLocation,
      birthDate,
    }
  };
  res.status(201);
  return res.json(successResponse);
};
