// pages/index.js
import React from 'react';
import Calculator from '../components/Calculator';

const Home = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <h1 style={styles.heading}>Simple Calculator</h1>
        <Calculator />
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("/blue-pattern.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
};

export default Home;
