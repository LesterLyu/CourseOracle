import Box from "@material-ui/core/Box";

export function LoginBackgroundWrapper({children}) {
  return <Box sx={{
    height: 'calc(100vh - 64px)',
    background: 'linear-gradient(to bottom, #a285d4 0%,#6f90b3 100%)'
  }}>
    {children}
  </Box>
}

export function HomeBackgroundWrapper({children}) {
  return <Box sx={{
    height: 'calc(100vh - 64px)',
    backgroundImage: `url("${process.env.PUBLIC_URL}/homepage_bg-min.jpg")`,
    backgroundSize: '1920px 1280px'
  }}>
    {children}
  </Box>
}
