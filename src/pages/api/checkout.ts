import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse){
  const priceId = 'price_1Mj4szG6H8YGOox4J6U6S95x';

  const success_url = `${process.env.NEXT_URL}/success`
  const cancel_url = `${process.env.NEXT_URL}/`


 const checkoutSession = await stripe.checkout.sessions.create({
  success_url: success_url,
  cancel_url: cancel_url,
  mode: 'payment',
  line_items:[
    {
      price: priceId,
      quantity: 1,
    }
  ]
 })

 return res.status(201).json({
  checkoutUrl: checkoutSession.url
 })
}