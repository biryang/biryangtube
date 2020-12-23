import React from 'react';
import Item from './item/item';
import styles from './list.module.css'

const List = (props) => {
  return (
    <>
      {console.log(props.items)}
      <div className={styles.list}>
        {props.items.map(item => (
          <Item
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </>
  );
};

export default List;