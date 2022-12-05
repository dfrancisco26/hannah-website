import React from "react";

export default function Paragraph({ text, image }) {
    return (
        <div className={styles.paragraph}>
            {image}
            <p>{text}</p>
        </div>
    );
}
