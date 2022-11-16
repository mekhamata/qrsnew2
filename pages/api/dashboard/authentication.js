const jwt = require('jsonwebtoken');

export default async function signUp(req, res) {
  const token = jwt.sign({ id: 'aabbccdd' }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(201).json({
    status: 'success',
    token,
  });
}
