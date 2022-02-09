import styles from './OutputBox.module.css'

const OutputBox = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.display}>
                <div>display</div>
            </div>
            <div className={styles.text}>
                <div>text</div>
            </div>
        </div> 
)}


export default OutputBox