import React from 'react';

const Footer:React.FC = () => {
  return (
    <div>
        <footer className="footer_section">
            <div className="container">
            <p>
                &copy; <span id="displayDateYear"></span> All Rights Reserved By
                <a href="https://html.design/">Free Html Templates</a>
            </p>
            </div>
        </footer>
    </div>
  )
}
export default Footer;