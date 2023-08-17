"use client"

import { useState } from "react"
import { LinkIcon } from "@heroicons/react/20/solid"
// *Client Components are hydrated in the browser.

// *Hydration is the process of transporting server-rendered HTML to the client side, where it can be transformed into a fully interactive web page.
// When we load the page,
// the ShareLinkButton is first rendered
// as HTML on the server,
// and then rendered again in the browser,
// this time adding any interactive functionality.

const ShareLinkButton = () => {
	console.log(`[ShareLinkButton] rendering`)

	const handleClick = () => {
		console.log("clicked!")
		navigator.clipboard.writeText(window.location.href)
		setClicked(true)
		setTimeout(() => {
			setClicked(false)
		}, 1500)
	}

	const [clicked, setClicked] = useState<boolean>()

	return (
		<button
			onClick={handleClick}
			className='flex gap-1 items-center border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'
		>
			<LinkIcon className='h-4 w-4' />
			{clicked ? "Link Copied!" : "Share link"}
		</button>
	)
}
export default ShareLinkButton
