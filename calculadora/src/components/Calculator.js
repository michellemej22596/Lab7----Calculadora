import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
    // Estado para el display de la calculadora
    const [displayValue, setDisplayValue] = useState('0');

    // Manejo de clic en botones numéricos
    const handleNumberClick = (number) => {
        setDisplayValue((prevValue) => prevValue === '0' ? number : prevValue + number);
    };

    // Manejo de operaciones
    const handleOperation = (operation) => {
        // Lógica para manejar operaciones como suma, resta, etc.
    };

    // Resetear o limpiar el display
    const clearDisplay = () => {
        setDisplayValue('0');
    };

    // Ejecutar el cálculo
    const calculateResult = () => {
        // Lógica para calcular el resultado basado en la entrada del usuario
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.display}>{displayValue}</div>
            <div className={styles.keyboard}>
                {/* Botones para los dígitos */}
                {[...Array(10).keys()].map((number) =>
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
