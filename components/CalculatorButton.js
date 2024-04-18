// components/CalculatorButton.js
import React from 'react';
import styles from './CalculatorButton.module.css';

const CalculatorButton = ({ value, onClick }) => {
    return (
        <button className={styles.button} onClick={() => onClick(value)}>
            {value}
        </button>
    );
};

export default CalculatorButton;
