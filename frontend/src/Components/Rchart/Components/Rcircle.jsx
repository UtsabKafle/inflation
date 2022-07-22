import React from 'react'

const Rcircle = (prop) => {
  if(prop.data.id != 0) {
    return (
      <div className="cir-cont">
        <div className="line"></div>
      <div className={prop.data.color}>
        <div id="cir-text">{prop.data.amount}</div>
        <div className="cir-details">
          <div className="cir-date">{prop.data.date}</div>
          <div className="cir-text">{prop.data.text}</div>
        </div>
      </div>
    </div>
    )
  }
else{
  return (
    <div className="cir-cont">
    <div className={prop.data.color}>
      <div id="cir-text">{prop.data.amount}</div>
      <div className="cir-details">
        <div className="cir-date">{prop.data.date}</div>
        <div className="cir-text">{prop.data.text}</div>
      </div>
    </div>
  </div>
  )
}

  // return (
  //   <div className="cir-cont">
  //   <div className={prop.data.color}>
  //     <div id="cir-text">{prop.data.amount}</div>
  //     <div className="cir-details">
  //       <div className="cir-date">{prop.data.date}</div>
  //       <div className="cir-text">{prop.data.text}</div>
  //     </div>
  //   </div>
  // </div>
  // )
}

export default Rcircle