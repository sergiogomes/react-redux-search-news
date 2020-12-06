import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { get } from '../../core/axios/axios';
import { changePage, selectSearchedPage, selectSearchedText } from "../../core/components/header/headerSlice";
import { showLoading, hideLoading } from '../../core/components/loading/loadingSlice';
import Paging from "../../core/components/paging/Paging";
import Result from "./components/result/Result";

const Search = () => {
  const [data, setData] = useState([]);
  const [quant, setQuant] = useState(0);
  const [sortBy] = useState('publishedAt');

  const searchText = useSelector(selectSearchedText);
  const searchPage = useSelector(selectSearchedPage);
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    if (!searchText) return ;
    dispatch(showLoading());
    const response = await get(
      `/v2/everything?q=${searchText}&sortBy=${sortBy}&page=${searchPage}`
    )
    if (response.status === 'ok') {
      setData(response.articles);
      setQuant(response.totalResults > 100 ? 100 : response.totalResults);
    } else {
      // TODO: setError
    }
    dispatch(hideLoading());
  }, [searchText, searchPage, sortBy, dispatch]);

  useEffect(() => {
    getData().then();
  }, [getData]);

  const handleChangePage = (page: number) => {
    dispatch(changePage(page))
    getData().then();
  };
  
  return (
    <>
      <h3>Search Page</h3>
      
      {data && data.map((article, i) => (
        <div key={article['publishedAt'] + i}>
          <Result article={article} />
        </div>
      ))}

      <Paging
        page={searchPage}
        results={quant}
        changePage={handleChangePage}
      />
    </>
  );
};

export default Search;
