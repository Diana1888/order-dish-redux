
const Dish = ({dish}) => {

  return(
  <div>
    <img src={`${dish.img}.jpg`} alt="dish-img"/>
    <h2>{dish.name}</h2>
    <p>${dish.price}</p>
    <button>How many portions???</button>
    <button>Add to cart</button>
  </div>
  )
};

export default Dish;
