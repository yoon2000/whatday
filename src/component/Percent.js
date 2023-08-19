import React from 'react'

function Percent() {
  const num = [5, 4, 3, 2, 1]
  return (
    <div className="num">
        {num.map((el,index)=>{
          return <span className={'percent'+index}>{el}분</span>
        })}
    </div>
  )
}

export default Percent