import Heading from "@/components/Heading";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <>
      <Heading>Hannah's Home Cafe</Heading>
      <p>No Coffee No Life</p>
      <div className="bg-white border w-80 sm:w-full rounded hover:shadow-xl">
        <Link
          href="/reviews/stardew-valley"
          // switch to flex-row if larger than sm
          className="flex flex-col sm:flex-row"
        >
          <img
            src="/images/stardew-valley.jpg"
            alt=""
            height="180"
            width="320"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
