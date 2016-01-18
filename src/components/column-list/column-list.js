import React from 'react';
import ListItem from '../list-item/list-item';
import {Link} from 'react-router';
import css from './column-list.css'

export default class ColumnList extends React.Component {

  static propTypes = {
    items: React.PropTypes.array,
    header: React.PropTypes.string,
    linkBase: React.PropTypes.string,
    children: React.PropTypes.element
  }

  render() {
    const listItems = this.props.items.map((item) => {
      return(<Link to={this.props.linkBase + '/' +item.id}><ListItem name={item.name} key={item.key} />
            </Link>);
    })

    const header = (this.props.header) ? <h2>{this.props.header}</h2> : '';

    return(
      <div className={css.columnList}>
        {header}
        <div>{listItems}</div>
        <Link to="new"> + </Link>
      </div>

    )
  }
}
