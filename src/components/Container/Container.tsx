"use client"
import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import AlertCollection from '../AlertCollection'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

interface Props extends React.HTMLAttributes<HTMLDivElement> { children: ReactNode }

const Container = (props: Props) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins','sans-serif',].join(','),
    },
  });

  return (
    <div {...props}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <AlertCollection />
          {props.children}
        </ThemeProvider>

      </RecoilRoot>
    </div>
  )
}
export default Container