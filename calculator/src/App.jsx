import styles from './App.module.css'
import {Button} from './components/Button.jsx'
import OutputBox from './components/OutputBox'
import {useState} from 'react'
import {evaluate} from 'mathjs'



const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("0");

  const addToText = (newtext) => setText((text) => [...text, newtext + ' '])
  const clearAll = () => { setText(""); setResult("") }
  const evalit = () => {
    setResult(evaluate(text.join("")))
    setText("")
  } 

  return (
    <div className={styles.fred}>
      <div className={styles.wrapper}>
        <OutputBox text={text} result={result} />
        <div className={styles.row}>
          <Button type="number" symbol="7" handleClick={addToText}></Button>
          <Button type="number" symbol="8" handleClick={addToText}></Button>
          <Button type="number" symbol="9" handleClick={addToText}></Button>
          <Button type="operator" symbol="/" handleClick={addToText}></Button>
        </div>   
        <div className={styles.row}>
          <Button type="number" symbol="4" handleClick={addToText}></Button>
          <Button type="number" symbol="5" handleClick={addToText}></Button>
          <Button type="number" symbol="6" handleClick={addToText}></Button>
          <Button type="operator" symbol="*" handleClick={addToText}></Button>
        </div> 
        <div className={styles.row}>
          <Button type="number" symbol="1" handleClick={addToText}></Button>
          <Button type="number" symbol="2" handleClick={addToText}></Button>
          <Button type="number" symbol="3" handleClick={addToText}></Button>
          <Button type="operator" symbol="+" handleClick={addToText}></Button>
        </div> 
        <div className={styles.row}>
          <Button type="number" symbol="0" handleClick={addToText}></Button>
          <Button type="number" symbol="." handleClick={addToText}></Button>
          <Button type="function" symbol="=" handleClick={evalit}></Button>
          <Button type="operator" symbol="-" handleClick={addToText}></Button>
        </div>  
        <Button type="function" symbol="Clear" handleClick={clearAll}></Button>  
      </div>
    </div>

    )
}

export default App
