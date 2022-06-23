import React, { Component } from "react";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import cn from "classnames";

export default class Header extends Component {
  render() {
    return (
      <nav className={cn("green", "darken-1", styles.nav)}>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            React Movies
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
