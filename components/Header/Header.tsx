﻿import React, { useRef } from "react";
import styles from "styles/components/Header.module.scss";
import { ClientOnlyPortal } from "components";
import { Logout, Heart, Filter, Menu } from "components/Icons";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Find Your Bestie!</div>
      <div className={styles.assets}>
        <button className={styles.filter}>
          <Filter />
          <span>Filters</span>
        </button>
        <button
          className={styles.menu}
          onClick={() =>
            document.getElementById("nav").classList.toggle(styles.active)
          }
        >
          <Menu />
        </button>
      </div>
      <SideDrawer />
    </header>
  );
};

export const SideDrawer = () => {
  const navRef = useRef();
  return (
    <ClientOnlyPortal
      selector="#modal-root"
      wrapperRef={navRef}
      active={styles.active}
    >
      <nav id="nav" className={styles.nav} ref={navRef}>
        <button
          className={styles.navClose}
          onClick={() =>
            document.getElementById("nav").classList.toggle(styles.active)
          }
        >
          ✕
        </button>
        <ul>
          <li>
            <a href="#">
              <Heart />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Logout />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </ClientOnlyPortal>
  );
};
