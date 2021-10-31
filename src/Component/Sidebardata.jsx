import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ReportIcon from '@material-ui/icons/Report';
import GpsNotFixedIcon from '@material-ui/icons/GpsNotFixed';


export const Siderbardata = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon/>,
        classname:'nav-text'
    },
    {
        title: 'Report',
        path: '/report',
        icon: <ReportIcon/>,
        classname:'nav-text'
    },
    {
        title: 'product',
        path: '/product',
        icon: <GpsNotFixedIcon />,
        classname:'nav-text'
    }
]