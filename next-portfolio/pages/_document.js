import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
      <link 
          href="https://fonts.googleapis.com/css2?family=Montez&display=swap" 
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" 
          rel="stylesheet"
        />

        <link 
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" 
          rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Montaga&display=swap" rel="stylesheet"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
