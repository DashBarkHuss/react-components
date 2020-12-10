import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.js';
import ProductInputs from './ProductInputs.js';
import ChooseImage from './ChooseImage';
import Button from '@material-ui/core/Button';
import filterOutSmallImages from './filterImages';
import WishForm from './WishForm/WishForm';
// import Search from './Search.js';
import './AddWish.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    Container: {
      display: 'grid',
      gap: '1.6em',
      [theme.breakpoints.down(450)]: {
        paddingBottom: '4em',
      },
    },
  };
});
function AddWish(props) {
  const theme = useTheme();
  theme.shape = { borderRadius: 4 };
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState({
    price: '',
    title: '',
    currency: '',
    ogImageSrcs: [],
    imageSrcs: [],
  });
  const [filteredImages, setFilteredImages] = useState([]);
  const [retrieved, setRetrieved] = useState(null);

  function filterAndSetImages(uniqueImages) {
    filterOutSmallImages(uniqueImages, 100).then((images) => {
      setFilteredImages(images);
    });
  }

  function handleScrapeProduct(url) {
    axios.post('http://localhost:4000/wishes/productInfo', { url: url }).then((res) => {
      const info = res.data;
      setProductInfo(info);
      const images = info.imageSrcs;
      if (res.data) setRetrieved('true');

      const uniqueImages = [...new Set(images)];
      filterAndSetImages(uniqueImages);
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <h2>Add A Wish</h2>
      <Container className={classes.Container}>
        <Search submit={(e) => handleScrapeProduct(e)} />
        <WishForm
          disabled={!retrieved}
          // info={info}
          onClose={props.onClose}
        />
      </Container>
    </ThemeProvider>
  );
}

export default AddWish;
