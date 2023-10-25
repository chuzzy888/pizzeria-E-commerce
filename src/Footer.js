import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  textAlign: 'center',
};

const copyrightStyle = {
  fontSize: '14px',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p style={copyrightStyle}>
          &copy; {new Date().getFullYear()} DESIGNED AND DEVELOPED BY <span style={{color:"gold"}}>CHIZU</span> 
           
        </p>
        <h6> All Rights Reserved.</h6>
      </div>
    </footer>
  );
}

export default Footer;

