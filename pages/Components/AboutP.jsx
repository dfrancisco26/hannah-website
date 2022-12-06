import Paragraph from "./Paragraph";
import styles from "../../styles/AboutP.module.css";

export default function AboutP(text, imageURL, altText) {
    return (
        <div className={styles.aboutP}>
            <h1>About Us</h1>

            <Paragraph text="Located conveniently in Bonita, our experienced and dog-loving staff 
            are with your canine companions the entire time. We pride ourselves on a one-on-one experience with
            pets, reducing stress and anxiety and fostering a comfortable and soothing environment. We offer a 
            wide range of services including grooming, bathing, nail trimming, and personalized photography shoots
            for your pups." imageURL='/../public/assets/dog01.jpeg' altText='dog' />

             </div>
    );
}
    
