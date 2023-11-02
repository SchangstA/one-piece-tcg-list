import React, { useState } from 'react';

function DataInput({ onFetchData }) {
  const [id, setId] = useState({ id: '', name: '' });

  const setInput = (e) => {
    const { name, value } = e.target;
    setId((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchData = async () => {
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: id.name,
      }),
    }).then((res) => res.json());
    onFetchData(newData[0]);
  };

  return (
    <div>
      <input name="id" placeholder="Set ID" onChange={setInput} />
      <input name="name" placeholder="Set Name" onChange={setInput} />
      <button onClick={() => fetchData()}>CLICK</button>
      <button onClick={() => fetchData()}>CREATE</button>
    </div>
  );
}

export default DataInput;