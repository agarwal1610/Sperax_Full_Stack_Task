import React from 'react';
import WalletConnect from './components/WalletConnect';
import WatchList from './components/WatchList';
import HistoricalData from './components/HistoricalData';
import TokenAllowance from './components/TokenAllowance';
import TokenTransfer from './components/TokenTransfer';

function App() {
  return (
    <div className="App">
      <h1>Crypto-Portfolio App</h1>
      <WalletConnect />
      <WatchList />
      <HistoricalData />
      <TokenAllowance />
      <TokenTransfer />
    </div>
  );
}

export default App;
