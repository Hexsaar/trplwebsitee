import React, { useState, useEffect } from 'react';
import api from '../api';

const ResourceManager = ({ resource, schema, fieldLabels={}, refreshTrigger }) => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [editFile, setEditFile] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  const handlePreview = (type) => {
    let tempImageUrl = null;
    if (type === 'add' && file) tempImageUrl = URL.createObjectURL(file);
    if (type === 'edit' && editFile) tempImageUrl = URL.createObjectURL(editFile);

    const baseData = type === 'add' ? form : editForm;
    setPreviewData({
      type,
      data: { ...baseData, imageUrl: tempImageUrl || baseData.imageUrl || baseData.image || '' }
    });
  };

  const closePreview = () => setPreviewData(null);

  useEffect(() => { fetchItems(); }, [refreshTrigger, resource]);

  async function fetchItems(){
    try{
      const data = await api.list(resource);
      setItems(Array.isArray(data) ? data : []);
    } catch(e){
      console.error(e);
    }
  }

  async function handleCreate(e){
    e.preventDefault();
    try {
      let payload = { ...form };
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          alert('File terlalu besar (max 2MB)');
          return;
        }
        const up = await api.uploadFile(file);
        if (up && up.url) {
          payload.imageUrl = up.url;
        }
      }
      await api.create(resource, payload);
      setForm({});
      setFile(null);
      fetchItems();
    } catch(err) {
      console.error(err);
      alert('Gagal membuat item: ' + (err.message || 'Periksa input dan coba lagi'));
    }
  }

  function startEdit(it) {
    setEditingId(it.id);
    setEditForm({ ...it });
    setEditFile(null);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditForm({});
    setEditFile(null);
  }

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      let payload = { ...editForm };
      if (editFile) {
        if (editFile.size > 2 * 1024 * 1024) {
          alert('File terlalu besar (max 2MB)');
          return;
        }
        const up = await api.uploadFile(editFile);
        if (up && up.url) {
          payload.imageUrl = up.url;
        }
      }
      await api.update(resource, editingId, payload);
      setEditingId(null);
      setEditForm({});
      setEditFile(null);
      fetchItems();
    } catch(err) {
      console.error(err);
      alert('Gagal memperbarui item: ' + (err.message || 'Periksa input dan coba lagi'));
    }
  }

  async function handleDelete(id){
    if(!confirm('Hapus item ini?')) return;
    await api.remove(resource, id);
    fetchItems();
  }

  return (
    <div className="p-5 bg-white rounded-xl shadow-md border border-slate-200 mb-6">
      <div className="flex items-center justify-between mb-3 border-b pb-2">
        <h4 className="font-bold text-lg text-slate-800 uppercase tracking-wide">
          Kelola {resource} <span className="text-xs font-normal text-slate-500">({items.length} item)</span>
        </h4>
      </div>

      {/* Form Add */}
      <form onSubmit={handleCreate} className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-5">
        <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Tambah Item Baru</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          {schema.map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-[11px] font-medium text-slate-600 mb-1 capitalize">
                {fieldLabels[field] || field}
              </label>
              {field === 'bio' || field === 'description' || field === 'content' ? (
                <textarea
                  rows={2}
                  placeholder={fieldLabels[field] || field}
                  value={form[field] || ''}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                  className="border border-slate-300 px-3 py-1.5 rounded text-sm focus:outline-none focus:border-cyan-500"
                />
              ) : (
                <input
                  placeholder={fieldLabels[field] || field}
                  value={form[field] || ''}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                  className="border border-slate-300 px-3 py-1.5 rounded text-sm focus:outline-none focus:border-cyan-500"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <label className="border border-slate-300 px-3 py-1.5 rounded bg-white text-xs text-slate-700 hover:bg-slate-100 cursor-pointer shadow-sm">
              📷 {file ? file.name : 'Pilih Foto'}
              <input
                type="file"
                accept="image/*"
                onChange={e => setFile(e.target.files[0] || null)}
                className="hidden"
              />
            </label>
            <span className="text-[11px] text-slate-500">Max 2MB</span>
          </div>

          <div className="flex gap-2">
            <button type="button" onClick={() => handlePreview('add')} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs px-4 py-2 rounded-lg transition shadow">
              👁️ Lihat Preview
            </button>
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-xs px-4 py-2 rounded-lg transition shadow">
              + Tambah {resource}
            </button>
          </div>
        </div>
      </form>

      {/* Items List */}
      <div className="space-y-3">
        {items && items.map((it) => (
          <div key={it.id} className="border border-slate-200 rounded-lg p-3 bg-white hover:border-slate-300 transition">
            {editingId === it.id ? (
              <form onSubmit={handleUpdate} className="bg-cyan-50/50 p-3 rounded-lg border border-cyan-200">
                <div className="text-xs font-bold text-cyan-800 mb-2">Edit Item (ID: {it.id})</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                  {schema.map((field) => (
                    <div key={field} className="flex flex-col">
                      <label className="text-[11px] font-medium text-slate-600 mb-1 capitalize">
                        {fieldLabels[field] || field}
                      </label>
                      {field === 'bio' || field === 'description' || field === 'content' ? (
                        <textarea
                          rows={2}
                          value={editForm[field] || ''}
                          onChange={e => setEditForm({ ...editForm, [field]: e.target.value })}
                          className="border border-slate-300 px-3 py-1.5 rounded text-sm bg-white"
                        />
                      ) : (
                        <input
                          value={editForm[field] || ''}
                          onChange={e => setEditForm({ ...editForm, [field]: e.target.value })}
                          className="border border-slate-300 px-3 py-1.5 rounded text-sm bg-white"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-cyan-200">
                  <div className="flex items-center gap-2">
                    <label className="border border-slate-300 px-3 py-1 rounded bg-white text-xs text-slate-700 cursor-pointer">
                      Ganti Foto
                      <input
                        type="file"
                        accept="image/*"
                        onChange={e => setEditFile(e.target.files[0] || null)}
                        className="hidden"
                      />
                    </label>
                    {editFile && <span className="text-xs text-cyan-700">{editFile.name}</span>}
                  </div>

                  <div className="flex gap-2">
                    <button type="button" onClick={cancelEdit} className="px-3 py-1 text-xs bg-slate-200 text-slate-700 rounded">
                      Batal
                    </button>
                    <button type="button" onClick={() => handlePreview('edit')} className="px-3 py-1 text-xs bg-purple-600 hover:bg-purple-700 text-white rounded font-medium shadow">
                      👁️ Preview
                    </button>
                    <button type="submit" className="px-4 py-1 text-xs bg-emerald-600 hover:bg-emerald-700 text-white rounded font-medium shadow">
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  {(it.imageUrl || it.image) ? (
                    <img src={it.imageUrl || it.image} alt="preview" className="w-12 h-12 object-cover rounded-lg border border-slate-200 shrink-0" />
                  ) : (
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs shrink-0">No Img</div>
                  )}
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 text-sm truncate">
                      {it.title || it.name || 'Untitled'}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-2">
                      {it.label && <span className="bg-cyan-100 text-cyan-800 text-[10px] px-1.5 py-0.5 rounded font-semibold">{it.label}</span>}
                      {it.role || it.title || it.date ? <span>{it.role || it.title || it.date}</span> : null}
                    </div>
                    <p className="text-xs text-slate-600 truncate max-w-lg mt-0.5">
                      {it.bio || it.description || it.content}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => startEdit(it)} className="px-3 py-1 text-xs bg-amber-100 text-amber-800 hover:bg-amber-200 rounded font-medium transition">
                    ✏️ Edit
                  </button>
                  <button onClick={() => handleDelete(it.id)} className="px-3 py-1 text-xs bg-red-100 text-red-700 hover:bg-red-200 rounded font-medium transition">
                    🗑️ Hapus
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#12141a] rounded-2xl p-6 border border-gray-700 w-full max-w-sm relative">
            <button onClick={closePreview} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded-full transition z-10">✕</button>
            <h3 className="text-white font-bold mb-4 border-b border-gray-700 pb-2">Preview Tampilan</h3>
            
            {resource === 'lecturers' || resource === 'staff' ? (
              <div className="bg-[#1f232b] text-white rounded-[1.75rem] p-5 shadow-xl flex flex-col justify-between border border-slate-800">
                <div className="w-full h-64 rounded-[1.25rem] overflow-hidden mb-5 relative">
                  <img src={previewData.data.imageUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'} alt="preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-xl text-white">{previewData.data.name || 'Nama'}</h3>
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  </div>
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                    {previewData.data.title || previewData.data.role || 'Jabatan'}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4">
                    {previewData.data.bio || previewData.data.description || 'Deskripsi bio.'}
                  </p>
                </div>
              </div>
            ) : resource === 'workshops' ? (
              <article className="rounded-[2rem] overflow-hidden border border-gray-800 bg-[#161922] flex flex-col">
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img src={previewData.data.imageUrl || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop'} alt="preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161922] via-transparent to-black/40"></div>
                  <span className="absolute top-4 left-4 bg-cyan-400 text-slate-950 font-extrabold text-[11px] px-3.5 py-1 rounded-full uppercase">{previewData.data.label || 'Workshop'}</span>
                  {previewData.data.date && <span className="absolute bottom-3 right-4 bg-slate-950/80 text-cyan-300 text-[10px] font-mono font-medium px-2.5 py-1 rounded-md">📅 {previewData.data.date}</span>}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{previewData.data.title || 'Judul Workshop'}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">{previewData.data.description || previewData.data.content || 'Deskripsi workshop.'}</p>
                </div>
              </article>
            ) : resource === 'news' ? (
              <article className="rounded-[2rem] overflow-hidden border border-gray-800/90 bg-[#141722] flex flex-col">
                <div className="relative overflow-hidden min-h-[200px] bg-slate-900">
                  <img src={previewData.data.imageUrl || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop'} alt="preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141722] via-[#141722]/30 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-amber-400 text-slate-950 font-black text-[11px] px-3.5 py-1 rounded-full uppercase">{previewData.data.label || 'Berita'}</span>
                </div>
                <div className="p-6">
                  {previewData.data.date && <div className="text-[11px] font-mono text-amber-400 uppercase mb-2">📅 {previewData.data.date}</div>}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{previewData.data.title || 'Judul Berita'}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-300 line-clamp-4">{previewData.data.content || previewData.data.description || 'Isi berita.'}</p>
                </div>
              </article>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

const AdminPanel = ({ onClose, fullPage = false }) => {
  const [token, setToken] = useState(localStorage.getItem('trpl_token') || '');
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [creds, setCreds] = useState({ username: '', password: '' });

  useEffect(() => {
    if (token) {
      api.setToken && api.setToken(token);
    }
  }, [token]);

  async function doLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.login(creds.username, creds.password);
      setToken(data.token);
      setLoading(false);
      setRefresh(r => r + 1);
    } catch (err) {
      setLoading(false);
      alert('Login gagal. Gunakan username: admin, password: admin123');
    }
  }

  function doLogout() {
    api.logout();
    setToken('');
    if (onClose) onClose();
  }

  const container = fullPage ? 'min-h-screen p-6 sm:p-10 bg-slate-900 text-slate-100' : 'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-6 overflow-y-auto';
  const inner = fullPage ? 'w-full max-w-5xl mx-auto bg-slate-100 text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-300' : 'w-full max-w-5xl bg-slate-100 text-slate-900 rounded-2xl shadow-2xl p-6 my-8 border border-slate-300 max-h-[90vh] overflow-y-auto';

  return (
    <div className={container}>
      <div className={inner}>
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">TRPL Admin Dashboard</h3>
            <p className="text-xs text-slate-500">Kelola Dosen, Staf, Workshop, dan News secara Real-Time</p>
          </div>
          <div className="flex items-center gap-2">
            {token && (
              <button onClick={doLogout} className="px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition">
                Logout
              </button>
            )}
            {!fullPage && onClose && (
              <button onClick={onClose} className="px-3 py-1.5 bg-slate-300 text-slate-800 text-xs rounded-lg">Close</button>
            )}
          </div>
        </div>

        {!token && (
          <div className="max-w-md mx-auto my-12 bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-2">Admin Login</h4>
            <p className="text-xs text-slate-500 mb-6">Masuk untuk mengelola data website prodi TRPL</p>

            <form onSubmit={doLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Username</label>
                <input
                  placeholder="admin"
                  value={creds.username}
                  onChange={e => setCreds({ ...creds, username: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
                <input
                  placeholder="••••••••"
                  type="password"
                  value={creds.password}
                  onChange={e => setCreds({ ...creds, password: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <button
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2.5 rounded-lg text-sm transition shadow-md"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Sign In'}
              </button>

              <div className="text-[11px] text-slate-400 text-center pt-2">
                Default credentials: username <span className="font-mono text-slate-700">admin</span> | password <span className="font-mono text-slate-700">admin123</span>
              </div>
            </form>
          </div>
        )}

        {token && (
          <div>
            <ResourceManager
              resource="lecturers"
              schema={['name', 'title', 'bio', 'imageUrl']}
              fieldLabels={{ name: 'Nama Dosen', title: 'Gelar / Jabatan', bio: 'Bio / Deskripsi', imageUrl: 'URL Foto' }}
              refreshTrigger={refresh}
            />

            <ResourceManager
              resource="staff"
              schema={['name', 'role', 'bio', 'imageUrl']}
              fieldLabels={{ name: 'Nama Staf', role: 'Peran / Jabatan', bio: 'Bio / Deskripsi', imageUrl: 'URL Foto' }}
              refreshTrigger={refresh}
            />

            <ResourceManager
              resource="workshops"
              schema={['title', 'date', 'label', 'description', 'imageUrl']}
              fieldLabels={{ title: 'Judul Workshop', date: 'Tanggal Event', label: 'Label / Tag Image', description: 'Deskripsi Singkat', imageUrl: 'URL Image' }}
              refreshTrigger={refresh}
            />

            <ResourceManager
              resource="news"
              schema={['title', 'date', 'label', 'content', 'imageUrl']}
              fieldLabels={{ title: 'Judul Berita', date: 'Tanggal', label: 'Label / Tag Image', content: 'Deskripsi / Isi Berita', imageUrl: 'URL Image' }}
              refreshTrigger={refresh}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
