import React from 'react';
import styles from "./item.module.css";

const Item = (props) => {
  const handleOnPlayVideo = (e) => {
    props.onPlayVideo(e.target.parentNode.id)
  }
  return (
    <>
      {console.log("item", props.id)}
      <div
        id={props.id}
        className={styles.item}
        onClick={handleOnPlayVideo}>
        <img src={props.thumbnail} />
        <span>{props.title}</span>
      </div>
    </>
  );
};

export default Item;