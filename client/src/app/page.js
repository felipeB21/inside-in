import Series from "@/components/Series";
import Trends from "@/components/Trends";

export default function Home() {
  return (
    <main className="w-[1100px] mx-auto mt-8">
      <Trends />
      <Series />
    </main>
  );
}
