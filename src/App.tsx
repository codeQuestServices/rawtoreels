import React, { useState } from 'react';
import {
  Music,
  Clock,
  Smartphone,
  CheckCircle,
  Play,
  Shield,
  ChevronDown,
  ChevronUp,
  Star,
  Film,
  Image as ImageIcon,
  // Zap,
  Lock,
  Cloud,
  ArrowRight,
  CreditCard
} from 'lucide-react';

import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';

// Interfaces for props
interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

interface StepCardProps {
  number: string;
  title: string;
  desc: string;
  color: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  desc: string;
  features: string[];
  isPopular?: boolean;
  ctaLink: string;
}

interface FaqItemProps {
  q: string;
  a: string;
}

const App = () => {
  // Placeholder Tally Form Link
  const TALLY_FORM_URL = "https://tally.so";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar tallyUrl={TALLY_FORM_URL} />

      {/* 1. Hero Section */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-bold mb-8 animate-fade-in-up border border-orange-100">
                <Clock size={16} /> 24-Hour Turnaround
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Turn Your Raw <span className="text-blue-600 relative inline-block">
                  Media
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> Into a Perfect <span className="text-orange-500">Reel.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                Don't let your vacation memories rot in the cloud. Upload your raw dump (mixed photos & video clips), and we’ll professionally edit it into a masterpiece.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  data-tally-open="KYzkWg"
                  data-tally-emoji-text="👋"
                  data-tally-emoji-animation="wave"
                  data-tally-form-events-forwarding="1"
                  data-tally-width="800"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                >
                  Start My Reel <span className="opacity-80 text-sm font-normal">($29)</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-3 justify-center px-6 py-4 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-600 font-medium">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-white overflow-hidden shadow-sm">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span>Trusted by 500+ creators</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Shield size={14} className="text-blue-600" /> Stripe Secured</span>
                <span className="flex items-center gap-1.5"><Cloud size={14} className="text-blue-400" /> Dropbox Pro Upload</span>
              </div>
            </div>

            {/* Visual Component: Split Screen Simulation */}
            <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl shadow-gray-400/50 overflow-hidden transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20"></div>

                {/* The "Before" Side (Top/Diagonal) */}
                <div className="absolute inset-0 bg-white z-10 overflow-hidden">
                  <div className="grid grid-cols-3 gap-1 p-2 opacity-60 animate-scroll-slow">
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className="aspect-square bg-gray-100 rounded-md relative overflow-hidden flex items-center justify-center">
                        {i % 3 === 0 ? <Play size={20} className="text-gray-300" /> : <ImageIcon size={20} className="text-gray-300" />}
                      </div>
                    ))}
                  </div>

                  {/* The "After" Reveal Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 top-[45%] bg-gradient-to-b from-transparent via-black/60 to-black/90 flex flex-col justify-end p-6">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl transform transition-transform hover:scale-105 duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 p-[2px]">
                          <div className="w-full h-full rounded-full bg-white overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
                          </div>
                        </div>
                        <div className="text-white">
                          <p className="font-bold text-sm">Bali Vlog 🌴</p>
                          <div className="flex items-center gap-1 text-[10px] opacity-80 uppercase tracking-wide">
                            <span className="w-1 h-1 rounded-full bg-green-400"></span> Edited
                          </div>
                        </div>
                      </div>
                      {/* Fake player timeline */}
                      <div className="flex items-center gap-2 text-xs text-white/70 mb-1">
                        <span>0:14</span>
                        <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-white rounded-full"></div>
                        </div>
                        <span>0:30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Responsive Positioning */}
              <div className="absolute top-24 -right-2 sm:-right-8 bg-white p-3 sm:p-4 rounded-2xl shadow-xl shadow-gray-200/50 flex items-center gap-3 animate-bounce-slow max-w-[160px] sm:max-w-none z-20">
                <div className="bg-green-100 p-2.5 rounded-full text-green-600">
                  <CheckCircle size={22} />
                </div>
                <div>
                  <span className="block font-bold text-sm leading-tight">Syncs to Beat</span>
                  <span className="text-xs text-gray-500">Perfect timing</span>
                </div>
              </div>

              <div className="absolute bottom-32 -left-2 sm:-left-12 bg-white p-3 sm:p-4 rounded-2xl shadow-xl shadow-gray-200/50 flex items-center gap-3 animate-bounce-slow delay-700 max-w-[160px] sm:max-w-none z-20">
                <div className="bg-blue-100 p-2.5 rounded-full text-blue-600">
                  <Clock size={22} />
                </div>
                <div>
                  <span className="block font-bold text-sm leading-tight">24h Delivery</span>
                  <span className="text-xs text-gray-500">Fast turnaround</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 2. The Problem (Agitation) */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">You filmed it. <br />Why haven't you posted it?</h2>
            <p className="text-gray-600 text-lg md:text-xl">We know the struggle. Great memories shouldn't die in your camera roll because editing is a chore.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProblemCard
              icon={<Smartphone className="w-8 h-8 text-orange-500" />}
              title="Storage Nightmare"
              text="1,000+ mixed photos and clips cluttering your phone. You don't even know where to start looking."
            />
            <ProblemCard
              icon={<Clock className="w-8 h-8 text-blue-500" />}
              title="Hours of Editing"
              text="Sorting, cutting, and transitioning takes forever. You'd rather be enjoying the trip than staring at a screen."
            />
            <ProblemCard
              icon={<Music className="w-8 h-8 text-purple-500" />}
              title="Audio Headaches"
              text="Can't find the right trending audio? Copyright strikes? Syncing beats manually is painful."
            />
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">The Process</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">From Dump to Done in 3 Steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-blue-100 to-gray-200 -z-10"></div>

            <StepCard
              number="01"
              title="Upload the Mess"
              desc="Fill out our Tally form. We provide a secure Dropbox Professional link for your massive photo & video dumps."
              color="bg-blue-600"
            />
            <StepCard
              number="02"
              title="Pick Your Vibe"
              desc="Chill Vacation, High-Energy Party, or Sentimental Recap. Tell us how you want to feel."
              color="bg-orange-500"
            />
            <StepCard
              number="03"
              title="Get Your Reel"
              desc="Receive a fully edited, color-graded, beat-synced video in your inbox. Ready to post."
              color="bg-green-500"
            />
          </div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-900 text-white overflow-hidden relative">
        {/* Background gradient blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">See the Magic ✨</h2>
            <p className="text-gray-400 text-lg">Real results from real messy camera rolls.</p>
          </div>

          {/* Portfolio Interactive Component */}
          <PortfolioViewer />

        </div>
      </section>

      {/* 5. Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple Flat Pricing</h2>
            <p className="text-gray-600 text-lg">No hidden fees. 100% Satisfaction Guarantee.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16 max-w-6xl mx-auto">
            <PricingCard
              title="Quick Recap"
              price="29"
              desc="Perfect for weekend getaways or concerts."
              features={["Up to 50 files (Photos/Videos)", "15-30 sec final video", "1 Revision round", "24h Delivery"]}
              ctaLink={TALLY_FORM_URL}
            />
            <PricingCard
              title="Mega Dump"
              price="49"
              desc="Best for big vacations and weddings."
              isPopular={true}
              features={["Up to 200 files (Photos/Videos)", "60 sec final video", "Unlimited Revisions", "Color Grading Included"]}
              ctaLink={TALLY_FORM_URL}
            />
            <PricingCard
              title="The Bundle"
              price="99"
              desc="Three videos from one massive trip."
              features={["Unlimited file upload", "3 separate videos", "Dedicated Editor", "Priority Support"]}
              ctaLink={TALLY_FORM_URL}
            />
          </div>

          <div className="text-center flex flex-col md:flex-row items-center justify-center gap-4 text-gray-500 text-sm bg-white border border-gray-100 p-4 rounded-full max-w-fit mx-auto shadow-sm">
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-green-500" />
              <span>Payments processed securely via <strong>Stripe</strong>.</span>
            </div>
            <div className="hidden md:block w-1 h-4 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CreditCard size={16} />
              <span className="flex gap-2 opacity-70">
                <span>Visa</span>
                <span>Mastercard</span>
                <span>Amex</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trust & Privacy */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-8">
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Memories are Safe with Us</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">We know sending personal photos to strangers requires trust. We treat your private moments with the highest level of security.</p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-1.5 h-auto bg-green-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-lg mb-2">Auto-Deletion</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Files are permanently deleted from Dropbox & our servers exactly 7 days after delivery.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-1.5 h-auto bg-blue-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-lg mb-2">Strict Privacy</h4>
                <p className="text-sm text-gray-600 leading-relaxed">We never use your footage for marketing without your explicit written permission.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-1.5 h-auto bg-orange-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-lg mb-2">Human Edited</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Real professional editors review every cut. No mindless AI errors or glitches.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem q="How do I send the files?" a="We use Dropbox Professional. After you fill out the Tally form and complete the Stripe payment, you'll instantly get a secure file request link. You can upload photos and videos directly from your phone's gallery." />
            <FaqItem q="Do you accept photos AND videos?" a="Yes! Most viral reels are a mix of both. Just dump everything into the Dropbox link, and we will sync the photos to the beat alongside your video clips." />
            <FaqItem q="Can I choose the music?" a="Yes! You can send us a specific song link (TikTok/Reels audio), or just tell us a genre and we'll pick a trending track." />
            <FaqItem q="What if I have blurry footage?" a="We'll do our best to stabilize it, or we'll cut around the bad parts to only show the high-quality moments." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200 text-center md:text-left">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <Film className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-xl tracking-tight">RawToReels</span> */}
              <Logo className="h-12" />
            </div>
            <span className="hidden md:inline text-gray-300">|</span>
            <p className="text-gray-500 text-sm">Turn chaos into content.</p>
          </div>

          <div className="text-gray-400 text-sm order-3 md:order-2">
            &copy; 2025 RawToReels. All rights reserved.
          </div>

          <div className="flex gap-8 order-2 md:order-3">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm">Contact</a>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA - Only visible on small screens */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-200 p-4 md:hidden z-40 safe-area-bottom">
        <button
          data-tally-open="KYzkWg"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          data-tally-form-events-forwarding="1"
          data-tally-width="800"
          className="block w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all text-center"
        >
          Start My Reel ($29)
        </button>
      </div>
    </div>
  );
};

/* --- Sub Components --- */

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left group h-full">
    <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

const StepCard: React.FC<StepCardProps> = ({ number, title, desc, color }) => (
  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 h-full">
    <div className="absolute top-0 left-0 w-full h-2 bg-gray-50">
      <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ${color}`}></div>
    </div>
    <div className={`w-14 h-14 mx-auto ${color} text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-gray-200 z-10 relative group-hover:scale-110 transition-transform`}>
      {number}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const PricingCard: React.FC<PricingCardProps> = ({ title, price, desc, features, isPopular, ctaLink }) => (
  <div className={`rounded-[2rem] p-8 border flex flex-col h-full transition-all duration-300 ${isPopular ? 'border-blue-500 bg-blue-50/50 relative shadow-2xl scale-105 z-10' : 'border-gray-200 bg-white shadow-lg hover:border-blue-200 hover:shadow-xl'}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg tracking-wide uppercase">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="flex items-baseline mb-4">
      <span className="text-5xl font-extrabold tracking-tight">${price}</span>
      <span className="text-gray-500 ml-2 font-medium">/video</span>
    </div>
    <p className="text-gray-600 mb-8 text-sm leading-relaxed">{desc}</p>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feat, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <span>{feat}</span>
        </li>
      ))}
    </ul>
    <button
      data-tally-open="KYzkWg"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      data-tally-form-events-forwarding="1"
      data-tally-width="800"
      data-tally-hidden-service_pack={title}
      data-tally-hidden-total={price}
      className={`block w-full py-4 rounded-xl font-bold transition-all text-center hover:shadow-lg active:scale-95 ${isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
    >
      Choose {title}
    </button>
  </div>
);

const FaqItem: React.FC<FaqItemProps> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-blue-200">
      <button
        className="w-full p-6 flex justify-between items-center text-left font-semibold hover:bg-gray-50 transition-colors gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{q}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 text-gray-600 bg-gray-50/30 leading-relaxed border-t border-gray-100/50">
          {a}
        </div>
      </div>
    </div>
  );
};

const PortfolioViewer = () => {
  const [activeTab, setActiveTab] = useState('travel');
  const [showAfter, setShowAfter] = useState(false);

  const categories = [
    { id: 'travel', label: 'Japan Trip 🇯🇵' },
    { id: 'wedding', label: 'Wedding Weekend 💍' },
    { id: 'party', label: 'Birthday Bash 🎂' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-8 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${activeTab === cat.id
                ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Viewer Container */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center">

        {/* Toggle Switch (The UX Hook) - Responsive Layout */}
        <div className="flex lg:flex-col gap-4 items-center bg-gray-800 p-2 rounded-2xl lg:rounded-3xl lg:p-3 order-1 lg:order-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 lg:rotate-180 lg:writing-mode-vertical mb-1 lg:mb-0 lg:mt-2">View</span>
          <button
            onClick={() => setShowAfter(false)}
            className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all duration-300 ${!showAfter ? 'bg-gray-700 text-white shadow-lg ring-1 ring-white/20' : 'text-gray-500 hover:text-white hover:bg-gray-700/50'}`}
          >
            <div className="text-center">
              <ImageIcon size={20} className="mx-auto lg:mb-1" />
              <span className="hidden lg:block text-[10px] font-bold">RAW</span>
            </div>
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all duration-300 ${showAfter ? 'bg-blue-600 text-white shadow-lg ring-1 ring-white/20' : 'text-gray-500 hover:text-white hover:bg-gray-700/50'}`}
          >
            <div className="text-center">
              <Film size={20} className="mx-auto lg:mb-1" />
              <span className="hidden lg:block text-[10px] font-bold">REEL</span>
            </div>
          </button>
        </div>

        {/* Phone Frame */}
        <div className="relative w-[300px] h-[600px] bg-black rounded-[45px] border-[10px] border-gray-800 shadow-2xl overflow-hidden order-2 lg:order-2 ring-1 ring-gray-700">

          {/* Content Area */}
          <div className="absolute inset-0 bg-gray-900">
            {!showAfter ? (
              /* BEFORE STATE: Messy Grid */
              <div className="h-full overflow-y-auto p-2 grid grid-cols-3 gap-1 content-start scrollbar-thin scrollbar-thumb-gray-700">
                <div className="col-span-3 text-center py-6 bg-gray-900 sticky top-0 z-10 border-b border-gray-800">
                  <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">Camera Roll <span className="text-white">482</span></p>
                </div>
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-800 rounded border border-gray-700/50 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <ImageIcon size={12} className="text-gray-600" />
                  </div>
                ))}
              </div>
            ) : (
              /* AFTER STATE: Polished Video Player Placeholder */
              <div className="h-full w-full relative animate-fade-in">
                {/* Simulated Video Background */}
                <div className={`absolute inset-0 opacity-80 bg-gradient-to-br ${activeTab === 'travel' ? 'from-blue-500 via-indigo-600 to-purple-700' :
                    activeTab === 'wedding' ? 'from-pink-400 via-rose-500 to-red-500' : 'from-yellow-400 via-orange-500 to-red-600'
                  }`}></div>

                {/* UI Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-b from-black/40 via-transparent to-black/80">
                  <div className="mt-8 flex justify-between items-center">
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold border border-white/20">Reels</div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-white"></div>
                      <div className="text-sm font-bold shadow-black drop-shadow-md">@{activeTab}_fan</div>
                      <button className="border border-white/50 px-3 py-1 rounded-lg text-[10px] font-bold backdrop-blur-sm">Follow</button>
                    </div>
                    <p className="text-sm mb-3 drop-shadow-md">Can't believe how good this turned out! ✨ <span className="font-bold">#memories #{activeTab}</span></p>
                    <div className="flex items-center gap-2 text-xs opacity-90 bg-black/30 w-fit px-3 py-1.5 rounded-full backdrop-blur-md">
                      <Music size={12} className="animate-spin-slow" />
                      <div className="overflow-hidden w-32">
                        <p className="whitespace-nowrap">Trending Audio • Original Sound</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons Right */}
                <div className="absolute bottom-24 right-4 flex flex-col gap-6 items-center">
                  <div className="text-center group cursor-pointer">
                    <div className="p-2 transition-transform group-hover:scale-125"><Star size={24} fill="white" className="drop-shadow-lg" /></div>
                    <span className="text-[10px] font-bold drop-shadow-md">24.5k</span>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="p-2 transition-transform group-hover:scale-125"><div className="w-6 h-6 bg-white rounded-full border-2 border-black"></div></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Phone Notch overlay */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20"></div>
        </div>

        {/* Explainer Text */}
        <div className="flex-1 max-w-xs text-center lg:text-left order-3 lg:order-3">
          <h3 className="text-3xl font-bold mb-4">
            {showAfter ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Polished Perfection</span> : <span className="text-gray-400">The Raw Chaos</span>}
          </h3>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            {showAfter
              ? "Perfectly cut to the beat, color corrected, and sized for Instagram/TikTok. Delivered in 24 hours."
              : `Stop scrolling through hundreds of blurry photos and 3-second clips. We take this mess...`}
          </p>
          {!showAfter && (
            <button
              onClick={() => setShowAfter(true)}
              className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 mx-auto lg:mx-0 transition-all hover:gap-4 group shadow-lg shadow-blue-900/50"
            >
              See the fix <Play size={18} fill="currentColor" className="group-hover:text-blue-200" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default App;