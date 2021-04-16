import React, {Component} from 'react'
import Item from './Item';


class Items extends Component {
    render() {
      const {stejt} = this.props;
      return (
          <div className="tabela">
        <div className="par"><h3>#</h3><h3 style={{fontWeight:"bold"}}>Symbol</h3><h3 style={{fontWeight:"bold"}}>Daily Change</h3><h3 style={{fontWeight:"bold"}}>Volume</h3><h3 style={{fontWeight:"bold"}}>Last Price</h3>
          {stejt.map(par => <Item key={par.id} par={par}/>)}</div>
          </div>
    )
}
}
export default Items;

