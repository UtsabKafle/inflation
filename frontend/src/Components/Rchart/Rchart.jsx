import React from 'react'
import Rcircle from './Components/Rcircle'
const Rchart = () => {
    var data = [
        {
            'id':0,
            'color':'green',
            'amount':'20',
            'date':'2022-03-1',
            'text':'oh crap this is bullllshit'},
            {
        'id':1,
        'color':'red',
        'amount':'300',
        'date':'2022-03-2',
        'text':'oh well this is good'},
        {
            'id':2,
            'color':'green',
            'amount':'500',
            'date':'2022-03-22',
            'text':'oh crap this is good'},
     
    ];

  return (
    <div>
        {data.map((item)=><Rcircle data={item}/>)}
        


    </div>
  )
}

export default Rchart