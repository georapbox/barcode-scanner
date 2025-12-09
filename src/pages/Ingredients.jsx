import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthProvider.jsx';

export default function Ingredients() {
  const { user, getIdToken } = useAuth();
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const token = await getIdToken();
        if (!token) {
          setItems([]);
          setLoading(false);
          return;
        }
        const res = await fetch('/user/ingredients', { headers: { Authorization: `Bearer ${token}` } });
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();
        if (mounted) setItems(json.items || []);
      } catch (e) {
        if (mounted) setError(String(e));
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, [user, getIdToken]);

  return (
    <div className="body">
      <h1 className="header-title">Ingredients</h1>
      {!user && <p>Please sign in to view your scanned items.</p>}
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && items && items.length === 0 && <p>No scanned items yet.</p>}
      {!loading && items && items.length > 0 && (
        <ul>
          {items.map((it, i) => (
            <li key={it.id || i}>{it.title}{it.addedAt ? ` — ${new Date(it.addedAt).toLocaleString()}` : ''}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
