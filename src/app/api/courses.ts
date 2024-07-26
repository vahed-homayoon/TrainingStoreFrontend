// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
};

let products: Product[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(products);
      break;
    case "POST":
      const newProduct: Product = { id: uuidv4(), ...req.body };
      products.push(newProduct);
      res.status(201).json(newProduct);
      break;
    case "PUT":
      const { id, ...updatedProduct } = req.body;
      products = products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      );
      res.status(200).json({ id, ...updatedProduct });
      break;
    case "DELETE":
      const { id: deleteId } = req.body;
      products = products.filter((product) => product.id !== deleteId);
      res.status(204).end();
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
