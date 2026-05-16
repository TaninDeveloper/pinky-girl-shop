
import React, { useState, useEffect } from 'react';

const WelcomeModal = () => {

  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {

    const hasSeen = localStorage.getItem('hasSeenWelcome');
    
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000); 
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenWelcome', 'true'); 
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>خوش اومدی به پینکی گرل! 🎀</h2>
        <p style={styles.text}>برای دریافت تخفیف‌های ویژه، شمارت رو برامون بذار:</p>
        
        <input 
          type="tel" 
          placeholder="09123456789" 
          style={styles.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        
        <button onClick={handleClose} style={styles.button}>
          ثبت و ورود ✨
        </button>
        
        <button onClick={handleClose} style={styles.closeBtn}>بعداً می‌نویسم</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(255, 182, 193, 0.4)', 
    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000,
    backdropFilter: 'blur(5px)'
  },

  modal: {
    backgroundColor: '#fff', padding: '30px', borderRadius: '20px',
    textAlign: 'center', width: '320px', boxShadow: '0 10px 25px rgba(255, 105, 180, 0.3)',
    border: '2px solid #ffb6c1'
  },

  title: { color: '#ff69b4', marginBottom: '15px', fontSize: '1.4rem' },

  text: { color: '#666', fontSize: '0.9rem', marginBottom: '20px' },

  input: {
    width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ffb6c1',
    marginBottom: '15px', outline: 'none', textAlign: 'center', fontSize: '1rem'
  },

  button: {
    backgroundColor: '#ff6bad', color: '#fff', border: 'none', padding: '12px 25px',
    borderRadius: '10px', cursor: 'pointer', fontSize: '1rem', width: '100%',
    fontWeight: 'bold', transition: '0.3s'
  },

  closeBtn: {
    background: 'none', border: 'none', color: '#aaa', marginTop: '15px', 
    cursor: 'pointer', fontSize: '0.8rem', textDecoration: 'underline'
  }
};

export default WelcomeModal;