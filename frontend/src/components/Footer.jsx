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
                <a href="/">
                    <FaGithub className='footer-icons' size={26} />
                </a>
                <a href="/">
                    <FaLinkedinIn className='footer-icons' size={26} />
                </a>
            </div>
        </footer>
    )
}

export default Footer