import Link from "next/link";
import Heading from "@/components/Heading";

const ReviewsPage: React.FC = () => {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border w-80 rounded hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt=""
              height="180"
              width="320"
              className="rounded-t"
            />
            <h2 className="py-1 text-center font-orbitron font-semibold">
              Hollow Knight
            </h2>
          </Link>
        </li>
        <li className="bg-white border w-80 rounded hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt=""
              height="180"
              width="320"
              className="rounded-t"
            />
            <h2 className="py-1 text-center font-orbitron font-semibold">
              Stardew Valley
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ReviewsPage;
