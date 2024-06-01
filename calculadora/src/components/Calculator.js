import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
    // Estado para el display de la calculadora
    const [displayValue, setDisplayValue] = useState('0');
    // Estado para almacenar el valor anterior y la operación seleccionada
    const [storedValue, setStoredValue] = useState(null);
    const [operation, setOperation] = useState(null);

    // Manejo de clic en botones numéricos
    const handleNumberClick = (number) => {
        setDisplayValue((prevValue) => prevValue === '0' ? number : prevValue + number);
    };

    // Manejo de operaciones
    const handleOperation = (op) => {
        setStoredValue(displayValue);
        setDisplayValue('0');
        setOperation(op);
    };

    // Ejecutar el cálculo
    const calculateResult = () => {
        if (!storedValue || !operation) return;

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
                if (current !== 0) {
                    result = stored / current;
                } else {
                    alert("Division by zero error");
                    return;
                }
                break;
            default:
                return;
        }

        setDisplayValue(String(result));
        setOperation(null);
        setStoredValue(null);
    };

    // Resetear o limpiar el display
    const clearDisplay = () => {
        setDisplayValue('0');
        setStoredValue(null);
        setOperation(null);
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.display}>{displayValue}</div>
            <div className={styles.keyboard}>
                {/* Botones para los dígitos */}
                {[...Array(10).keys()].reverse().map((number) =>
                    <button key={number} onClick={() => handleNumberClick(number.toString())}>
                        {number}
                    </button>
                )}
                {/* Botones para operaciones */}
                <button onClick={() => handleOperation('+')}>+</button>
                <button onClick={() => handleOperation('-')}>-</button>
                <button onClick={() => handleOperation('*')}>*</button>
                <button onClick={() => handleOperation('/')}>/</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={clearDisplay}>C</button>
            </div>
        </div>
    );
};

export default Calculator;
