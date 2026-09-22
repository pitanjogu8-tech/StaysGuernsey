import Script from "next/script"
export function LetMeAllez() {
  return (
    <Script id="stay22-lma" strategy="afterInteractive">
      {`
        (function (s, t, a, y, twenty, two) {
          s.Stay22 = s.Stay22 || {};
          s.Stay22.params = { lmaID: '6aa417b92c12fc22b51ac118' };
          twenty = t.createElement(a);
          two = t.getElementsByTagName(a)[0];
          twenty.async = 1;
          twenty.src = y;
          two.parentNode.insertBefore(twenty, two);
        })(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');
      `}
    </Script>
  )
}
