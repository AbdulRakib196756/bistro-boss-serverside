const Cart = require("./Cart.model");

const createcarts = async (req, res) => {
  try {
    const cartdata = req.body;
    const cart = await Cart.create(cartdata);
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json("cart create error");
  }
};
const getallcart = async (req, res) => {
  try {
    const email = req.query.email;
    const cart = await Cart.find({ useremail: email })
      .populate("menuid")
      .lean();
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json("get cart error");
  }
};

module.exports = {
  createcarts,
  getallcart,
};
