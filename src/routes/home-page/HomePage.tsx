import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import profileImage from '../../self-in-kayak-square.jpg';
import './HomePage.css';

function HomePage(): JSX.Element {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} justify="center">
                <Typography variant="h2" align="center">
                    <u>Nicholas Rose</u>
                </Typography>
            </Grid>
            <Grid item xs={12} justify="center">
                <img
                    className="profile-image"
                    src={profileImage}
                    alt="Myself inside of a kayak"
                />
            </Grid>
            <Grid item xs={12} justify="center">
                <Typography variant="body1" align="center">
                    Welcome! You may have come from far, or you may have come
                    from wide; but alas, you have come, nonetheless, to my
                    humble corner of the internet. Allow me to introduce myself,
                    I am Nicholas Rose: science-er of computers, writer of
                    stories, player of songs, and hiker of trails, among other
                    things. I am a Boilermaker, hailing from the fine university
                    of Purdue, West Lafayette, where I am a junior majoring in
                    computer science and minoring in mathematics and
                    organizational leadership. I am also seeking a certificate
                    in entrepreneurship. May you find this website helpful,
                    informative, and, quite possibly, entertaining. Cheers!
                </Typography>
            </Grid>
        </Grid>
    );
}

export default HomePage;
