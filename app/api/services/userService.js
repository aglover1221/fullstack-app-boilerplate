const User = require("../../database/models/User");
const { serverError } = require("./errorService");

exports.create = async data => {
  try {
    const user = new User({ ...data });
    const newUser = await user.save();
    if (newUser) delete newUser._doc.password;
    return newUser;
  } catch (e) {
    throw serverError();
  }
};

exports.get = async query => {
  try {
    const user = await User.findOne(query);
    return user;
  } catch (e) {
    throw serverError();
  }
};

exports.get_nopassword = async query => {
  try {
    const user = await User.findOne(query);
    if (user) delete user._doc.password;
    return user;
  } catch (e) {
    throw serverError();
  }
};

exports.getMany = async query => {
  try {
    return await User.find(query);
  } catch (e) {
    throw serverError();
  }
};

exports.update = async userUpdated => {
  try {
    const user = await userUpdated.save();
    if (user) delete user._doc.password;
    return user;
  } catch (e) {
    console.log(e);
    throw serverError();
  }
};

exports.updateWithQuery = async (query, updates) => {
  try {
    return await User.updateOne(query, updates, { runValidators: true });
  } catch (e) {
    throw serverError();
  }
};
