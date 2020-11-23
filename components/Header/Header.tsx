import React from "react";
import { useRouter } from "next/router";
import styles from "styles/components/Header.module.scss";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <input type="text" className={styles.search} />
      <div className={styles.assets}>
        <div className="avatar" onClick={() => router.push("/login")} />
      </div>
    </header>
  );
};

export default Header;
