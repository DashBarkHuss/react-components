import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.js';
import filterOutSmallImages from './filterImages';
import WishForm from './WishForm/WishForm';
import './AddWish.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// fetch post json
const fetchPostJson = async (data, route, callback) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  await fetch(route, {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  })
    .then((res) => res.json())
    .then((response) => {
      console.log('server response: ', response);
      if (callback) callback();
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
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
  const [url, setUrl] = useState(null);
  const [retrieved, setRetrieved] = useState(null);
  function filterAndSetImages(uniqueImages) {
    filterOutSmallImages(uniqueImages, 100).then((images) => {
      setFilteredImages(images);
    });
  }

  function handleScrapeProduct(url) {
    setUrl(url);
    axios.post('http://localhost:4000/wishes/productInfo', { url: url }).then((res) => {
      const info = res.data;
      const images = info.imageSrcs;
      delete info.imageSrcs;
      setProductInfo(info);
      if (res.data) setRetrieved('true');

      const uniqueImages = [...new Set(images)];
      filterAndSetImages(uniqueImages);
    });
  }
  const postWish = (data) => {
    const wishInfo = data;
    wishInfo.url = url;
    wishInfo.wishlist = props.wishlist;
    wishInfo.alias = props.alias;
    fetchPostJson(wishInfo, 'http://localhost:4000/wishlistItems');
  };

  return (
    <ThemeProvider theme={theme}>
      <h2>Add A Wish</h2>

      <Container className={classes.Container}>
        <Search submit={(e) => handleScrapeProduct(e)} />
        <WishForm
          // disabled={!retrieved}
          disabled={false}
          info={productInfo}
          images={filteredImages}
          onSubmit={postWish}
        />
      </Container>
    </ThemeProvider>
  );
}

export default AddWish;
