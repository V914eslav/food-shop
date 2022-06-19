import React, { Component } from "react";

import styles from "./Footer.module.css";
import cn from "classnames";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className={cn("page-footer ", "green", "lighten-1", styles.footer)}
      >
        <div
          className={cn(
            "footer-copyright",
            "green",
            "lighten-1",
            styles.copyright
          )}
        >
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href="https://v914eslav.github.io/trinket-shop/"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
