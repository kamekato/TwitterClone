import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Header() { 
    return ( 
        <AppBar position="static"> 
          <Toolbar> 
            <Typography variant="h6"
              component="div" sx={{flexGrow: 1 }}> 
              <Link to='/profile'>MY PROFILE</Link>
            </Typography> 
            <Button color="inherit">Posts</Button> 
          </Toolbar> 
        </AppBar> 
    ); 
  }