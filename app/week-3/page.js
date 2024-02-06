import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main className="bg-slate-200">
      <h1 className="m-3 text-black font-bold text-3xl ">Shopping List</h1>
      <ItemList />
    </main>
  );
}
