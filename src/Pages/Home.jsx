import { useState } from "react"

export const Home = () =>{

    const [result, setResult] = useState('')

    // First Row ______________________________________________________
    const AC = () => {
        setResult('');
    }
    const X = (e) => {
        setResult(result.slice(0, -1))
    }
    const percent = (e) => {
        setResult(result + e.target.value)
    }
    const divide = (e) => {
        setResult(result + e.target.value)
    }

    // Second Row ______________________________________________________
    const nine = () => {
        setResult(result + 9);
    }
    const eight = () => {
        setResult(result + 8);
    }
    const seven = () => {
        setResult(result + 7);
    }
    const multi = (e) => {
        setResult(result + e.target.value)
    }

    // Third Row ______________________________________________________
    const four = () => {
        setResult(result + 4);
    }
    const five = () => {
        setResult(result + 5);
    }
    const six = () => {
        setResult(result + 6);
    }
    const minus = (e) => {
        setResult(result + e.target.value)
    }

    // Forth Row ______________________________________________________
    const one = () =>{
        setResult(result + 1)
    }
    const two = () => {
        setResult(result + 2)
    }
    const three = () => {
        setResult(result + 3)
    }
    const plus = (e) => {
        setResult(result + e.target.value)
    }

    // Fifth Row ______________________________________________________
    const dot = (e) =>{
        setResult(result + e.target.value)
    }
    const zero = () => {
        setResult(result + 0)
    }
    const equal = () => {
        setResult(eval(result));
    }

    // ___________________________Return_______________________________________ 
    return (
        <div className="container">
            <div className="calcbox">
                <div className="calcname">
                    Calculator
                    <br />
                    <br />
                <div className="resultbar">
                    <input className="finalresultbar" type="text" value={result} />
                </div>
                <div className="row1">
                    <input className="row1buttonAC" type="button" value='AC' onClick={AC} />
                    <input className="row1button" type="button" value='X' onClick={X} />
                    <input className="row1button" type="button" value='%' onClick={percent} />
                    <input className="row1button" type="button" value='/' onClick={divide} />
                </div>
                <div>
                    <input className="row2button" type="button" value='7' onClick={seven} />
                    <input className="row2button" type="button" value='8' onClick={eight} />
                    <input className="row2button" type="button" value='9' onClick={nine} />
                    <input className="row2button" type="button" value='*' onClick={multi} />
                </div>
                <div>
                    <input className="row3button" type="button" value='4' onClick={four} />
                    <input className="row3button" type="button" value='5' onClick={five} />
                    <input className="row3button" type="button" value='6' onClick={six} />
                    <input className="row3button" type="button" value='-' onClick={minus} />
                </div>
                <div>
                    <input className="row4button" type="button" value='1' onClick={one} />
                    <input className="row4button" type="button" value='2' onClick={two} />
                    <input className="row4button" type="button" value='3' onClick={three} />
                    <input className="row4button" type="button" value='+' onClick={plus} />
                </div>
                <div>
                    <input className="row5button" type="button" value='.' onClick={dot} />
                    <input className="row5button" type="button" value='0' onClick={zero} />
                    <input className="row5buttonequal" type="button" value='=' onClick={equal} />
                    
                </div>
                </div>
            </div>

        </div>
    )
}