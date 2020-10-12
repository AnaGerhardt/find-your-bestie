export default function Layout({ children }) {
  return (
    <>
      {children}{" "}
      <footer>
        <p className="observation">
          © 2020 Find your bestie. All rights reserved.
        </p>
        <p className="observation">
          Click{" "}
          <a
            href="https://github.com/AnaGerhardt/find-your-bestie"
            target="_blank"
          >
            here
          </a>{" "}
          to visit the GitHub repository for this project.
        </p>
      </footer>
    </>
  );
}
