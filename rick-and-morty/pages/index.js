import { Inter } from "next/font/google";
import Characters from "./characters";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-gray-200 flex-col items-center  p-24 ${inter.className}`}
    >
      <h1>HomePage</h1>
      <Characters />
    </main>
  );
}
