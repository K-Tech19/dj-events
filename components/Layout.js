import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'


export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
            <title>{title} </title>
            <meta name='description' content={description} ></meta>
            <meta name='keywords' content={keywords} ></meta>
            </Head>

             <Header />  
           <div className={styles.container}>
                {children}
            </div> 
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: "Dj Events | find the hottest parties",
    description: "Place to find the latest dj events in you area!!",
    keywords: "DJ, music, EDM"
 }