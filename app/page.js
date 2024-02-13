//import Page from "./week-2";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className>CPRG 306:Web Development 2- Assignments</h1>
      <Link href="week-2">Week-2 Assignment</Link>
      <br />
      <Link href="week-3">Week-3 Assignment</Link>
      <Link href="week-4">Week-4 Assignment</Link>
    </main>
  );
}
