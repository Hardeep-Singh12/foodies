import { Link } from 'react-router-dom';
import style from './Home.module.css';
import { useState } from 'react';

function HomeMain() {

  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setIsButtonVisible(false);
  };

  return (
    <div className={style.home}>
 
      {isButtonVisible && (
        <button
          style={{ fontSize: 30, padding: 10 }}
          onClick={handleButtonClick}
        >
          <Link to="/Register">Let's start</Link>
        </button>
      )}
    </div>
  );
}

export default HomeMain;
