/* eslint-disable no-console */
import React, { useState } from 'react';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import 'semantic-ui-css/semantic.min.css';
import logo from 'src/assets/images/logo-github.png';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

import './app.scss';

const App = () => {
  const [search, setSearch] = useState('');
  const [datas, setDatas] = useState(null);
  const [searched, setSearched] = useState('');
  const [page, setPage] = useState(1);

  const onChangeInput = (searching) => {
    setSearch(searching);
  };

  const onSubmitInput = (event) => {
    event.preventDefault();
    setSearched(search);
    setSearch('');
    axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=9`)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resultsHandler = () => {
    axios.get(`https://api.github.com/search/repositories?q=${searched}&sort=stars&order=desc&page=${page + 1}&per_page=9`)
      .then((response) => {
        const datasModified = datas;
        datasModified.items = [...datasModified.items, ...response.data.items];
        setDatas(datasModified);
        setPage(page + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app-container">
      <div className="app">
        <img className="logo" src={logo} alt="logo-github" />
        <SearchBar
          search={search}
          onChange={onChangeInput}
          onSubmit={onSubmitInput}
        />
        {(datas != null)
        && (
        <>
          <Message count={datas.total_count} />
          <div className="app__results">
            {(datas.items).map((item) => (
              <ReposResults
                key={item.id}
                name={item.name}
                login={item.owner.login}
                url={item.owner.avatar_url}
                description={item.description}
                lien={item.html_url}
              />
            ))}
          </div>
          <div className="app__button">
            <Button onClick={() => resultsHandler()} content="Plus de résultats" icon="down arrow" labelPosition="left" />
          </div>
        </>
        )}
      </div>
    </div>
  );
};

export default App;
