import Head from 'next/head'
import styles from '../styles/Layout.module.css'


export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
            <title>{title} </title>
            <meta name='description' content={description} ></meta>
            <meta name='keywords' content={keywords} ></meta>
            </Head>

           <div className={styles.container}>
                {children}
            </div> 
        </div>
    )
}

Layout.defaultProps = {
    title: "Dj Events | find the hottest parties",
    description: "Place to find the latest dj events in you area!!",
    keywords: "DJ, music, EDM"
 }