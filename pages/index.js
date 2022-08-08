import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Instgram Clone</title>
        <meta name="description" content="instagram clone i made for practicing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Feed/>
  </div>
  )
}
