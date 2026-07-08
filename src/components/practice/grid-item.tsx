import { Paper } from '@mui/material'

function Item(props: { children?: React.ReactNode; }) {
  return (
    <Paper
      sx={{
        p: 1,
        textAlign: 'center',
        color: 'text.secondary',
      }}
    >
      {props.children}
    </Paper>
  )
}

export default Item
