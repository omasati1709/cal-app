// components/CalculatorDisplay.js
import React from 'react';
import styles from './CalculatorDisplay.module.css';

const CalculatorDisplay = ({ value }) => {
    return (
        <div className={styles.display}>
            <span>{value}</span>
        </div>
    );
};

export default CalculatorDisplay;
