import React from 'react'
import Rchart from '../Rchart/Rchart'
const Earnings = () => {
  return (
    <div className='cont'>
        <div id="header">Earnings</div>

        <div className="left">
        <div id="sub-cont">
          <div className="form-cont">
            <form>
              <input type="text" name="amount" id="form-text" placeholder='amount' />
              <input type="text" name="reason" id="form-text" placeholder='note' />
              <select id='form-text'>
                <option selected disabled>Source</option>
                <option>Job</option>
                <option value="fun">Stock market</option>
                <option value="education">Side hustle</option>
              </select>
              <button className='btn'>Add</button>
            </form>
          </div>
        </div>
      </div>
      <div className="right">
    <Rchart/>
      </div>

    </div>
  )
}

export default Earnings