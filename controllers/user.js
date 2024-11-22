const UserService = require("../services/user");
const response = require("../helpers/responseHelper");

const authenticateUser = async (req, res) => {
  try {
    const { initData } = req.body;
    const result = await UserService.authenticateUser(initData);
    return response(res, 200, "User retrieved", result);
  } catch (error) {
    return response(res, 500, "Error retrieving leaderboard", error.message);
  }
};

module.exports = {
  authenticateUser,
};
