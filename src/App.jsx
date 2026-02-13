import { useState } from 'react';
import emailjs from '@emailjs/browser';
import EnvelopeHero from './components/EnvelopeHero';
import QuestionCard from './components/QuestionCard';
import SuccessCard from './components/SuccessCard';
import FloatingDoodles from './components/FloatingDoodles';

function App() {
  const [step, setStep] = useState('envelope'); // 'envelope', 'letter', 'success'

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleOpenEnvelope = () => {
    setStep('letter');
  };

  const handleYesClick = () => {
    setStep('success');

    // Send Email
    const templateParams = {
      to_name: 'My Valentine',
      from_name: 'Your Secret Admirer',
      location: 'My Heart 💖',
      order_id: '#1112024',
      email: 'mybaby@lovemail.com', // Placeholder or capture from user input if available
      message: 'She said YES! 💖 Date confirmed for Feb 14th!',
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 overflow-hidden relative">
      <FloatingDoodles />
      
      {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,192,203,0.2)_100%)]" />

      <div className="relative z-10 w-full flex justify-center">
        {step === 'envelope' && <EnvelopeHero onOpen={handleOpenEnvelope} />}
        {step === 'letter' && <QuestionCard onYes={handleYesClick} />}
        {step === 'success' && <SuccessCard />}
      </div>
      
      <footer className="fixed bottom-4 text-pink-400 text-xs text-center w-full font-bold font-pixel tracking-widest pointer-events-none opacity-50">
        HANDCRAFTED WITH LOVE 💖
      </footer>
    </div>
  );
}

export default App;
