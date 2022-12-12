import Image from 'next/image';
import styles from '../../styles/Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image className={styles.Image} src='/../public/assets/banner-logo-png.png' alt='banner' width={500} height={200} />
        <h1 className={styles.h1}>A place where your pups are ours.</h1>
        </div>
    );
    }