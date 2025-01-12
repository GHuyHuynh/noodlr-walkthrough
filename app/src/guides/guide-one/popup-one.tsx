import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Highlight } from '../../components/highlight';

type PopupOneProps = {
  // The position of the selector element from the DOM
  position: {
    top: number;
    left: number;
  }
}

export function PopupOne({ position }: PopupOneProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    // Make the model appear on top of the selector element
    position: 'absolute',
    top: position.top - 15,
    left: position.left,
    transform: 'translateY(-100%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,

    // Add a triangle pointing to the selector element
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-9px',
      left: '10%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderTop: '10px solid #fff'
    }
  };

  return (
    <div>
      <Button 
        onClick={handleOpen}
        variant='contained'
        sx={{
          marginTop: 1,
          marginBottom: 2,
          marginLeft: 1,
        }}
      >
        Let's create your first AI model!
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Highlight 
            position={position}
            width={200}
            height={25}
            type='rectangle'
            translateTop={0}
            translateLeft={0}
          />
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h6" fontSize="medium">
              Titanic Survival Predictor
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} component="p" fontSize="small">
              Titanic Survival Predictor predicts the likelihood of survival based on various factors. Double click on the elements to see the details.
            </Typography>
          </Box>
        </>
      </Modal>
    </div>
  );
}