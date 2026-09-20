import Script from "next/script"

/**
 * Stay22 "Let Me Allez" (LMA) auto-convert loader.
 *
 * HOW TO FINISH SETUP (1 step):
 * 1. Log in to the Stay22 Hub -> Script Builder, generate a script for
 *    staysguernsey.gg, and copy the `src` URL from the <script> tag it gives you.
 * 2. Paste that URL below as STAY22_LMA_SRC (it already contains your affiliate AID).
 *
 * Once set, every outbound Booking.com / Airbnb / Expedia / hotel link on the
 * site is automatically converted into your affiliate link at page load.
 * You can confirm it is live by opening the browser console and looking for the
 * "Let Me Allez" rainbow message.
 */
const STAY22_LMA_SRC = "https://cdn.stay22.com/allez/REPLACE_WITH_YOUR_AID"

export function LetMeAllez() {
  // Guard so the placeholder never loads a broken script in preview.
  if (STAY22_LMA_SRC.includes("REPLACE_WITH_YOUR_AID")) {
    return null
  }

  return <Script src={STAY22_LMA_SRC} strategy="afterInteractive" />
}
