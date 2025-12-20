"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, Shuffle, HelpCircle, BarChart3, Share2, Music, Volume2, VolumeX, Calendar, Instagram } from 'lucide-react';

export default function LetterGriddleCottage() {
  // ============================================
  // SEASON CONFIGURATION
  // ============================================
  const seasons = {
    winter: {
      name: 'Winter',
      icon: '❄️',
      subheading: 'Winter Olympics',
      eventTitle: '🏅 Winter Olympics 2026',
      eventDates: 'February 6-22, 2026',
      eventDescription: 'Celebrate the Milan-Cortina Winter Olympics with 17 days of Olympic-themed puzzles! From figure skating to bobsled, solve words about winter sports from the comfort of the Cottage.',
      isActive: true,
      comingSoon: false,
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
      tracks: [
        { name: 'Cottage Fireplace', file: '/Cottage Fireplace.mp3' },
        { name: 'Cottage Orchestra', file: '/Cottage Orchestra.mp3' },
        { name: 'Cottage Snowfall', file: '/Cottage Snowfall.mp3' },
        { name: 'Cottage Snowflakes', file: '/Cottage Snowflakes.mp3' },
      ],
    },
    spring: {
      name: 'Spring',
      icon: '🌸',
      subheading: 'Spring Awakening',
      eventTitle: '🌷 Spring Awakening',
      eventDates: 'Coming March 2026',
      eventDescription: 'Watch the garden come alive with puzzles about flowers, renewal, and springtime joy.',
      isActive: false,
      comingSoon: true,
      gradient: 'from-pink-100 via-green-50 to-yellow-50',
      cardBg: 'from-white/90 to-pink-50/90',
      accent: 'from-pink-400 to-rose-500',
      text: 'text-pink-900',
      textMuted: 'text-pink-700/70',
      border: 'border-pink-300/50',
      letterBg: 'from-pink-200 to-pink-300',
      letterSelected: 'from-pink-400 to-rose-500',
      revealed: 'from-violet-300 to-violet-400',
      correct: 'from-emerald-400 to-emerald-500',
      wrong: 'from-rose-400 to-rose-500',
      ambient: ['🌸', '🌷', '✨', '🦋', '🌼'],
      tracks: [],
    },
    summer: {
      name: 'Summer',
      icon: '🌊',
      subheading: 'Summer Escape',
      eventTitle: '☀️ Summer Escape',
      eventDates: 'Coming Summer 2026',
      eventDescription: 'Escape to the beach cottage for puzzles about ocean waves, sunshine, and summer fun.',
      isActive: false,
      comingSoon: true,
      gradient: 'from-cyan-400 via-sky-300 to-amber-200',
      cardBg: 'from-white/90 to-sky-50/90',
      accent: 'from-cyan-500 to-teal-600',
      text: 'text-teal-900',
      textMuted: 'text-teal-700/70',
      border: 'border-cyan-300/50',
      letterBg: 'from-cyan-200 to-cyan-300',
      letterSelected: 'from-cyan-500 to-teal-600',
      revealed: 'from-teal-300 to-teal-400',
      correct: 'from-emerald-400 to-emerald-500',
      wrong: 'from-rose-400 to-rose-500',
      ambient: ['☀️', '🌊', '✨', '🐚', '⭐'],
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
  };

  const [currentSeason, setCurrentSeason] = useState('winter');
  const season = seasons[currentSeason];

  // ============================================
  // PUZZLE DATA
  // ============================================
  const puzzleData = {
    category: "Figure Skating",
    puzzleNumber: 1,
    words: [
      { word: "SPIN", hint: "Rotating move on one foot", letters: ['S', 'P', 'I', 'N', 'E'], revealedIndex: 0 },
      { word: "AXEL", hint: "Jump named after Norwegian skater Axel Paulsen", letters: ['A', 'X', 'E', 'L', 'S'], revealedIndex: 1 },
      { word: "BLADE", hint: "Metal edge of the skate that glides on ice", letters: ['B', 'L', 'A', 'D', 'E', 'R'], revealedIndex: 0 },
      { word: "COSTUME", hint: "Sparkly outfit worn during competition", letters: ['C', 'O', 'S', 'T', 'U', 'M', 'E', 'N'], revealedIndex: 3 },
      { word: "CHAMPION", hint: "Gold medal winner standing on the podium", letters: ['C', 'H', 'A', 'M', 'P', 'I', 'O', 'N', 'S', 'E'], revealedIndex: 4 },
    ],
  };

  // ============================================
  // STATE
  // ============================================
  const [hasMounted, setHasMounted] = useState(false);
  
  const initializeWords = () => {
    return puzzleData.words.map(w => {
      const letters = Array(w.word.length).fill('');
      letters[w.revealedIndex] = w.word[w.revealedIndex];
      return letters;
    });
  };

  const initializeAvailable = () => {
    return puzzleData.words.map(w => {
      const revealedLetter = w.word[w.revealedIndex];
      let found = false;
      return w.letters.filter(l => {
        if (l === revealedLetter && !found) { found = true; return false; }
        return true;
      });
    });
  };

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

  // Timer & Completion
  const [startTime, setStartTime] = useState(() => Date.now());
  const [completionTime, setCompletionTime] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Modals
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showJukebox, setShowJukebox] = useState(false);
  const [showSeasonInfo, setShowSeasonInfo] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // Music
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  // Stats
  const [stats, setStats] = useState({
    puzzlesCompleted: 0,
    currentStreak: 0,
    maxStreak: 0,
    fastestTime: null,
    lastPlayedDate: null,
  });

  // Replay tracking
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [isReplay, setIsReplay] = useState(false);

  const allComplete = completedWords.every(c => c);

  // ============================================
  // EFFECTS
  // ============================================

  useEffect(() => {
    setHasMounted(true);

    // Load stats
    try {
      const saved = localStorage.getItem('cottageStats');
      if (saved) setStats(JSON.parse(saved));
    } catch (e) {}

    // Check completion
    try {
      const comp = localStorage.getItem('cottageCompletion');
      if (comp) {
        const parsed = JSON.parse(comp);
        const today = new Date().toDateString();
        if (parsed.date === today && parsed.puzzleNumber === puzzleData.puzzleNumber) {
          setTodayCompleted(true);
          setIsReplay(true);
        }
      }
    } catch (e) {}

    // Load progress
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

    // Load music prefs
    try {
      const m = localStorage.getItem('cottageMusicEnabled');
      if (m === 'true') setMusicEnabled(true);
      const v = localStorage.getItem('cottageMusicVolume');
      if (v) setVolume(parseFloat(v));
      const t = localStorage.getItem('cottageMusicTrack');
      if (t) setCurrentTrack(parseInt(t));
    } catch (e) {}
  }, []);

  // Save progress
  useEffect(() => {
    if (!hasMounted || allComplete) return;
    const prog = {
      puzzleNumber: puzzleData.puzzleNumber,
      selectedLetters,
      availableLetters,
      completedWords,
      crossedOut,
      hintsRevealed,
      elapsed: Date.now() - startTime,
    };
    try {
      localStorage.setItem('cottageProgress', JSON.stringify(prog));
    } catch (e) {}
  }, [selectedLetters, availableLetters, completedWords, crossedOut, hintsRevealed, hasMounted, allComplete, startTime]);

  // Completion
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
          localStorage.setItem('cottageCompletion', JSON.stringify({
            date: today,
            puzzleNumber: puzzleData.puzzleNumber,
            time,
          }));
          localStorage.removeItem('cottageProgress');
        } catch (e) {}
      }
    }
  }, [allComplete, completionTime, startTime, stats, isReplay]);

  // Music control - only change src when track changes
const lastTrackRef = useRef(null);

useEffect(() => {
  if (!audioRef.current || !hasMounted) return;
  
  if (musicEnabled && season.tracks.length > 0) {
    const trackFile = season.tracks[currentTrack]?.file || '';
    
    // Only set src if track actually changed
    if (lastTrackRef.current !== trackFile) {
      audioRef.current.src = trackFile;
      lastTrackRef.current = trackFile;
    }
    
    audioRef.current.volume = volume;
    
    // Only play if paused
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    }
  } else {
    audioRef.current.pause();
  }
}, [musicEnabled, currentTrack, hasMounted, season.tracks]);

// Separate effect for volume only
useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = volume;
  }
}, [volume]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e) => {
      if (showHowToPlay || showStats || showShare || showJukebox || showSeasonInfo || allComplete) return;

      const key = e.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        const letters = availableLetters[focusedWordIdx];
        const idx = letters.findIndex(l => l === key);
        if (idx !== -1) {
          const slotIdx = selectedLetters[focusedWordIdx].findIndex(
            (l, i) => l === '' && i !== puzzleData.words[focusedWordIdx].revealedIndex
          );
          if (slotIdx !== -1) {
            placeLetter(focusedWordIdx, slotIdx, key, idx);
          }
        }
      }

      if (e.key === 'Backspace') {
        const slots = selectedLetters[focusedWordIdx];
        for (let i = slots.length - 1; i >= 0; i--) {
          if (slots[i] !== '' && i !== puzzleData.words[focusedWordIdx].revealedIndex) {
            removeLetter(focusedWordIdx, i);
            break;
          }
        }
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedWordIdx(prev => {
          if (e.key === 'ArrowDown') return prev < 4 ? prev + 1 : 0;
          return prev > 0 ? prev - 1 : 4;
        });
      }

      if (e.key === 'Tab') {
        e.preventDefault();
        const next = completedWords.findIndex((c, i) => !c && i > focusedWordIdx);
        if (next !== -1) setFocusedWordIdx(next);
        else {
          const first = completedWords.findIndex(c => !c);
          if (first !== -1) setFocusedWordIdx(first);
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [availableLetters, selectedLetters, focusedWordIdx, completedWords, allComplete, showHowToPlay, showStats, showShare, showJukebox, showSeasonInfo]);

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

    setSelectedLetter(null);
    setSelectedWordIdx(null);
    setSelectedLetterIdx(null);
    setSelectedSlot(null);

    if (letter !== puzzleData.words[wordIdx].word[slotIdx]) {
      setWrongPlacements(p => ({ ...p, [`${wordIdx}-${slotIdx}`]: true }));
      setTimeout(() => {
        setWrongPlacements(p => {
          const n = { ...p };
          delete n[`${wordIdx}-${slotIdx}`];
          return n;
        });
      }, 600);
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

    if (selectedSlot?.wordIdx === wordIdx) {
      placeLetter(wordIdx, selectedSlot.slotIdx, letter, letterIdx);
    } else {
      setSelectedLetter(letter);
      setSelectedWordIdx(wordIdx);
      setSelectedLetterIdx(letterIdx);
      setSelectedSlot(null);
    }
  };

  const handleSlotClick = (wordIdx, slotIdx) => {
    if (slotIdx === puzzleData.words[wordIdx].revealedIndex || completedWords[wordIdx]) return;
    setFocusedWordIdx(wordIdx);

    const current = selectedLetters[wordIdx][slotIdx];
    if (current) {
      removeLetter(wordIdx, slotIdx);
    } else if (selectedLetter && selectedWordIdx === wordIdx) {
      placeLetter(wordIdx, slotIdx, selectedLetter, selectedLetterIdx);
    } else {
      setSelectedSlot({ wordIdx, slotIdx });
      setSelectedLetter(null);
    }
  };

  const crossOutLetter = (e, wordIdx, letterIdx) => {
    e.stopPropagation();
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
  };

  const shuffleWord = (wordIdx) => {
    const newAvail = [...availableLetters];
    const arr = [...newAvail[wordIdx]];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    newAvail[wordIdx] = arr;
    setAvailableLetters(newAvail);
  };

  const toggleHint = (idx) => {
    const newHints = [...hintsRevealed];
    newHints[idx] = !newHints[idx];
    setHintsRevealed(newHints);
  };

  const resetPuzzle = () => {
    setSelectedLetters(initializeWords());
    setAvailableLetters(initializeAvailable());
    setCompletedWords([false, false, false, false, false]);
    setCrossedOut([[], [], [], [], []]);
    setHintsRevealed([false, false, false, false, false]);
    setWrongPlacements({});
    setCompletionTime(null);
    setStartTime(Date.now());
    setFocusedWordIdx(0);
    if (todayCompleted) setIsReplay(true);
    localStorage.removeItem('cottageProgress');
  };

  const handleShare = () => {
    const text = `❄️ Letter Griddle Cottage
${season.eventTitle}
${puzzleData.category}

${'🥇'.repeat(completedWords.filter(c => c).length)}
${completedWords.filter(c => c).length}/5 words${isReplay ? ' (Replay)' : ''}

Play at lettergriddlecottage.com`;

    navigator.clipboard.writeText(text).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    });
  };

  const formatTime = (s) => {
    if (!s) return 'N/A';
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
  };

  const handleSeasonClick = (key) => {
    setCurrentSeason(key);
    if (seasons[key].comingSoon) {
      setShowSeasonInfo(true);
    }
  };

  // ============================================
  // RENDER
  // ============================================

  if (!hasMounted) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${season.gradient} flex items-center justify-center`}>
        <div className={`text-xl ${season.text}`}>❄️ Loading Cottage...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${season.gradient} p-3 relative overflow-hidden transition-all duration-700`}>
      {/* Twinkling Orbs Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${3 + (i % 4) * 2}px`,
              height: `${3 + (i % 4) * 2}px`,
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              opacity: 0.3,
              animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {season.ambient.map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${10 + i * 18}%`,
              top: `${15 + (i % 3) * 25}%`,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Flickering Fireplace */}
      {currentSeason === 'winter' && (
        <div className="fixed bottom-4 left-4 pointer-events-none z-10">
          <div className="relative">
            <div className="text-4xl" style={{ animation: 'fireFlicker 0.5s ease-in-out infinite alternate' }}>🔥</div>
            <div className="absolute -top-1 -left-1 text-3xl opacity-70" style={{ animation: 'fireFlicker 0.3s ease-in-out infinite alternate-reverse' }}>🔥</div>
          </div>
        </div>
      )}

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${(i * 11) % 100}%`,
                top: '-30px',
                animation: `fall 3s ease-in forwards`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {['❄️', '🥇', '🏅', '⭐', '✨'][i % 5]}
            </div>
          ))}
        </div>
      )}

      <audio ref={audioRef} loop preload="none" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes fall {
          to { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
        @keyframes fireFlicker {
          0% { transform: scale(1) rotate(-2deg); opacity: 0.9; }
          100% { transform: scale(1.1) rotate(2deg); opacity: 1; }
        }
        .shake { animation: shake 0.4s ease-in-out; }
      `}</style>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="flex justify-center items-center gap-2 mb-1">
            <span className="text-2xl">❄️</span>
            <h1 className={`text-xl md:text-2xl font-bold ${season.text}`} style={{ fontFamily: 'Georgia, serif' }}>
              Letter Griddle Cottage
            </h1>
            <span className="text-2xl">❄️</span>
          </div>
          <p className={`text-sm ${season.textMuted}`}>{season.subheading}</p>
        </div>

        {/* Header Buttons */}
        <div className="flex justify-center items-center gap-2 mb-3 flex-wrap">
          <button onClick={() => setShowSeasonInfo(true)} className={`p-1.5 rounded-full bg-white/20 hover:bg-white/30 ${season.text}`} title="Event Info">
            <Calendar size={18} />
          </button>
          <button onClick={() => setShowHowToPlay(true)} className={`p-1.5 rounded-full bg-white/20 hover:bg-white/30 ${season.text}`} title="How to Play">
            <HelpCircle size={18} />
          </button>
          <button onClick={() => setShowJukebox(true)} className={`p-1.5 rounded-full ${musicEnabled ? 'bg-white/40' : 'bg-white/20'} hover:bg-white/30 ${season.text}`} title="Jukebox">
            {musicEnabled ? <Volume2 size={18} /> : <Music size={18} />}
          </button>
          <button onClick={() => setShowStats(true)} className={`p-1.5 rounded-full bg-white/20 hover:bg-white/30 ${season.text}`} title="Stats">
            <BarChart3 size={18} />
          </button>
        </div>

        {/* Season Selector */}
        <div className="flex justify-center gap-2 mb-3 flex-wrap">
          {Object.entries(seasons).map(([key, s]) => (
            <button
              key={key}
              onClick={() => handleSeasonClick(key)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                currentSeason === key
                  ? `bg-gradient-to-r ${s.accent} text-white shadow-lg scale-105`
                  : s.comingSoon
                  ? `bg-white/10 ${season.text} opacity-60`
                  : `bg-white/20 ${season.text} hover:bg-white/30`
              }`}
            >
              {s.icon} {s.name} {s.comingSoon && '🔒'}
            </button>
          ))}
        </div>

        {/* Category Banner */}
        <div className={`bg-gradient-to-r ${season.accent} text-white rounded-xl p-2 mb-3 shadow-lg text-center`}>
          <p className="text-xs opacity-80">Puzzle #{puzzleData.puzzleNumber} • {season.eventTitle}</p>
          <p className="text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>{puzzleData.category}</p>
        </div>

        {/* Replay Notice */}
        {isReplay && !allComplete && (
          <div className={`bg-white/10 rounded-lg p-2 mb-3 text-center ${season.text} text-xs`}>
            🔄 You've already solved today's puzzle! Playing for fun.
          </div>
        )}

        {/* Progress Save Notice */}
        {!allComplete && (
          <div className={`text-center text-xs ${season.textMuted} mb-3`}>
            ✨ Progress saves automatically!
            <button onClick={resetPuzzle} className="ml-2 underline hover:no-underline">🔄 Reset</button>
          </div>
        )}

        {/* Completion Banner */}
        {allComplete && (
          <div className={`bg-gradient-to-r ${season.cardBg} backdrop-blur rounded-xl p-4 mb-3 text-center border ${season.border} shadow-xl`}>
            <p className={`text-xl font-bold ${season.text} mb-1`}>❄️ Cottage Complete! ❄️</p>
            <p className={`${season.textMuted} text-sm mb-2`}>
              {'🥇'.repeat(5)}
            </p>
            <p className={`${season.textMuted} text-sm mb-2`}>5/5 words</p>
            {isReplay && <p className={`text-xs ${season.textMuted} mb-2`}>(Replay)</p>}
            <div className="flex justify-center gap-2">
              <button onClick={() => setShowShare(true)} className={`px-4 py-2 rounded-full bg-gradient-to-r ${season.accent} text-white font-semibold text-sm flex items-center gap-1`}>
                ❄️ Share
              </button>
              <button onClick={resetPuzzle} className={`px-4 py-2 rounded-full bg-white/20 ${season.text} font-semibold text-sm`}>
                🔄 Play Again
              </button>
            </div>
          </div>
        )}

        {/* Keyboard Hint */}
        {!allComplete && (
          <p className={`text-center text-xs ${season.textMuted} mb-2`}>
            ⌨️ Type letters directly! ↑↓ switch words, Tab next.
          </p>
        )}

        {/* Words */}
        <div className="space-y-2">
          {puzzleData.words.map((wordData, wordIdx) => {
            const isComplete = completedWords[wordIdx];
            const isCelebrating = celebratingWord === wordIdx;
            const isFocused = focusedWordIdx === wordIdx && !isComplete;

            return (
              <div
                key={wordIdx}
                onClick={() => !isComplete && setFocusedWordIdx(wordIdx)}
                className={`bg-gradient-to-br ${season.cardBg} backdrop-blur rounded-xl p-2.5 border-2 transition-all cursor-pointer
                  ${isFocused ? `${season.border} ring-2 ring-white/30` : season.border}
                  ${isCelebrating ? 'ring-4 ring-emerald-400/50 scale-[1.02]' : ''}
                  ${isComplete ? 'opacity-80' : ''}
                `}
              >
                {/* Word Header */}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">❄️</span>
<span className={`text-xs font-bold ${season.text}`}>{wordData.word.length} Letters</span>
{isComplete && <span>🥇</span>}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleHint(wordIdx); }}
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${season.accent} text-white`}
                  >
                    {hintsRevealed[wordIdx] ? 'Hide' : 'Hint'}
                  </button>
                </div>

                {/* Hint */}
                {hintsRevealed[wordIdx] && (
                  <p className={`text-sm ${season.text} bg-white/10 rounded-lg p-2 mb-2`}>💡 {wordData.hint}</p>
                )}

                {/* Slots */}
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
                      <div
                        key={letterIdx}
                        onClick={(e) => { e.stopPropagation(); handleSlotClick(wordIdx, letterIdx); }}
                        className={`w-9 h-9 flex items-center justify-center text-base font-bold rounded-lg border-2 cursor-pointer transition-all ${bgClass} ${isSlotSelected ? 'ring-2 ring-white scale-105 bg-white/20' : ''} ${season.text}`}
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        {current}
                      </div>
                    );
                  })}
                </div>

                {/* Letter Griddle */}
                {isComplete && (
  <p className={`text-center text-sm ${season.text} mt-2`}>
    {['Perfect landing! 🎿', 'Gold medal form! 🥇', 'Flawless! ⛸️', 'Champion move! 🏆', 'Stunning! ✨'][wordIdx]}
  </p>
)}

<audio 
  ref={audioRef} 
  preload="none"
  onEnded={() => {
    const nextTrack = (currentTrack + 1) % season.tracks.length;
    setCurrentTrack(nextTrack);
    localStorage.setItem('cottageMusicTrack', nextTrack.toString());
  }}
/>
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
                          <div key={idx} className="relative group">
                            <button
                              onClick={(e) => { e.stopPropagation(); handleLetterClick(wordIdx, letter, idx); }}
                              className={`w-8 h-8 rounded-full text-sm font-bold transition-all shadow-md ${
                                isSelected
                                  ? `bg-gradient-to-br ${season.letterSelected} text-white scale-110 ring-2 ring-white`
                                  : `bg-gradient-to-br ${season.letterBg} ${season.text} hover:scale-105`
                              }`}
                              style={{ fontFamily: 'Georgia, serif' }}
                            >
                              {letter}
                            </button>
                            <button
                              onClick={(e) => crossOutLetter(e, wordIdx, idx)}
                              className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold"
                              title="Cross out"
                            >
                              ×
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* Crossed Out */}
                    {crossedOut[wordIdx].length > 0 && (
                      <div className="mt-2 pt-2 border-t border-white/10 text-center">
                        <span className={`text-xs ${season.textMuted}`}>Crossed: </span>
                        {crossedOut[wordIdx].map((item, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); restoreLetter(wordIdx, idx); }}
                            className={`mx-0.5 px-1.5 py-0.5 rounded text-xs line-through opacity-50 hover:opacity-100 ${season.text} bg-white/10`}
                          >
                            {item.letter}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className={`mt-6 text-center text-xs ${season.textMuted}`}>
          <p className="mb-1">❄️ Letter Griddle Cottage • Part of the Letter Griddle Family 🥞</p>
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

      {/* How to Play */}
      {showHowToPlay && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowHowToPlay(false)}>
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-5 max-w-md w-full border ${season.border} max-h-[90vh] overflow-y-auto`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>❓ How to Play</h2>
              <button onClick={() => setShowHowToPlay(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className={`space-y-3 ${season.text} text-sm`}>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">🥞 Welcome to the Letter Griddle Cottage!</p>
                <p>Each word has its OWN letter griddle with 1-2 <strong>decoy letters</strong> that don't belong.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">❄️ How to Play</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Click a letter, then click an empty slot</li>
                  <li>OR click a slot first, then click a letter</li>
                  <li>Click placed letters to remove them</li>
                  <li>Hover + click <span className="bg-rose-500 px-1 rounded">×</span> to cross out suspected decoys</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">⌨️ Keyboard</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Type letters to place them</li>
                  <li>↑↓ arrows to switch words</li>
                  <li>Tab for next incomplete word</li>
                  <li>Backspace to remove</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">💾 Save & Replay</p>
                <p className="text-xs">Progress saves automatically! Replay puzzles for fun - only first solve counts for stats.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      {showStats && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowStats(false)}>
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-5 max-w-md w-full border ${season.border}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>📊 Your Stats</h2>
              <button onClick={() => setShowStats(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className={`text-2xl font-bold ${season.text}`}>{stats.puzzlesCompleted}</div>
                <div className={`text-xs ${season.textMuted}`}>Puzzles Solved</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className={`text-2xl font-bold ${season.text}`}>{stats.currentStreak} 🔥</div>
                <div className={`text-xs ${season.textMuted}`}>Current Streak</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className={`text-2xl font-bold ${season.text}`}>{stats.maxStreak}</div>
                <div className={`text-xs ${season.textMuted}`}>Best Streak</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className={`text-2xl font-bold ${season.text}`}>{formatTime(stats.fastestTime)}</div>
                <div className={`text-xs ${season.textMuted}`}>Fastest Time</div>
              </div>
            </div>
            <p className={`mt-4 text-center text-xs ${season.textMuted}`}>Stats saved locally</p>
          </div>
        </div>
      )}

      {/* Share */}
      {showShare && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowShare(false)}>
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-5 max-w-md w-full border ${season.border}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>❄️ Share Results</h2>
              <button onClick={() => setShowShare(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className={`bg-black/20 rounded-lg p-4 mb-4 font-mono text-xs ${season.text}`}>
              <pre className="whitespace-pre-wrap">{`❄️ Letter Griddle Cottage
${season.eventTitle}
${puzzleData.category}

${'🥇'.repeat(completedWords.filter(c => c).length)}
${completedWords.filter(c => c).length}/5 words${isReplay ? ' (Replay)' : ''}

Play at lettergriddlecottage.com`}</pre>
            </div>
            <button
              onClick={handleShare}
              className={`w-full py-3 rounded-full bg-gradient-to-r ${season.accent} text-white font-bold`}
            >
              {shareCopied ? '✓ Copied!' : '❄️ Copy to Clipboard'}
            </button>
          </div>
        </div>
      )}

      {/* Jukebox */}
      {showJukebox && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowJukebox(false)}>
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-5 max-w-md w-full border ${season.border}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>🎵 Cottage Jukebox</h2>
              <button onClick={() => setShowJukebox(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            {season.tracks.length > 0 ? (
              <div className="space-y-3">
                {season.tracks.map((track, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setCurrentTrack(idx); localStorage.setItem('cottageMusicTrack', idx.toString()); }}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      currentTrack === idx ? `bg-gradient-to-r ${season.accent} text-white` : `bg-white/10 ${season.text} hover:bg-white/20`
                    }`}
                  >
                    {currentTrack === idx && musicEnabled ? '🔊' : '🎵'} {track.name}
                  </button>
                ))}
                <div className="pt-3 border-t border-white/20">
                  <div className={`flex justify-between mb-2 ${season.text} text-sm`}>
                    <span>Volume</span>
                    <span>{Math.round(volume * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setVolume(v);
                      localStorage.setItem('cottageMusicVolume', v.toString());
                      if (audioRef.current) audioRef.current.volume = v;
                    }}
                    className="w-full"
                  />
                </div>
                <button
                  onClick={() => {
                    const newState = !musicEnabled;
                    setMusicEnabled(newState);
                    localStorage.setItem('cottageMusicEnabled', newState.toString());
                  }}
                  className={`w-full py-3 rounded-full font-bold ${musicEnabled ? 'bg-rose-500 text-white' : `bg-gradient-to-r ${season.accent} text-white`}`}
                >
                  {musicEnabled ? '⏹️ Stop Music' : '▶️ Play Music'}
                </button>
              </div>
            ) : (
              <div className={`text-center ${season.textMuted} py-8`}>
                <p className="text-4xl mb-2">🎵</p>
                <p>Tracks coming soon for {season.name}!</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Season Info */}
      {showSeasonInfo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowSeasonInfo(false)}>
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-5 max-w-md w-full border ${season.border}`} onClick={e => e.stopPropagation()}>
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
                  <p className="text-2xl mb-1">🎉</p>
                  <p className="font-bold">This event is live!</p>
                  <p className={`text-sm ${season.textMuted}`}>New puzzle every day.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}