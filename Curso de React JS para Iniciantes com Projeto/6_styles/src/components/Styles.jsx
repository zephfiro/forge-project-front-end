import "./Styles.css";

import styles from "./Styles.module.css";

const Styles = () => {
    const inlineStyle = {
        color: 'blue',
        backgroundColor: 'lightgray'
    }

    return (
        <>
            <div className="text">Styles</div>
            <div className={styles.textPurple}>Styles with CSS Module</div>
        </>
    )
}

export default Styles