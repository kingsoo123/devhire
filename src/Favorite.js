import { useState } from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../src/helpers";
import red from "../src/assets/red.png";

const Favorites = () => {
  const slect = useSelector((state) => state.favourites);
  const [currency, setCurrency] = useState("₦");
  const [list, setList] = useState(slect);

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

                <span
                  className="heart_hold"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <img src={red} alt="white" />
                </span>
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

export default Favorites;
