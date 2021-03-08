import React, { useRef } from "react";
import styles from "styles/components/Header.module.scss";
import { ClientOnlyPortal } from "components";
import RadioButton from "components/RadioButton/RadioButton";
import ButtonGroup from "components/ButtonGroup/ButtonGroup";
import { Login, Logout, Heart, Filter, Menu } from "components/Icons";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";

export const Header = () => {
  const router = useRouter();
  const genders = ["Female", "Male"];
  const ages = ["Young", "Adult", "Senior"];
  return (
    <header className={styles.header}>
      <button
        className={styles.logo}
        onClick={() => router.push(localStorage.getItem("mainWithParams"))}
      >
        Find Your Bestie!
      </button>
      <div className={styles.assets}>
        <div className={styles.filter}>
          <button
            className={styles.filterButton}
            // onClick={() =>
            //   document
            //     .getElementById("filter-content")
            //     .classList.toggle(styles.visible)
            // }
          >
            <Filter />
            <span>Filters</span>
          </button>
          <div id="filter-content" className={styles.filterContent}>
            <p>Show only:</p>
            <ul>
              <li className={styles.radioButtons}>
                {genders.map((gender, i) => {
                  return (
                    <RadioButton
                      key={i}
                      name="gender"
                      text={gender}
                      defaultChecked={router.query.gender === gender}
                      onChange={(e) =>
                        e.target.checked
                          ? router.replace({
                              query: {
                                ...router.query,
                                gender: gender,
                              },
                            })
                          : ""
                      }
                    />
                  );
                })}
              </li>
              <li className={styles.buttonGroup}>
                {ages.map((age, i) => {
                  return (
                    <ButtonGroup
                      key={i}
                      name="age"
                      text={age}
                      defaultChecked={router.query.age === age}
                      onChange={(e) =>
                        e.target.checked
                          ? router.replace({
                              query: {
                                ...router.query,
                                age: age,
                              },
                            })
                          : ""
                      }
                    />
                  );
                })}
              </li>
              <li className={styles.clear}>
                <button
                  onClick={() => {
                    document
                      .querySelectorAll('[type="radio"]')
                      .forEach((el: HTMLInputElement) => (el.checked = false));
                    router.replace({
                      query: {
                        city: router.query.city,
                        country: router.query.country,
                        type: router.query.type,
                      },
                    });
                  }}
                >
                  CLEAR
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            className={styles.menu}
            onClick={() =>
              document.getElementById("nav").classList.toggle(styles.active)
            }
          >
            <Menu />
          </button>
        </div>
      </div>
      <SideDrawer />
    </header>
  );
};

export const SideDrawer = () => {
  const navRef = useRef();
  const [session, loading] = useSession();
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
          {!session && (
            <li>
              <button onClick={() => signIn()}>
                <Login />
                {loading ? "Loading..." : <span>Sign in</span>}
              </button>
            </li>
          )}
          {session && (
            <li>
              <button onClick={() => signOut()}>
                <Logout />
                <span>Logout</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </ClientOnlyPortal>
  );
};
