import styles from './Button.module.css'

export const Button = ({type, symbol}) => {
    return (
        <div className={styles.button+' '+styles[type]}>{symbol}</div>
)}