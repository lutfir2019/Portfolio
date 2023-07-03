import React from 'react';
import { motion } from 'framer-motion';

function PortfolioItem({ title, image, description }) {
    return (
        <motion.div
            className="portfolio-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="social-media">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/lutfir2019" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.instagram.com/lutfir__r" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </motion.div>
    );
}

export default PortfolioItem;
