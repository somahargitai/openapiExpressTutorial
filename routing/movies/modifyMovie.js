export default (req, res) => {
  res.type('application/json');

  const {
    title,
    year,
    director,
    producer,
    cast,
  } = req.body;
  const id = req.params.movieId;

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
      message: 'error happened on updating a movie',
    }
    res.status(503);
    return res.json(errorMessage);
  }

  const successResponse = {
    message: 'movie updated',
    itemAdded: {
      id,
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
