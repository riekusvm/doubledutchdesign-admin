import React from 'react';
import css from './list-item.css';
import Button from '../button/button';
import ButtonGroup from '../button-group/button-group';
import {Link} from 'react-router';

export default class ListItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    link: React.PropTypes.string
  }

  render() {
    return (
      <div className={css.listItem}>
        <Link to={this.props.link}>{this.props.name}</Link>
        <ButtonGroup>
          <Button onClick={this.clicked} classes={['fa', 'fa-sort-up', css.button]} />
          <Button onClick={this.clicked} classes={['fa', 'fa-sort-desc', css.button]} />
          <Button onClick={this.clicked} classes={['fa', 'fa-minus-circle', css.button]} />
        </ButtonGroup>
      </div>
    )
  }

  clicked() {
    console.log('CLICK!');
  }
}
