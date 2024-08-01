import React from "react";
import '../Styles/Counter.css';

function Counter({ clicknum }) {
	return (
    <div 
      className='counter'>
      {clicknum}
    </div>);
}
export default Counter;
