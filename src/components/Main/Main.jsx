import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'; 
import Form from './Form/Form';
import List from './List/List';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Expence Tracker" subheader="powered by speechly"/>
            <CardContent>
                <Typography align="center" varient="h5">Total Balance: $100</Typography>
                <Typography varient="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                    {/* InfoCard */}
                    Try saying: Add income for $100 in Category Salary for Monday ...
                </Typography>
            </CardContent>
            <Divider />
            <CardContent><Form /></CardContent>
            
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
