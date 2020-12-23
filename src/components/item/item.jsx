import React from 'react';
import styles from "./item.module.css";

const Item = (props) => {
  return (
    <>
      {console.log("item", props.id)}
      <a href={`https://www.youtube.com/watch?v=${props.id}`}>
        <div className={styles.item}>
          {/* <span>{props.data.id}</span> */}
          <img src={props.thumbnail} />
          <span>{props.title}</span>
        </div>
      </a>
    </>
  );
};

export default Item;