"use client";

import { useState } from 'react';

const genres = ['Fantasy', 'Sci-Fi', 'Mystery', 'Horror', 'Romance', 'Historical', 'Thriller', 'Slice of Life'];
const settings = ['Ancient Ruins', 'Futuristic City', 'Remote Island', 'Haunted Mansion', 'Space Station', 'Magical Forest', 'Post-Apocalyptic Wasteland', 'Victorian London'];
const characters = ['Wary Detective', 'Naive Robot', 'Rebellious Princess', 'Forgotten God', 'Curious Explorer', 'Grizzled Veteran', 'Shy Alien', 'Scheming Politician'];
const objects = ['Mysterious Orb', 'Broken Locket', 'Ancient Map', 'Glow-in-the-dark Mushroom', 'Singing Sword', 'Time-traveling Watch', 'A Cursed Painting', 'A Whispering Compass'];

export default function GeneratePromptPage() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedSetting, setSelectedSetting] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedObject, setSelectedObject] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [feedback, setFeedback] = useState('');

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generatePrompt = () => {
    const genre = selectedGenre || getRandomElement(genres);
    const setting = selectedSetting || getRandomElement(settings);
    const character = selectedCharacter || getRandomElement(characters);
    const object = selectedObject || getRandomElement(objects);

    const promptParts = [
      `In a ${setting} setting, a ${character} discovers a ${object}.`,
      `A story about a ${character} in a ${setting}, who must retrieve a ${object}.`,
      `Explore a ${genre} tale where a ${character} finds unexpected power within a ${object} in the heart of a ${setting}.`,
      `The fate of a ${setting} rests on a ${character} and their quest for a legendary ${object}.`,
      `Amidst a ${genre} backdrop, a ${character} uncovers the secrets of a peculiar ${object} hidden in a ${setting}.`
    ];

    setGeneratedPrompt(getRandomElement(promptParts));
    setFeedback('');
  };

  const savePrompt = () => {
    if (generatedPrompt) {
      const savedPrompts = JSON.parse(localStorage.getItem('creativePrompts') || '[]');
      if (!savedPrompts.includes(generatedPrompt)) {
        localStorage.setItem('creativePrompts', JSON.stringify([...savedPrompts, generatedPrompt]));
        setFeedback('Prompt saved successfully!');
      } else {
        setFeedback('This prompt is already saved!');
      }
    } else {
      setFeedback('Generate a prompt first!');
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '900px', margin: '2rem auto' }}>
      <h1>Generate Your Next Idea</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Select categories to tailor your prompt, or leave them blank for random inspiration.
      </p>

      <div className="form-group">
        <label htmlFor="genre-select">Genre:</label>
        <div className="select-wrapper">
          <select id="genre-select" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">Any Genre</option>
            {genres.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="setting-select">Setting:</label>
        <div className="select-wrapper">
          <select id="setting-select" value={selectedSetting} onChange={(e) => setSelectedSetting(e.target.value)}>
            <option value="">Any Setting</option>
            {settings.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="character-select">Character:</label>
        <div className="select-wrapper">
          <select id="character-select" value={selectedCharacter} onChange={(e) => setSelectedCharacter(e.target.value)}>
            <option value="">Any Character</option>
            {characters.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="object-select">Key Object:</label>
        <div className="select-wrapper">
          <select id="object-select" value={selectedObject} onChange={(e) => setSelectedObject(e.target.value)}>
            <option value="">Any Object</option>
            {objects.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', marginBottom: '2rem' }}>
        <button onClick={generatePrompt} className="btn">
          Generate Prompt
        </button>
        <button onClick={savePrompt} className="btn btn-secondary">
          Save Prompt
        </button>
      </div>

      {feedback && <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>{feedback}</p>}

      {generatedPrompt && (
        <div className="glass-card" style={{ marginTop: '2rem', border: '1px solid #00BFFF' }}>
          <h3 style={{ marginBottom: '1rem' }}>Your New Prompt:</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>{generatedPrompt}</p>
        </div>
      )}
    </div>
  );
}
