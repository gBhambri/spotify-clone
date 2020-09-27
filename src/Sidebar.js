import React from 'react'
import './Sidebar.css'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from './SidebarOption'
import {useDateLayerValues} from './DataLayer'


function Sidebar() {
    const [{playlists},dispatch]=useDateLayerValues()
    return (
        <div className='sidebar'>
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption title='Home' Icon={HomeIcon}></SidebarOption>
            <SidebarOption title='Search' Icon={SearchIcon}></SidebarOption>
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon}></SidebarOption>
            <br></br>
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr></hr>
            {playlists?.items?.map(playlist=>(
                <SidebarOption title={playlist.name}></SidebarOption>
            ))}
        </div>
    )
}

export default Sidebar
