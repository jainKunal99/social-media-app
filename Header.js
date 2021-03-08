import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="data:image/png;base64,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" alt=""/>
                <div className="header_input"> 
                    <IconButton><SearchIcon fontSize="large"  /></IconButton>
                    <input  type="text" placeholder="Search Facebook"/>
                </div>
               </div>
            <div className="header_center">
                <div className="header_option header_option--active"><HomeIcon fontSize="large"/></div>
                <div className="header_option"><FlagIcon fontSize="large"/></div>
                <div className="header_option"><SubscriptionsIcon fontSize="large"/></div>
                <div className="header_option"><StorefrontIcon fontSize="large"/></div>
                <div className="header_option"><PeopleIcon fontSize="large"/></div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar/>
                    <h4>Kunal Jain</h4>
                </div>
                <IconButton><AddIcon fontSize="large"/></IconButton>
                <IconButton><ForumIcon fontSize="large"/></IconButton>
                <IconButton><NotificationsActiveIcon fontSize="large"/></IconButton>
            </div>            
        </div>
    )
}

export default Header
