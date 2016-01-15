import React from 'react';
import ListItem from '../list-item/list-item';
import {Link} from 'react-router';

export default class ColumnList extends React.Component {

  static propTypes = {
    items: React.PropTypes.array,
    header: React.PropTypes.string,
    linkBase: React.PropTypes.string
  }

  render() {
    const listItems = this.props.items.map((item) => {
      return(<Link to={this.props.linkBase + '/' +item.id}><ListItem name={item.name} key={item.key} />
            </Link>);
    })

    const header = (this.props.header) ? <h2>{this.props.header}</h2> : '';

    return(
      <div>
        {header}
        <div>{listItems}</div>
      </div>
    )
  }
}
