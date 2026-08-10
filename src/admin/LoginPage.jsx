import React, { useState } from 'react';
import api from '../api';

export default function LoginPage(){
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true); setError('');
    try{
      const data = await api.login(creds.username, creds.password);
      // navigate to admin panel
      window.location.hash = '#/admin/panel';
    }catch(err){
      setError('Login gagal — cek username/password');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input value={creds.username} onChange={e=>setCreds({...creds,username:e.target.value})} placeholder="username" className="border px-3 py-2 rounded" />
          <input value={creds.password} onChange={e=>setCreds({...creds,password:e.target.value})} placeholder="password" type="password" className="border px-3 py-2 rounded" />
          <div className="flex items-center justify-between">
            <button className="bg-cyan-500 text-white px-4 py-2 rounded" disabled={loading}>{loading? '...' : 'Login'}</button>
            <a href="#/" className="text-sm text-gray-500">Kembali ke situs</a>
          </div>
        </form>
      </div>
    </div>
  );
}
