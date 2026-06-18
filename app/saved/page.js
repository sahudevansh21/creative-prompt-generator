"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SavedPromptsPage() {
  const [savedPrompts, setSavedPrompts] = useState([]);

  useEffect(() => {
    const storedPrompts = JSON.parse(localStorage.getItem('creativePrompts') || '[]');
    setSavedPrompts(storedPrompts);
  }, []);

  const deletePrompt = (promptToDelete) => {
    const updatedPrompts = savedPrompts.filter((prompt) => prompt !== promptToDelete);
    setSavedPrompts(updatedPrompts);
    localStorage.setItem('creativePrompts', JSON.stringify(updatedPrompts));
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '2rem auto' }}>
      <h1>Your Saved Prompts</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Revisit your favorite prompts and delete those you no longer need.
      </p>

      {savedPrompts.length === 0 ? (
        <div className="glass-card" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            You haven't saved any prompts yet. Head over to the{' '}
            <Link href="/generate" style={{ color: '#00BFFF', fontWeight: 'bold' }}>Generate Prompt</Link> page to create some!
          </p>
        </div>
      ) : (
        <div className="grid-container">
          {savedPrompts.map((prompt, index) => (
            <div key={index} className="glass-card">
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{prompt}</p>
              <button onClick={() => deletePrompt(prompt)} className="btn btn-delete">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
