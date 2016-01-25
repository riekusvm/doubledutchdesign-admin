import React from 'react';
import ListItem from '../list-item/list-item';
import css from './column-list.css';
import Button from '../button/button';

export default class ColumnList extends React.Component {

  static propTypes = {
    items: React.PropTypes.array,
    header: React.PropTypes.string,
    linkBase: React.PropTypes.string,
    children: React.PropTypes.element
  }

  render() {
    const listItems = this.props.items.map((item) => {
      return (
        <ListItem name={item.name} key={item.key} link={this.props.linkBase + '/' + item.id} />
      );
    });

    const header = (this.props.header) ? <h2>{this.props.header}</h2> : '';

    return (
      <div className={css.columnList}>
        {header}
        <div>{listItems}</div>
        <Button classes={['fa', 'fa-plus', css.addButton]} />
      </div>
    );
  }
}
