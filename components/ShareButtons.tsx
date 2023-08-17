// "use client"

// * it will apply to all its children component
// In any case, it's not usually a good idea
// to use client-side rendering for an entire page,
// because that will send an awful lot
// of JavaScript code to the browser.
// We want to use Client Components
// only when it's necessary.

import ShareLinkButton from "./ShareLinkButton"

const ShareButtons = () => {
	console.log(`[ShareButtons] rendering`)
	return (
		<div>
			<ShareLinkButton /> | [Twitter] | [Facebook]
		</div>
	)
}
export default ShareButtons
