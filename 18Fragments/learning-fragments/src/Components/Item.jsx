import styles from "./item.module.css";
const Item = ({ foodItem,bought,handleBuyButton }) => {
  const handleBuyBurronClicked=(event)=>{
    console.log(event);
    console.log(`${foodItem}being bought`)
  }
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'} `}>
        <span className={`${styles["kg-span"]}`}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
