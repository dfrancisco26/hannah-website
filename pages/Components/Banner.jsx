import Image from 'next/image';
import styles from '../../styles/Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image className='banner-image' src='/../public/assets/banner-logo-png.png' alt='banner' width={500} height={200} />
        </div>
    );
    }