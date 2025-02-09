// src/app/page.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Navbar />
      <h1>Welcome to My Third Project</h1>
      <Footer year={currentYear} />
    </div>
  );
}