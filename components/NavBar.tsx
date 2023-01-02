import Link from "next/link";
import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles["menu-container"]}>
      <ActiveLink pag="Home" href="/" />
      <ActiveLink pag="About" href="/about" />
      <ActiveLink pag="Contact" href="/contact" />
    </nav>
  );
};
