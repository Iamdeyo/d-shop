// create token and saving that in cookies

const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  // Options for Cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    message: 'User authenticated successfully',
    user,
    token,
  });
};

export default sendToken;
