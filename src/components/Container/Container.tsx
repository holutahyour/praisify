"use client"
import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import AlertCollection from '../AlertCollection'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import { StoreContext, store } from '@/data/stores/store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> { children: ReactNode }

const Container = (props: Props) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'sans-serif',].join(','),
    },
  });

  return (
    <div {...props}>
      <StoreContext.Provider value={store}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <AlertCollection />
            <ToastContainer />
            {props.children}
          </ThemeProvider>
        </RecoilRoot>
      </StoreContext.Provider>
    </div>
  )
}
export default Container