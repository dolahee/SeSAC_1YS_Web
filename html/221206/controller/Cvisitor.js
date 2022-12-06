const { Visitor } = require("../model");

exports.visitor = async (req, res) => {
  let result = await Visitor.findAll();
  res.render("visitor", { data: result });
};

// exports.register = (req, res) => {
//   let data = {
//     name: req.body.name,
//     comment: req.body.comment,
//   };
//   Visitor.create(data).then((result) => {
//     console.log(result);
//     res.send(String(result.id));
//   });
// };

exports.register = async (req, res) => {
  let data = {
    name: req.body.name,
    comment: req.body.comment,
  };
  let result = await Visitor.create(data);
  res.send(String(result.id));
};

exports.delete = (req, res) => {
  Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log(result);
    res.send(true);
  });
};

// exports.deleter = async (req, res) => {
//   Visitor.destroy({
//     where: { id: req.body.id },
//   });
//   let result = await Vawait Visitor.findAll();
//   res.send(true);
// };

exports.get_visitor_by_id = (req, res) => {
  Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    res.send(result);
  });
};
exports.update_visitor = (req, res) => {
  let data = {
    name: req.body.name,
    comment: req.body.comment,
  };
  Visitor.update(data, {
    where: { id: req.body.id },
  }).then((result) => {
    console.log(result);
    res.send(true);
  });
};
