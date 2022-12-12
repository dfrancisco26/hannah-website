import Link from 'next/link'
import styles from '../../styles/NavSide.module.css'

export default function NavSide() {
    return (
        <div className={styles.navside}>
            <Link href='/'>Home</Link>
            <a href='/services'>Services</a>
            <a href='/gallery'>Gallery</a>
            <a id='insta' href='https://www.instagram.com/all_dogs_go_to_hannah/'>Instagram</a>
            <a id='facebook' href='https://www.facebook.com/AllDogsGoToHannah/'>Facebook</a>
        </div>
    )
}