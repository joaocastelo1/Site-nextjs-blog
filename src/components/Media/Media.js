import React from 'react';

import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

import styles from './media.module.css';

export const Media = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.listUl}>
        <li className={styles.listItem}>
          <a 
            className={styles.borderContent}
            href="#"
            target="_blank"
            rel="noopener"
          >
            <FaTwitter size={20} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a 
            className={styles.borderContent}
            href="#" 
            target="_blank"
            rel="noopener"
          >
            <FaInstagram size={20} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a 
            className={styles.borderContent}
            href="https://github.com/joaocastelo1" 
            target="_blank"
            rel="noopener"
          >
            <FaLinkedinIn size={20} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a 
            className={styles.borderContent}
            href="https://github.com/joaocastelo1" 
            target="_blank"
            rel="noopener"
          >
            <FaGithub size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
}
