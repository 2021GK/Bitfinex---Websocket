import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const {par} = this.props;
        const procenat=(par.dc*100).toFixed(2);

        return (
            <div className="par">
                <h3>{par.id +1}</h3><h3>{par.ime}</h3><h3>{`${procenat}%`}</h3><h3>{par.volume.toFixed(2)}</h3><h3>{par.lp.toFixed(2)}</h3>
                <br/>                
            </div>
        )
    }
}
