import styles from './Button.module.css'

const Button = ({type, symbol, handleClick}) => {
    return (
        <div 
            onClick={()=>handleClick(symbol)} 
            className={styles.button+' '+styles[type]}>
                {symbol}
        </div>
)}

export default Button;