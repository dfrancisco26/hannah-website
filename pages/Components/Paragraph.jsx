import React from "react";
import Image from "next/image";
import styles from "../../styles/Paragraph.module.css";

export default function Paragraph({ text, imageURL, altText }) {
    return (
        <div className={styles.paragraph}>
            <Image className={styles.Image} src={imageURL} alt={altText} width={400} height={400} />
            <p>{text}</p>
        </div>
    );
}
