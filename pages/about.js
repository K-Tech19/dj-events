import Link from 'next/Link'
import Layout from '../components/Layout'

export default function AboutPage() {
    return (
        <Layout title='About DJ Events'>
            <h2> Hello about me page here </h2>
            <p> This is an app to find the latest DJ events and other musical events around town</p>
            <p> Verison 1.00 </p>
            <Link href='/'> Home </Link>
        </Layout>
    )
}
