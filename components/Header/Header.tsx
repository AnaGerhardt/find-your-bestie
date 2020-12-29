import React from "react";
import { useRouter } from "next/router";
import styles from "styles/components/Header.module.scss";

export const Header = () => {
  const router = useRouter();

  const onChange = () => {};
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Find Your Bestie!</div>
      <div className={styles.assets}>
        <input type="text" className={styles.search} onChange={onChange} />
        <div className={styles.filter} />
        <div className={styles.avatar} onClick={() => router.push("/login")} />
      </div>
    </header>
  );
};
