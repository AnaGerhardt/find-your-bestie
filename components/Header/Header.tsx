import React from "react";
import { useRouter } from "next/router";
import styles from "styles/components/Header.module.scss";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <div className={styles.assets}>
        <input type="text" className={styles.search} />
        <div className={styles.filter} />
        <div className={styles.avatar} onClick={() => router.push("/login")} />
      </div>
    </header>
  );
};

export default Header;
