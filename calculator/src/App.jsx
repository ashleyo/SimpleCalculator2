import styles from './App.module.css'
import {Button} from './components/Button.jsx'
import OutputBox from './components/OutputBox'
import {useState} from 'react'
import {evaluate} from 'mathjs'


Button.defaultProps = { handleClick: addToText };

const App = () => {

  const [text, setText] = useState("");

  const [result, setResult] = useState("0");

  const addToText = (newtext) => setText((text) => [...text, newtext ])
  const clearAll = () => { setText(""); setResult("") }

  const evalit = () => {
    try {
        console.log(text)
        x = evaluate(text.join(""))
        setResult(x)
      }
    catch (e) {
        setResult("Error")
      }
    setText("")
  } 

  return (
    <div className={styles.fred}>
      <div className={styles.wrapper}>

        <OutputBox text={text} result={result} />
        
        <div className={styles.row}>
          <Button />
          <Button /> 
          <Button />
          <Button type="clear" symbol="Clear" handleClick={clearAll}/>  
        </div>
        
        <div className={styles.row}>
          <Button type="number" symbol="7" />
          <Button type="number" symbol="8" />
          <Button type="number" symbol="9" />
          <Button type="operator" symbol="/" />
        </div>   
        
        <div className={styles.row}>
          <Button type="number" symbol="4" />
          <Button type="number" symbol="5" />
          <Button type="number" symbol="6" />
          <Button type="operator" symbol="*" />
        </div> 
        
        <div className={styles.row}>
          <Button type="number" symbol="1" />
          <Button type="number" symbol="2" />
          <Button type="number" symbol="3" />
          <Button type="operator" symbol="+" />
        </div> 
        
        <div className={styles.row}>
          <Button type="number" symbol="0" />
          <Button type="number" symbol="." />
          <Button type="function" symbol="=" handleClick={evalit}/>
          <Button type="operator" symbol="-" />
        </div> 

        </div>
    </div>

    )
}

export default App
