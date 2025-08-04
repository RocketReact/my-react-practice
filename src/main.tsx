import { createRoot } from 'react-dom/client';

const techName = 'React';

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <h1>Welcome to {techName}</h1>
    <p>
      This is JSX — it looks like HTML, but it's not quite the same. It has its
      own rules!
    </p>
  </>
);
