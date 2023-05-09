const Curry = require('../model/Curry');

const getAllCurries = (req, res) => {
  let curries;
  Curry.find()
    .then((result) => {
      curries = result;
      if (!curries) {
        return res.status(404).json({ message: 'No products found' });
      }
      return res.status(200).json({ curries });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  let curry;
  Curry.findById(id)
    .then((result) => {
      curry = result;
      if (!curry) {
        return res.status(404).json({ message: 'No curries found' });
      }
      return res.status(201).json({ curry });
    })
    .catch((err) => {
      console.log(err);
    });
};

const addCurry = (req, res) => {
  const { name, ingredients, price } = req.body;
  let curry;
  curry = new Curry({
    name,
    ingredients,
    price,
  });
  curry
    .save()
    .then(() => {
      return res.status(201).json({ curry });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Unable to add' });
    });
};

const updateCurry = (req, res) => {
  const id = req.params.id;
  const { name, ingredients, price } = req.body;
  let curry;
  Curry.findByIdAndUpdate(id, {
    name,
    ingredients,
    price,
  })
    .then((result) => {
      curry = result;
      return curry.save();
    })
    .then(() => {
      if (!curry) {
        return res.status(404).json({ message: 'Unable to update by this ID' });
      }
      return res.status(200).json({ curry });
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteCurry = (req, res) => {
  const id = req.params.id;
  let curry;
  Curry.findByIdAndRemove(id)
    .then((result) => {
      curry = result;
      console.log('catch if you can',result)
      if (!curry) {
        return res.status(404).json({ message: 'Unable to delete by this ID' });
      }
      return res.status(200).json({ message: 'Product successfully deleted' });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllCurries = getAllCurries;
exports.addCurry = addCurry;
exports.getById = getById;
exports.updateCurry = updateCurry;
exports.deleteCurry = deleteCurry;
