import React from "react";
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** 
 * Final popup to congratulate the user on creating their first AI model with Noodlr
 * 
 */

export function CongratsPopup() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'fixed',
    width: 500,
    height: 170,
    top: 0,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 6,
    p: 1,
  };

  return (
    <Box sx={{ width: 500 }}>
      {/* Using Snackbar instead of Modal to void Modal on top of Modal that will cause JS stack problem */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Congratulations on creating your first AI Model! Now lets get Noodlin!"
      >
        <Box sx={style}>
          <Typography component="div" fontSize={50} fontWeight="bold" align="center" my={1}>
            🎉
          </Typography>
          <Typography component="h3" fontSize={20} fontWeight="bold" align="center" my={2}>
            Congratulations on creating your first AI model! 
          </Typography>
          <Typography component="p" fontSize="large" align="center">
            Now let's get Noodlin! 
          </Typography>
        </Box>
      </Snackbar>
    </Box>
  );
}