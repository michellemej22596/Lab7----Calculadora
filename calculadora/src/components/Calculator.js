import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [storedValue, setStoredValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const updateDisplay = (value) => {
        if (value === 'ERROR') {
            setDisplayValue(value);
        } else {
            const newValue = value.toString();
            if (newValue.length > 9 || parseFloat(newValue) > 999999999 || parseFloat(newValue) < 0) {
                setDisplayValue('ERROR');
            } else {
                setDisplayValue(newValue);
            }
        }
    };

    const handleNumberClick = (number) => {
        if (waitingForOperand) {
            setDisplayValue(number);
            setWaitingForOperand(false);
        } else {
            const newDisplayValue = displayValue === '0' ? number : displayValue + number;
            setDisplayValue(newDisplayValue.slice(0, 9));
        }
    };

    const handleDecimal = () => {
        if (waitingForOperand) {
            setDisplayValue('0.');
            setWaitingForOperand(false);
        } else if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const handleOperation = (op) => {
        if (operation && storedValue && !waitingForOperand) {
            calculateResult(op);
        } else {
            setStoredValue(displayValue);
            setOperation(op);
            setWaitingForOperand(true);
        }
    };

    const calculateResult = (nextOperation = null) => {
        const current = parseFloat(displayValue);
        const stored = parseFloat(storedValue);
        let result = 0;

        switch (operation) {
            case '+':
                result = stored + current;
                break;
            case '-':
                result = stored - current;
                break;
            case '*':
                result = stored * current;
                break;
            case '/':
                result = current !== 0 ? stored / current : 'ERROR';
                break;
            default:
                return;
        }

        updateDisplay(result);
        setStoredValue(result.toString());
        setOperation(nextOperation);
        setWaitingForOperand(true);
    };

    const clearDisplay = () => {
        setDisplayValue('0');
        setStoredValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const toggleSign = () => {
        updateDisplay(parseFloat(displayValue) * -1);
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.display} data-testid="display">{displayValue}</div>
            <div className={styles.keyboard}>
                {[...Array(10).keys()].reverse().map((number) =>
                    <button key={number} onClick={() => handleNumberClick(number.toString())}>{number}</button>
                )}
                <button onClick={handleDecimal}>.</button>
                <button onClick={() => handleOperation('+')}>+</button>
                <button onClick={() => handleOperation('-')}>-</button>
                <button onClick={() => handleOperation('*')}>*</button>
                <button onClick={() => handleOperation('/')}>/</button>
                <button onClick={() => calculateResult()}>=</button>
                <button onClick={clearDisplay}>C</button>
                <button onClick={toggleSign}>+/-</button>
            </div>
        </div>
    );
};

export default Calculator;
