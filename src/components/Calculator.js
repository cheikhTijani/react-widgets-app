import React, { useState } from "react";
import './assets/bootstrap.min.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [operand, setOperand] = useState('');
    const [prevInput, setPrevInput] = useState(0);

    function display(value) {
        // setInput(input + value);
        setInput(input.concat(value));
    }

    function calculate() {
        // if (input === '' || prevInput === '' || operand === '') return;
        if (!input || !prevInput || !operand) return;
        let result;
        switch (operand) {
            case '-':
                result = +prevInput - +input;
                break;
            case '*':
                result = +prevInput * +input;
                break;
            case '/':
                result = +prevInput / +input;
                break;
            default:
                result = +prevInput + +input;
                break;
        }


        setInput(result.toFixed(2).replace(/[.,]0+$/, ""));
        setPrevInput(input);
    }

    function saveValue(operand) {
        if (operand === '-' && input === '') {
            display(operand);
            return;
        } else if (input === '') {
            return;
        }
        else {
            setPrevInput(input);
            setOperand(operand);
            setInput('');
        }
    }

    function clearAll() {
        setPrevInput(0);
        setInput('');
        setOperand('');
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <div className="col-md-5 shadow-lg p-3 bg-light rounded">
                    <h2 className="text-center">Calculator</h2>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan="3"><input className="form-control" type="text" value={input} onChange={(e) => setInput(e.target.value)} disabled /></td>
                                <td><button onClick={() => clearAll()} className="btn btn-danger w-100">C</button></td>
                            </tr>
                            <tr>
                                <td><button className="btn btn-dark w-100" onClick={() => display('1')}>1</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => display('2')}>2</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => display('3')}>3</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => saveValue('/')}>&#xF7;</button></td>
                            </tr>
                            <tr>
                                <td><button className="btn btn-dark w-100" onClick={() => display('4')}>4</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => display('5')}>5</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => display('6')}>6</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => saveValue('*')}>x</button></td>
                            </tr>
                            <tr>
                                <td><button className="btn btn-dark w-100" onClick={() => display('7')}>7</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => display('8')}>8</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => display('9')}>9</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => saveValue('+')}>+</button></td>
                            </tr>
                            <tr>
                                <td><button className="btn btn-dark w-100" onClick={() => display('.')}>.</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => display('0')}>0</button></td>
                                <td><button className="btn btn-primary w-100" onClick={() => calculate()}>=</button></td>
                                <td><button className="btn btn-dark w-100" onClick={() => saveValue('-')}>-</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Calculator;