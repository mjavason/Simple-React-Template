import { useGetUltimateTeam } from '@/common/api/fpl'
import Item from '@/components/practice/grid-item'
import { Divider, Grid, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/playground')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading } = useGetUltimateTeam()

  // const Item = styled(Paper)(({ theme }) => ({
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  //   backgroundColor: theme.palette.background.paper,
  // }))

  return (
    <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
      {/* Box */}
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.paper',
          color: 'text.primary',
        }}
      >
        <p>Box Practice</p>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          MUI Button
        </Button>
      </Box>

      {/* Container */}
      <Container
        fixed
        sx={{
          bgcolor: 'background.paper',
          color: 'text.primary',
          p: 2,
        }}
      >
        <p>Container Practice</p>
        <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
          MUI Outlined Button
        </Button>
      </Container>

      <Box sx={{ p: 2, bgcolor: 'background.default', color: 'text.primary' }}>
        <p>Grid Practice</p>
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 8 }}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
              <Item>xs=6 md=8</Item>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          sx={{ mb: 2 }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <Item>{index + 1}</Item>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ flexGrow: 1, mb: 2 }}>
          <Grid container spacing={3}>
            <Grid size="grow">
              <Item>size=grow</Item>
            </Grid>
            <Grid size={6}>
              <Item>size=6</Item>
            </Grid>
            <Grid size="grow">
              <Item>size=grow</Item>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid size="auto">
            <Item>size=auto</Item>
          </Grid>
          <Grid size={6}>
            <Item>size=6</Item>
          </Grid>
          <Grid size="grow">
            <Item>size=grow</Item>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }} columns={8}>
          <Grid size={4}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=8</Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 2, bgcolor: 'background.paper', color: 'text.primary' }}>
        <p>Stack Practice</p>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>

        <Stack
          direction="row"
          sx={{ mt: 2 }}
          divider={
            <Divider orientation="vertical" flexItem>
              <p>Divide</p>
            </Divider>
          }
          spacing={2}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box sx={{ p: 2, bgcolor: 'background.paper', color: 'text.primary' }}>
        <p>Typography Practice</p>
        <Box component="h1" sx={{ my: 2 }}>
          This is h1 heading
        </Box>
        <Box component="h2" sx={{ my: 2 }}>
          This is h2 heading
        </Box>
        <Box component="h3" sx={{ my: 2 }}>
          This is h3 heading
        </Box>
        <Box component="h4" sx={{ my: 2 }}>
          This is h4 heading
        </Box>
        <Box component="p" sx={{ my: 2 }}>
          This is body1 text. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor
          consequat urna.
        </Box>
      </Box>

      {/* <Box sx={{ p: 2, bgcolor: 'background.paper', color: 'text.primary' }}>
        <p>Stack Practice</p>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box> */}

      <Box sx={{ p: 2, bgcolor: 'background.paper', color: 'text.primary' }}>
        {isLoading ? (
          <p>I am currently loading</p>
        ) : (
          <ul>
            {data?.defenders.map((player, index) => (
              <li key={index}>
                ({++index}) {player.firstName} {player.lastName} [{player.team}]
              </li>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  )
}
