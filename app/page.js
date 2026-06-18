import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="glass-card" style={{ textAlign: 'center', maxWidth: '800px', margin: '4rem auto' }}>
      <h1>Unleash Your Creativity</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Tired of creative blocks? Our dynamic prompt generator helps writers and artists
        discover fresh ideas for stories, characters, and scenarios.
        Customize your parameters and generate unique inspiration on demand.
      </p>
      <Link href="/generate" className="btn">
        Start Generating Prompts
      </Link>
    </div>
  );
}
