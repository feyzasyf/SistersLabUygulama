import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import BigList from "./components/BigList";

const inter = Inter({ subsets: ["latin"] });

const url = "https://course-api.com/javascript-store-products";

const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, product) => {
      const price = product.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

export default function Home() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);

  const mostExpensiveItem = calculateMostExpensive(products);

  const addToCart = () => {
    setCart(cart + 1);
  };

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-gray-200 p-24 ${inter.className}`}
    >
      <h1>Count: {count}</h1>
      <button
        className="bg-gray-300 p-2 rounded-md mt-2 hover:bg-gray-400"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <h1 className="mt-8">Cart : {cart}</h1>
      <h1>Most expensive item: {mostExpensiveItem}</h1>
      <BigList productList={products} addToCart={addToCart} />
    </main>
  );
}
