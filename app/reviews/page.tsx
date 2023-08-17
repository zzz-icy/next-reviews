import Link from "next/link"
import Heading from "@/components/Heading"
import { getReviews } from "@/lib/review"
import { Metadata } from "next"

// * The metadata object and generateMetadata function exports are only supported in Server Components.
// * You cannot export both the metadata object and generateMetadata function from the same route segment.
export const metadata: Metadata = {
	title: "Reviews",
}

const ReviewsPage = async () => {
	const reviews = await getReviews()
	return (
		<>
			<Heading>Reviews</Heading>
			<ul className='flex flex-row flex-wrap gap-3'>
				{reviews.map(({ title, image, slug }) => (
					<li
						key={slug}
						className='bg-white border w-80 rounded hover:shadow-xl'
					>
						<Link href={`/reviews/${slug}`}>
							<img
								src={image}
								alt=''
								height='180'
								width='320'
								className='rounded-t'
							/>
							<h2 className='py-1 text-center font-orbitron font-semibold'>
								{title}
							</h2>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default ReviewsPage
