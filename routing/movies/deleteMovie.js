export default (req, res) => {
  res.type('application/json');

  const {
    movieId,
  } = req.params;

  const ifErrorHappened = true;

  if (ifErrorHappened) {
    const errorMessage = {
      message: 'not found',
    }
    res.status(404);
    return res.json(errorMessage);
  }

  if (ifErrorHappened) {
    const errorMessage = {
      message: 'error happened on removing a movie',
    }
    res.status(503);
    return res.json(errorMessage);
  }

  const successResponse = {
    message: 'movie deleted',
  };
  res.status(200);
  return res.json(successResponse);
};
