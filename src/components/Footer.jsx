import { Box, Typography } from '@mui/material';

export const Footer = () => {
    return (
         <Box
              component={'footer'}
              sx={{
                py: 3,
                px: 2,
                backgroundColor: 'darkgrey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  ml: '7px',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Filmoteka
              </Typography>
            </Box> 
            )
}