import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',  // Set text color to white
    backgroundColor: 'transparent',
    borderColor: 'transparent',
}));

export default function DevicesBox() {
    return (
        <Box sx={{ width: '100%',p:4,mb:4 }}>
            <Stack spacing={1}>
                <Item>
                    <Typography sx={{ color: 'white', fontWeight: '800', fontSize: '1.5rem', mt: 2 }}>
                        Take Plex everywhere
                    </Typography>
                    <Typography sx={{ color: '#B7B7B7' }}>
                        Watch free anytime, anywhere, on almost any device
                    </Typography>
                </Item>
                <Item>
                    <Grid container spacing={1} sx={{
                        justifyContent: 'center',}}>
                        <Grid item xs={12}>
                            <Grid container spacing={0} sx={{ display: 'flex', justifyContent: 'center',paddingLeft: { xs: '0%', sm: '25%' },
                        paddingRight: { xs: '10%', sm: '25%' } }}>
                                <Grid item xs={6} sm={3} sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37' }}>
                                        ROKU
                                    </Typography>
                                </Grid>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37' }}>
                                        SAMSUNG
                                    </Typography>
                                </Grid>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37' }}>
                                        Fire Tv
                                    </Typography>
                                </Grid>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37' }}>
                                        android
                                        <AndroidIcon sx={{ marginLeft: 1, fontSize: '1.5rem', color: '#3C3D37' }} />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={0} sx={{ justifyContent: 'center',paddingLeft: { xs: '0%', sm: '27%' },
                        paddingRight: { xs: '10%', sm: '25%' } }}>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37', }}>
                                        <AppleIcon sx={{ marginLeft: 1, fontSize: '1.5rem', color: '#3C3D37' }} />
                                        TV
                                    </Typography>
                                </Grid>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37', }}>
                                        <AppleIcon sx={{ marginLeft: 1, fontSize: '1.5rem', color: '#3C3D37' }} />
                                        ios
                                    </Typography>
                                </Grid>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37', }}>
                                        chromecast
                                    </Typography>
                                </Grid>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37', }}>
                                        XBOX
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={0} sx={{ justifyContent: 'center',paddingLeft: { xs: '0%', sm: '25%' },
                        paddingRight: { xs: '10%', sm: '22%' } }}>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37', }}>
                                        nvidia
                                    </Typography>
                                </Grid>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37', }}>
                                        V120
                                    </Typography>
                                </Grid>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37', }}>
                                        PS
                                    </Typography>
                                </Grid>
                                <Grid item  xs={6} sm={3}  sx={{ padding: 0 }}>
                                    <Typography sx={{ margin: 0, fontWeight: '600', fontSize: '1.5rem', color: '#3C3D37', }}>
                                        LG
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Item>
            </Stack>
        </Box>

    );
}
