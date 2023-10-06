import { LogOutIcon, PeopleIcon } from '@assets/icons'
import ArrowDownIcon from '@assets/icons/ArrowDownIcon'
import ArrowUpIcon from '@assets/icons/ArrowUpIcon'
import {
  Collapse,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  styled,
} from '@mui/material'
import { Palette } from '@theme/palette'
import { useState } from 'react'

const StyledButton = styled(ListItemButton)(() => ({
  width: '100%',
  display: 'flex',
  borderRadius: '4px',
  padding: '16px',
  background: Palette.BLUE[100],
  justifyContent: 'left',
  textTransform: 'none',
  gap: '5px',
  color: 'white',
  ':hover': {
    background: Palette.BLUE[60],
  },
}))

function AccountSidebar() {
  const navList = ['Clients', 'Members', 'Adminstrator']
  const [isExpand, setExpand] = useState(false)

  return (
    <Grid
      display={'flex'}
      flexDirection={'column'}
      height={'100%'}
      justifyContent={'space-between'}
    >
      <List>
        <StyledButton onClick={() => setExpand(!isExpand)}>
          <ListItemIcon>
            <PeopleIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <Typography variant="baseSemibold" flex={1} textAlign={'left'}>
            Account
          </Typography>
          {isExpand ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </StyledButton>
        <Collapse in={isExpand} timeout="auto" unmountOnExit>
          <List>
            {navList.map((item) => (
              <ListItemButton sx={{ padding: '16px', textTransform: 'none' }}>
                <Typography variant="baseSemibold">{item}</Typography>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
      <IconButton
        sx={{
          color: 'black',
          marginLeft: '40px',
          border: 'none',
          width: 'fit-content',
        }}
      >
        <LogOutIcon /> <Typography variant="baseRegular">Logout</Typography>
      </IconButton>
    </Grid>
  )
}

export default AccountSidebar
