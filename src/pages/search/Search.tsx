import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { History } from 'history';

import { get } from '../../core/axios/axios';
import { changePage, changeText, selectSearchedPage, selectSearchedText } from "../../core/components/header/headerSlice";
import { changeGenericAlertMessage, changeShow } from "../../core/components/alert-message/alertMessageSlice";
import { showLoading, hideLoading } from '../../core/components/loading/loadingSlice';
import Paging from "../../core/components/paging/Paging";
import Result from "./components/result/Result";
import AlertMessage from "../../core/components/alert-message/AlertMessage";

interface SearchProps {
  history: History;
}

const Search = ({ history }: SearchProps) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [results, setResults] = useState(0);
  const [sortBy] = useState('publishedAt');
  const [noResults, setNoResults] = useState(false);

  let searchText = useSelector(selectSearchedText);
  let searchPage = useSelector(selectSearchedPage);

  const getData = useCallback(async () => {
    if (!searchText) return;
    dispatch(showLoading());

    const response = await get(
      `/v2/everything?q=${searchText}&sortBy=${sortBy}&page=${searchPage}`
    );
    if (response.status === 'ok') {
      if (response.totalResults > 0) {
        setData(response.articles);
        setResults(response.totalResults > 100 ? 100 : response.totalResults);
        setNoResults(false);
      } else {
        setData([]);
        setResults(0);
        setNoResults(true);
      }
      dispatch(changeShow(false));
    } else {
      setData([]);
      dispatch(changeGenericAlertMessage(response));
    }

    dispatch(hideLoading());
  }, [searchText, searchPage, sortBy, dispatch]);

  useEffect(() => {
    getData().then();
  }, [getData]);

  const getQuery = useCallback(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
  }, []);

  useEffect(() => {
    const query = getQuery().get('q');
    if (query) dispatch(changeText(query));
  }, [getQuery, dispatch]);

  useEffect(() => {
    let page = getQuery().get('page');
    if (page) changePage(parseInt(page));
  }, [getQuery, dispatch]);

  const handleChangePage = (page: number) => {
    history.push({
      pathname: '/search',
      search: `?q=${searchText}&page=${page}`
    });
    dispatch(changePage(page));
    window['scrollTo']({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <h3>Search Page</h3>

      {noResults && 
        <AlertMessage variant="warning" show title="" action="" actionTitle=""
          message={`Your search - ${searchText} - did not match any results.`}
        />
      }

      {data && data.map((article, i) => (
        <div key={article['publishedAt'] + i}>
          <Result article={article} />
        </div>
      ))}

      {results > 20 && <Paging
        page={searchPage}
        results={results}
        changePage={handleChangePage}
      />}
    </>
  );
};

export default Search;
