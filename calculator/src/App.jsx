import styles from './App.module.css'
import {Button} from './components/Button.jsx'
import OutputBox from './components/OutputBox'

const App = () => {

  return (
    <div className={styles.fred}>
      <div className={styles.wrapper}>
        <OutputBox />
        <div className={styles.row}>
          <Button type="number" symbol="7"></Button>
          <Button type="number" symbol="8"></Button>
          <Button type="number" symbol="9"></Button>
          <Button type="operator" symbol="/"></Button>
        </div>   
        <div className={styles.row}>
          <Button type="number" symbol="4"></Button>
          <Button type="number" symbol="5"></Button>
          <Button type="number" symbol="6"></Button>
          <Button type="operator" symbol="*"></Button>
        </div> 
        <div className={styles.row}>
          <Button type="number" symbol="1"></Button>
          <Button type="number" symbol="2"></Button>
          <Button type="number" symbol="3"></Button>
          <Button type="operator" symbol="+"></Button>
        </div> 
        <div className={styles.row}>
          <Button type="number" symbol="0"></Button>
          <Button type="number" symbol="."></Button>
          <Button type="function" symbol="="></Button>
          <Button type="operator" symbol="-"></Button>
        </div>  
        <Button type="function" symbol="Clear"></Button>  
      </div>
    </div>

    )
}

export default App
