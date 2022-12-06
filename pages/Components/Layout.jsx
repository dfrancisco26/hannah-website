import styles from '../../styles/Layout.module.css';
import Banner from './Banner';
import Footer from './Footer';
import AboutP from './AboutP';

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            
            <Banner />
            <AboutP />
            <Footer />
        </div>
    );
}