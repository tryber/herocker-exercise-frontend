import './App.css';

import React, { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js';

require('dotenv').config();

const supabaseUrl = 'https://kvwqfvtvbpqqbehbutsm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
+ 'eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTI2MDUzOSwiZXhwI'
+ 'joxOTUwODM2NTM5fQ.hdT_MDknZsGWbUK6FFPLmpJAh0JefSik7pnL3CO9QK8';
console.log(process.env.REACT_APP_SUPABASEKEY);
const supabase = createClient(supabaseUrl, supabaseKey);

// const API_ENDPOINT = 'http://localhost:3000/users';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('Users')
      .select()
      .then((response) => { setData(response.data); setLoading(false); });
  }, []);

  if (loading) return <h1>loading....</h1>;

  return (
    <table>
      <tr>
        {Object.keys(data[0]).map(
          (key) => (<th key={ Math.random() }>{key}</th>),
        )}
      </tr>
      <tbody>
        {data.map((rowInfo) => (
          <tr key={ Math.random() }>
            {
              Object.values(rowInfo).map(
                (cellInfo) => (<td key={ Math.random() }>{cellInfo}</td>),
              )
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
