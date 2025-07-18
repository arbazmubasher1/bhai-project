import { useState } from 'react';
import { supabase } from "../utils/supabaseClient";

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage('❌ ' + error.message);
    } else {
      setMessage('✅ Password updated successfully. You can now log in.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-semibold mb-4">Set New Password</h2>
        <input
          type="password"
          placeholder="New password"
          className="w-full border px-3 py-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Update Password
        </button>
        {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
      </form>
    </div>
  );
}
