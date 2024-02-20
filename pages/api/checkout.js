import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";
import { Record } from "@/models/Record";
const stripe = require("stripe")(process.env.STRIPE_SK);
const crypto = require("crypto");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("should be a POST request");
    return;
  }
  const {
    account,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    onCartProducts,
  } = req.body;
  await mongooseConnect();
  const productsIds = onCartProducts;
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productsIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          // unit_amount: quantity * productInfo.price * 100,
          unit_amount: productInfo.price * 100,
        },
      });
    }
  }

  const orderDoc = await Order.create({
    line_items,
    account,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  const record = await Record.create({ line_items, account });

  const hashedEmail = crypto.createHash("sha256").update(email).digest("hex");

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    // success_url: process.env.PUBLIC_URL + '/cart?success=1',
    // cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
    success_url:
      process.env.PUBLIC_URL +
      `/cart?success=1&email=${encodeURIComponent(email)}`,
    cancel_url:
      process.env.PUBLIC_URL +
      `/cart?canceled=1&email=${encodeURIComponent(email)}`,
    metadata: { orderId: orderDoc._id.toString(), test: "ok" },
  });

  res.json({
    url: session.url,
  });
}
