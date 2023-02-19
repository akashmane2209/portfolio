import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,200,0,0" />
      </Head>
      <body className='h-screen bg-sky-300/80 '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
