const Customer = require('../app/models/customer');

// Post
exports.post = async(data) => {
  const customer = new Customer(data);
  await customer.save();
}

// GetAall
exports.getAll = async () => {
  const res = await Customer.find();
  return res;
}

// GetById
exports.getById = async (id) => {
  const res = await Customer.findById(id);
  return res;
}

// Put
exports.put = async (id, data) => {
  await Customer.findByIdAndUpdate(id, {
    $set:{
      name: data.name,
      email: data.email,
      password: data.password
    }
  });
}

// Delete
exports.delete = async (id) => {
  await Customer.findByIdAndDelete(id);
}
