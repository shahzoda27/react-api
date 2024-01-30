import React from 'react'
import Sidebar from './Sidebar'
import Users from './Users';

const LayOut = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-3">
            <Sidebar/>
        </div>
        <div className="col-9">
          <Users/>
        </div>
      </div>
    </div>
  )
}

export default LayOut