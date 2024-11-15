import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/users">Users</Link>
      <Link href="/users/new">New user</Link>
      <ProductCard></ProductCard>

      {/* Use the Link element to make links on a page much faster and get rid of repetitive downloads */}
    </main>
  );
}
