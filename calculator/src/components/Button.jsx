import styles from './Button.module.css'

export const Button = ({type, symbol, handleClick}) => {
    return (
        <div 
            onClick={()=>handleClick(symbol)} 
            className={styles.button+' '+styles[type]}>
                {symbol}
        </div>
)}