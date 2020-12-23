import React from 'react';
import testUtils from 'react-dom/test-utils';
import Item from './item/item';
import styles from './list.module.css'

const List = (props) => {
  const handleOnPlayVideo = (videoId) => {
    props.onPlayVideo(videoId)
  }

  return (
    <>
      {console.log("list", props.items)}
      <div className={styles.list}>
        {props.items.map(item => {
          const id = typeof item.id === 'object' ? item.id.videoId : item.id;
          const title = item.snippet.title
          const thumbnail = item.snippet.thumbnails.high.url;

          return (
            <Item
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              onPlayVideo={handleOnPlayVideo}
            />)
        })}
      </div>
    </>
  );
};

export default List;