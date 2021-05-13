import { FaExclamationTriangle } from 'react-icons/fa'
import Layout from "../components/Layout"
import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function NotFoundPage() {
    return (
        <Layout title="Page Not Found">
            <div className={styles.error}>
                <h1> <FaExclamationTriangle/> 404 <FaExclamationTriangle/> </h1>
                <h4>Sorry this page doesn't exist</h4>
                <Link href="/">
                <a>Go back Home</a>
                </Link>
            </div>
            
        </Layout>
    )
}