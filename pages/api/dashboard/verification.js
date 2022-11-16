const { promisify } = require('util');
const jwt = require('jsonwebtoken');

export default async function checkLogged(req, res) {
  const mytoken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhYmJjY2RkIiwiaWF0IjoxNjYxNTI0NDc2LCJleHAiOjE2NjIxMjkyNzZ9.MsXVa9dUts4pIQlJoC24YGbATGaMOPQ-1J6CCAt0xOg';
  const decoded = await promisify(jwt.verify)(mytoken, process.env.JWT_SECRET);
  console.log(decoded.id);

  //   res.status(201).json({
  //     status: 'success',
  //     token,
  //   });
}
