import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="top">
                <h1>Colors UI</h1>
                <p>© Colors UI by <a href='/'>Sarang Kumar</a></p>
            </div>
            <div className="bottom">
                <p>Privacy Policy</p>
                <div className="links">

                    <a href="https://github.com/SarangKumar/Color-palette">
                        <FaGithub className='footer-icons' size={19} />
                    </a>
                    <a href="https://www.linkedin.com/in/sarang-kumar-0a558b221/">
                        <FaLinkedinIn className='footer-icons' size={19} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer