"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, Shuffle, HelpCircle, BarChart3, Share2, Music, Volume2, VolumeX, Calendar, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LetterGriddleCottage() {
  // ============================================
  // SEASON CONFIGURATION
  // ============================================
  const seasons = {
    summer: {
      name: 'Summer',
      icon: '☀️',
      subheading: 'Summer Escape',
      eventTitle: '☀️ Summer Escape',
      eventDates: 'Summer 2026',
      eventDescription: 'Escape to the beach cottage for puzzles about ocean waves, sunshine, and summer fun.',
      isActive: true,
      comingSoon: false,
      gradient: 'from-cyan-400 via-teal-300 to-emerald-300',
      cardBg: 'from-cyan-900/90 to-teal-900/90',
      accent: 'from-yellow-400 to-amber-300',
      text: 'text-white',
      textMuted: 'text-cyan-100',
      textOnBg: 'text-cyan-950',
      textMutedOnBg: 'text-cyan-900',
      border: 'border-yellow-300/40',
      letterBg: 'from-cyan-700 to-teal-800',
      letterSelected: 'from-yellow-400 to-amber-300',
      revealed: 'from-orange-500 to-red-400',
      correct: 'from-emerald-400 to-emerald-500',
      wrong: 'from-rose-400 to-rose-500',
      ambient: ['🌊', '☀️', '🐚', '🌴', '⭐'],
      tracks: [
        { name: 'Summer Breeze', file: '/summer-breeze.mp3' },
        { name: 'Ocean Waves', file: '/ocean-waves.mp3' },
        { name: 'Tropical Vibes', file: '/tropical-vibes.mp3' },
        { name: 'Sunny Days', file: '/sunny-days.mp3' },
      ],
    },
    spring: {
      name: 'Spring',
      icon: '🌸',
      subheading: 'Spring Awakening',
      eventTitle: '🌷 Spring Awakening',
      eventDates: 'March 2026',
      eventDescription: 'Watch the garden come alive with puzzles about flowers, renewal, and springtime joy.',
      isActive: false,
      comingSoon: true,
      gradient: 'from-emerald-800 via-teal-700 to-cyan-800',
      cardBg: 'from-emerald-700/80 to-teal-800/80',
      accent: 'from-pink-400 to-rose-500',
      text: 'text-emerald-100',
      textMuted: 'text-emerald-200/70',
      border: 'border-emerald-400/30',
      letterBg: 'from-emerald-600 to-teal-700',
      letterSelected: 'from-pink-400 to-rose-500',
      revealed: 'from-amber-400 to-yellow-500',
      correct: 'from-emerald-400 to-emerald-500',
      wrong: 'from-rose-400 to-rose-500',
      ambient: ['🌸', '🌷', '✨', '🦋', '🌼'],
      tracks: [],
    },
    fall: {
      name: 'Fall',
      icon: '🍂',
      subheading: 'Autumn Adventures',
      eventTitle: '🍁 Autumn Adventures',
      eventDates: 'Coming Fall 2026',
      eventDescription: 'Hike through puzzles about falling leaves, harvest time, and cozy autumn evenings.',
      isActive: false,
      comingSoon: true,
      gradient: 'from-orange-800 via-amber-700 to-red-900',
      cardBg: 'from-amber-800/80 to-orange-900/80',
      accent: 'from-amber-400 to-orange-500',
      text: 'text-amber-100',
      textMuted: 'text-amber-200/70',
      border: 'border-amber-400/30',
      letterBg: 'from-amber-600 to-amber-700',
      letterSelected: 'from-amber-400 to-orange-500',
      revealed: 'from-amber-300 to-amber-400',
      correct: 'from-emerald-400 to-emerald-500',
      wrong: 'from-rose-400 to-rose-500',
      ambient: ['🍂', '🍁', '✨', '🍃', '⭐'],
      tracks: [],
    },
    winter: {
      name: 'Winter',
      icon: '❄️',
      subheading: 'Winter Wonderland',
      eventTitle: '❄️ Winter Wonderland',
      eventDates: 'Coming Winter 2026',
      eventDescription: 'Cozy up with puzzles about snowflakes, warm drinks, and winter magic.',
      isActive: false,
      comingSoon: true,
      gradient: 'from-slate-800 via-blue-900 to-slate-900',
      cardBg: 'from-slate-700/80 to-blue-900/80',
      accent: 'from-sky-400 to-blue-500',
      text: 'text-sky-100',
      textMuted: 'text-sky-200/70',
      border: 'border-sky-400/30',
      letterBg: 'from-slate-600 to-slate-700',
      letterSelected: 'from-sky-400 to-blue-500',
      revealed: 'from-emerald-400 to-emerald-500',
      correct: 'from-emerald-400 to-emerald-500',
      wrong: 'from-rose-400 to-rose-500',
      ambient: ['❄️', '❄️', '✨', '⭐', '❄️'],
      tracks: [],
    },
  };

  const [currentSeason, setCurrentSeason] = useState('summer');
  const season = seasons[currentSeason];

  // ============================================
  // SUMMER PUZZLES
  // ============================================
  const allPuzzles = [
    {
      puzzleNumber: 1, category: "Tropical Fruit",
      funFact: "Despite its name, the pineapple is neither a pinecone nor a single fruit. It is actually a cluster of dozens of individual berries that have fused together around a central core!",
      quote: "Life is better with a little tropical twist.", quoteAuthor: "Unknown",
      words: [
        { word: "LIME",      hint: "Bright citrus fruit, tart and green",                                          letters: ['E','L','M','I'],                   revealedIndex: 2 },
        { word: "MANGO",     hint: "Sweet tropical fruit with golden flesh",                                       letters: ['G','N','O','M','A'],               revealedIndex: 2 },
        { word: "PAPAYA",    hint: "Orange tropical fruit with black seeds",                                       letters: ['P','P','A','A','A','Y'],           revealedIndex: 3 },
        { word: "COCONUT",   hint: "Tropical fruit with a hard brown shell",                                       letters: ['C','O','O','N','C','T','U'],       revealedIndex: 3 },
        { word: "PINEAPPLE", hint: "Spiky tropical fruit that is actually many berries fused together",            letters: ['I','P','E','P','E','P','N','L','A'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 2, category: "Road Trip",
      funFact: "The scenic 469-mile Blue Ridge Parkway in the Appalachian Mountains sees more visitors annually than the Grand Canyon.",
      quote: "Not all those who wander are lost.", quoteAuthor: "J.R.R. Tolkien",
      words: [
        { word: "MAPS",     hint: "Navigation tools for finding your way",         letters: ['S','A','M','P'],               revealedIndex: 2 },
        { word: "DRIVE",    hint: "To steer a vehicle down the road",              letters: ['E','R','V','I','D'],           revealedIndex: 2 },
        { word: "ROUTED",   hint: "Directed along a planned path",                 letters: ['O','U','D','T','E','R'],       revealedIndex: 3 },
        { word: "MILEAGE",  hint: "Distance traveled measured in miles",           letters: ['L','G','M','E','E','A','I'],   revealedIndex: 3 },
        { word: "HIGHWAYS", hint: "Major roads built for fast travel",             letters: ['S','H','W','Y','H','I','G','A'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 3, category: "Beaches",
      funFact: "Beach vacations only became a popular tourist trend in the mid-18th century, largely adopted by Europeans seeking seaside health retreats.",
      quote: "The ocean stirs the heart, inspires the imagination.", quoteAuthor: "Robert Henri",
      words: [
        { word: "SURF",     hint: "To ride ocean waves on a board",                letters: ['F','R','S','U'],               revealedIndex: 2 },
        { word: "SHORE",    hint: "Where the land meets the sea",                  letters: ['R','H','O','E','S'],           revealedIndex: 2 },
        { word: "CASTLE",   hint: "Sandy structure built at the beach",            letters: ['L','T','S','C','E','A'],       revealedIndex: 3 },
        { word: "SUNRISE",  hint: "The sun coming up over the horizon",            letters: ['S','S','I','N','U','E','R'],   revealedIndex: 3 },
        { word: "UMBRELLA", hint: "Shady canopy you plant in the sand",            letters: ['L','M','L','E','R','A','B','U'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 4, category: "Barbecue",
      funFact: "Never put all the food on the buffet table at once. Setting out one dish at a time prevents guests from loading up their plates in the first five minutes and ensures food stays at a safe temperature.",
      quote: "Good food is the foundation of genuine happiness.", quoteAuthor: "Auguste Escoffier",
      words: [
        { word: "RIBS",     hint: "Meaty cuts cooked low and slow",                letters: ['R','S','I','B'],               revealedIndex: 2 },
        { word: "GRILL",    hint: "Metal grate used for cooking over fire",        letters: ['G','R','I','L','L'],           revealedIndex: 2 },
        { word: "SMOKER",   hint: "Device that slow-cooks meat with smoke",        letters: ['R','E','S','O','M','K'],       revealedIndex: 3 },
        { word: "BRISKET",  hint: "Tough beef cut perfect for slow smoking",       letters: ['S','I','E','K','T','R','B'],   revealedIndex: 3 },
        { word: "CHARCOAL", hint: "Black fuel made from burned wood",              letters: ['A','R','C','L','O','A','H','C'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 5, category: "Camping",
      funFact: "A few days under the stars can completely reset your body's natural clock by adjusting your melatonin levels, while 97% of campers report that simply boosting their happiness is their main motivator.",
      quote: "In every walk with nature, one receives far more than he seeks.", quoteAuthor: "John Muir",
      words: [
        { word: "TENT",     hint: "Portable fabric shelter for sleeping outdoors", letters: ['T','N','E','T'],               revealedIndex: 2 },
        { word: "CABIN",    hint: "Small cozy wooden structure in the woods",      letters: ['C','N','I','B','A'],           revealedIndex: 2 },
        { word: "FOREST",   hint: "Dense woodland of trees",                       letters: ['F','E','O','R','T','S'],       revealedIndex: 3 },
        { word: "BONFIRE",  hint: "Large outdoor fire for warmth and light",       letters: ['R','F','I','E','O','N','B'],   revealedIndex: 3 },
        { word: "BACKPACK", hint: "Bag worn on your back for hiking",              letters: ['K','A','B','A','P','C','C','K'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 6, category: "Fireworks",
      funFact: "Because light travels much faster than sound, you always see the explosion before you hear the boom. A delay of 5 seconds between the flash and the boom means the explosion is roughly a mile away.",
      quote: "Let your light shine.", quoteAuthor: "Matthew 5:16",
      words: [
        { word: "GLOW",     hint: "Warm steady light in the night sky",            letters: ['W','L','O','G'],               revealedIndex: 2 },
        { word: "SPARK",    hint: "Tiny flash of fire and light",                  letters: ['A','R','K','S','P'],           revealedIndex: 2 },
        { word: "ROCKET",   hint: "Firework launched high into the sky",           letters: ['O','C','R','E','T','K'],       revealedIndex: 3 },
        { word: "DISPLAY",  hint: "A show of fireworks for an audience",           letters: ['I','L','S','D','Y','A','P'],   revealedIndex: 3 },
        { word: "SPARKLER", hint: "Hand-held stick that showers sparks",           letters: ['P','K','R','R','E','L','A','S'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 7, category: "Summer Nights",
      funFact: "Fireflies (or lightning bugs) flash in precise patterns. In the Great Smoky Mountains National Park, thousands of synchronous fireflies blink perfectly together to attract mates.",
      quote: "Summer nights are made for fireflies and wishes.", quoteAuthor: "Unknown",
      words: [
        { word: "HEAT",     hint: "Warmth of a summer evening",                    letters: ['T','H','A','E'],               revealedIndex: 2 },
        { word: "BALMY",    hint: "Warm and pleasantly mild",                      letters: ['M','A','L','B','Y'],           revealedIndex: 2 },
        { word: "BREEZY",   hint: "Gently windy and cool",                         letters: ['Z','E','Y','R','E','B'],       revealedIndex: 3 },
        { word: "FIREFLY",  hint: "Glowing insect that lights up the night",       letters: ['F','R','I','L','E','Y','F'],   revealedIndex: 3 },
        { word: "CRICKETS", hint: "Insects whose chirping fills summer nights",    letters: ['T','S','C','E','R','C','K','I'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 8, category: "Hiking",
      funFact: "The first recorded recreational hike dates back to 125 AD, when Roman Emperor Hadrian climbed Sicily's Mount Etna.",
      quote: "The mountains are calling and I must go.", quoteAuthor: "John Muir",
      words: [
        { word: "PEAK",     hint: "The very top of a mountain",                    letters: ['K','P','E','A'],               revealedIndex: 2 },
        { word: "MOUNT",    hint: "To climb up a steep hill or mountain",          letters: ['M','U','O','N','T'],           revealedIndex: 2 },
        { word: "VALLEY",   hint: "Low land between two hills or mountains",       letters: ['L','V','E','L','A','Y'],       revealedIndex: 3 },
        { word: "COMPASS",  hint: "Navigation tool that always points north",      letters: ['A','C','S','P','O','S','M'],   revealedIndex: 3 },
        { word: "WILDLIFE", hint: "Animals living in their natural habitat",       letters: ['L','E','I','L','I','F','D','W'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 9, category: "Water Parks",
      funFact: "Wisconsin Dells, Wisconsin, holds the title of the Waterpark Capital of the World, boasting over 20 water parks.",
      quote: "Life is cool by the pool.", quoteAuthor: "Unknown",
      words: [
        { word: "WAVE",     hint: "A rolling swell of water",                      letters: ['W','E','A','V'],               revealedIndex: 2 },
        { word: "SLIDE",    hint: "Slippery chute you zoom down into water",       letters: ['L','S','E','I','D'],           revealedIndex: 2 },
        { word: "SPLASH",   hint: "When water sprays and scatters",                letters: ['P','S','A','H','L','S'],       revealedIndex: 3 },
        { word: "FLOATIE",  hint: "Inflatable ring that keeps you afloat",         letters: ['E','L','I','F','O','T','A'],   revealedIndex: 3 },
        { word: "FOUNTAIN", hint: "A decorative jet of water",                     letters: ['O','A','T','I','F','N','U','N'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 10, category: "Sand Castles",
      funFact: "Building the perfect sand castle comes down to a strict mathematical recipe: the magic ratio is exactly 8 parts sand to 1 part water.",
      quote: "Every castle starts with a single grain of sand.", quoteAuthor: "Unknown",
      words: [
        { word: "MOAT",     hint: "Water-filled ditch surrounding a castle",       letters: ['O','T','M','A'],               revealedIndex: 2 },
        { word: "SHAPE",    hint: "The form or outline of your creation",          letters: ['E','A','S','P','H'],           revealedIndex: 2 },
        { word: "SCULPT",   hint: "To carve and mold with your hands",             letters: ['S','U','P','C','L','T'],       revealedIndex: 3 },
        { word: "TROWELS",  hint: "Small flat tools used for shaping sand",        letters: ['S','W','E','R','O','T','L'],   revealedIndex: 3 },
        { word: "FORTRESS", hint: "A strong defensive structure",                  letters: ['O','S','S','E','R','F','R','T'], revealedIndex: 4 },
      ],
    },
  ];


  // ============================================
  // PUZZLE SELECTION
  // ============================================
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [showPuzzleSelector, setShowPuzzleSelector] = useState(false);
  const puzzleData = allPuzzles[currentPuzzleIndex];

  const goToPreviousPuzzle = () => setCurrentPuzzleIndex(prev => prev > 0 ? prev - 1 : allPuzzles.length - 1);
  const goToNextPuzzle = () => setCurrentPuzzleIndex(prev => prev < allPuzzles.length - 1 ? prev + 1 : 0);

  // ============================================
  // STATE
  // ============================================
  const [hasMounted, setHasMounted] = useState(false);

  const initializeWords = () => puzzleData.words.map(w => {
    const letters = Array(w.word.length).fill('');
    letters[w.revealedIndex] = w.word[w.revealedIndex];
    return letters;
  });

  const initializeAvailable = () => puzzleData.words.map(w => {
    const letters = [...w.letters];
    const revealedLetter = w.word[w.revealedIndex];
    const revealedIdx = letters.indexOf(revealedLetter);
    if (revealedIdx !== -1) letters.splice(revealedIdx, 1);
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters;
  });

  const [selectedLetters, setSelectedLetters] = useState(initializeWords);
  const [availableLetters, setAvailableLetters] = useState(initializeAvailable);
  const [completedWords, setCompletedWords] = useState([false, false, false, false, false]);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedWordIdx, setSelectedWordIdx] = useState(null);
  const [selectedLetterIdx, setSelectedLetterIdx] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [hintsRevealed, setHintsRevealed] = useState([false, false, false, false, false]);
  const [wrongPlacements, setWrongPlacements] = useState({});
  const [celebratingWord, setCelebratingWord] = useState(null);
  const [crossedOut, setCrossedOut] = useState([[], [], [], [], []]);
  const [focusedWordIdx, setFocusedWordIdx] = useState(0);
  const [startTime, setStartTime] = useState(() => Date.now());
  const [completionTime, setCompletionTime] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showJukebox, setShowJukebox] = useState(false);
  const [showSeasonInfo, setShowSeasonInfo] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);
  const [stats, setStats] = useState({ puzzlesCompleted: 0, currentStreak: 0, maxStreak: 0, fastestTime: null, lastPlayedDate: null });
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [isReplay, setIsReplay] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const allComplete = completedWords.every(c => c);

  // ============================================
  // EFFECTS
  // ============================================
  useEffect(() => {
    if (hasMounted) {
      setSelectedLetters(initializeWords());
      setAvailableLetters(initializeAvailable());
      setCompletedWords([false, false, false, false, false]);
      setCrossedOut([[], [], [], [], []]);
      setHintsRevealed([false, false, false, false, false]);
      setWrongPlacements({});
      setCompletionTime(null);
      setStartTime(Date.now());
      setFocusedWordIdx(0);
      setIsReplay(false);
      setTodayCompleted(false);
    }
  }, [currentPuzzleIndex]);

  useEffect(() => {
    setHasMounted(true);
    setShowWelcome(true);
    try { const saved = localStorage.getItem('cottageStats'); if (saved) setStats(JSON.parse(saved)); } catch (e) {}
    try {
      const comp = localStorage.getItem('cottageCompletion');
      if (comp) {
        const parsed = JSON.parse(comp);
        if (parsed.date === new Date().toDateString() && parsed.puzzleNumber === puzzleData.puzzleNumber) {
          setTodayCompleted(true); setIsReplay(true);
        }
      }
    } catch (e) {}
    try {
      const prog = localStorage.getItem('cottageProgress');
      if (prog) {
        const p = JSON.parse(prog);
        if (p.puzzleNumber === puzzleData.puzzleNumber) {
          setSelectedLetters(p.selectedLetters);
          setAvailableLetters(p.availableLetters);
          setCompletedWords(p.completedWords);
          setCrossedOut(p.crossedOut);
          setHintsRevealed(p.hintsRevealed);
          setStartTime(Date.now() - (p.elapsed || 0));
        }
      }
    } catch (e) {}
    try {
      const m = localStorage.getItem('cottageMusicEnabled');
      if (m === 'true') setMusicEnabled(true);
      const v = localStorage.getItem('cottageMusicVolume');
      if (v) setVolume(parseFloat(v));
      const t = localStorage.getItem('cottageMusicTrack');
      if (t) setCurrentTrack(parseInt(t));
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (!hasMounted || allComplete) return;
    const prog = { puzzleNumber: puzzleData.puzzleNumber, selectedLetters, availableLetters, completedWords, crossedOut, hintsRevealed, elapsed: Date.now() - startTime };
    try { localStorage.setItem('cottageProgress', JSON.stringify(prog)); } catch (e) {}
  }, [selectedLetters, availableLetters, completedWords, crossedOut, hintsRevealed, hasMounted, allComplete, startTime]);

  useEffect(() => {
    if (allComplete && !completionTime) {
      const time = Math.floor((Date.now() - startTime) / 1000);
      setCompletionTime(time);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
      if (!isReplay) {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        const newStats = {
          puzzlesCompleted: stats.puzzlesCompleted + 1,
          currentStreak: stats.lastPlayedDate === yesterday ? stats.currentStreak + 1 : (stats.lastPlayedDate === today ? stats.currentStreak : 1),
          maxStreak: Math.max(stats.maxStreak, stats.lastPlayedDate === yesterday ? stats.currentStreak + 1 : 1),
          fastestTime: stats.fastestTime ? Math.min(stats.fastestTime, time) : time,
          lastPlayedDate: today,
        };
        setStats(newStats);
        setTodayCompleted(true);
        try {
          localStorage.setItem('cottageStats', JSON.stringify(newStats));
          localStorage.setItem('cottageCompletion', JSON.stringify({ date: today, puzzleNumber: puzzleData.puzzleNumber, time }));
          localStorage.removeItem('cottageProgress');
        } catch (e) {}
      }
    }
  }, [allComplete, completionTime, startTime, stats, isReplay]);

  const lastTrackRef = useRef(null);
  useEffect(() => {
    if (!audioRef.current || !hasMounted) return;
    if (musicEnabled && season.tracks.length > 0) {
      const trackFile = season.tracks[currentTrack]?.file || '';
      if (lastTrackRef.current !== trackFile) { audioRef.current.src = trackFile; lastTrackRef.current = trackFile; }
      audioRef.current.volume = volume;
      if (audioRef.current.paused) audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [musicEnabled, currentTrack, hasMounted, season.tracks]);

  useEffect(() => { if (audioRef.current) audioRef.current.volume = volume; }, [volume]);

  useEffect(() => {
    const handleKey = (e) => {
      if (showHowToPlay || showStats || showShare || showJukebox || showSeasonInfo || showPuzzleSelector || allComplete) return;
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        const letters = availableLetters[focusedWordIdx];
        const idx = letters.findIndex(l => l === key);
        if (idx !== -1) {
          const slotIdx = selectedLetters[focusedWordIdx].findIndex((l, i) => l === '' && i !== puzzleData.words[focusedWordIdx].revealedIndex);
          if (slotIdx !== -1) placeLetter(focusedWordIdx, slotIdx, key, idx);
        }
      }
      if (e.key === 'Backspace') {
        const slots = selectedLetters[focusedWordIdx];
        for (let i = slots.length - 1; i >= 0; i--) {
          if (slots[i] !== '' && i !== puzzleData.words[focusedWordIdx].revealedIndex) { removeLetter(focusedWordIdx, i); break; }
        }
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedWordIdx(prev => e.key === 'ArrowDown' ? (prev < 4 ? prev + 1 : 0) : (prev > 0 ? prev - 1 : 4));
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        const next = completedWords.findIndex((c, i) => !c && i > focusedWordIdx);
        if (next !== -1) setFocusedWordIdx(next);
        else { const first = completedWords.findIndex(c => !c); if (first !== -1) setFocusedWordIdx(first); }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [availableLetters, selectedLetters, focusedWordIdx, completedWords, allComplete, showHowToPlay, showStats, showShare, showJukebox, showSeasonInfo, showPuzzleSelector]);

  // ============================================
  // GAME FUNCTIONS
  // ============================================
  const checkWordComplete = (wordIdx, letters) => {
    if (letters.join('') === puzzleData.words[wordIdx].word && !completedWords[wordIdx]) {
      const newComp = [...completedWords];
      newComp[wordIdx] = true;
      setCompletedWords(newComp);
      setCelebratingWord(wordIdx);
      setTimeout(() => setCelebratingWord(null), 1500);
      const next = completedWords.findIndex((c, i) => !c && i > wordIdx);
      if (next !== -1) setFocusedWordIdx(next);
    }
  };

  const placeLetter = (wordIdx, slotIdx, letter, letterIdx) => {
    const newAvail = [...availableLetters];
    newAvail[wordIdx] = newAvail[wordIdx].filter((_, i) => i !== letterIdx);
    setAvailableLetters(newAvail);
    const newLetters = [...selectedLetters[wordIdx]];
    newLetters[slotIdx] = letter;
    const newSel = [...selectedLetters];
    newSel[wordIdx] = newLetters;
    setSelectedLetters(newSel);
    setSelectedLetter(null); setSelectedWordIdx(null); setSelectedLetterIdx(null); setSelectedSlot(null);
    if (letter !== puzzleData.words[wordIdx].word[slotIdx]) {
      setWrongPlacements(p => ({ ...p, [`${wordIdx}-${slotIdx}`]: true }));
      setTimeout(() => setWrongPlacements(p => { const n = { ...p }; delete n[`${wordIdx}-${slotIdx}`]; return n; }), 600);
    }
    checkWordComplete(wordIdx, newLetters);
  };

  const removeLetter = (wordIdx, slotIdx) => {
    const letter = selectedLetters[wordIdx][slotIdx];
    if (!letter || slotIdx === puzzleData.words[wordIdx].revealedIndex) return;
    const newAvail = [...availableLetters];
    newAvail[wordIdx] = [...newAvail[wordIdx], letter];
    setAvailableLetters(newAvail);
    const newSel = [...selectedLetters];
    newSel[wordIdx] = [...newSel[wordIdx]];
    newSel[wordIdx][slotIdx] = '';
    setSelectedLetters(newSel);
  };

  const handleLetterClick = (wordIdx, letter, letterIdx) => {
    if (completedWords[wordIdx]) return;
    setFocusedWordIdx(wordIdx);
    document.activeElement?.blur();
    if (selectedSlot?.wordIdx === wordIdx) {
      placeLetter(wordIdx, selectedSlot.slotIdx, letter, letterIdx);
    } else {
      setSelectedLetter(letter); setSelectedWordIdx(wordIdx); setSelectedLetterIdx(letterIdx); setSelectedSlot(null);
    }
  };

  const handleSlotClick = (wordIdx, slotIdx) => {
    if (slotIdx === puzzleData.words[wordIdx].revealedIndex || completedWords[wordIdx]) return;
    setFocusedWordIdx(wordIdx);
    const current = selectedLetters[wordIdx][slotIdx];
    if (current) { removeLetter(wordIdx, slotIdx); }
    else if (selectedLetter && selectedWordIdx === wordIdx) { placeLetter(wordIdx, slotIdx, selectedLetter, selectedLetterIdx); }
    else { setSelectedSlot({ wordIdx, slotIdx }); setSelectedLetter(null); }
  };

  const crossOutLetter = (e, wordIdx, letterIdx) => {
    e.stopPropagation(); e.target.blur(); document.activeElement?.blur();
    const letter = availableLetters[wordIdx][letterIdx];
    const newCrossed = [...crossedOut];
    newCrossed[wordIdx] = [...newCrossed[wordIdx], { letter, idx: letterIdx }];
    setCrossedOut(newCrossed);
    const newAvail = [...availableLetters];
    newAvail[wordIdx] = newAvail[wordIdx].filter((_, i) => i !== letterIdx);
    setAvailableLetters(newAvail);
  };

  const restoreLetter = (wordIdx, crossedIdx) => {
    const item = crossedOut[wordIdx][crossedIdx];
    const newAvail = [...availableLetters];
    newAvail[wordIdx] = [...newAvail[wordIdx], item.letter];
    setAvailableLetters(newAvail);
    const newCrossed = [...crossedOut];
    newCrossed[wordIdx] = newCrossed[wordIdx].filter((_, i) => i !== crossedIdx);
    setCrossedOut(newCrossed);
    document.activeElement?.blur();
  };

  const shuffleWord = (wordIdx) => {
    const newAvail = [...availableLetters];
    const arr = [...newAvail[wordIdx]];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    newAvail[wordIdx] = arr;
    setAvailableLetters(newAvail);
  };

  const toggleHint = (idx) => { const newHints = [...hintsRevealed]; newHints[idx] = !newHints[idx]; setHintsRevealed(newHints); };

  const resetPuzzle = () => {
    setSelectedLetters(initializeWords()); setAvailableLetters(initializeAvailable());
    setCompletedWords([false, false, false, false, false]); setCrossedOut([[], [], [], [], []]);
    setHintsRevealed([false, false, false, false, false]); setWrongPlacements({});
    setCompletionTime(null); setStartTime(Date.now()); setFocusedWordIdx(0);
    if (todayCompleted) setIsReplay(true);
    localStorage.removeItem('cottageProgress');
  };

  const handleShare = async () => {
    const text = `Free & ad-free!\nPart of the Letter Griddle Games 🥞\nMore games: lettergriddle.com\n\n☀️ Letter Griddle Cottage\n${season.eventTitle}\n${puzzleData.category}\n\n${'🌊'.repeat(completedWords.filter(c => c).length)}\n${completedWords.filter(c => c).length}/5 words${isReplay ? ' (Replay)' : ''}\n\nPlay at lettergriddlecottage.com`;
    if (navigator.share) {
      try { await navigator.share({ title: 'Letter Griddle Cottage', text }); return; } catch (err) { if (err.name === 'AbortError') return; }
    }
    navigator.clipboard.writeText(text).then(() => { setShareCopied(true); setTimeout(() => setShareCopied(false), 2000); });
  };

  const formatTime = (s) => { if (!s) return 'N/A'; const m = Math.floor(s / 60); const sec = s % 60; return m > 0 ? `${m}m ${sec}s` : `${sec}s`; };

  const handleSeasonClick = (key) => { setCurrentSeason(key); if (seasons[key].comingSoon) setShowSeasonInfo(true); };

  const dismissWelcome = () => setShowWelcome(false);

  // ============================================
  // RENDER
  // ============================================
  if (!hasMounted) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${season.gradient} flex items-center justify-center`}>
        <div className={`text-xl ${season.text}`}>☀️ Loading Summer Cottage...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${season.gradient} p-3 relative overflow-hidden transition-all duration-700`}>

      {/* Twinkling Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={`orb-${i}`} className="absolute rounded-full bg-white"
            style={{ width: `${3 + (i % 4) * 2}px`, height: `${3 + (i % 4) * 2}px`, left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%`, opacity: 0.3, animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {season.ambient.map((emoji, i) => (
          <div key={i} className="absolute text-2xl opacity-20"
            style={{ left: `${10 + i * 18}%`, top: `${15 + (i % 3) * 25}%`, animation: `float ${4 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}>
            {emoji}
          </div>
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute text-2xl"
              style={{ left: `${(i * 11) % 100}%`, top: '-30px', animation: `fall 3s ease-in forwards`, animationDelay: `${i * 0.1}s` }}>
              {['🌊', '☀️', '🐚', '🌴', '⭐'][i % 5]}
            </div>
          ))}
        </div>
      )}

      <audio ref={audioRef} preload="none"
        onEnded={() => {
          const nextTrack = (currentTrack + 1) % season.tracks.length;
          setCurrentTrack(nextTrack);
          localStorage.setItem('cottageMusicTrack', nextTrack.toString());
        }}
      />

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(3deg); } }
        @keyframes fall { to { transform: translateY(100vh) rotate(360deg); opacity: 0; } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.3); } }
        @keyframes bounceIn { 0% { transform: scale(0.3); opacity: 0; } 50% { transform: scale(1.05); } 70% { transform: scale(0.9); } 100% { transform: scale(1); opacity: 1; } }
        .shake { animation: shake 0.4s ease-in-out; }
        .animate-bounce-in { animation: bounceIn 0.6s ease-out forwards; }
        *, *::before, *::after { -webkit-tap-highlight-color: transparent !important; -webkit-touch-callout: none !important; -webkit-user-select: none !important; user-select: none !important; caret-color: transparent !important; }
        button, [role="button"], .cursor-pointer { outline: none !important; -webkit-appearance: none !important; }
        button:focus, button:active, button:focus-visible { outline: none !important; caret-color: transparent !important; }
      `}</style>

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-2">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-2xl">☀️</span>
            <h1 className="text-xl md:text-2xl font-bold text-cyan-950" style={{ fontFamily: 'Georgia, serif' }}>Letter Griddle Cottage</h1>
            <span className="text-2xl">🌊</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button onClick={() => setShowHowToPlay(true)} className="p-1.5 rounded-full bg-white/30 hover:bg-white/50 text-cyan-950" title="How to Play"><HelpCircle size={16} /></button>
            <button onClick={() => setShowJukebox(true)} className={`p-1.5 rounded-full ${musicEnabled ? 'bg-white/50' : 'bg-white/30'} hover:bg-white/50 text-cyan-950`} title="Music">
              {musicEnabled ? <Volume2 size={16} /> : <Music size={16} />}
            </button>
            <button onClick={() => setShowStats(true)} className="p-1.5 rounded-full bg-white/30 hover:bg-white/50 text-cyan-950" title="Stats"><BarChart3 size={16} /></button>
          </div>
        </div>

        {/* Puzzle Nav */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <button onClick={goToPreviousPuzzle} className="p-1.5 rounded-full bg-white/30 hover:bg-white/50 text-cyan-950"><ChevronLeft size={18} /></button>
          <button onClick={() => setShowPuzzleSelector(true)} className="px-5 py-2 rounded-full text-white text-sm font-semibold shadow-md hover:scale-105 transition-transform" style={{ background: 'linear-gradient(90deg,#e8622a,#f97316)', fontFamily: 'Georgia, serif' }}>
            Puzzle {puzzleData.puzzleNumber} / {allPuzzles.length}
          </button>
          <button onClick={goToNextPuzzle} className="p-1.5 rounded-full bg-white/30 hover:bg-white/50 text-cyan-950"><ChevronRight size={18} /></button>
        </div>

        {/* Category Banner */}
        <div className="text-white rounded-xl p-3 mb-3 shadow-lg text-center" style={{ background: 'linear-gradient(90deg,#e8622a,#f97316)' }}>
          <p className="text-xs opacity-80 mb-0.5">Puzzle #{puzzleData.puzzleNumber} • ☀️ Summer Escape</p>
          <p className="text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>{puzzleData.category}</p>
        </div>

        {/* Replay Notice */}
        {isReplay && !allComplete && (
          <div className="bg-white/20 rounded-lg p-2 mb-3 text-center text-cyan-950 text-xs">
            🔄 You've already solved today's puzzle! Playing for fun.
          </div>
        )}

        {/* Progress Notice */}
        {!allComplete && (
          <div className="text-center text-xs text-cyan-900 mb-3">
            ✨ Progress saves automatically!
            <button onClick={resetPuzzle} className="ml-2 underline hover:no-underline">🔄 Reset</button>
          </div>
        )}

        {/* Completion Modal */}
        {allComplete && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 p-4">
            <div className="bg-cyan-900 backdrop-blur rounded-2xl p-6 max-w-md w-full text-center border-2 border-cyan-700 shadow-2xl transform animate-bounce-in">
              <p className="text-4xl mb-2">🌊</p>
              <p className={`text-2xl font-bold ${season.text} mb-1`} style={{ fontFamily: 'Georgia, serif' }}>Cottage Complete!</p>
              <p className={`text-lg ${season.text} mb-2`} style={{ fontFamily: 'Georgia, serif' }}>{puzzleData.category}</p>
              <p className={`${season.text} text-lg mb-3`}>{'🌊'.repeat(5)}</p>
              <p className={`${season.textMuted} text-sm mb-4`}>5/5 words{isReplay ? ' (Replay)' : ''}</p>
              <div className="bg-white/10 rounded-lg p-3 mb-4 text-center">
                <p className={`text-lg italic ${season.text} mb-2`}>"{puzzleData.quote}"</p>
                <p className={`text-sm ${season.textMuted}`}>by {puzzleData.quoteAuthor}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 mb-4 text-left">
                <p className={`text-xs font-bold ${season.text} mb-1`}>☀️ Did you know?</p>
                <p className={`text-sm ${season.text}`}>{puzzleData.funFact}</p>
              </div>
              <div className="flex justify-center gap-3 flex-wrap">
                <button onClick={() => setShowShare(true)} className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${season.accent} text-white font-semibold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform`}>
                  ☀️ Share
                </button>
                {currentPuzzleIndex < allPuzzles.length - 1 && (
                  <button onClick={() => setCurrentPuzzleIndex(currentPuzzleIndex + 1)} className="px-5 py-2.5 rounded-full text-white font-semibold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform" style={{background:'linear-gradient(90deg,#e8622a,#f97316)'}}>
                    🌊 Next Puzzle
                  </button>
                )}
                <button onClick={resetPuzzle} className={`px-5 py-2.5 rounded-full bg-white/20 ${season.text} font-semibold text-sm hover:bg-white/30 transition-colors`}>
                  🔄 Play Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Keyboard Hint */}
        {!allComplete && (
          <p className="text-center text-xs text-cyan-900 mb-2">⌨️ Type letters directly! ↑↓ switch words, Tab next.</p>
        )}

        {/* Words */}
        <div className="space-y-2">
          {puzzleData.words.map((wordData, wordIdx) => {
            const isComplete = completedWords[wordIdx];
            const isCelebrating = celebratingWord === wordIdx;
            const isFocused = focusedWordIdx === wordIdx && !isComplete;
            return (
              <div key={wordIdx} onClick={() => !isComplete && setFocusedWordIdx(wordIdx)}
                className={`bg-gradient-to-br ${season.cardBg} backdrop-blur rounded-xl p-2.5 border-2 transition-all cursor-pointer
                  ${isFocused ? 'border-amber-400/50 bg-white/5' : `${season.border} border-transparent`}
                  ${isCelebrating ? 'ring-4 ring-amber-400/50 scale-[1.02]' : ''}
                  ${isComplete ? 'opacity-80' : ''}`}>

                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">🌊</span>
                    <span className={`text-xs font-bold ${season.text}`}>{wordData.word.length} Letters</span>
                    {isComplete && <span>☀️</span>}
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); toggleHint(wordIdx); }}
                    className="px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                    style={{ background: 'linear-gradient(90deg,#e8622a,#f97316)' }}>
                    {hintsRevealed[wordIdx] ? 'Hide' : 'Hint'}
                  </button>
                </div>

                {hintsRevealed[wordIdx] && (
                  <p className={`text-sm ${season.text} bg-white/10 rounded-lg p-2 mb-2`}>🌊 {wordData.hint}</p>
                )}

                <div className="flex gap-1.5 justify-center mb-2 flex-wrap">
                  {wordData.word.split('').map((letter, letterIdx) => {
                    const isRevealed = letterIdx === wordData.revealedIndex;
                    const current = selectedLetters[wordIdx][letterIdx];
                    const isWrong = wrongPlacements[`${wordIdx}-${letterIdx}`];
                    const isSlotSelected = selectedSlot?.wordIdx === wordIdx && selectedSlot?.slotIdx === letterIdx;
                    let bgClass = `bg-white/10 border-dashed ${season.border}`;
                    if (isWrong) bgClass = `bg-gradient-to-br ${season.wrong} border-rose-400 shake`;
                    else if (isRevealed) bgClass = `bg-gradient-to-br ${season.revealed} border-transparent`;
                    else if (isComplete) bgClass = `bg-gradient-to-br ${season.correct} border-transparent`;
                    else if (current) bgClass = `bg-gradient-to-br ${season.letterBg} border-transparent`;
                    return (
                      <div key={letterIdx} onClick={(e) => { e.stopPropagation(); handleSlotClick(wordIdx, letterIdx); }}
                        className={`w-9 h-9 flex items-center justify-center text-base font-bold rounded-lg border-2 cursor-pointer transition-all ${bgClass} ${isSlotSelected ? 'ring-2 ring-white scale-105 bg-white/20' : ''} ${season.text}`}
                        style={{ fontFamily: 'Georgia, serif' }}>
                        {current}
                      </div>
                    );
                  })}
                </div>

                {isComplete && (
                  <p className={`text-center text-sm ${season.text} mt-2`}>
                    {['Sizzling start! 🌞', 'Wave rider! 🌊', 'Sun-kissed! ☀️', 'Tropical genius! 🌴', 'Golden! ⭐'][wordIdx]}
                  </p>
                )}

                {!isComplete && (
                  <div className="bg-black/20 rounded-lg p-2">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs ${season.textMuted}`}>🍳 Letter Griddle</span>
                      <button onClick={(e) => { e.stopPropagation(); shuffleWord(wordIdx); }} className={`text-xs ${season.textMuted} hover:${season.text} flex items-center gap-1`}>
                        <Shuffle size={12} /> Shuffle
                      </button>
                    </div>
                    <div className="flex gap-1.5 flex-wrap justify-center">
                      {availableLetters[wordIdx].map((letter, idx) => {
                        const isSelected = selectedLetter === letter && selectedWordIdx === wordIdx && selectedLetterIdx === idx;
                        return (
                          <div key={`${idx}-${letter}`} className="relative group" style={{ isolation: 'isolate' }}>
                            <button onMouseDown={(e) => e.preventDefault()} onClick={(e) => { e.stopPropagation(); handleLetterClick(wordIdx, letter, idx); }}
                              className={`w-8 h-8 rounded-full text-sm font-bold transition-all shadow-md select-none ${
                                isSelected ? `bg-gradient-to-br ${season.letterSelected} text-white scale-110 ring-2 ring-white`
                                : `bg-gradient-to-br ${season.letterBg} ${season.text} hover:scale-105`
                              }`}
                              style={{ fontFamily: 'Georgia, serif', WebkitUserSelect: 'none', willChange: 'transform' }} tabIndex={-1}>
                              {letter}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-cyan-900">
          <p className="mb-1">☀️ Letter Griddle Cottage • Part of the Letter Griddle Family 🥞</p>
          <div className="flex justify-center items-center gap-2 flex-wrap mb-2">
            <a href="https://lettergriddle.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors">
              🥞 Play More Letter Griddle Games
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Letter Griddle</span>
            <span>|</span>
            <a href="/privacy" className="hover:underline">Privacy</a>
            <span>|</span>
            <a href="/terms" className="hover:underline">Terms</a>
            <span>|</span>
            <a href="https://instagram.com/letter_griddle" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              <Instagram size={12} /> @letter_griddle
            </a>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* MODALS */}
      {/* ============================================ */}

      {/* Puzzle Selector Modal */}
      {showPuzzleSelector && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowPuzzleSelector(false)}>
          <div className={`bg-cyan-900 rounded-2xl p-5 max-w-md w-full border border-cyan-700 max-h-[90vh] overflow-y-auto`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>☀️ Select Puzzle</h2>
              <button onClick={() => setShowPuzzleSelector(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {allPuzzles.map((puzzle, idx) => (
                <button key={idx} onClick={() => { setCurrentPuzzleIndex(idx); setShowPuzzleSelector(false); }}
                  className={`p-3 rounded-lg text-left transition-all ${currentPuzzleIndex === idx ? `bg-gradient-to-r ${season.accent} text-white` : `bg-white/10 ${season.text} hover:bg-white/20`}`}>
                  <span className="font-bold">#{puzzle.puzzleNumber}: {puzzle.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* How to Play */}
      {showHowToPlay && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowHowToPlay(false)}>
          <div className={`bg-cyan-900 rounded-2xl p-5 max-w-md w-full border border-cyan-700 max-h-[90vh] overflow-y-auto`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>❓ How to Play</h2>
              <button onClick={() => setShowHowToPlay(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className={`space-y-3 ${season.text} text-sm`}>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">🏖️ Letter Griddle Cottage</p>
                <p>Unscramble all 5 words in each puzzle. Every word has its own Letter Griddle, just the letters you need, shuffled up!</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">☀️ How to Play</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Tap a letter from the griddle, then tap an empty slot</li>
                  <li>Or tap a slot first, then tap a letter</li>
                  <li>Tap a placed letter to put it back</li>
                  <li>One letter is revealed in each word to help you start</li>
                  <li>Use the Hint button if you get stuck</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">⌨️ Keyboard Shortcuts</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Type letters to place them</li>
                  <li>↑↓ arrows to switch words</li>
                  <li>Tab for next incomplete word</li>
                  <li>Backspace to remove a letter</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">💾 Progress</p>
                <p className="text-xs">Your progress saves automatically. Play as many puzzles as you like. Come back anytime!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      {showStats && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowStats(false)}>
          <div className={`bg-cyan-900 rounded-2xl p-5 max-w-md w-full border border-cyan-700 max-h-[90vh] overflow-y-auto`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>📊 Your Stats</h2>
              <button onClick={() => setShowStats(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[['Puzzles Solved', stats.puzzlesCompleted], ['Current Streak', `${stats.currentStreak} 🔥`], ['Best Streak', stats.maxStreak], ['Fastest Time', formatTime(stats.fastestTime)]].map(([label, val]) => (
                <div key={label} className="bg-white/10 rounded-lg p-3 text-center">
                  <div className={`text-2xl font-bold ${season.text}`}>{val}</div>
                  <div className={`text-xs ${season.textMuted}`}>{label}</div>
                </div>
              ))}
            </div>
            <p className={`mt-4 text-center text-xs ${season.textMuted}`}>Stats saved locally</p>
          </div>
        </div>
      )}

      {/* Share */}
      {showShare && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowShare(false)}>
          <div className={`bg-cyan-900 rounded-2xl p-5 max-w-md w-full border border-cyan-700`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>☀️ Share Results</h2>
              <button onClick={() => setShowShare(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className={`bg-black/20 rounded-lg p-4 mb-4 font-mono text-xs ${season.text}`}>
              <pre className="whitespace-pre-wrap">{`Free & ad-free!\nPart of the Letter Griddle Games 🥞\nMore games: lettergriddle.com\n\n☀️ Letter Griddle Cottage\n${season.eventTitle}\n${puzzleData.category}\n\n${'🌊'.repeat(completedWords.filter(c => c).length)}\n${completedWords.filter(c => c).length}/5 words${isReplay ? ' (Replay)' : ''}\n\nPlay at lettergriddlecottage.com`}</pre>
            </div>
            <button onClick={handleShare} className={`w-full py-3 rounded-full bg-gradient-to-r ${season.accent} text-white font-bold`}>
              {shareCopied ? '✓ Copied!' : '☀️ Share Results'}
            </button>
          </div>
        </div>
      )}

      {/* Jukebox */}
      {showJukebox && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowJukebox(false)}>
          <div className={`bg-cyan-900 rounded-2xl p-5 max-w-md w-full border border-cyan-700`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>🎵 Cottage Jukebox</h2>
              <button onClick={() => setShowJukebox(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-4 mb-4">
                <button onClick={() => setMusicEnabled(!musicEnabled)}
                  className={`px-4 py-2 rounded-full font-semibold ${musicEnabled ? `bg-gradient-to-r ${season.accent} text-white` : `bg-white/20 ${season.text}`}`}>
                  {musicEnabled ? '🔊 Music On' : '🔇 Music Off'}
                </button>
              </div>
              {season.tracks.length > 0 && (
                <div className="space-y-2">
                  {season.tracks.map((track, idx) => (
                    <button key={idx} onClick={() => { setCurrentTrack(idx); setMusicEnabled(true); }}
                      className={`w-full p-3 rounded-lg text-left transition-all ${currentTrack === idx && musicEnabled ? `bg-gradient-to-r ${season.accent} text-white` : `bg-white/10 ${season.text} hover:bg-white/20`}`}>
                      <span className="mr-2">{currentTrack === idx && musicEnabled ? '🎵' : '🎶'}</span>{track.name}
                    </button>
                  ))}
                </div>
              )}
              <div className="mt-4">
                <label className={`text-xs ${season.textMuted} block mb-2`}>Volume</label>
                <input type="range" min="0" max="1" step="0.1" value={volume}
                  onChange={(e) => { setVolume(parseFloat(e.target.value)); localStorage.setItem('cottageMusicVolume', e.target.value); }}
                  className="w-full" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Season Info */}
      {showSeasonInfo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowSeasonInfo(false)}>
          <div className={`bg-cyan-900 rounded-2xl p-5 max-w-md w-full border border-cyan-700`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>{season.icon} {season.name} at the Cottage</h2>
              <button onClick={() => setShowSeasonInfo(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className={`font-bold ${season.text} mb-1`}>{season.eventTitle}</h3>
                <p className={`text-sm ${season.textMuted} mb-2`}>📅 {season.eventDates}</p>
                <p className={`text-sm ${season.text}`}>{season.eventDescription}</p>
              </div>
              {season.comingSoon && (
                <div className={`text-center ${season.text} bg-white/10 rounded-lg p-4`}>
                  <p className="text-3xl mb-2">🔒</p>
                  <p className="font-bold">Coming Soon!</p>
                  <p className={`text-sm ${season.textMuted}`}>Check back when this season opens.</p>
                </div>
              )}
              {season.isActive && (
                <div className={`text-center ${season.text}`}>
                  <p className="text-2xl mb-1">☀️</p>
                  <p className="font-bold">Summer is here!</p>
                  <p className={`text-sm ${season.textMuted}`}>10 puzzles with fun facts and inspirational quotes.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Welcome Letter */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="max-w-md w-full max-h-[90vh] overflow-y-auto" style={{ fontFamily: 'Georgia, serif' }}>
            <div style={{
              background: '#fffdf4',
              border: '1px solid #c2b69d',
              borderRadius: '6px',
              boxShadow: '3px 3px 0 #c2b69d, 6px 6px 0 #a89880',
              padding: '24px',
            }}>
              <div className="text-center mb-4">
                <p className="text-4xl mb-2">☀️</p>
                <h1 className="text-xl font-bold text-cyan-950 mb-1">Welcome to Letter Griddle Cottage</h1>
                <p className="text-sm text-cyan-800" style={{ fontFamily: 'system-ui, sans-serif' }}>Summer Escape • 10 Puzzles</p>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Pull up a chair and stay awhile! Each puzzle has 5 words to unscramble from the Letter Griddle. Solve them all, then pick another and keep going all summer long.
              </p>

              <p className="text-xs font-bold text-cyan-900 mb-2 uppercase tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>Choose a topic to start:</p>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {allPuzzles.map((puzzle, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setCurrentPuzzleIndex(idx); dismissWelcome(); }}
                    className="text-left px-3 py-2 rounded-lg text-xs hover:scale-[1.02] transition-transform"
                    style={{
                      background: 'rgba(8,51,68,0.07)',
                      border: '1px solid rgba(8,51,68,0.15)',
                      fontFamily: 'system-ui, sans-serif',
                      color: '#083344',
                    }}>
                    <span className="font-bold mr-1" style={{ color: '#e8622a' }}>{puzzle.puzzleNumber}.</span>
                    {puzzle.category}
                  </button>
                ))}
              </div>

              <button
                onClick={dismissWelcome}
                className="w-full py-3 rounded-full text-white font-bold text-base shadow-lg hover:scale-105 transition-transform"
                style={{ background: 'linear-gradient(90deg, #e8622a, #f97316)', fontFamily: 'system-ui, sans-serif' }}>
                Let's Play! 🌊
              </button>

              <p className="text-center text-xs mt-3" style={{ color: '#bcaaa4', fontFamily: 'system-ui, sans-serif' }}>
                ✦ Beta Summer Days ✦ lettergriddle@gmail.com
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}