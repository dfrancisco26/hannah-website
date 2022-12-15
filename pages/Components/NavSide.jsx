import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/NavSide.module.css'

export default function NavSide() {
    return (
        <div className={styles.navside}>
            <Link href='/'>Home</Link>
            <a href='/services'>Services</a>
            <a href='/gallery'>Gallery</a>
            <a id='insta' href='https://www.instagram.com/all_dogs_go_to_hannah/'>
                <Image id='insta-logo' src='/../public/assets/insta-logo.png' alt='Instagram' width={100} height={100} />
            </a>
            <a id='facebook' href='https://www.facebook.com/AllDogsGoToHannah/'>Facebook</a>
        </div>
    )
}