import React, { useRef, useState } from 'react';
import styles from './navbar.module.css'

const Navbar = (props) => {
  const searchRef = useRef();
  const formRef = useRef();
  const handleOnSearch = e => {
    e.preventDefault();
    const keyword = searchRef.current.value;
    console.log(keyword)
    props.onSearch(keyword)
  }

  return (
    <header className={styles.navbar}>
      <form
        ref={formRef}
        onSubmit={handleOnSearch}
      >
        <div className={styles.form}>
          <img className={styles.logo} src="/images/logo.png"></img>
          <span className={styles.title}>BiryangTube™</span>
          <input
            type="text"
            className={styles.input}
            placeholder="Search"
            ref={searchRef}
          />
          <button className={styles.button}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </header>
  );
};

export default Navbar;
