// userController.js

const url = "https://restaurant-api.taco5k.site";

exports.getUser = async (req, res) => {
  try {
    // Simulate async operation
    const user = await fetch(`${url}/api/admin/enum/getenums`);
    const userData = await user.json();
    console.log(userData);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

exports.createUser = (req, res) => {
  res.send("Create user");
};

exports.updateUser = (req, res) => {
  res.send("Update user");
};

exports.deleteUser = (req, res) => {
  res.send("Delete user");
};
