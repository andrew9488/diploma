import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>Diploma Project by Pavel Homanau</h1>
            </div>
        </header>
    );
};

export default Header;