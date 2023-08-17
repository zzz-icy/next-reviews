import { readFile, readdir } from "fs/promises"
import { marked } from "marked"
import matter from "gray-matter"

export async function getFeaturedReview(): Promise<Review> {
	const reviews = await getReviews()
	return reviews[0]
}

export const getReview = async (slug: string) => {
	// If you used React in the past, you'll know that normally this is not possible.
	// It only works with React Server Components,
	// because they are rendered only on the server,
	// and therefore they can access Node.js built-in modules,and also be async.
	const text = await readFile(`./content/reviews/${slug}.md`, "utf8")
	const {
		content,
		data: { title, image, date },
	} = matter(text)
	const html = marked(content)
	return { title, image, date, html, slug }
}

interface Review {
	title: string
	date: string
	html: string
	image: string
	slug: string
}

export const getReviews = async (): Promise<Review[]> => {
	const slugs = await getSlugs()
	const reviews: Review[] = []
	for (const slug of slugs) {
		const review = await getReview(slug)
		reviews.push(review)
	}
	reviews.sort((a, b) => b.date.localeCompare(a.date))
	return reviews
}

export const getSlugs = async (): Promise<string[]> => {
	const files = await readdir("./content/reviews") // node js api
	const slugs = files
		.filter((file) => file.endsWith("md"))
		.map((file) => file.slice(0, -`.md`.length)) // from start to end excluding .md
	return slugs
}
