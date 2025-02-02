import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import LogoComp from '../resources/images/logo_gpt.svg?react';

const useStyles = makeStyles((theme) => ({
  image: {
    alignSelf: 'center',
    width: 'auto',
    height: 'auto',
  },
}));

const LogoCompany = ({ color }) => {
  const theme = useTheme();
  const classes = useStyles();

  const expanded = !useMediaQuery(theme.breakpoints.down('lg'));

  const logo = useSelector((state) => state.session.server.attributes?.logo);
  const logoInverted = useSelector((state) => state.session.server.attributes?.logoInverted);

  if (logo) {
    if (expanded && logoInverted) {
      return <img className={classes.image} src={logoInverted} alt="" />;
    }
    return <img className={classes.image} src={logo} alt="" />;
  }
  return <LogoComp className={classes.image} style={{ color }} />;
};

export default LogoCompany;
