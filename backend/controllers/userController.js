let users = [
    { id: 1, name: "Nguyễn Hữu Trọng", email: "huutrongk24@gmail.com" },
    { id: 2, name: "Dương Mạnh Khương", email: "duongmanhkhuongcmu@gmail.com" }
  ];
  
  const getUsers = (req, res) => {
    res.json(users);
  };
  
  const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Vui lòng nhập đủ thông tin." });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  module.exports = { getUsers, createUser };
  