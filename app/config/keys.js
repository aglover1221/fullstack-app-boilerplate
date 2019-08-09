module.exports = {
  databaseURI:
    "mongodb+srv://kaiferrall:app_template@cluster0-zvmhd.mongodb.net/test?retryWrites=true&w=majority",
  jwtSecret: "dasdkjasbdjsadbjasdba",
  links: {
    verifyEmail:
      "http://localhost:3000/public/user/authentication-services/confirm-email/",
    resetPasswordLink:
      "http://localhost:3000/user/authentication-services/recover-password/"
  }
};
