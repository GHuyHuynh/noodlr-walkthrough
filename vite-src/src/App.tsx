import { useEffect, useState } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const targetNode = document.querySelector('.css-106ak42');
    if (targetNode) {
      const rect = targetNode.getBoundingClientRect()
      setPosition({ x: rect.left, y: rect.top })
    }
  }, [])
  
  return (
    <Box
      sx={{
        position: 'absolute',
        left: position.x,
        top: position.y - 80, // Position above the node-card
        zIndex: 9999
      }}
    >
      <Paper elevation={3} sx={{ p: 2, maxWidth: 300 }}>
        <Typography variant="h6">Welcome to Dataset Node!</Typography>
        <Typography variant="body2">
          This is where you can configure your dataset settings and preview your data.
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Next
        </Button>
      </Paper>
    </Box>
  )
}

export default App
