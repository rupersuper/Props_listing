import React from 'react';
import './App.css';
import etsy from './components/etsy.json'
import Listing from './components/Listing'


const App:React.FC = () => {
  return (
    <div className="item-list">
     {etsy.map((obj) => (
      <Listing key={obj.listing_id}{...obj}/>
    ) )}
    </div>
  );
}

export default App;
