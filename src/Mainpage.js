import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgOne from "../src/assets/bg1.png";
import red from "../src/assets/red.png";
import whiteimg from "../src/assets/white.png";
import personOne from "../src/assets/person1.png";
import personTwo from "../src/assets/person2.png";
import personThree from "../src/assets/person3.png";
import personFour from "../src/assets/person4.png";
import personFive from "../src/assets/person5.png";
import personSix from "../src/assets/person6.png";
import personSeven from "../src/assets/person7.png";
import personEight from "../src/assets/person8.png";
import personNine from "../src/assets/person9.png";
import personTen from "../src/assets/person10.png";
import bgTwo from "../src/assets/bg2.png";
import bgThree from "../src/assets/bg3.png";
import bgFour from "../src/assets/bg4.png";
import bgFive from "../src/assets/bg5.png";
import bgSix from "../src/assets/bg6.png";
import bgSeven from "../src/assets/bg7.png";
import bgEight from "../src/assets/bg8.png";
import bgNine from "../src/assets/bg9.png";
import bgTen from "../src/assets/bg10.png";
import bgEleven from "../src/assets/bg11.png";
import bgTwelve from "../src/assets/bg12.png";
import { formatCurrency } from "../src/helpers";
import { favouriteCard } from "../src/action";

let data = [
  {
    id: 1,
    bgColor: bgOne,
    name: "Donnienos",
    amount: "30000",
    person: personOne,
    like: false,
  },

  {
    id: 2,
    bgColor: bgTwo,
    name: "John Doe",
    amount: "50000",
    person: personTwo,
    like: false,
  },

  {
    id: 3,
    bgColor: bgThree,
    name: "Jack Bass",
    amount: "100000",
    person: personThree,
    like: false,
  },
  {
    id: 4,
    bgColor: bgFour,
    name: "Richard Grey",
    amount: "230000",
    person: personFour,
    like: false,
  },
  {
    id: 5,
    bgColor: bgFive,
    name: "Wale Davies",
    amount: "30000",
    person: personFive,
    like: false,
  },
  {
    id: 6,
    bgColor: bgSix,
    name: "John Doe",
    amount: "50000",
    person: personSix,
    like: false,
  },

  {
    id: 7,
    bgColor: bgSeven,
    name: "Jack Bass",
    amount: "100000",
    person: personSeven,
    like: false,
  },
  {
    id: 8,
    bgColor: bgEight,
    name: "Gray Richards",
    amount: "230000",
    person: personEight,
    like: false,
  },
  {
    id: 9,
    bgColor: bgNine,
    name: "Donnienos",
    amount: "30000",
    person: personNine,
    like: false,
  },

  {
    id: 10,
    bgColor: bgTen,
    name: "Gray Richards",
    amount: "50000",
    person: personTen,
    like: false,
  },

  {
    id: 11,
    bgColor: bgEleven,
    name: "Gray Richards",
    amount: "30000",
    person: personOne,
    like: false,
  },
  {
    id: 12,
    bgColor: bgTwelve,
    name: "Donnienos",
    amount: "30000",
    person: personOne,
    like: false,
  },
];

const Mainpage = () => {
  const dispatch = useDispatch();
  const slect = useSelector((state) => state.favourites);
  const [list, setList] = useState(data);
  const [currency, setCurrency] = useState("₦");
  const [favData, setFavData] = useState([]);

  console.log(slect, "from main div");

  useEffect(() => {
    let dataCopy = [...data];
    if (slect.length === 0) {
      dataCopy.forEach((elem) => {
        return (elem.like = false);
      });
    }
    setList(dataCopy);
  }, [slect]);

  const handleFav = (id) => {
    let dataCopy = [...list];
    const findId = dataCopy.findIndex((elem) => elem.id === id);
    dataCopy[findId].like = true;
    setList(dataCopy);
    const newList = list.filter((elem) => elem.id === id);
    setFavData(favData.concat([...newList]));
  };

  const handleUnFav = (id) => {
    let dataCopy = [...list];
    const findId = dataCopy.findIndex((elem) => elem.id === id);
    dataCopy[findId].like = false;
    setList(dataCopy);
  };

  const HandleCurrencyChange = (e) => {
    let dataCopy = [...list];

    dataCopy.forEach((elem) => {
      if (e.target.value === "naira") {
        return (elem.amount = Number(elem.amount) / 1);
      } else if (e.target.value === "dollar") {
        return (elem.amount = Number(elem.amount) / 458) && setCurrency("$");
      } else if (e.target.value === "euro") {
        return (elem.amount = Number(elem.amount) / 540) && setCurrency("€");
      } else if (e.target.value === "pound sterlin") {
        return (elem.amount = Number(elem.amount) / 597) && setCurrency("£");
      } else if (e.target.value === "canadian dollar") {
        return (
          (elem.amount = Number(elem.amount) / 0.65) && setCurrency("Can$")
        );
      } else if (e.target.value === "dirham") {
        return (elem.amount = Number(elem.amount) / 0.22) && setCurrency("Dhs");
      } else if (e.target.value === "australian dollar") {
        return (elem.amount = Number(elem.amount) / 0.62) && setCurrency("A$");
      } else if (e.target.value === "india rupee") {
        return (elem.amount = Number(elem.amount) / 0.01) && setCurrency("₹");
      } else if (e.target.value === "south african rand") {
        return (elem.amount = Number(elem.amount) / 17.94) && setCurrency("R");
      } else if (e.target.value === "new zealand dollar") {
        return (elem.amount = Number(elem.amount) / 1.7) && setCurrency("NZ$");
      } else if (e.target.value === "brazilian real") {
        return (elem.amount = Number(elem.amount) / 6.5) && setCurrency("R$");
      } else if (e.target.value === "ghanaian cedi") {
        return (elem.amount = Number(elem.amount) / 1) && setCurrency("GH₵");
      } else if (e.target.value === "kenyan shilling") {
        return (elem.amount = Number(elem.amount) / 1) && setCurrency("KSh");
      } else if (e.target.value === "rwandan franc") {
        return (elem.amount = Number(elem.amount) / 1) && setCurrency("RFr");
      }
    });
    setList(dataCopy);
  };

  useEffect(() => {
    dispatch(favouriteCard(favData));
  }, [dispatch, favData]);

  return (
    <div className="main_wrap">
      <h1 style={{ marginTop: "2rem", marginLeft: "2rem" }}>
        Hire Top Developers
      </h1>
      <div className="main_list_wrap">
        {list.map((card) => {
          return (
            <div key={card.id}>
              <div style={{ position: "relative", top: 0, left: 0 }}>
                <img src={card.bgColor} alt="bgOne" className="bgOne" />
                {card.like === true ? (
                  <span
                    className="heart_hold"
                    style={{ background: "#fff", cursor: "pointer" }}
                    onClick={() => handleUnFav(card.id)}
                  >
                    <img src={red} alt="red" />
                  </span>
                ) : (
                  <span
                    className="heart_hold"
                    style={{ background: "#BBBBBB", cursor: "pointer" }}
                    onClick={() => handleFav(card.id)}
                  >
                    <img src={whiteimg} alt="white" />
                  </span>
                )}
                <img src={card.person} alt="person" className="person_one" />
                <div className="name_div">
                  <span>
                    <p className="person_name">{card.name}</p>
                    <small className="person_amount">
                      {currency}
                      {formatCurrency(card.amount)}
                    </small>
                  </span>
                  <p className="person_hire">Hire</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="currency_div">
        <span>&copy; 2022 DevHire</span>
        <span>
          <select
            id="cars"
            className="curr_inp"
            onChange={HandleCurrencyChange}
          >
            <option value="naira">Naira</option>
            <option value="dollar">Dollar</option>
            <option value="euro">Euro</option>
            <option value="pound sterlin">Pound Sterling</option>
            <option value="canadian dollar">Canadian Dollar</option>
            <option value="dirham">Dirham</option>
            <option value="australian dollar">Australian Dollar</option>
            <option value="india rupee">India Rupee</option>
            <option value="south african rand">South African Rand</option>
            <option value="new zealand dollar">New Zealand Dollar</option>
            <option value="brazilian real">Brazilian Real</option>
            <option value="ghanaian cedi">Ghanaian cedi</option>
            <option value="kenyan shilling">Kenyan shilling</option>
            <option value="rwandan franc">Rwandan franc</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Mainpage;
