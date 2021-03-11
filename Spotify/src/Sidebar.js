import './Sidebar.css'
import React from 'react'
import SidebarOption  from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer'

function Sidebar() {


    const [{ playlists },] = useDataLayerValue({})
  

    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <img src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='spotify logo'/>
            </div>

            <SidebarOption title='Home' Icon={HomeIcon}/>
            <SidebarOption title='Searh' Icon={SearchIcon}/>
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon}/>
            
            <br />
            <strong className='sidebar__title'>Playlists</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
