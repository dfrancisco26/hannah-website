import Image from 'next/image';

export default function Banner() {
    return (
        <div className="banner">
            <Image className='banner-image' src='/../public/assets/banner-logo-png.png' alt='banner' width={500} height={200} />
        </div>
    );
    }