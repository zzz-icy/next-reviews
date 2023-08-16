import { Orbitron, Exo_2 } from "next/font/google";
// initialize the fonts you want to use here
export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron", // css variable https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
});

export const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2", // css variable https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
});

// But we could use any of those fonts in a web page

// simply by linking to the right

// URL provided by Google.

// However, this is not usually the best approach,

// because it means our website will

// rely on Google's servers.

// And this also has implications for privacy,

// because any time a user opens our website,

// their browser will send requests

// to Google's servers.

// That's why it's usually better

// to download the font files
// and host them on your own website.

// Next.js makes this very easy to do.

// It will automatically download the necessary

// font files when we build our app,

// and then include them as static

// assets in our own website.

// This way no requests will be sent to Google,

// and that may also simplify your

// privacy policy document.
