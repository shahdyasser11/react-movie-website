import * as React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardActionArea, Button, Paper } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import TheatersIcon from '@mui/icons-material/Theaters';
import DevicesIcon from '@mui/icons-material/Devices';
import IosShareIcon from '@mui/icons-material/IosShare';
import phoneImage from '../../imgs/phone.jpg';
import paramount from '../../imgs/paramountpng.png'
import wb from '../../imgs/wb.png'
import mgm from '../../imgs/mmjpg.jpg'
import lionsGate from '../../imgs/lionsgatepng.png'
import legendary from '../../imgs/legendary.jpg'
import magnolia from '../../imgs/magnolia.jpg'
import devicesImage from '../../imgs/pms-devices-image.png'

const HomeContent = () => {
    return (
        <div>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'auto',
                    textAlign: 'left',
                    px: 4,
                    maxWidth: '1200px',
                    // margin: 'auto',
                    backgroundColor: 'rgb(255, 255, 255)',
                    padding: '20px',
                }}
            >

                {/* Grid for Four Cards */}
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {/* Card 1 */}
                    <Grid item xs={12} sm={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardContent>
                                    <PublicIcon sx={{ color: '#A35C7A', mb: 2, fontSize: '5rem' }} />
                                    <Typography gutterBottom variant="h5" component="div">
                                        Works Worldwide
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        No other free streaming service delivers more content to and from more countries worldwide
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* Card 2 */}
                    <Grid item xs={12} sm={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardContent>
                                    <TheatersIcon sx={{ color: '#8FD6E1', mb: 2, fontSize: '5rem' }} />
                                    <Typography gutterBottom variant="h5" component="div">
                                        Thousands of Titles
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Choose from movies, shows, sports and music documentaries, AMC series, Live TV and more.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* Card 3 */}
                    <Grid item xs={12} sm={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardContent>
                                    <DevicesIcon sx={{ color: '#FF2929', mb: 2, fontSize: '5rem' }} />
                                    <Typography gutterBottom variant="h5" component="div">
                                        Device-Friendly
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* Card 4 */}
                    <Grid item xs={12} sm={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardContent>
                                    <IosShareIcon sx={{ color: '#DF6D2D', mb: 2, fontSize: '5rem' }} />
                                    <Typography gutterBottom variant="h5" component="div">
                                        Share with Friends
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Share your favorite movies and shows with your friends and family, anytime, anywhere.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

            </Box>

            {/* whats new box */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 'auto',
                    textAlign: 'left',
                    px: 4,
                    maxWidth: '1200px',
                    // margin: '20px auto',
                    background: 'linear-gradient(to right, rgb(201, 12, 201), rgb(68, 43, 227))',
                    padding: '8rem',
                }}
            >
                {/* Text Section */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: 'white', fontSize: '2rem', fontWeight: '600' }}>
                        See what’s new on
                        <br />
                        Pluto TV, Tubi, &
                        <br />
                        more.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ color: 'white' }}>
                        Select your favorite streaming services to
                        <br />
                        discover more, search faster, and get curated
                        <br />
                        recommendations—all without ever leaving Plex.<br />
                        Connect with friends to see who’s watching
                        <br />
                        what, where.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#EFB036',
                            color: 'white',
                            fontSize: {
                                xs: '0.8rem', // Small screens
                                sm: '0.9rem', // Medium screens
                                md: '1rem', // Large screens
                            },
                            fontWeight: 600,
                            padding: '8px 28px',
                            borderRadius: '30px',
                            textTransform: 'none',
                            marginTop: '1rem',
                            '&:hover': {
                                backgroundColor: '#FFB300',
                            },
                        }}
                    >
                        Discover More Now
                    </Button>
                </Box>

                {/* Image Section */}
                <Box
                    component="img"
                    src={devicesImage}
                    alt="applicable devices"
                    sx={{
                        flex: 1,
                        maxWidth: '63%',
                        maxHeight: '63%',
                        objectFit: 'contain',
                        ml: { md: '2rem' },
                    }}
                />
            </Box>

            {/* new box */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'auto',
                    padding: '8rem',
                    background: 'white',
                }}
            >

                <Grid container spacing={36} alignItems="center">
                    {/* Circle with Image */}
                    <Grid item xs={12} sm={6} md={5}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '25rem',
                                height: '25rem',
                                borderRadius: '50%',
                                background: 'linear-gradient(to right, rgb(201, 12, 201), rgb(68, 43, 227))',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                overflow: 'visible',
                            }}
                        >
                            {/* Image inside the circle */}
                            <img
                                src={phoneImage}
                                alt="phoneApp"
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    borderRadius: '29px 29px 27px 25px',
                                    width: '50%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.33)',
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Text */}
                    <Grid item xs={12} sm={6} md={7}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                                It has never been easier to watch free movies online.
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Once you register for a free account with Plex, we’ll keep your place from screen to screen as long as you’re signed in. No matter what device you choose, your free movies will pick up where you left off with ease.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#EFB036',
                                    color: 'white',
                                    fontSize: {
                                        xs: '0.8rem',  // Small screens
                                        sm: '0.9rem',   // Medium screens
                                        md: '1rem',   // Large screens
                                    },
                                    fontWeight: 600,
                                    padding: '8px 28px',
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    marginTop: '1rem',
                                    '&:hover': {
                                        backgroundColor: '#FFB300',
                                    },
                                }}
                            >
                                Watch Free
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* partnership box */}
            <Box sx={{ padding: 4, backgroundColor: "#F5F5F5" }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black', fontWeight: "600" }}>
                    Proud Partners with:
                </Typography>

                <Grid container spacing={1}>
                    {/* Partners grids */}
                    <Grid item xs={12}>
                        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                            {[paramount, wb, mgm, lionsGate, legendary, magnolia].map((imageSrc, index) => (
                                <Grid key={index} item>
                                    <Paper
                                        sx={{
                                            height: 100,
                                            width: 120,
                                            backgroundColor: '#fff',
                                            boxShadow: 2,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img
                                            src={imageSrc}
                                            alt={`photo${index + 1}`}
                                            style={{
                                                width: '70%',
                                                height: '70%',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                            }}
                                        />
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

            </Box>

        </div>
    );
};

export default HomeContent;
