import React from 'react';
import styles from "./item.module.css";

const Item = (props) => {
  // const [count, setCount] = useState(0);
  // const spanRef = useRef();

  // const handleIncrement = useCallback(() => {
  //   setCount(count + 1)
  // });
  /* 두번재 인자를 통해 업데이트 시기 조정 */
  // useEffect(() => {
  //   console.log("mount & update")
  // }, [])

  return (
    <>
      <a href={`https://www.youtube.com/watch?v=${props.data.id}`}>
        <div className={styles.item}>
          {/* <span>{props.data.id}</span> */}
          <img src={props.data.snippet.thumbnails.high.url} />
          <span>{props.data.snippet.localized.title}</span>
        </div>
      </a>
    </>
    // <li className="habit">
    //   <span ref={spanRef} className="habit-name">Reading</span>
    //   <span className="habit-count">{count}</span>
    //   <button
    //     className="habit-button habit-increase"
    //     onClick={handleIncrement}
    //   >
    //     <i className="fas fa-plus-square"></i>
    //   </button>
    // </li>
  );
};

export default Item;