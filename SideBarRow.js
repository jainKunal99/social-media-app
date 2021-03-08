import React from 'react'
import './SideBarRow.css'
import Avatar from '@material-ui/core/Avatar';

function SideBarRow({Icon, title, src}) {
    return (
        <div className="sideBarRow">
            {src && <Avatar src={src}  alt="U"/>}
            {Icon && <Icon/> }
            <p>{title}</p>
        </div>
    )
}

export default SideBarRow
