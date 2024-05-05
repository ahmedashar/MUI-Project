import { Box, FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const tabData = [
    { icon: HomeIcon, title: "Home" },
    { icon: DescriptionIcon, title: "Pages" },
    { icon: PeopleAltIcon, title: "Groups" },
    { icon: StorefrontIcon, title: "Marketplace" },
    { icon: PersonIcon, title: "Friends" },
    { icon: SettingsIcon, title: "Settings" },
    { icon: AccountBoxIcon, title: "Profile" },
]
const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const handleSwitch = (e)=>{
        setOpen(e.target.checked)       
        console.log(open)
    }
    return (
        <>
            <Box bgcolor={'white'} flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
                <List>
                    {tabData.map((item, key) => (
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ModeNightIcon />
                            </ListItemIcon>
                            {/* <ListItemText primary="Pages" /> */}
                            <Switch checked={open} onClick={handleSwitch} />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Box>
        </>
    )
}

export default Sidebar
