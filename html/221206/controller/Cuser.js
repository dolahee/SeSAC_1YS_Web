const { User } = require("../model");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.post_signup = (req, res) => {
  User.create({ name: req.body.name, id: req.body.id, pw: req.body.pw }).then(
    (result) => {
      res.send(true);
    }
  );
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  User.findOne({ where: { id: req.body.id, pw: req.body.pw } }).then((result) =>
    res.send(result)
  );
};

exports.profile = (req, res) => {
  User.findOne({ where: { id: req.body.id } }).then((result) => {
    if (result) {
      res.render("profile", { data: result });
    } else {
      res.redirect("/user/signin");
    }
  });
};

exports.profile_edit = (req, res) => {
  const data = {
    name: req.body.name,
    pw: req.body.pw,
  };
  User.update(data, { where: { id: req.body.id } }).then((result) => {
    console.log(result);
    res.send(true);
  });
};

exports.profile_delete = (req, res) => {
  User.destroy({ where: { id: req.body.id } }).then((result) => {
    console.log(result);
    res.send(true);
  });
};
