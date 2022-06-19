import React, { Component } from "react";

import { Link } from "react-router-dom";

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
          <div className={cn("container")}>
            © {new Date().getFullYear()} Copyright Text
            <Link className="grey-text text-lighten-4 right" to="/">
              Repo
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}
