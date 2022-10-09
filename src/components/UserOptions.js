import React from "react";
import viewUser from "../images/view-user.svg";
import deleteUser from "../images/delete-user.svg";
import activateUser from "../images/activate-user.svg";
const UserOptions = () => {
  return (
    <article className='options'>
      <ul>
        <li>
          <span>
            <img src={viewUser} alt='view user details' />
          </span>
          View Details
        </li>
        <li>
          <span>
            <img src={deleteUser} alt='blacklist user account' />
          </span>
          Blacklist User
        </li>
        <li>
          <span>
            <img src={activateUser} alt='activate user account' />
          </span>
          Activate User
        </li>
      </ul>
    </article>
  );
};

export default UserOptions;
