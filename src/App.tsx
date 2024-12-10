import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { Projects } from './components/Projects';
import { CallToAction } from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Introduction />
      <Projects />
      <CallToAction />
    </div>
  );
}