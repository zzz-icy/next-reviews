import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/review";

const ReviewsPage = async () => {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map(({ title, image, slug }) => (
          <li
            key={slug}
            className="bg-white border w-80 rounded hover:shadow-xl"
          >
            <Link href={`/reviews/${title}`}>
              <img
                src={image}
                alt=""
                height="180"
                width="320"
                className="rounded-t"
              />
              <h2 className="py-1 text-center font-orbitron font-semibold">
                {title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsPage;
