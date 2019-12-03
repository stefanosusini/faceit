import React from 'react';

import { useFetchChampionship } from 'utils/api';

import Record from './components/Record/index.js';

function App() {
  const [championship, loading, fetchChamp] = useFetchChampionship();

  return (
    <div style={{ maxWidth: 900, margin: 'auto' }}>
      <Record championship={championship} loading={loading} />
      <p><button disabled={loading} onClick={fetchChamp}>Refresh</button></p>
    </div>
  );
}

export default App;
