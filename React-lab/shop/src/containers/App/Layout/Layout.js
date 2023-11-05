import React from "react";
import FlowersLogo from "../../../Icons/preview_image20220112-28400-oaummr.png";
import styles from '../../../../src/containers/App/Layout/Layout.js';

const Layout = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img style={styles.logo}  src={FlowersLogo} alt="logo" />
                </a>
                <ul className="navbar-nav mx-auto">
                    <li style={styles.navLink} className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li style={styles.navLink} className="nav-item">
                        
                        <a className="nav-link" href="#">Catalog</a>
                    </li>
                    <li style={styles.navLink}  className="nav-item">
                        <a className="nav-link" href="#">Cart</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Layout