import Image from "next/image";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useState, useMemo } from "react";
import BigList from "./components/BigList";
import { calculateMostExpensive } from "./util";
import Button from "./components/Button";

const inter = Inter({ subsets: ["latin"] });

const url = "https://course-api.com/javascript-store-products";

export default function Home() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);

  const mostExpensiveItem = useMemo(() => {
    calculateMostExpensive(products);
  }, [products]);

  console.log("home page rendered");

  //useMemo() useCallback()   useCallback(()=>{},[])
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    //console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-gray-200 p-24 ${inter.className}`}
    >
      <h1>Count: {count}</h1>
      <Button
        classes="bg-gray-300 p-2 rounded-md mt-2 hover:bg-gray-400"
        text="Click me"
        handleOnClick={() => setCount(count + 1)}
      />

      <h1 className="mt-8">Cart : {cart}</h1>
      <h1>Most expensive item: {mostExpensiveItem}</h1>
      <BigList productList={products} addToCart={addToCart} />
    </main>
  );
}
