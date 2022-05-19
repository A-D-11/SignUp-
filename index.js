import React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Newmod2 from '../Newmodal/Newmod2';
import Login from '../Newmodal/Login';

const  SignInOutContainer= () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const paStyled={width:500, margin:"20px auto", height:"800px"}
  const taStyled={width:100}

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    
    <Paper  style={paStyled}>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Sign-In"  />
      <Tab label="Sign-Up" />
    </Tabs>
    <TabPanel value={value} index={0}>
         <Login />
    </TabPanel>
    <TabPanel value={value} index={1}>
       <Newmod2 />
    </TabPanel>
    </Paper>
    
  );
}

export default SignInOutContainer;