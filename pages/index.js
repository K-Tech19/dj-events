import Layout from '../components/Layout'
import Link from 'next/Link'
import AboutPage from './about' 


export default function Home() {
  return (
    <Layout>
      <h2>Welcome to my page!</h2>
      <AboutPage />
      <Link href='/about'>About</Link>
    </Layout>
  )
}
