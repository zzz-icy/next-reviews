import Heading from "@/components/Heading";
import { getReview } from "@/lib/review";

interface ReviewPageProps {
  params: { slug: string };
}

// {params:{slug:"some value"}, searParams:{}}
const ReviewPage = async (props: ReviewPageProps) => {
  const review = await getReview(props.params.slug);
  const { title, image, date, html } = review;
  return (
    <>
      <Heading>{title}</Heading>
      {/* we just need to put our images inside the "public" folder and 
      the Next.js server will return them directly as they are. */}
      <p>{date}</p>
      <img
        src={image}
        alt=""
        height="360"
        width="640"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
};

export default ReviewPage;
