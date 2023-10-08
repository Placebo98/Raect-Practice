import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeInput = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          onChange={onChangeInput}
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
    </div>
  );
};
