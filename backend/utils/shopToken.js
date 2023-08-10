// create token and saving that in cookies

const sendShopToken = (seller, statusCode, res) => {
  const token = seller.getJwtToken();

  // Options for Cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie('seller_token', token, options).json({
    success: true,
    message: 'Seller authenticated successfully',
    seller,
    token,
  });
};

export default sendShopToken;
