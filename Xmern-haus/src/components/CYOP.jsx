//importing libraries and packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Spinner,
  ButtonGroup,
} from "reactstrap";
import { BASE_URL } from "../global";

export default function CYOP(props) {
  const [toppings, setToppings] = useState(null);
  const [cheeses, setCheeses] = useState(null);
  const [sizeSelected, setSize] = useState(null); //size
  const [toppingsSelected, setToppingsSelected] = useState([]);
  const [cheeseSelected, setCheeseSelected] = useState([]);

  const onCheckboxBtnClick = (selected, type) => {
    if (type === "cheese") {
      const index = cheeseSelected.indexOf(selected);
      if (index < 0) {
        cheeseSelected.push(selected);
      } else {
        cheeseSelected.splice(index, 1);
      }
      console.log(...cheeseSelected);
      setCheeseSelected([...cheeseSelected]);
    } else if (type === "topping") {
      const index = toppingsSelected.indexOf(selected);
      if (index < 0) {
        toppingsSelected.push(selected);
      } else {
        toppingsSelected.splice(index, 1);
      }
      console.log(...toppingsSelected);
      setToppingsSelected([...toppingsSelected]);
    }
  }

  const addToCart = () => {
    console.log(props.userData)
    // props.setUserData()
    
  }

  useEffect(() => {
    const getToppingsCheeses = async () => {
      let cheeses = (await axios.get(`${BASE_URL}cheeses`)).data
      let toppings = (await axios.get(`${BASE_URL}toppings`)).data
    //   let users = (await axios.get(`${BASE_URL}users`)).data
      console.log(cheeses);
      console.log(toppings);
      setToppings(toppings);
      setCheeses(cheeses);
      
    };
    getToppingsCheeses();
  }, []);

  return cheeses && toppings ? (
    <div className="CYOP">
      <div className="leftside">
        <img
          className="custompizza"
          src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/299962886_593274218855236_4679641061735007336_n.png?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jPNkk4EqVlMAX8bGw3h&_nc_ht=scontent-ord5-2.xx&oh=00_AfDEfd7lG-O7-WS70Y08GWCvQyHMldem0KzmFT3LVNhhkA&oe=655040B8"
          alt=""
        />
        <h5>Total Price: $29</h5>
      </div>
      <div className="rightside">
        <h5>Sizes</h5>
        
          <Button
            color="primary"
            outline
            onClick={() => setSize(1)}
            active={sizeSelected === 1}
          >
            Small
          </Button>
          <Button
            color="primary"
            outline
            onClick={() => setSize(2)}
            active={sizeSelected === 2}
          >
            Large
          </Button>
        
        {/* <p>Selected: {rSelected}</p> */}

        {/* //cheeses */}
        <h5>Cheeses</h5>

        {cheeses ? (
            <div className="buttonGroup">
            {cheeses.map((cheese, i) => (
              <Button className="buttonList"         
                key={cheese._id}
                color="primary"
                outline
                onClick={() => onCheckboxBtnClick(cheese.name, "cheese")}
                active={cheeseSelected.includes(cheese.name)}
              >
                {cheese.name}
              </Button>
            ))}
          </div>
        ) : (
          <Spinner className="m-5" color="primary">
            Loading Cheeses...
          </Spinner>
        )}

        <h5>Toppings</h5>

        {toppings ? (
          <div className="buttonGroup">
            {toppings.map((topping, i) => (
              <Button className="buttonList"
                key={topping._id}
                color="primary"
                outline
                onClick={() => onCheckboxBtnClick(topping.name, "topping")}
                active={toppingsSelected.includes(topping.name)}
              >
                {topping.name}
              </Button>
            ))}
          </div>
        ) : (
          <Spinner className="m-5" color="primary">
            Loading Toppings...
          </Spinner>
        )}
        <h5></h5>
        <Button 
            block
            onClick={() => addToCart()} >Add to Cart</Button>
      </div>
    </div>
  ) : (
    <Spinner className="m-5" color="primary">
      Loading...
    </Spinner>
  );
}
