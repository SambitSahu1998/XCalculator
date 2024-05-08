import React, {useState} from "react";
import styles from "../module/Calculator.module.css";

const Calculator = () =>{
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleClick = (value) =>{
        setInput((prevInput)=>prevInput+value);
    };

    const handleClear = () =>{
        setInput('');
        setOutput('');
    };

    const handleCalculate = () =>{
        if(input!==''|| '+-*/'.includes(input[input.length-1])){
            setOutput('Error');
        }
        try{
            const result = eval(input);
            setOutput(result);
        }catch(error){
            setOutput('Error');
        }
    };

    return(
        <div className={styles.calculator}>
            <input type="text" className={styles.inputField} value={input} placeholder="Enter expression" readOnly/>
            <div className={styles.output}>{output}</div>
            <div className={styles.buttons}>
                {[7,8,9,'+',4,5,6,'-',1,2,3,'*','C',0,'=','/'].map((item)=>(
                    <button key={item} className={styles.button}
                    onClick={()=>{
                        if(item === '='){handleCalculate();}
                        else if(item === 'C'){handleClear();}
                        else{handleClick(item);}
                    }}
                    >{item}</button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;