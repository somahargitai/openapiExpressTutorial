export default (req, res) => {
  res.type('application/json');

  const {
    firstName,
    lastName,
    birthLocation,
    birthDate,
  } = req.body;
  const id = req.params.userId;

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
      message: 'not found',
    }
    res.status(404);
    return res.json(errorMessage);
  }

  if (ifErrorHappened) {
    const errorMessage = {
      message: 'error happened on updating a user',
    }
    res.status(503);
    return res.json(errorMessage);
  }

  const successResponse = {
    message: 'user updated',
    itemAdded: {
      firstName,
      lastName,
      birthLocation,
      birthDate,
    }
  };
  res.status(200);
  return res.json(successResponse);
};
