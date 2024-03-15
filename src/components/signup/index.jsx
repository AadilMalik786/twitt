import React, { useRef, useState } from "react";
import "./style.scss";
import { PiCaretDownBold } from "react-icons/pi";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { Outlet, useNavigate } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";
// import ConfirmSignUp from "../confirmsignup/ConfirmSignUp";
// import Customize from "../customize/Customize";
import { useDispatch } from "react-redux";
import {
  updateDataName,
  updateDataEmail,
  updateDataPhone,
  updateDataMonth,
  updateDataDay,
  updateDataYear,
  ChangeInputField,
} from "../../action/actions";

const SignUp = () => {
  const [name, setName] = useState("");
  const [days, setDay] = useState("");
  const [years, setYears] = useState("");
  const [toggle, setToggle] = useState(false);
  const [togglesecond, setToggleSecond] = useState(false);
  const [togglethird, setToggleThird] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedday, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [changeInput, setChangeInput] = useState(false);
  const [render, setRender] = useState(false);
  const [lableHighlight, setLableHighLight] = useState(false);
  const [slide, setSlide] = useState(false);
  const [hideNum, setHideNum] = useState(false);
  const [phoneSlide, setPhoneSlide] = useState(false);
  const [phoneborder, setPhoneBorder] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [phoneRedOutline, setPhoneRedOutline] = useState(false);
  const [monthHighlight, setMonthHighlight] = useState(false);
  const [dayHighlight, setDayHighlight] = useState(false);
  const [yearHighlight, setYearHighlight] = useState(false);
  const [dayHovered, setDayHovered] = useState("");
  const [monthHovered, setMonthHovered] = useState("");
  const [yearHovered, setYearHovered] = useState("");
  const [inputValueOne, setInputValueOne] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    phone: "",
  });
  // console.log(user.phone="");

  let names, values, selectionmonth;
  const getUserData = (e) => {
    names = e.target.name;
    values = e.target.value;
    // console.log(values);
    // setUser({ ...user, [names]: values });
    const stringNumber = e.target.value;
    const phoneRegex = /^\+?[0-9]{12}$/;
    if (phoneRegex.test(stringNumber)) {
      const number = parseInt(stringNumber);
      setPhoneError(false);
      setPhoneBorder(true);
      setPhoneRedOutline(false);
      setEmailError(false);
    } else {
      setEmailError(false);
      setPhoneBorder(false);
      setPhoneRedOutline(true);
      setPhoneError(true);
    }
    if (e.target.value.length == 0) {
      setPhoneError(false);
      setPhoneRedOutline(false);
      setPhoneBorder(true);
    }
    dispatch(updateDataPhone(values));
    // if(changeInput===true){
    //   values="";
    // }
    setInputValueOne(e.target.value);
  };

  const getUserDataEmail = (e) => {
    if (e.target.value.length == 0) {
      setPhoneError(false);
      setPhoneRedOutline(false);
      setPhoneBorder(true);
    }
    const inputEmail = e.target.value;
    setInputValueTwo(inputEmail);

    // Validate email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(inputEmail)) {
      setPhoneError(false);
      setEmailError(false);
    } else {
      setPhoneError(false);
      setEmailError(true);
    }
    dispatch(updateDataEmail(e.target.value));
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const month = [
    {
      abbreviation: "Jan",
      name: "January",
    },
    {
      abbreviation: "Feb",
      name: "February",
    },
    {
      abbreviation: "Mar",
      name: "March",
    },
    {
      abbreviation: "Apr",
      name: "April",
    },
    {
      abbreviation: "May",
      name: "May",
    },
    {
      abbreviation: "Jun",
      name: "June",
    },
    {
      abbreviation: "Jul",
      name: "July",
    },
    {
      abbreviation: "Aug",
      name: "August",
    },
    {
      abbreviation: "Sep",
      name: "September",
    },
    {
      abbreviation: "Oct",
      name: "October",
    },
    {
      abbreviation: "Nov",
      name: "November",
    },
    {
      abbreviation: "Dec",
      name: "December",
    },
  ];
  const day = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
    { value: 18 },
    { value: 19 },
    { value: 20 },
    { value: 21 },
    { value: 22 },
    { value: 23 },
    { value: 24 },
    { value: 25 },
    { value: 26 },
    { value: 27 },
    { value: 28 },
    { value: 29 },
    { value: 30 },
    { value: 31 },
  ];
  const year = [
    { value: 1903, label: "1903" },

    { value: 1904, label: "1904" },

    { value: 1905, label: "1905" },

    { value: 1906, label: "1906" },

    { value: 1907, label: "1907" },

    { value: 1908, label: "1908" },

    { value: 1909, label: "1909" },

    { value: 1910, label: "1910" },

    { value: 1911, label: "1911" },

    { value: 1912, label: "1912" },

    { value: 1913, label: "1913" },

    { value: 1914, label: "1914" },

    { value: 1915, label: "1915" },

    { value: 1916, label: "1916" },

    { value: 1917, label: "1917" },

    { value: 1918, label: "​1918" },
    { value: 1919, label: "1919" },

    { value: 1920, label: "1920" },

    { value: 1921, label: "1921" },

    { value: 1922, label: "1922" },

    { value: 1923, label: "1923" },

    { value: 1924, label: "1924" },

    { value: 1925, label: "1925" },

    { value: 1926, label: "1926" },

    { value: 1927, label: "1927" },

    { value: 1928, label: "1928" },

    { value: 1929, label: "1929" },

    { value: 1930, label: "1930" },

    { value: 1931, label: "1931" },

    { value: 1932, label: "1932" },

    { value: 1933, label: "1933" },

    { value: 1934, label: "1934" },

    { value: 1935, label: "1935" },

    { value: 1936, label: "1936" },

    { value: 1937, label: "1937" },

    { value: 1938, label: "1938" },

    { value: 1939, label: "1939" },

    { value: 1940, label: "1940" },

    { value: 1941, label: "1941" },

    { value: 1942, label: "1942" },

    { value: 1943, label: "1943" },

    { value: 1944, label: "1944" },

    { value: 1945, label: "1945" },

    { value: 1946, label: "1946" },

    { value: 1947, label: "1947" },

    { value: 1948, label: "1948" },

    { value: 1949, label: "1949" },

    { value: 1950, label: "1950" },

    { value: 1951, label: "1951" },

    { value: 1952, label: "1952" },

    { value: 1953, label: "1953" },

    { value: 1954, label: "1954" },

    { value: 1955, label: "1955" },

    { value: 1956, label: "1956" },

    { value: 1957, label: "1957" },

    { value: 1958, label: "1958" },

    { value: 1959, label: "1959" },

    { value: 1960, label: "1960" },

    { value: 1961, label: "1961" },

    { value: 1962, label: "1962" },

    { value: 1963, label: "1963" },

    { value: 1964, label: "1964" },

    { value: 1965, label: "1965" },

    { value: 1966, label: "1966" },

    { value: 1967, label: "1967" },

    { value: 1968, label: "1968" },

    { value: 1969, label: "1969" },

    { value: 1970, label: "1970" },

    { value: 1971, label: "1971" },

    { value: 1972, label: "1972" },

    { value: 1973, label: "1973" },
    { value: 1974, label: "1974" },
    { value: 1975, label: "1975" },

    { value: 1976, label: "1976" },

    { value: 1977, label: "1977" },

    { value: 1978, label: "1978" },

    { value: 1979, label: "1979" },

    { value: 1980, label: "1980" },

    { value: 1981, label: "1981" },

    { value: 1982, label: "1982" },

    { value: 1983, label: "1983" },

    { value: 1984, label: "1984" },

    { value: 1985, label: "1985" },

    { value: 1986, label: "1986" },

    { value: 1987, label: "1987" },

    { value: 1988, label: "1988" },

    { value: 1989, label: "1989" },

    { value: 1990, label: "1990" },

    { value: 1991, label: "1991" },
    { value: 1992, label: "1992" },
    { value: 1993, label: "1993" },

    { value: 1994, label: "1994" },

    { value: 1995, label: "1995" },

    { value: 1996, label: "1996" },

    { value: 1997, label: "1997" },

    { value: 1998, label: "1998" },

    { value: 1999, label: "1999" },

    { value: 2000, label: "2000" },

    { value: 2001, label: "2001" },

    { value: 2002, label: "2002" },

    { value: 2003, label: "2003" },
    { value: 2004, label: "2004" },
    { value: 2005, label: "2005" },

    { value: 2006, label: "2006" },

    { value: 2007, label: "2007" },
    { value: 2008, label: "2008" },

    { value: 2009, label: "2009" },

    { value: 2010, label: "2010" },

    { value: 2011, label: "2011" },

    { value: 2012, label: "2012" },
    { value: 2013, label: "2013" },

    { value: 2014, label: "2014" },

    { value: 2015, label: "2015" },

    { value: 2016, label: "2016" },

    { value: 2017, label: "2017" },

    { value: 2018, label: "2018" },

    { value: 2019, label: "2019" },

    { value: 2020, label: "2020" },

    { value: 2021, label: "2021" },

    { value: 2022, label: "2022" },

    { value: 2023, label: "2023" },
  ];

  const Toggle = (e) => {
    setToggle((prev) => !prev);
    setDayHighlight(false);
    setYearHighlight(false);
    setToggleSecond(false);
    setToggleThird(false);
    const selectMonth = e.target.value;
    setName(selectMonth);
  };

  const ToggleSecond = (e) => {
    setToggleSecond(!togglesecond);
    setMonthHighlight(false);
    setYearHighlight(false);
    setToggle(false);
    setToggleThird(false);
    const selectDay = e.target.value;
    setDay(selectDay);
  };

  const ToggleThird = (e) => {
    setToggleThird(!togglethird);
    setToggle(false);
    setToggleSecond(false);
    setMonthHighlight(false);
    setDayHighlight(false);
    const selectYear = e.target.value;
    setYears(selectYear);
  };

  const selectMonth = (monthName, e) => {
    setToggle(false);
    setSelectedMonth(monthName);
    setUser({ ...user, monthingname: monthName });
    dispatch(updateDataMonth(monthName));
    e.stopPropagation();
  };

  const selectDay = (dayName, e) => {
    setToggleSecond(false);
    setSelectedDay(dayName);
    setUser({ ...user, daynaming: dayName });
    dispatch(updateDataDay(dayName));
    e.stopPropagation();
  };

  const selectYear = (yearName, e) => {
    setToggleThird(false);
    setSelectedYear(yearName);
    setUser({ ...user, yearnaming: yearName });
    dispatch(updateDataYear(yearName));
    e.stopPropagation();
  };

  const PostData = async (e) => {
    e.preventDefault();
    // const { name, phone, monthingname, daynaming, yearnaming } = user;
    // if (name && phone && monthingname && daynaming && yearnaming) {
    //   const res = await fetch(
    //     "https://twitter-1b1de-default-rtdb.firebaseio.com/tweetdatabase.json",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name,
    //         phone,
    //         monthingname,
    //         daynaming,
    //         yearnaming,
    //       }),
    //     }
    //     );
    //     // if (res) {
    // setUser({
    // name: "",
    // phone: "",
    // monthingname: "",
    // daynaming: "",
    // yearnaming: "",
    // });
    // alert("data stored");
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneregex =/^\+?[0-9]{12}$/;
    if(inputValue!="" && (phoneregex.test(inputValueOne) || emailRegex.test(inputValueTwo)) && selectedMonth!="" && selectedday!="" && selectedYear!=""){

    navigate("cus");
    }

    // setSelectedMonth("");
    // setSelectedDay("");
    // setSelectedYear("");
  };

  //   } else {
  //     alert("Please fill the data");
  //   }
  // };

  /////////////////////////name input field////////////////////////////

  const handleSlide = (e) => {
    setSlide(true);
    setHideNum(true);
    setLableHighLight(true);
  };

  const handleblur = (e) => {
    setSlide(false);
    if (e.target.value.length != 0) {
      setSlide(true);
    }
    if (e.target.value.length == 0) {
      setHideNum(true);
    } else {
      setHideNum(false);
    }
    setLableHighLight(false);
    setHideNum(false);
  };

  const maxLength = 50;
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setInputValue(value);
      setError(false);
      if (value.length == 0) {
        setError(true);
      }
    }
    names = e.target.name;
    values = e.target.value;
    setUser({ ...user, [names]: values });
    dispatch(updateDataName(value));
  };

  const lableclick = () => {
    setLableHighLight(true);
  };

  ///////////////////////////phone input field/////////////////////

  const phoneborderchange = () => {
    setPhoneBorder(true);
    if (phoneRedOutline) {
      setPhoneRedOutline(true);
      setPhoneBorder(false);
    }
  };

  const phoneslide = () => {
    setPhoneSlide(true);
    setPhoneBorder(true);
  };

  const phoneblur = (e) => {
    setPhoneSlide(false);
    if (e.target.value.length != 0) {
      setPhoneSlide(true);
    }

    setPhoneBorder(false);
  };
  const Place = () => {
    setRender(!render);
    setChangeInput(!changeInput);
    setInputValueOne("");
    setInputValueTwo("");
    setEmailError(false);
    setPhoneError(false);
    setPhoneBorder(false);
    setPhoneRedOutline(false);
    setPhoneSlide(false);
    dispatch(ChangeInputField(changeInput));
  };

  const click = (e) => {
    const targetList = e.target.classList;
    if (
      !(
        targetList.contains("carot-symbol-month") ||
        targetList.contains("carot-month-child") ||
        targetList.contains("carot-symbol-day") ||
        targetList.contains("carot-day-child") ||
        targetList.contains("carot-symbol-year") ||
        targetList.contains("carot-year-child")
      )
    ) {
      setToggle(false);
      setMonthHighlight(false);
      setToggleSecond(false);
      setToggleThird(false);
      setDayHighlight(false);
      setYearHighlight(false);
    }
  };

  const clicktwo = () => {
    setToggle(false);
    setToggleSecond(false);
    setToggleThird(false);
    setMonthHighlight(false);
    setDayHighlight(false);
    setYearHighlight(false);
  };

  const MonthClick = (index) => {
    setMonthHovered(index);
  };

  const DayClick = (index) => {
    setDayHovered(index);
  };

  const YearClick = (index) => {
    setYearHovered(index);
  };
  const concatenatedValue = `${inputValueOne}@gmail.com`;

  // const sendDataToStore = () => {
  //   const dataToSend = 'Some data';
  //   dispatch(updateData(dataToSend));
  // };
  // const phoneValue=(e)=>{
  //   if(e.target.value.length!=0){
  //     setPhoneSlide(false)
  //   }
  // }
  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={clicktwo}></div>
      <div className="signup-parent-container">
        <form action="" method="POST" style={{ overflowY: "auto" }}>
          <div className="Signup_subParent-container" onClick={click}>
            <div className="top-heading-signup-block">
              <div className="x-symbol" onClick={() => navigate(-1)}>
                X
              </div>
              <div className="step-top">Step 1 of 5</div>
            </div>
            <div className="overflow-signup">
              <ContentWrapper click={() => setToggle(false)}>
                <h1 className="sub-heading">Create your account</h1>

                <label
                  className={`label-click ${lableHighlight ? "light" : ""} ${
                    error && "kl"
                  } `}
                  onClick={lableclick}
                >
                  <div className="first_name-input-container">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        className={`trans ${slide && "animation"} ${
                          error && "name-error"
                        }`}
                      >
                        Name
                      </span>

                      {hideNum && (
                        <span
                          style={{
                            marginRight: "20px",
                            height: "20px",
                            marginTop: "10px",
                          }}
                        >
                          {inputValue.length}/{maxLength}
                        </span>
                      )}
                    </div>
                    <input
                      className="first_name-input"
                      onFocus={handleSlide}
                      onBlur={handleblur}
                      type="text"
                      name="name"
                      value={inputValue}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </label>
                {error && (
                  <span className="name-error-line">what's your name</span>
                )}

                <label
                  className={`phone-lable ${phoneborder && "phone-outline"} ${
                    phoneRedOutline && "phone-red-outline"
                  }`}
                  onClick={phoneborderchange}
                >
                  <div className="second_phone-input-container">
                    <div className="phone-email-transition-container">
                      <span
                        className={`phone-email-change ${
                          phoneSlide && "phone-transition"
                        } ${phoneRedOutline && "phone-red-color-name"}`}
                      >
                        {changeInput ? "Email" : "Phone"}
                      </span>
                    </div>
                    {changeInput ? (
                      <input
                        type="email"
                        className="second_phone-input"
                        // value={user.phone}
                        value={inputValueTwo}
                        onChange={getUserDataEmail}
                        onFocus={phoneslide}
                        onBlur={phoneblur}
                        name="email"
                      />
                    ) : (
                      <input
                        className="second_phone-input"
                        type="tel"
                        // value={user.phone}
                        value={inputValueOne}
                        onFocus={phoneslide}
                        onChange={getUserData}
                        onBlur={phoneblur}
                        name="phone"
                        required
                      />
                    )}
                  </div>
                </label>
                {phoneError && (
                  <span className="phone-email-error-display">
                    Please enter the valid phone number
                  </span>
                )}
                {emailError && (
                  <span className="phone-email-error-display">
                    Please enter the valid email
                  </span>
                )}
                <div className="click-email">
                  <div className="email-change-onclick" onClick={Place}>
                    Use {render ? "Phone" : "email"} instead
                  </div>
                </div>
                <h3>Date of Birth</h3>
                <p className="DOB_terms-condition">
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </p>
                <div className="top-parent_month-day-year">
                  <div
                    className={`month-parent  ${
                      monthHighlight ? "month-highlight-onclick" : ""
                    } `}
                    onClick={() => setMonthHighlight(true)}
                  >
                    Month
                    {selectedMonth && (
                      <p className="selcted-month-text">{selectedMonth}</p>
                    )}
                    {/* <div style={{backgroundColor:"red",height:"30px"}}> */}
                    <div className="carot-symbol-month" onClick={Toggle}>
                      <div
                        className="carot-month-child"
                        style={{ height: "30px", width: "30px" }}
                      >
                        <PiCaretDownBold className="carot-month-child" />
                      </div>
                    </div>
                    {/* </div> */}
                    {toggle && (
                      <div className="dropdown-content-month">
                        {month.map((value, index) => (
                          // <div  >
                          <div
                            className={`dynamic-generated-month ${
                              monthHovered === index ? "hovering-month" : ""
                            }`}
                            key={index}
                            onClick={(e) => selectMonth(value.name, e)}
                            onMouseEnter={() => MonthClick(index)}
                          >
                            {value.name}
                            {/* </div> */}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div
                    className={`day-parent ${
                      dayHighlight ? "day-borderlight" : ""
                    }`}
                    onClick={() => setDayHighlight(true)}
                  >
                    Day
                    {selectedday && (
                      <p className="selected-day-text">{selectedday}</p>
                    )}
                    {/* <div  > */}
                    <div className="carot-symbol-day" onClick={ToggleSecond}>
                      <div
                        className="carot-day-child"
                        style={{ height: "30px", width: "30px" }}
                      >
                        <PiCaretDownBold className="carot-day-child" />
                        {/* </div> */}
                      </div>
                    </div>
                    {togglesecond && (
                      <div className="dropdown-content-day">
                        {day.map((value, index) => (
                          <div
                            className={`dynamic-generated-day ${
                              dayHovered === index ? "hovering-day" : ""
                            }`}
                            key={index}
                            onClick={(e) => selectDay(value.value, e)}
                            onMouseEnter={() => DayClick(index)}
                          >
                            {value.value}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div
                    className={`year-parent ${
                      yearHighlight ? "year-borderlight" : ""
                    }`}
                    onClick={() => setYearHighlight(true)}
                  >
                    Year
                    {selectedYear && (
                      <p className="selected-year-text">{selectedYear}</p>
                    )}
                    <div className="carot-symbol-year" onClick={ToggleThird}>
                      <div
                        className="carot-year-child"
                        style={{ height: "30px", width: "30px" }}
                      >
                        <PiCaretDownBold className="carot-year-child" />
                      </div>
                    </div>
                    {togglethird && (
                      <div className="dropdown-content-year">
                        {year.map((value, index) => (
                          <div
                            className={`dynamic-generated-year ${
                              yearHovered === index ? "hovering-year" : ""
                            }`}
                            key={index}
                            onClick={(e) => selectYear(value.value, e)}
                            onMouseEnter={() => YearClick(index)}
                          >
                            {value.value}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ContentWrapper>
            </div>
            <ContentWrapper>
              <div className="signup-next-parent-step">
                <button onClick={PostData} className="next-step-button">
                  Next
                </button>
              </div>
            </ContentWrapper>
          </div>
        </form>
      </div>
      <Outlet />
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};
export default SignUp;
