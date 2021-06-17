import React from 'react';

import onlineIcon from '../../assets/images/onlineIcon.png';
import CompanyName from '../companyName';

import './style.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <p id="para">&#128073;Realtime Chat with <CompanyName/> <span role="img" aria-label="emoji">💬</span></p>
      <p id="para">&#128073;Auto Text-To-Emoji :) -> &#128578; </p>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently Chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;