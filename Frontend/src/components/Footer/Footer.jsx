import './Footer.css';const Footer = () => {
  const year = new Date();

  return (
    <div className='footer'>
      <p>
        Copyright © {year.getFullYear()} , Crypto - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
