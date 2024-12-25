import React from 'react';
import { Box, Modal, Typography } from '@mui/material';

type Position = {
  middle: number;
  right: number;
}

type GuideTwoProps = {
  position: Position;
}

export function GuideTwo({ position }: GuideTwoProps) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: position.middle,
    left: position.right + 20,
    transform: 'translateY(-50%)',
    width: 200,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,

    // Add a triangle pointing to the selector element
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '-19px',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      borderRight: '10px solid #fff', // Change from borderLeft to borderRight
      borderLeft: '10px solid transparent', // Change from borderRight to borderLeft
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent'
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" component="p" fontSize="small">
          Collapse the panel and explore the model pipeline
        </Typography>
      </Box>
    </Modal>
  );
}