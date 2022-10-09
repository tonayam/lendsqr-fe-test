import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
import { usersData, tableHeader } from "../data";
import { FaChevronDown, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import filterBtn from "../images/filter-results-button.svg";
import options from "../images/options.svg";
import Filter from "./Filter";
import UserOptions from "./UserOptions";
import moment from "moment";
import { Link } from "react-router-dom";

const DashBody = () => {
  const { showNav, showDash, users, showFilter, setShowFilter, loading } =
    useGlobalContext();

  const handleClick = (e) => {
    const clicked = e.target.nextElementSibling;
    clicked.classList.toggle(`show`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Lendsqr - Dashboard`;
  }, []);

  if (loading) {
    return (
      <section className='dashbody center'>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className={`${showDash || showNav ? `d-none` : ``} dashbody`}>
      <h2 className='title'>Users</h2>

      <div className='users-data'>
        {usersData.map((card, index) => {
          const { title, icon, num } = card;
          return (
            <div className='card' key={index}>
              <img src={icon} alt='users icon' />
              <p>{title}</p>
              <h5>{num.toLocaleString(`en-US`)}</h5>
            </div>
          );
        })}
      </div>

      <div className='table-container'>
        <div className='table'>
          <div className='table-header'>
            <ul>
              {tableHeader.map((title, index) => {
                return (
                  <li key={index}>
                    {title}
                    <span>
                      <img
                        src={filterBtn}
                        alt='filter button'
                        onClick={() => setShowFilter(!showFilter)}
                      />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          {users.map((user) => {
            const { id, phoneNumber, orgName, userName, createdAt } = user;
            return (
              <Link to={`/user-details/${id}`} key={id}>
                <div className='table-user' id={id}>
                  <p className='organisation'>{orgName}</p>
                  <p>{userName}</p>
                  <p className='number'>{phoneNumber}</p>
                  <p className='date'>
                    {moment(createdAt).format("MMM Do YYYY, h:mm:ss a")}
                  </p>
                  <div>
                    <h6 className='inactive'>Inactive</h6>
                    <img
                      src={options}
                      alt='options icon'
                      className='options-icon'
                      onClick={handleClick}
                    />
                    <UserOptions />
                  </div>
                </div>
              </Link>
            );
          })}

          <Filter />
        </div>
      </div>

      <div className='filter-pages-container'>
        <div className='filter'>
          <p>
            Showing{" "}
            <span className='no'>
              10{" "}
              <span>
                <FaChevronDown />
              </span>
            </span>{" "}
            out of 500
          </p>
        </div>
        <div className='pages'>
          <button>
            <FaChevronLeft />
          </button>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <button>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashBody;
