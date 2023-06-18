import type { AppProps } from 'next/app'
import { useMemo } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '../styles/globals.css'
import { WalletProvider } from '../components/providers/WalletProvider'
import { MetadataProvider } from '../components/providers/MetadataProvider'
import { TzombiesProvider } from '../components/providers/TzombiesProvider'
import { WertProvider } from '../components/providers/WertProvider'

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WalletProvider>
        <MetadataProvider>
          <TzombiesProvider>
            <WertProvider>
            <Component {...pageProps} />
            </WertProvider>
          </TzombiesProvider>
        </MetadataProvider>
      </WalletProvider>
    </ThemeProvider>
  )
}
