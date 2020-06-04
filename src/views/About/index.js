import React from 'react';
import { useHistory } from 'react-router-dom';
import Store from 'Store';

const About = () => {
  const history = useHistory();
  const { userInfo } = Store.useContainer();
  return (
    <div>
      About
      <br />
      <span>{userInfo.id}</span>
      <span>{userInfo.name}</span>
      <br />
      <button onClick={() => history.replace('/')}>jump</button>
    </div>
  );
};

export default About;
