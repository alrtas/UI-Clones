import './Player.css'
import React    from 'react'
import Sidebar  from './Sidebar'
import Body     from './Body'
import Footer   from './Footer'


function Player({ spotify }) {
    return (
        <div className='player'>
            <div className="player__body">
                <Sidebar />
                <Body />  
            </div> 
            <div className="player__footer"> 
                <Footer spotify={spotify}/>
            </div>  

        </div>
    )
}

export default Player
