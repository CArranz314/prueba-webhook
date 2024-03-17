import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useParams } from 'next/navigation'


export default function Home() {
  console.log('12345678')
  var aaaa=123434
  const params = useParams<{ tag: string; item: string }>()
  console.log(params)
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Hola mundo 2
        </p>
      </main>

      <Footer />
    </div>
  )
}
