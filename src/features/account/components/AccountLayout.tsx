import { Box, Stack, styled } from '@mui/material'
import React from 'react'

interface ICientAccountLayout {
  children: React.ReactNode
  sidebar?: React.ReactNode
}
const ClientAccountLayoutContainer = styled(Stack)(() => ({
  background: 'white',
  height: '100vh',
}))

function ClientAccountLayout({ children, sidebar }: ICientAccountLayout) {
  return (
    <ClientAccountLayoutContainer>
      <Box bgcolor={'#5E90F0'} height={'64px'}></Box>
      <Stack
        flexDirection={'row'}
        flex={1}
        height={'calc(100vh - 64px)'}
        justifyContent={'left'}
      >
        <Stack
          padding={'16px'}
          width={'304px'}
          overflow={'scroll'}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          height={'100%'}
        >
          {sidebar}
        </Stack>
        <Stack
          padding={'16px'}
          borderLeft={'2.5px solid #eeeeee'}
          overflow={'scroll'}
          height={'100%'}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          flex={1}
        >
          {children}
        </Stack>
      </Stack>
    </ClientAccountLayoutContainer>
  )
}

export default ClientAccountLayout
