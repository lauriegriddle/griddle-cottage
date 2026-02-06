"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, Shuffle, HelpCircle, BarChart3, Share2, Music, Volume2, VolumeX, Calendar, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

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
  // ALL 17 WINTER OLYMPICS PUZZLES
  // ============================================
  const allPuzzles = [
    {
      puzzleNumber: 1,
      date: "2026-02-06",
      category: "Opening Ceremonies",
      funFact: "Did you know? The 2026 Winter Olympics in Italy will do something new. Instead of one Olympic flame, there will be multiple cauldrons lit in different locations!",
      words: [
        { word: "SHOW", hint: "A big event you watch, like the Opening Ceremony", letters: ['S', 'H', 'O', 'W', 'N', 'E'], revealedIndex: 2 },
        { word: "TORCH", hint: "Flame carried by runners before the Games begin", letters: ['T', 'O', 'R', 'C', 'H', 'E', 'S'], revealedIndex: 3 },
        { word: "SPORTS", hint: "Games like skiing, skating, and hockey", letters: ['S', 'P', 'O', 'R', 'T', 'S', 'E'], revealedIndex: 2 },
        { word: "COMPETE", hint: "What athletes do to try to win", letters: ['C', 'O', 'M', 'P', 'E', 'T', 'E', 'R', 'S'], revealedIndex: 4 },
        { word: "STADIUM", hint: "Big building where fans watch the events", letters: ['S', 'T', 'A', 'D', 'I', 'U', 'M', 'N', 'E'], revealedIndex: 3 },
      ],
    },
    {
      puzzleNumber: 2,
      date: "2026-02-07",
      category: "Winter Olympics Locations",
      funFact: "The use of a physical podium for medal ceremonies was first introduced at the 1932 Winter Olympics in Lake Placid. Prior to this, medals were typically handed out during the closing ceremony.",
      words: [
        { word: "RINK", hint: "Flat ice surface for skating", letters: ['R', 'I', 'N', 'K', 'S', 'E'], revealedIndex: 2 },
        { word: "TRAIL", hint: "Path through the snow for skiing", letters: ['T', 'R', 'A', 'I', 'L', 'S', 'E'], revealedIndex: 3 },
        { word: "SLOPE", hint: "Side of a mountain for skiing down", letters: ['S', 'L', 'O', 'P', 'E', 'W', 'S'], revealedIndex: 1 },
        { word: "PODIUM", hint: "Platform where medal winners stand", letters: ['P', 'O', 'D', 'I', 'U', 'M', 'S', 'E'], revealedIndex: 2 },
        { word: "OUTDOORS", hint: "Where all Winter Olympic events take place", letters: ['O', 'U', 'T', 'D', 'O', 'O', 'R', 'S', 'E', 'N'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 3,
      date: "2026-02-08",
      category: "Alpine Skiing",
      funFact: "Alpine skiing is one of the fastest non-motorized sports, with world speed records exceeding 158 mph! The word 'ski' comes from the Old Norse word for 'split piece of wood.'",
      words: [
        { word: "FAST", hint: "Moving with great speed", letters: ['F', 'A', 'S', 'T', 'E', 'R'], revealedIndex: 2 },
        { word: "MOGUL", hint: "Bumps on a ski slope", letters: ['M', 'O', 'G', 'U', 'L', 'S', 'E'], revealedIndex: 2 },
        { word: "SLALOM", hint: "Zigzag race around poles", letters: ['S', 'L', 'A', 'L', 'O', 'M', 'E', 'N'], revealedIndex: 3 },
        { word: "CARVING", hint: "Making clean turns on skis", letters: ['C', 'A', 'R', 'V', 'I', 'N', 'G', 'E', 'S'], revealedIndex: 4 },
        { word: "SNOWPLOW", hint: "Beginner's way to slow down with skis in a V", letters: ['S', 'N', 'O', 'W', 'P', 'L', 'O', 'W', 'E', 'R'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 4,
      date: "2026-02-09",
      category: "Tina and Milo",
      funFact: "Tina and Milo are stoats, small animals that change color with the seasons! They're brown and white in summer but turn completely white in winter.",
      words: [
        { word: "MILAN", hint: "Italian city hosting the 2026 Winter Games", letters: ['M', 'I', 'L', 'A', 'N', 'O', 'E'], revealedIndex: 3 },
        { word: "STOATS", hint: "Small furry animals that turn white in winter", letters: ['S', 'T', 'O', 'A', 'T', 'S', 'E', 'R'], revealedIndex: 2 },
        { word: "MASCOTS", hint: "Tina and Milo are the official ones for 2026", letters: ['M', 'A', 'S', 'C', 'O', 'T', 'S', 'E', 'R'], revealedIndex: 4 },
        { word: "CORTINA", hint: "Mountain town in Italy co-hosting the Olympics", letters: ['C', 'O', 'R', 'T', 'I', 'N', 'A', 'S', 'E'], revealedIndex: 5 },
        { word: "SIBLINGS", hint: "Brothers and sisters, like Tina and Milo!", letters: ['S', 'I', 'B', 'L', 'I', 'N', 'G', 'S', 'E', 'R'], revealedIndex: 3 },
      ],
    },
    {
      puzzleNumber: 5,
      date: "2026-02-10",
      category: "Cross-Country Skiing",
      funFact: "Norway leads all countries in total Winter Olympic medals, with Marit Bjørgen, cross-country skier, being the most decorated Winter Olympian ever with 15 medals!",
      words: [
        { word: "LANE", hint: "Marked path for racing", letters: ['L', 'A', 'N', 'E', 'S', 'R'], revealedIndex: 2 },
        { word: "TRAIL", hint: "Path through the snow", letters: ['T', 'R', 'A', 'I', 'L', 'S', 'E'], revealedIndex: 1 },
        { word: "TERRAIN", hint: "The ground and its features", letters: ['T', 'E', 'R', 'R', 'A', 'I', 'N', 'S', 'O'], revealedIndex: 4 },
        { word: "NORDIC", hint: "Style of skiing from Scandinavia", letters: ['N', 'O', 'R', 'D', 'I', 'C', 'E', 'S'], revealedIndex: 3 },
        { word: "ENDURANCE", hint: "Ability to keep going for a long time", letters: ['E', 'N', 'D', 'U', 'R', 'A', 'N', 'C', 'E', 'S', 'T'], revealedIndex: 3 },
      ],
    },
    {
      puzzleNumber: 6,
      date: "2026-02-11",
      category: "Curling",
      funFact: "Curling is called 'chess on ice' because teams must plan ahead and work together to get their stones closest to the target!",
      words: [
        { word: "SWEEP", hint: "Brush the ice to control the stone", letters: ['S', 'W', 'E', 'E', 'P', 'T', 'R'], revealedIndex: 3 },
        { word: "SLIDE", hint: "Glide smoothly on the ice", letters: ['S', 'L', 'I', 'D', 'E', 'R', 'S'], revealedIndex: 2 },
        { word: "STONES", hint: "Heavy granite discs used in the game", letters: ['S', 'T', 'O', 'N', 'E', 'S', 'R', 'I'], revealedIndex: 4 },
        { word: "GRANITE", hint: "Type of rock the stones are made from", letters: ['G', 'R', 'A', 'N', 'I', 'T', 'E', 'S', 'O'], revealedIndex: 3 },
        { word: "THROWING", hint: "Releasing the stone down the ice", letters: ['T', 'H', 'R', 'O', 'W', 'I', 'N', 'G', 'S', 'E'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 7,
      date: "2026-02-12",
      category: "Figure Skating",
      funFact: "Figure skating is the oldest Winter Olympic sport, debuting in the 1908 Summer Games! It features incredible feats like Midori Ito's first triple Axel and Surya Bonaly's famous backflips.",
      words: [
        { word: "SPIN", hint: "Rotating move on one foot", letters: ['S', 'P', 'I', 'N', 'E', 'T'], revealedIndex: 2 },
        { word: "SPIRAL", hint: "Gliding on one foot with leg extended behind", letters: ['S', 'P', 'I', 'R', 'A', 'L', 'E', 'S'], revealedIndex: 3 },
        { word: "SHADOW", hint: "Two skaters moving in perfect sync", letters: ['S', 'H', 'A', 'D', 'O', 'W', 'S', 'E'], revealedIndex: 4 },
        { word: "JUMPING", hint: "Leaping into the air", letters: ['J', 'U', 'M', 'P', 'I', 'N', 'G', 'S', 'E'], revealedIndex: 3 },
        { word: "FOOTWORK", hint: "Intricate steps performed on the ice", letters: ['F', 'O', 'O', 'T', 'W', 'O', 'R', 'K', 'S', 'E'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 8,
      date: "2026-02-13",
      category: "Freestyle Skiing",
      funFact: "Freestyle skiing, once called 'hotdogging,' started in the 1960s for freedom of expression and became an Olympic demonstration sport in 1988.",
      words: [
        { word: "JIB", hint: "Sliding on rails or boxes", letters: ['J', 'I', 'B', 'S', 'E'], revealedIndex: 1 },
        { word: "RAIL", hint: "Metal bar to slide on", letters: ['R', 'A', 'I', 'L', 'S', 'E'], revealedIndex: 2 },
        { word: "AERIAL", hint: "Acrobatic jump with flips and twists", letters: ['A', 'E', 'R', 'I', 'A', 'L', 'S', 'T'], revealedIndex: 3 },
        { word: "BOOTER", hint: "A large jump built for big air", letters: ['B', 'O', 'O', 'T', 'E', 'R', 'S', 'N'], revealedIndex: 3 },
        { word: "HALFPIPE", hint: "U-shaped snow channel for tricks", letters: ['H', 'A', 'L', 'F', 'P', 'I', 'P', 'E', 'S', 'R'], revealedIndex: 4 },
      ],
    },
    {
      puzzleNumber: 9,
      date: "2026-02-14",
      category: "Ice Hockey",
      funFact: "Hockey started as a field game with a ball before transitioning to ice, where a puck slides better. The first recorded indoor game in 1875 in Montreal used natural ice and candles for light!",
      words: [
        { word: "PAD", hint: "Protective gear for goalies", letters: ['P', 'A', 'D', 'S', 'E'], revealedIndex: 1 },
        { word: "PUCK", hint: "Rubber disc hit with a stick", letters: ['P', 'U', 'C', 'K', 'S', 'E'], revealedIndex: 2 },
        { word: "STICK", hint: "Used to hit the puck", letters: ['S', 'T', 'I', 'C', 'K', 'E', 'R'], revealedIndex: 3 },
        { word: "SKATES", hint: "Boots with blades for the ice", letters: ['S', 'K', 'A', 'T', 'E', 'S', 'R', 'I'], revealedIndex: 2 },
        { word: "HELMET", hint: "Protects your head", letters: ['H', 'E', 'L', 'M', 'E', 'T', 'S', 'R'], revealedIndex: 3 },
      ],
    },
    {
      puzzleNumber: 10,
      date: "2026-02-15",
      category: "Luge",
      funFact: "Luge emerged as a sport in the Swiss Alps in the 1880s, with the first international race in Davos in 1883. It became an Olympic sport in 1964.",
      words: [
        { word: "SLED", hint: "Vehicle for sliding down the track", letters: ['S', 'L', 'E', 'D', 'S', 'I'], revealedIndex: 2 },
        { word: "SPIKE", hint: "Sharp points on gloves for the start", letters: ['S', 'P', 'I', 'K', 'E', 'S', 'R'], revealedIndex: 3 },
        { word: "HELMET", hint: "Head protection at high speeds", letters: ['H', 'E', 'L', 'M', 'E', 'T', 'S', 'R'], revealedIndex: 4 },
        { word: "BOOTIES", hint: "Aerodynamic foot coverings", letters: ['B', 'O', 'O', 'T', 'I', 'E', 'S', 'R', 'N'], revealedIndex: 3 },
        { word: "TOBOGGAN", hint: "Another name for a long sled", letters: ['T', 'O', 'B', 'O', 'G', 'G', 'A', 'N', 'S', 'E'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 11,
      date: "2026-02-16",
      category: "Nordic Combined",
      funFact: "The first recorded Nordic Combined competition was in Norway in 1888, combining ski jumping and a long cross-country ski race.",
      words: [
        { word: "RACE", hint: "Competition to be the fastest", letters: ['R', 'A', 'C', 'E', 'S', 'R'], revealedIndex: 2 },
        { word: "JUMP", hint: "Leap off a ski ramp", letters: ['J', 'U', 'M', 'P', 'S', 'E'], revealedIndex: 2 },
        { word: "COUNTRY", hint: "Cross-_____ skiing", letters: ['C', 'O', 'U', 'N', 'T', 'R', 'Y', 'S', 'E'], revealedIndex: 4 },
        { word: "STRENGTH", hint: "Physical power needed for this sport", letters: ['S', 'T', 'R', 'E', 'N', 'G', 'T', 'H', 'S', 'I'], revealedIndex: 5 },
        { word: "ENDURANCE", hint: "Ability to keep going for a long time", letters: ['E', 'N', 'D', 'U', 'R', 'A', 'N', 'C', 'E', 'S', 'T'], revealedIndex: 3 },
      ],
    },
    {
      puzzleNumber: 12,
      date: "2026-02-17",
      category: "Short-Track Speed Skating",
      funFact: "Skaters win by their skate crossing the line, detected by ankle chips. They use curved blades to navigate tight corners, often with hands touching ice for balance!",
      words: [
        { word: "BURN", hint: "Feeling in your legs after racing hard", letters: ['B', 'U', 'R', 'N', 'S', 'E'], revealedIndex: 2 },
        { word: "RELAY", hint: "Team race where skaters tag each other", letters: ['R', 'E', 'L', 'A', 'Y', 'S', 'T'], revealedIndex: 3 },
        { word: "BLOCK", hint: "Getting in another skater's way", letters: ['B', 'L', 'O', 'C', 'K', 'S', 'E'], revealedIndex: 2 },
        { word: "CORNER", hint: "Curved part of the track", letters: ['C', 'O', 'R', 'N', 'E', 'R', 'S', 'T'], revealedIndex: 4 },
        { word: "CHAOTIC", hint: "Wild and unpredictable action", letters: ['C', 'H', 'A', 'O', 'T', 'I', 'C', 'S', 'E'], revealedIndex: 3 },
      ],
    },
    {
      puzzleNumber: 13,
      date: "2026-02-18",
      category: "Skeleton",
      funFact: "Skeleton athletes race headfirst on small sleds at speeds over 80 mph! The sport is named for early metal sleds that resembled skeletons.",
      words: [
        { word: "PUSH", hint: "Sprint at the start to gain speed", letters: ['P', 'U', 'S', 'H', 'E', 'R'], revealedIndex: 2 },
        { word: "SLIDE", hint: "Glide down the icy track", letters: ['S', 'L', 'I', 'D', 'E', 'R', 'S'], revealedIndex: 3 },
        { word: "RUNNER", hint: "Metal blade on the bottom of the sled", letters: ['R', 'U', 'N', 'N', 'E', 'R', 'S', 'T'], revealedIndex: 3 },
        { word: "GRAVITY", hint: "Force that pulls you down the track", letters: ['G', 'R', 'A', 'V', 'I', 'T', 'Y', 'S', 'E'], revealedIndex: 4 },
        { word: "DESCENT", hint: "Going down from top to bottom", letters: ['D', 'E', 'S', 'C', 'E', 'N', 'T', 'R', 'I'], revealedIndex: 3 },
      ],
    },
    {
      puzzleNumber: 14,
      date: "2026-02-19",
      category: "Ski Jumping",
      funFact: "Ski jumping combines distance with style points. A single jump lasts under 30 seconds, but athletes can fly hundreds of feet through the air!",
      words: [
        { word: "AIR", hint: "What jumpers soar through", letters: ['A', 'I', 'R', 'S', 'E'], revealedIndex: 1 },
        { word: "FORM", hint: "Body position during flight", letters: ['F', 'O', 'R', 'M', 'S', 'E'], revealedIndex: 2 },
        { word: "FLIGHT", hint: "Traveling through the air", letters: ['F', 'L', 'I', 'G', 'H', 'T', 'S', 'E'], revealedIndex: 3 },
        { word: "LANDING", hint: "Touching down on the snow", letters: ['L', 'A', 'N', 'D', 'I', 'N', 'G', 'S', 'E'], revealedIndex: 4 },
        { word: "DISTANCE", hint: "How far you jumped", letters: ['D', 'I', 'S', 'T', 'A', 'N', 'C', 'E', 'R', 'S'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 15,
      date: "2026-02-20",
      category: "Ski Mountaineering",
      funFact: "Skimo is brand new to the 2026 Milan Cortina Olympics! It features fast-paced sprint races combining uphill skinning, running in boots, and downhill skiing.",
      words: [
        { word: "GEAR", hint: "Equipment needed for the sport", letters: ['G', 'E', 'A', 'R', 'S', 'T'], revealedIndex: 2 },
        { word: "SKIMO", hint: "Nickname for ski mountaineering", letters: ['S', 'K', 'I', 'M', 'O', 'N', 'E'], revealedIndex: 3 },
        { word: "ASCENT", hint: "Climbing up the mountain", letters: ['A', 'S', 'C', 'E', 'N', 'T', 'R', 'I'], revealedIndex: 3 },
        { word: "HARNESS", hint: "Safety straps worn around the body", letters: ['H', 'A', 'R', 'N', 'E', 'S', 'S', 'T', 'I'], revealedIndex: 4 },
        { word: "CLIMBING", hint: "Going up steep terrain", letters: ['C', 'L', 'I', 'M', 'B', 'I', 'N', 'G', 'S', 'E'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 16,
      date: "2026-02-21",
      category: "Snowboard",
      funFact: "Unlike most sports, snowboarding jumped straight to the Olympics in Nagano 1998 with Giant Slalom and Halfpipe, skipping the usual demonstration stage!",
      words: [
        { word: "CORK", hint: "Off-axis spinning trick", letters: ['C', 'O', 'R', 'K', 'S', 'E'], revealedIndex: 2 },
        { word: "COURSE", hint: "Path down the mountain with features", letters: ['C', 'O', 'U', 'R', 'S', 'E', 'T', 'N'], revealedIndex: 3 },
        { word: "SWITCH", hint: "Riding backwards from your normal stance", letters: ['S', 'W', 'I', 'T', 'C', 'H', 'E', 'R'], revealedIndex: 4 },
        { word: "MCTWIST", hint: "Inverted 540 spin trick", letters: ['M', 'C', 'T', 'W', 'I', 'S', 'T', 'E', 'R'], revealedIndex: 3 },
        { word: "HALFPIPE", hint: "U-shaped snow channel for tricks", letters: ['H', 'A', 'L', 'F', 'P', 'I', 'P', 'E', 'S', 'R'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 17,
      date: "2026-02-22",
      category: "Closing Ceremony",
      funFact: "Closing ceremonies feature the symbolic handover to the next host city. In Vancouver 2010, Canada playfully 'fixed' a cauldron malfunction from the opening ceremony!",
      words: [
        { word: "HOST", hint: "Country or city putting on the Games", letters: ['H', 'O', 'S', 'T', 'E', 'R'], revealedIndex: 2 },
        { word: "VENUE", hint: "Location where events take place", letters: ['V', 'E', 'N', 'U', 'E', 'S', 'R'], revealedIndex: 3 },
        { word: "ANTHEM", hint: "National song played for winners", letters: ['A', 'N', 'T', 'H', 'E', 'M', 'S', 'I'], revealedIndex: 3 },
        { word: "PARADE", hint: "Athletes walking together in celebration", letters: ['P', 'A', 'R', 'A', 'D', 'E', 'S', 'T'], revealedIndex: 4 },
        { word: "VICTORY", hint: "Winning and success", letters: ['V', 'I', 'C', 'T', 'O', 'R', 'Y', 'S', 'E'], revealedIndex: 4 },
      ],
    },
  ];

  // ============================================
  // PUZZLE SELECTION (Testing Mode)
  // ============================================
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [showPuzzleSelector, setShowPuzzleSelector] = useState(false);
  
  const puzzleData = allPuzzles[currentPuzzleIndex];

  const goToPreviousPuzzle = () => {
    setCurrentPuzzleIndex(prev => prev > 0 ? prev - 1 : allPuzzles.length - 1);
  };

  const goToNextPuzzle = () => {
    setCurrentPuzzleIndex(prev => prev < allPuzzles.length - 1 ? prev + 1 : 0);
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
      // Use the letters array which includes decoys
      const letters = [...w.letters];
      const revealedLetter = w.word[w.revealedIndex];
      // Remove ONE instance of the revealed letter from available
      const revealedIdx = letters.indexOf(revealedLetter);
      if (revealedIdx !== -1) {
        letters.splice(revealedIdx, 1);
      }
      // Shuffle the letters
      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      return letters;
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

  const [stats, setStats] = useState({
    puzzlesCompleted: 0,
    currentStreak: 0,
    maxStreak: 0,
    fastestTime: null,
    lastPlayedDate: null,
  });

  const [todayCompleted, setTodayCompleted] = useState(false);
  const [isReplay, setIsReplay] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const allComplete = completedWords.every(c => c);

  // ============================================
  // EFFECTS
  // ============================================

  // Reset when switching puzzles
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

    // Check if first visit - show welcome screen
    try {
      const hasVisited = localStorage.getItem('cottageWelcomeSeen');
      if (!hasVisited) {
        setShowWelcome(true);
      }
    } catch (e) {}

    try {
      const saved = localStorage.getItem('cottageStats');
      if (saved) setStats(JSON.parse(saved));
    } catch (e) {}

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

  const lastTrackRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current || !hasMounted) return;
    
    if (musicEnabled && season.tracks.length > 0) {
      const trackFile = season.tracks[currentTrack]?.file || '';
      
      if (lastTrackRef.current !== trackFile) {
        audioRef.current.src = trackFile;
        lastTrackRef.current = trackFile;
      }
      
      audioRef.current.volume = volume;
      
      if (audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    } else {
      audioRef.current.pause();
    }
  }, [musicEnabled, currentTrack, hasMounted, season.tracks]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const handleKey = (e) => {
      if (showHowToPlay || showStats || showShare || showJukebox || showSeasonInfo || showPuzzleSelector || allComplete) return;

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
    
    // Blur to prevent Safari ghost cursor
    document.activeElement?.blur();

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
    // Blur the button to prevent Safari ghost cursor
    e.target.blur();
    document.activeElement?.blur();
    
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
    
    // Blur to prevent Safari ghost cursor
    document.activeElement?.blur();
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

  const handleShare = async () => {
    const text = `Free & ad-free!
Part of the Letter Griddle Games 🥞
More games: lettergriddle.com

❄️ Letter Griddle Cottage
${season.eventTitle}
${puzzleData.category}

${'🥇'.repeat(completedWords.filter(c => c).length)}
${completedWords.filter(c => c).length}/5 words${isReplay ? ' (Replay)' : ''}

Play at lettergriddlecottage.com`;

    // Try native sharing first (works great on mobile!)
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Letter Griddle Cottage',
          text: text,
        });
        return; // Success, don't show copied message
      } catch (err) {
        // User cancelled or share failed, fall back to clipboard
        if (err.name === 'AbortError') return; // User cancelled
      }
    }
    
    // Fallback to clipboard
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

  const dismissWelcome = () => {
    setShowWelcome(false);
    try {
      localStorage.setItem('cottageWelcomeSeen', 'true');
    } catch (e) {}
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
      {/* Twinkling Orbs */}
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

      {/* Ambient Elements */}
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

      {/* Fireplace */}
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

      <audio 
        ref={audioRef} 
        preload="none"
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
        @keyframes fireFlicker { 0% { transform: scale(1) rotate(-2deg); opacity: 0.9; } 100% { transform: scale(1.1) rotate(2deg); opacity: 1; } }
        @keyframes bounceIn { 
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        .shake { animation: shake 0.4s ease-in-out; }
        .animate-bounce-in { animation: bounceIn 0.6s ease-out forwards; }
        /* Comprehensive Safari ghost cursor fixes */
        *, *::before, *::after {
          -webkit-tap-highlight-color: transparent !important;
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
          caret-color: transparent !important;
        }
        button, [role="button"], .cursor-pointer {
          outline: none !important;
          -webkit-appearance: none !important;
        }
        button:focus, button:active, button:focus-visible {
          outline: none !important;
          caret-color: transparent !important;
        }
        /* Hide any text cursor completely */
        input, textarea, [contenteditable] {
          caret-color: transparent !important;
        }
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

        {/* 🧪 Testing Mode Puzzle Selector - HIDDEN FOR PRODUCTION
        <div className={`bg-amber-500/20 border border-amber-400/50 rounded-xl p-2 mb-3`}>
          <div className="flex items-center justify-center gap-2">
            <span className={`text-xs ${season.text}`}>🧪 Testing Mode:</span>
            <button onClick={goToPreviousPuzzle} className={`p-1 rounded-full bg-white/20 hover:bg-white/30 ${season.text}`}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => setShowPuzzleSelector(true)} className={`px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 ${season.text} text-xs font-semibold`}>
              Puzzle {puzzleData.puzzleNumber}/17
            </button>
            <button onClick={goToNextPuzzle} className={`p-1 rounded-full bg-white/20 hover:bg-white/30 ${season.text}`}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        */}

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

        {/* Progress Notice */}
        {!allComplete && (
          <div className={`text-center text-xs ${season.textMuted} mb-3`}>
            ✨ Progress saves automatically!
            <button onClick={resetPuzzle} className="ml-2 underline hover:no-underline">🔄 Reset</button>
          </div>
        )}

        {/* Completion Modal Popup - appears with confetti! */}
        {allComplete && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 p-4">
            <div className={`bg-gradient-to-br ${season.cardBg} backdrop-blur rounded-2xl p-6 max-w-md w-full text-center border-2 ${season.border} shadow-2xl transform animate-bounce-in`}>
              <p className="text-4xl mb-2">🏆</p>
              <p className={`text-2xl font-bold ${season.text} mb-1`} style={{ fontFamily: 'Georgia, serif' }}>Cottage Complete!</p>
              <p className={`text-lg ${season.text} mb-2`} style={{ fontFamily: 'Georgia, serif' }}>{puzzleData.category}</p>
              <p className={`${season.text} text-lg mb-3`}>{'🥇'.repeat(5)}</p>
              <p className={`${season.textMuted} text-sm mb-4`}>5/5 words{isReplay ? ' (Replay)' : ''}</p>
              
              {/* Fun Fact */}
              <div className={`bg-white/10 rounded-lg p-3 mb-4 text-left`}>
                <p className={`text-xs font-bold ${season.text} mb-1`}>💡 Did you know?</p>
                <p className={`text-sm ${season.text}`}>{puzzleData.funFact}</p>
              </div>
              
              <div className="flex justify-center gap-3">
                <button onClick={() => setShowShare(true)} className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${season.accent} text-white font-semibold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform`}>
                  ❄️ Share
                </button>
                <button onClick={resetPuzzle} className={`px-5 py-2.5 rounded-full bg-white/20 ${season.text} font-semibold text-sm hover:bg-white/30 transition-colors`}>
                  🔄 Play Again
                </button>
              </div>
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
                  ${isFocused ? `border-sky-400/50 bg-white/5` : `${season.border} border-transparent`}
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

                {/* Completion Message */}
                {isComplete && (
                  <p className={`text-center text-sm ${season.text} mt-2`}>
                    {['Perfect landing! 🎿', 'Gold medal form! 🥇', 'Flawless! ⛸️', 'Champion move! 🏆', 'Stunning! ✨'][wordIdx]}
                  </p>
                )}

                {/* Letter Griddle */}
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
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={(e) => { e.stopPropagation(); handleLetterClick(wordIdx, letter, idx); }}
                              className={`w-8 h-8 rounded-full text-sm font-bold transition-all shadow-md select-none ${
                                isSelected
                                  ? `bg-gradient-to-br ${season.letterSelected} text-white scale-110 ring-2 ring-white`
                                  : `bg-gradient-to-br ${season.letterBg} ${season.text} hover:scale-105`
                              }`}
                              style={{ fontFamily: 'Georgia, serif', WebkitUserSelect: 'none' }}
                              tabIndex={-1}
                            >
                              {letter}
                            </button>
                            <button
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={(e) => crossOutLetter(e, wordIdx, idx)}
                              className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold select-none"
                              style={{ WebkitUserSelect: 'none', cursor: 'pointer' }}
                              title="Cross out"
                              tabIndex={-1}
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
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-5 max-w-md w-full border ${season.border} max-h-[90vh] overflow-y-auto`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>🧪 Select Puzzle (Testing)</h2>
              <button onClick={() => setShowPuzzleSelector(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {allPuzzles.map((puzzle, idx) => (
                <button
                  key={idx}
                  onClick={() => { setCurrentPuzzleIndex(idx); setShowPuzzleSelector(false); }}
                  className={`p-3 rounded-lg text-left transition-all ${
                    currentPuzzleIndex === idx 
                      ? `bg-gradient-to-r ${season.accent} text-white` 
                      : `bg-white/10 ${season.text} hover:bg-white/20`
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold">#{puzzle.puzzleNumber}: {puzzle.category}</span>
                    <span className="text-xs opacity-70">{puzzle.date}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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
                <p className="font-bold mb-1">🏠 Welcome to Letter Griddle Cottage!</p>
                <p>Unscramble the letters in each word's griddle to solve all 5 words.</p>
              </div>
              <div className="bg-amber-500/20 rounded-lg p-3 border border-amber-400/30">
                <p className="font-bold mb-1">🎯 The Twist: Decoy Letters!</p>
                <p className="text-xs">Each griddle contains <strong>1-2 extra letters</strong> that don't belong in the word. Part of the challenge is figuring out which letters are decoys!</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">❄️ How to Play</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Click a letter, then click an empty slot</li>
                  <li>OR click a slot first, then click a letter</li>
                  <li>Click placed letters to remove them</li>
                  <li>One letter is revealed to help you start</li>
                </ul>
              </div>
              <div className="bg-rose-500/20 rounded-lg p-3 border border-rose-400/30">
                <p className="font-bold mb-1">🚫 Cross Out Decoys</p>
                <p className="text-xs mb-2">Think you spotted a decoy? Get it out of your way!</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li><strong>Desktop:</strong> Hover over any letter to reveal a red <span className="bg-rose-500 text-white px-1 rounded text-xs">×</span> button — click it to cross out</li>
                  <li><strong>Mobile:</strong> Long-press a letter, then tap the <span className="bg-rose-500 text-white px-1 rounded text-xs">×</span></li>
                  <li>Crossed-out letters appear below the griddle</li>
                  <li>Changed your mind? Tap a crossed-out letter to restore it!</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">⌨️ Keyboard Shortcuts</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Type letters to place them</li>
                  <li>↑↓ arrows to switch words</li>
                  <li>Tab for next incomplete word</li>
                  <li>Backspace to remove</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">💾 Save & Replay</p>
                <p className="text-xs">Progress saves automatically! Replay puzzles for fun.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      {showStats && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowStats(false)}>
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-5 max-w-md w-full border ${season.border} max-h-[90vh] overflow-y-auto`} onClick={e => e.stopPropagation()}>
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
            
            {/* Achievements */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <h3 className={`text-sm font-bold ${season.text} mb-3`}>🏆 Achievements</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className={`p-2 rounded-lg text-center ${stats.puzzlesCompleted >= 1 ? 'bg-amber-500/30' : 'bg-white/5 opacity-50'}`}>
                  <div className="text-xl">{stats.puzzlesCompleted >= 1 ? '🎿' : '🔒'}</div>
                  <div className={`text-xs ${season.text}`}>First Run</div>
                  <div className={`text-xs ${season.textMuted}`}>Solve 1 puzzle</div>
                </div>
                <div className={`p-2 rounded-lg text-center ${stats.puzzlesCompleted >= 5 ? 'bg-amber-500/30' : 'bg-white/5 opacity-50'}`}>
                  <div className="text-xl">{stats.puzzlesCompleted >= 5 ? '⛷️' : '🔒'}</div>
                  <div className={`text-xs ${season.text}`}>Ski Patrol</div>
                  <div className={`text-xs ${season.textMuted}`}>Solve 5 puzzles</div>
                </div>
                <div className={`p-2 rounded-lg text-center ${stats.currentStreak >= 3 ? 'bg-amber-500/30' : 'bg-white/5 opacity-50'}`}>
                  <div className="text-xl">{stats.currentStreak >= 3 ? '🔥' : '🔒'}</div>
                  <div className={`text-xs ${season.text}`}>On Fire</div>
                  <div className={`text-xs ${season.textMuted}`}>3-day streak</div>
                </div>
                <div className={`p-2 rounded-lg text-center ${stats.currentStreak >= 7 ? 'bg-amber-500/30' : 'bg-white/5 opacity-50'}`}>
                  <div className="text-xl">{stats.currentStreak >= 7 ? '🏔️' : '🔒'}</div>
                  <div className={`text-xs ${season.text}`}>Mountain Master</div>
                  <div className={`text-xs ${season.textMuted}`}>7-day streak</div>
                </div>
                <div className={`p-2 rounded-lg text-center ${stats.fastestTime && stats.fastestTime <= 60 ? 'bg-amber-500/30' : 'bg-white/5 opacity-50'}`}>
                  <div className="text-xl">{stats.fastestTime && stats.fastestTime <= 60 ? '⚡' : '🔒'}</div>
                  <div className={`text-xs ${season.text}`}>Speed Skater</div>
                  <div className={`text-xs ${season.textMuted}`}>Under 1 minute</div>
                </div>
                <div className={`p-2 rounded-lg text-center ${stats.puzzlesCompleted >= 17 ? 'bg-amber-500/30' : 'bg-white/5 opacity-50'}`}>
                  <div className="text-xl">{stats.puzzlesCompleted >= 17 ? '🥇' : '🔒'}</div>
                  <div className={`text-xs ${season.text}`}>Gold Medalist</div>
                  <div className={`text-xs ${season.textMuted}`}>Complete all 17</div>
                </div>
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
              <pre className="whitespace-pre-wrap">{`Free & ad-free!
Part of the Letter Griddle Games 🥞
More games: lettergriddle.com

❄️ Letter Griddle Cottage
${season.eventTitle}
${puzzleData.category}

${'🥇'.repeat(completedWords.filter(c => c).length)}
${completedWords.filter(c => c).length}/5 words${isReplay ? ' (Replay)' : ''}

Play at lettergriddlecottage.com`}</pre>
            </div>
            <button onClick={handleShare} className={`w-full py-3 rounded-full bg-gradient-to-r ${season.accent} text-white font-bold`}>
              {shareCopied ? '✓ Copied!' : '❄️ Share Results'}
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

      {/* Welcome Screen - First Visit */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-6 max-w-md w-full border-2 ${season.border} shadow-2xl max-h-[90vh] overflow-y-auto`}>
            {/* Header */}
            <div className="text-center mb-4">
              <p className="text-5xl mb-3">🏠</p>
              <h1 className={`text-2xl font-bold ${season.text} mb-1`} style={{ fontFamily: 'Georgia, serif' }}>
                Welcome to Letter Griddle Cottage!
              </h1>
              <p className={`${season.textMuted} text-sm`}>A cozy seasonal retreat with a twist...</p>
            </div>

            {/* The Twist - Highlighted */}
            <div className="bg-amber-500/25 border-2 border-amber-400/50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎯</span>
                <h2 className={`text-lg font-bold ${season.text}`}>The Cottage Twist!</h2>
              </div>
              <p className={`${season.text} text-sm`}>
                Each word's griddle contains <strong>1-2 decoy letters</strong> that don't belong. 
                Your challenge is to figure out which letters are real and which are impostors!
              </p>
            </div>

            {/* How to Play */}
            <div className="bg-white/10 rounded-xl p-4 mb-4">
              <h3 className={`font-bold ${season.text} mb-3 flex items-center gap-2`}>
                <span>❄️</span> How to Play
              </h3>
              <ul className={`${season.text} text-sm space-y-2`}>
                <li className="flex items-start gap-2">
                  <span>1️⃣</span>
                  <span>Tap a letter from the griddle, then tap an empty slot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>2️⃣</span>
                  <span>One letter is already revealed to help you start</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>3️⃣</span>
                  <span>Tap placed letters to remove them</span>
                </li>
              </ul>
            </div>

            {/* Cross Out Feature - Highlighted */}
            <div className="bg-rose-500/20 border border-rose-400/40 rounded-xl p-4 mb-5">
              <h3 className={`font-bold ${season.text} mb-2 flex items-center gap-2`}>
                <span>🚫</span> Spot a Decoy?
              </h3>
              <p className={`${season.text} text-sm mb-2`}>
                <strong>Hover</strong> (or long-press on mobile) over any letter to reveal a red 
                <span className="bg-rose-500 text-white px-1.5 py-0.5 rounded mx-1 text-xs font-bold">×</span> 
                button. Tap it to cross out suspected decoys!
              </p>
              <p className={`${season.textMuted} text-xs`}>
                Changed your mind? Tap crossed-out letters to restore them.
              </p>
            </div>

            {/* Let's Play Button */}
            <button
              onClick={dismissWelcome}
              className={`w-full py-4 rounded-full bg-gradient-to-r ${season.accent} text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2`}
            >
              <span>🎿</span> Let's Play!
            </button>

            {/* Footer note */}
            <p className={`text-center ${season.textMuted} text-xs mt-4`}>
              You can always tap <HelpCircle size={12} className="inline" /> for help
            </p>
          </div>
        </div>
      )}
    </div>
  );
}