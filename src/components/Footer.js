import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul>
          <h2>Media Links</h2>
      </ul>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul>
          <h5>Contact me</h5>
          <p>kolbymiller.cs@gmail.com</p>
      </ul>
      <ul className="copyright">
        <li>&copy; 2021 Kolby Miller</li>
      </ul>
    </footer>
  );
}
