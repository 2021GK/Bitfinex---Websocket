import React, {Component} from 'react';
import {Navbar} from './components/Navbar';
import { BrowserRouter} from "react-router-dom";
import Router from './Router';
import {GlobalProvider} from './context/GlobalState';


class App extends Component {

  state = {
    podaci: [
        { id:0, dc:0, volume:0, lp:0,ime:'BTCUSD'},
        { id:1, dc:0, volume:0, lp:0,  ime:'BTCEUR'},
        {  id:2, dc:0, volume:0, lp:0, ime:'ETHUSD'},
        {  id:3, dc:0, volume:0, lp:0,ime:'ETHEUR'},
        {  id:4, dc:0, volume:0, lp:0,ime:'EOSUSD'},
      ],}
    

      handleData = (dataniz, no) => {
        let pomObj={};
        pomObj['id']=no;
        pomObj['volume']=dataniz[7];
        pomObj['dc']=dataniz[5];
        pomObj['lp']=dataniz[6];
        pomObj['ime']=this.state.podaci[no].ime;
        let pomniz=[...this.state.podaci];
        pomniz[no]={...pomObj};
        this.setState({podaci: pomniz});
      }

  componentDidMount() {
    const channels = {nulti:0, prvi:0, drugi:0, treci:0, cetvrti:0};
  const wss = new WebSocket("wss://api.bitfinex.com/ws/2");



  wss.onopen = () => {  

    wss.send(JSON.stringify({
        "symbol": "tBTCUSD",
        "event": "subscribe",
        "channel": "ticker"
    }));
    wss.send(JSON.stringify({
      "symbol": "tBTCEUR",
      "event": "subscribe",
      "channel": "ticker"
  }));
  wss.send(JSON.stringify({
    "symbol": "tETHUSD",
    "event": "subscribe",
    "channel": "ticker"
}));
wss.send(JSON.stringify({
  "symbol": "tETHEUR",
  "event": "subscribe",
  "channel": "ticker"
}));
wss.send(JSON.stringify({
  "symbol": "tEOSUSD",
  "event": "subscribe",
  "channel": "ticker"
}));
  };



  wss.onmessage = (event) => {

    const data = JSON.parse(event.data);
    if (data.event==='info') {console.log('konektovanje...');
   } else if (data.event==='subscribed') {
      console.log('uspesan subscribe!!!');
    if(data.pair==='BTCUSD') {channels.nulti=data.chanId;
    } else if (data.pair==='BTCEUR') { channels.prvi=data.chanId; 
    } else if (data.pair==='ETHUSD') {channels.drugi=data.chanId;
    } else if (data.pair==='ETHEUR') {channels.treci=data.chanId;
    } else if  (data.pair==='EOSUSD') {channels.cetvrti=data.chanId; }
   } 

 
else if  (channels.nulti!==0 && channels.drugi!==0 && channels.prvi!==0 && channels.treci!==0 && channels.cetvrti!==0)
 {
     if(data[1].length===10 && data[0]===channels.nulti) {
      let pp=data[1];
      this.handleData(pp, 0);

   } else if (data[1].length===10 && data[0]===channels.prvi) {
    let pp=data[1];
    this.handleData(pp, 1);

} else if (data[1].length===10 && data[0]===channels.drugi) {
  let pp=data[1];
  this.handleData(pp, 2);

  } else if (data[1].length===10 && data[0]===channels.treci) {
    let pp=data[1];
    this.handleData(pp, 3);

  } else if (data[1].length===10 && data[0]===channels.cetvrti) {
    let pp=data[1];
    this.handleData(pp, 4);

  }
   else if (data[1]==='hb') {
     console.log('tik tok');
   } }


      
    }
  }



render() {
  return (
    <React.Fragment>
    <GlobalProvider>
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Router stejt={this.state.podaci}/>
    </div>
    </BrowserRouter>
    </GlobalProvider>
     </React.Fragment>
  );}
}
export default App;
