const addUser = (req, res) => {
  const { number, manager, first_name, last_name, pic, email, pic } = req.body;
  const db = req.app.get("db");
  db.addUser([number, manager, first_name, last_name, pic, email, pic])
    .then(results => {
      res.status(200).json(results);
    })
    .catch(console.log());
};

module.exports = { addUser };
