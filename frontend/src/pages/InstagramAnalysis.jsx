// InstagramAnalysis.jsx
import { useState } from 'react';
import axios from 'axios';

const STAR_API_KEY = '55325f396cmsh1812ff7f2016376p1079d8jsn5ef3a673c06c';
const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

export default function InstagramAnalysis() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInstagramData = async () => {
    setLoading(true);
    setError(null);
    setProfile(null);
    setSummary('');

    try {
      const response = await axios.get(
        `https://starapi1.p.rapidapi.com/instagram/info?username=${username}`,
        {
          headers: {
            'X-RapidAPI-Key': STAR_API_KEY,
            'X-RapidAPI-Host': 'starapi1.p.rapidapi.com',
          },
        }
      );

      const data = response.data;
      setProfile(data);
      summarizeBio(data.bio || '');
    } catch (err) {
      setError('Failed to fetch profile. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const summarizeBio = async (bioText) => {
    if (!bioText) return;
    try {
      const completion = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content:
                'You are a social media strategist. Given an Instagram bio, give a quick summary and suggest one improvement.',
            },
            {
              role: 'user',
              content: bioText,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setSummary(completion.data.choices[0].message.content);
    } catch (err) {
      setSummary('Could not summarize bio.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 py-12 px-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
          Instagram Profile Analyzer
        </h2>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Enter Instagram Username"
            className="flex-1 px-4 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={fetchInstagramData}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Analyze
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {profile && (
          <div className="mt-6">
            <img
              src={profile.profile_pic_url}
              alt="profile"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold text-center mt-2">{profile.full_name}</h3>
            <p className="text-center text-gray-700">@{profile.username}</p>
            <div className="flex justify-around text-sm text-gray-600 mt-4">
              <span>Followers: {profile.followers}</span>
              <span>Following: {profile.following}</span>
              <span>Posts: {profile.posts}</span>
            </div>
            <p className="mt-4 text-gray-800 italic text-center">"{profile.bio}"</p>
          </div>
        )}

        {summary && (
          <div className="mt-6 bg-gray-100 p-4 rounded">
            <h4 className="text-md font-bold mb-2">Strategist Summary:</h4>
            <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}
