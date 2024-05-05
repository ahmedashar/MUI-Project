import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const SearchBar = styled("div")(({ theme }) =>
(
  {
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%'
  }
)
)
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: 'flex',
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: 'none',
  }

}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleClose=()=>{
    setOpen(false)
  }
  return (
    <>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
            SOCIAL FEED
          </Typography>
          <PublicIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <SearchBar><InputBase placeholder='Search...' /></SearchBar>
          <Icons>
            <Badge badgeContent={4} color="error">
              <EmailIcon color="white" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon color="white" />
            </Badge>

            <Avatar onClick={()=> setOpen(true)} alt="Remy Sharp" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=ais" />
          </Icons>
          <UserBox>
            <Avatar onClick={()=> setOpen(true)} alt="Remy Sharp" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=ais" />
            <Typography variant='span'>Ashar</Typography>

          </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>


      </AppBar>
    </>
  )
}

export default Navbar
