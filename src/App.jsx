import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('Đang kết nối...');

  useEffect(() => {
    axios.get('http://localhost:5000/api/health')
      .then(res => setMsg(`${res.data.message} - số user: ${res.data.data.userCount}`))
      .catch(() => setMsg('Không kết nối được server'));
  }, []);

  return <h1>LearningEnglish: {msg}</h1>;
}

export default App;