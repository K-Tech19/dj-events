import Layout from '@/components/Layout'
import Link from 'next/link'


export default function Home() {
  return (
    <Layout>
      <h2>Welcome to my page!</h2>
      <Link href="/about" >
        <a> About </a>
      
      </Link>
      

    </Layout>
  )
}
