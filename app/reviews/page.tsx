import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews, getSlugs } from "@/lib/review";

// The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export const generateStaticParams = async () => {
  const slugs = await getSlugs();
  return slugs.map((slug) => {
    slug;
  });
};

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
            <Link href={`/reviews/${slug}`}>
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
