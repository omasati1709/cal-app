// components/Calculator.js
import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');

    const handleButtonClick = (buttonValue) => {
        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else {
            setDisplayValue(displayValue + buttonValue);
        }
    };

    const calculateResult = () => {
        try {
            const result = eval(displayValue);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    const clearDisplay = () => {
        setDisplayValue('');
    };

    return (
        <div className={styles.calculator}>
            <CalculatorDisplay value={displayValue} />
            <div className={styles.buttons}>
                <CalculatorButton value="7" onClick={handleButtonClick} />
                <CalculatorButton value="8" onClick={handleButtonClick} />
                <CalculatorButton value="9" onClick={handleButtonClick} />
                <CalculatorButton value="/" onClick={handleButtonClick} />
                <CalculatorButton value="4" onClick={handleButtonClick} />
                <CalculatorButton value="5" onClick={handleButtonClick} />
                <CalculatorButton value="6" onClick={handleButtonClick} />
                <CalculatorButton value="*" onClick={handleButtonClick} />
                <CalculatorButton value="1" onClick={handleButtonClick} />
                <CalculatorButton value="2" onClick={handleButtonClick} />
                <CalculatorButton value="3" onClick={handleButtonClick} />
                <CalculatorButton value="-" onClick={handleButtonClick} />
                <CalculatorButton value="0" onClick={handleButtonClick} />
                <CalculatorButton value="." onClick={handleButtonClick} />
                <CalculatorButton value="=" onClick={handleButtonClick} />
                <CalculatorButton value="+" onClick={handleButtonClick} />
                <CalculatorButton value="C" onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default Calculator;
