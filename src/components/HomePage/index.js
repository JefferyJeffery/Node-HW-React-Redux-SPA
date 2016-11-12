import React from 'react';
// 使用 react-router 的 Link 當做超連結，傳送 userId 當作 query
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const HomePage = ({
  userId,
  onSubmitUserId,
  onChangeUserId,
}) => (
  <div>
    <TextField
      hintText="Please enter your user ID"
      onChange={onChangeUserId}
    />
    <Link
      to={{
        pathname: '/result',
        query: {
          UserId: userId,
        },
      }}
    >
      <RaisedButton label="Submit" onClick={onSubmitUserId(userId)} primary />
    </Link>
  </div>
);

HomePage.propTypes = {
  userId: React.PropTypes.string,
  onSubmitUserId: React.PropTypes.string,
  onChangeUserId: React.PropTypes.string,
};


export default HomePage;
