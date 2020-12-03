import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { get } from '../../core/axios/axios';
import { selectSearchedText } from "../../core/components/header/headerSlice";
import { showLoading, hideLoading } from '../../core/components/loading/loadingSlice';

const Search = () => {
  const [data, setData] = useState([]);
  const [sortBy] = useState('publishedAt');
  const [page] = useState(1);
  const searchText = useSelector(selectSearchedText);
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    console.log('useCallback');
    if (!searchText) return ;
    dispatch(showLoading());
    const response = await get(
      `/v2/everything?q=${searchText}&sortBy=${sortBy}&page=${page}`
    )
    if (response.status === 'ok') {
      setData(response.articles)
      // TODO: setTotalResults
    } else {
      // TODO: setError
    }
    dispatch(hideLoading());
  }, [searchText, sortBy, page, dispatch]);

  useEffect(() => {
    console.log('useEffect');
    getData().then();
  }, [getData]);
  
  return (
    <>
      <h1>Search</h1>
      {data && data.map((article, i) => (
        <div key={article['publishedAt'] + i}>
          {article['title']}
          {article['description']}
          {article['author']}
          {article['urlToImage']}
          {article['url']}
          {article['publishedAt']}
        </div>
      ))}
    </>
  )
}

export default Search;
