import styles from "styles/components/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>© Find your bestie. All rights reserved.</small>
      <small>
        Click{" "}
        <a
          href="https://github.com/AnaGerhardt/find-your-bestie"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        to visit the GitHub repository for this project.
      </small>
    </footer>
  );
};
