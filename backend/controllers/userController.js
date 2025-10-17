// let users = [
//     { id: 1, name: "Nguyễn Hữu Trọng", email: "huutrongk24@gmail.com" },
//     { id: 2, name: "Dương Mạnh Khương", email: "duongmanhkhuongcmu@gmail.com" }
//   ];
  
//   const getUsers = (req, res) => {
//     res.json(users);
//   };
  
//   const createUser = (req, res) => {
//     const { name, email } = req.body;
//     if (!name || !email) {
//       return res.status(400).json({ message: "Vui lòng nhập đủ thông tin." });
//     }
//     const newUser = { id: users.length + 1, name, email };
//     users.push(newUser);
//     res.status(201).json(newUser);
//   };
  
//   module.exports = { getUsers, createUser };

const User = require('../models/User');

// GET /users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /users
exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

