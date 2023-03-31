import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px)/2)',
  marginLeft: 'auto',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  overflow: 'hidden',
  height: 400,
  borderRadius: '$md',
  boxShadow: 'rgba(85, 20, 139, 0.8) 0px 22px 70px 4px',
  // boxShadow:
  //   'rgba(85, 20, 139, 0.4) -5px 5px, rgba(85, 20, 139, 0.3) -10px 10px, rgba(85, 20, 139, 0.2) -15px 15px, rgba(85, 20, 139, 0.1) -20px 20px, rgba(85, 20, 139, 0.05) -25px 25px',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
