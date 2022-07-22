import React from 'react'
import './Styles/Expenses.css'
const Expenses = () => {
  return (
    <div className='cont'>
      <div id='header'>Expenses</div>
      <div className="left">
        <div id="sub-cont">
          <div className="form-cont">
            <form>
              <input type="text" name="amount" id="form-text" placeholder='amount' />
              <input type="text" name="reason" id="form-text" placeholder='reason' />
              <select id='form-text'>
                <option selected disabled>Category</option>
                <option>Home</option>
                <option value="fun">Fun</option>
                <option value="education">Education</option>
              </select>
              <button className='btn'>Add</button>
            </form>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="cir-cont">
          <div className="green">
            <div id="cir-text">+200</div>
            <div className="cir-details">
              <div className="cir-date">2020-02-04</div>
              <div className="cir-text">Some important work was to be done</div>
            </div>
          </div>
        </div>
        <div className="cir-cont">
          <div className="line"></div>
          <div className="red">
          <div id="cir-text">-300</div>
            <div className="cir-details">
              <div className="cir-date">2020-02-07</div>
              <div className="cir-text">Some useless work was to be done</div>
            </div>
          </div>
        </div>
        <div className="cir-cont">
          <div className="line"></div>
          <div className="green">
          <div id="cir-text">+200</div>
            <div className="cir-details">
              <div className="cir-date">2020-02-09</div>
              <div className="cir-text">Some crap work was to be done</div>
            </div>
          </div>
        </div>
        <div className="cir-cont">
          <div className="line"></div>
          <div className="green">
          <div id="cir-text">+2500</div>
            <div className="cir-details">
              <div className="cir-date">2020-02-11</div>
              <div className="cir-text">Some shitty work was to be done because I was busy in london</div>
            </div>
          </div>
        </div>
        <div className="cir-cont">
          <div className="line"></div>
          <div className="red">
          <div id="cir-text">-400</div>
            <div className="cir-details">
              <div className="cir-date">2020-02-04</div>
              <div className="cir-text">Some important work was to be done</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Expenses