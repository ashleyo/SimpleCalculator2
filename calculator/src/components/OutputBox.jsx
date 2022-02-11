import styles from './OutputBox.module.css'

const OutputBox = ({text, result}) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.display}>
                <div>{result}</div>
            </div>

            <div className={styles.text}>
                <div>{text}</div>
            </div>
            
        </div> 
)}


export default OutputBox