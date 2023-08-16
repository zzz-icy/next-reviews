import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/review";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Indie Gamer',
};

const HomePage = async () => {
  const featuredReview = await getFeaturedReview();
 
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">
        Only the best indie games, reviewed for you.
      </p>      <div className="bg-white border w-80 sm:w-full rounded hover:shadow-xl">
        <Link
          href={`/reviews/${featuredReview.slug}`}
          // switch to flex-row if larger than sm
          className="flex flex-col sm:flex-row"
        >
          <img
            src={featuredReview.image}
            alt=""
            height="180"
            width="320"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
               {featuredReview.title}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
