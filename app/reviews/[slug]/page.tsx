import Heading from "@/components/Heading"
import ShareLinkButton from "@/components/ShareLinkButton"
import { getReview, getSlugs } from "@/lib/review"
import { Metadata } from "next"

interface ReviewPageProps {
	params: ReviewPageParams
}

interface ReviewPageParams {
	slug: string
}

// The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export const generateStaticParams = async () => {
	const slugs = await getSlugs()
	return slugs.map((slug) => {
		slug
	})
}

export async function generateMetadata({
	params: { slug },
}: ReviewPageProps): Promise<Metadata> {
	const review = await getReview(slug)
	return {
		title: review.title,
	}
}

// {params:{slug:"some value"}, searParams:{}}
const ReviewPage = async (props: ReviewPageProps) => {
	const review = await getReview(props.params.slug)
	const { title, image, date, html } = review
	return (
		<>
			<Heading>{title}</Heading>
			{/* we just need to put our images inside the "public" folder and 
      the Next.js server will return them directly as they are. */}
			<div className='flex gap-3 items-baseline'>
				<p className='italic pb-2'>{date}</p>
				<ShareLinkButton />
			</div>
			<img
				src={image}
				alt=''
				height='360'
				width='640'
				className='mb-2 rounded'
			/>
			<article
				dangerouslySetInnerHTML={{ __html: html }}
				className='prose prose-slate max-w-screen-sm'
			/>
		</>
	)
}

export default ReviewPage
