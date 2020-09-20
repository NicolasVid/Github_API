import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

import './reposresults.scss';

const ReposResults = ({
  name, login, description, url, lien,
}) => (
  <div className="repos-results">
    <a href={lien} target="_blank" rel="noreferrer">
      <Card>
        <div className="repos-results__img">
          <Image src={url} wrapped ui={false} />
        </div>
        <Card.Content>
          <Card.Header>
            <div className="repos-results__name">{name}</div>
          </Card.Header>
          <Card.Meta>
            <div className="repos-results__login">{login}</div>
          </Card.Meta>
          <Card.Description>
            <div className="repos-results__description">{description}</div>
          </Card.Description>
        </Card.Content>
      </Card>
    </a>
  </div>
);

ReposResults.defaultProps = {
  description: '',
};

ReposResults.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default ReposResults;
