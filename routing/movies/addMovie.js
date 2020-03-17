export default (req, res) => {
  res.type('application/json');

  const {
    title,
    year,
    director,
    producer,
    cast,
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
      message: 'error happened on adding a movie',
    }
    res.status(503);
    return res.json(errorMessage);
  }

  const successResponse = {
    message: 'movie added',
    itemAdded: {
      id: 'fdd065a7-82b3-4844-b64f-581775b6f5b8',
      title,
      year,
      director,
      producer,
      cast,
    }
  };
  res.status(201);
  return res.json(successResponse);
};
