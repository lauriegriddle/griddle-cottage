"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, Shuffle, HelpCircle, BarChart3, Share2, Music, Volume2, VolumeX, Calendar, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LetterGriddleCottage() {
  // ============================================
  // SEASON CONFIGURATION
  // ============================================
  const seasons = {
    spring: {
      name: 'Spring',
      icon: '🌸',
      subheading: 'Spring Awakening',
      eventTitle: '🌷 Spring Awakening',
      eventDates: 'March 2026',
      eventDescription: 'Watch the garden come alive with puzzles about flowers, renewal, and springtime joy.',
      isActive: true,
      comingSoon: false,
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
      tracks: [
        { name: 'Spring', file: '/spring.mp3' },
        { name: 'Holiday', file: '/holiday.mp3' },
        { name: 'Modern Spring', file: '/modern-spring.mp3' },
        { name: 'Piano Spring', file: '/piano-spring.mp3' },
      ],
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

  const [currentSeason, setCurrentSeason] = useState('spring');
  const season = seasons[currentSeason];

  // ============================================
  // SPRING PUZZLES
  // ============================================
  const allPuzzles = [
    {
      puzzleNumber: 1,
      category: "Spring Cottage",
      funFact: "Spring officially begins with the vernal equinox, when the sun passes the celestial equator, providing nearly equal day and night worldwide.",
      quote: "Where flowers bloom so does hope.",
      quoteAuthor: "Lady Bird Johnson",
      words: [
        { word: "ANEW", hint: "Starting fresh, like nature in spring", letters: ['N', 'W', 'E', 'A'], revealedIndex: 0 },
        { word: "MARCH", hint: "The month spring often begins", letters: ['R', 'A', 'C', 'M', 'H'], revealedIndex: 2 },
        { word: "SPRING", hint: "The season of renewal and growth", letters: ['R', 'G', 'P', 'S', 'N', 'I'], revealedIndex: 3 },
        { word: "EQUINOX", hint: "Day when light and dark are nearly equal", letters: ['Q', 'X', 'N', 'U', 'O', 'I', 'E'], revealedIndex: 4 },
        { word: "BLOOMING", hint: "What flowers do when they open up", letters: ['O', 'G', 'L', 'M', 'B', 'N', 'I', 'O'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 2,
      category: "Green",
      funFact: "Green is the most restful color to the human eye, which can distinguish more shades of green than any other hue.",
      quote: "The earth laughs in flowers.",
      quoteAuthor: "Ralph Waldo Emerson",
      words: [
        { word: "LIME", hint: "Bright yellowish-green citrus color", letters: ['M', 'I', 'E', 'L'], revealedIndex: 0 },
        { word: "KELLY", hint: "Vivid green named after an Irish surname", letters: ['L', 'E', 'K', 'Y', 'L'], revealedIndex: 2 },
        { word: "FOREST", hint: "Deep green like woodland trees", letters: ['R', 'T', 'O', 'S', 'F', 'E'], revealedIndex: 3 },
        { word: "EMERALD", hint: "Rich green like the precious gemstone", letters: ['M', 'R', 'L', 'A', 'D', 'E', 'E'], revealedIndex: 4 },
        { word: "HONEYDEW", hint: "Pale green like the melon", letters: ['N', 'D', 'Y', 'O', 'H', 'W', 'E', 'E'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 3,
      category: "Blooms",
      funFact: "Spring flowers, often signaling the end of winter, are full of surprises: tulips were once more valuable than homes in the 17th-century Netherlands and daffodils are actually poisonous to animals.",
      quote: "Blossom by blossom the spring begins.",
      quoteAuthor: "Algernon Charles Swinburne",
      words: [
        { word: "PICK", hint: "To choose or pluck a flower", letters: ['I', 'P', 'C', 'K'], revealedIndex: 0 },
        { word: "FIELD", hint: "Open land where wildflowers grow", letters: ['E', 'L', 'I', 'D', 'F'], revealedIndex: 2 },
        { word: "GARDEN", hint: "A place to grow flowers at home", letters: ['R', 'A', 'G', 'N', 'D', 'E'], revealedIndex: 3 },
        { word: "BOUQUET", hint: "A bunch of flowers tied together", letters: ['Q', 'O', 'U', 'T', 'B', 'E', 'U'], revealedIndex: 4 },
        { word: "FRAGRANT", hint: "Having a sweet pleasant smell", letters: ['R', 'G', 'A', 'T', 'N', 'F', 'A', 'R'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 4,
      category: "Spring Equinox",
      funFact: "Spring Equinox signifies the first day of spring, features the sun rising/setting due east/west, and signals 6 months of daylight at the North Pole.",
      quote: "No winter lasts forever; no spring skips its turn.",
      quoteAuthor: "Hal Borland",
      words: [
        { word: "EAST", hint: "Direction where the sun rises", letters: ['A', 'E', 'T', 'S'], revealedIndex: 0 },
        { word: "WEST", hint: "Direction where the sun sets", letters: ['S', 'E', 'T', 'W'], revealedIndex: 2 },
        { word: "SUNSET", hint: "When the sun goes down", letters: ['N', 'U', 'T', 'S', 'S', 'E'], revealedIndex: 3 },
        { word: "SUNRISE", hint: "When the sun comes up", letters: ['N', 'U', 'R', 'S', 'E', 'S', 'I'], revealedIndex: 4 },
        { word: "DAYLIGHT", hint: "The light from the sun during the day", letters: ['A', 'L', 'G', 'Y', 'I', 'D', 'T', 'H'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 5,
      category: "Spring Flowers",
      funFact: "Tulips were once a status symbol for the wealthy in the 1600s. In the United Kingdom, it is illegal to pick or sell wild bluebells under the Wildlife and Countryside Act.",
      quote: "To plant a garden is to believe in tomorrow.",
      quoteAuthor: "Audrey Hepburn",
      words: [
        { word: "BULB", hint: "Underground part that flowers grow from", letters: ['L', 'U', 'B', 'B'], revealedIndex: 0 },
        { word: "FRESH", hint: "New and recently made or picked", letters: ['R', 'S', 'E', 'F', 'H'], revealedIndex: 2 },
        { word: "ANNUAL", hint: "A plant that lives for one growing season", letters: ['N', 'A', 'U', 'L', 'N', 'A'], revealedIndex: 3 },
        { word: "VIBRANT", hint: "Bright and full of life and color", letters: ['I', 'R', 'B', 'T', 'V', 'N', 'A'], revealedIndex: 4 },
        { word: "RENEWAL", hint: "The process of making something new again", letters: ['E', 'N', 'W', 'L', 'R', 'A', 'E'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 6,
      category: "Baby Animals",
      funFact: "A newborn koala joey is about the size of a jelly bean. Giraffe calves can stand and walk within an hour of birth. Guinea pigs can run only three hours after birth.",
      quote: "Spring is nature's way of saying, 'Let's party!'",
      quoteAuthor: "Robin Williams",
      words: [
        { word: "JOEY", hint: "A baby kangaroo or koala", letters: ['O', 'J', 'Y', 'E'], revealedIndex: 0 },
        { word: "OWLET", hint: "A baby owl", letters: ['L', 'W', 'E', 'O', 'T'], revealedIndex: 2 },
        { word: "CYGNET", hint: "A baby swan", letters: ['G', 'Y', 'N', 'C', 'T', 'E'], revealedIndex: 3 },
        { word: "GOSLING", hint: "A baby goose", letters: ['O', 'L', 'S', 'G', 'N', 'G', 'I'], revealedIndex: 4 },
        { word: "DUCKLING", hint: "A baby duck", letters: ['U', 'L', 'C', 'I', 'K', 'D', 'G', 'N'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 7,
      category: "Spring Cleaning",
      funFact: "The golden rule of housekeeping is: Clean as you go.",
      quote: "Spring: a lovely reminder of how beautiful change can truly be.",
      quoteAuthor: "Unknown",
      words: [
        { word: "DUST", hint: "Tiny particles to wipe away", letters: ['U', 'D', 'T', 'S'], revealedIndex: 0 },
        { word: "SHINE", hint: "To make something sparkle", letters: ['H', 'N', 'I', 'S', 'E'], revealedIndex: 2 },
        { word: "VACUUM", hint: "Machine that sucks up dirt", letters: ['A', 'U', 'C', 'V', 'M', 'U'], revealedIndex: 3 },
        { word: "LAUNDRY", hint: "Clothes that need washing", letters: ['A', 'N', 'U', 'L', 'R', 'D', 'Y'], revealedIndex: 4 },
        { word: "CLEANING", hint: "Making things tidy and fresh", letters: ['L', 'A', 'E', 'N', 'I', 'C', 'G', 'N'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 8,
      category: "In Bloom",
      funFact: "Crocuses are often the first to appear, capable of pushing through snow to signal the end of winter.",
      quote: "Spring unlocks the flowers to paint the laughing soil.",
      quoteAuthor: "Bishop Reginald Heber",
      words: [
        { word: "LILY", hint: "Elegant flower often seen at Easter", letters: ['I', 'L', 'Y', 'L'], revealedIndex: 0 },
        { word: "LILAC", hint: "Fragrant purple spring shrub", letters: ['I', 'A', 'L', 'L', 'C'], revealedIndex: 2 },
        { word: "LUPINE", hint: "Tall spiky wildflower in many colors", letters: ['U', 'I', 'P', 'L', 'E', 'N'], revealedIndex: 3 },
        { word: "PETUNIA", hint: "Popular trumpet-shaped garden flower", letters: ['E', 'U', 'T', 'P', 'I', 'A', 'N'], revealedIndex: 4 },
        { word: "DAFFODIL", hint: "Cheerful yellow spring trumpet flower", letters: ['A', 'F', 'O', 'D', 'I', 'F', 'L', 'D'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 9,
      category: "St. Patrick's Day",
      funFact: "St. Patrick's Day actually originated with the color blue, not green, and the saint himself was born in Britain, not Ireland. Furthermore, the first parade took place in Florida in 1601, not Ireland, and the holiday's popular corned beef dish is an Irish-American tradition rather than an authentic Irish meal.",
      quote: "April hath put a spirit of youth in everything.",
      quoteAuthor: "William Shakespeare",
      words: [
        { word: "LUCK", hint: "Good fortune, often associated with the Irish", letters: ['U', 'L', 'K', 'C'], revealedIndex: 0 },
        { word: "CHARM", hint: "A lucky object or trinket", letters: ['H', 'R', 'A', 'C', 'M'], revealedIndex: 2 },
        { word: "CLOVER", hint: "Plant with three or four leaves", letters: ['L', 'V', 'O', 'C', 'R', 'E'], revealedIndex: 3 },
        { word: "IRELAND", hint: "The Emerald Isle", letters: ['R', 'L', 'E', 'I', 'N', 'A', 'D'], revealedIndex: 4 },
        { word: "LEPRECHAUN", hint: "Tiny mythical Irish fairy shoemaker", letters: ['E', 'R', 'P', 'C', 'H', 'L', 'A', 'U', 'N', 'E'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 10,
      category: "Spring Ahead",
      funFact: "Daylight Saving Time (DST) is not meant for farmers, it is properly named \"Daylight Saving Time\" (singular), and it was first implemented by Germany in 1916 to conserve coal during WWI. While often credited to Benjamin Franklin, he only jokingly suggested changing sleep schedules, not the clocks.",
      quote: "Here comes the sun.",
      quoteAuthor: "The Beatles",
      words: [
        { word: "TIME", hint: "What we measure with a clock", letters: ['I', 'T', 'E', 'M'], revealedIndex: 0 },
        { word: "CLOCK", hint: "Device that tells the hour", letters: ['L', 'C', 'O', 'C', 'K'], revealedIndex: 2 },
        { word: "CHANGE", hint: "To make different or adjust", letters: ['H', 'N', 'A', 'C', 'G', 'E'], revealedIndex: 3 },
        { word: "GERMANY", hint: "Country that first used DST in 1916", letters: ['E', 'M', 'R', 'G', 'N', 'A', 'Y'], revealedIndex: 4 },
        { word: "DAYLIGHT", hint: "The sunlit hours we're saving", letters: ['A', 'L', 'Y', 'I', 'G', 'D', 'T', 'H'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 11,
      category: "Greenhouse",
      funFact: "Greenhouses create controlled, warm environments for plants by trapping solar radiation, a concept dating back to Roman times when they used mica to grow cucumbers for Emperor Tiberius. Modern greenhouses conserve water, boost food security, and can even feature self-watering, automated systems for year-round growing.",
      quote: "If we had no winter, the spring would not be so pleasant.",
      quoteAuthor: "Anne Bradstreet",
      words: [
        { word: "GROW", hint: "What plants do in spring", letters: ['R', 'G', 'W', 'O'], revealedIndex: 0 },
        { word: "SOLAR", hint: "Related to the sun's energy", letters: ['O', 'A', 'L', 'S', 'R'], revealedIndex: 2 },
        { word: "WARMTH", hint: "Cozy heat that plants love", letters: ['A', 'M', 'R', 'W', 'T', 'H'], revealedIndex: 3 },
        { word: "PLANTER", hint: "Container for growing flowers", letters: ['L', 'N', 'A', 'P', 'T', 'R', 'E'], revealedIndex: 4 },
        { word: "HOTHOUSE", hint: "Another name for a heated greenhouse", letters: ['O', 'H', 'T', 'U', 'O', 'H', 'E', 'S'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 12,
      category: "Gardening",
      funFact: "Modern, efficient garden tools often have surprisingly deep histories. For example, rakes and wheelbarrows originated in China.",
      quote: "To plant a garden is to believe in tomorrow.",
      quoteAuthor: "Audrey Hepburn",
      words: [
        { word: "RAKE", hint: "Tool for gathering leaves", letters: ['A', 'R', 'E', 'K'], revealedIndex: 0 },
        { word: "SPADE", hint: "Flat-bladed digging tool", letters: ['P', 'A', 'S', 'E', 'D'], revealedIndex: 2 },
        { word: "TROWEL", hint: "Small handheld digging tool", letters: ['R', 'W', 'O', 'T', 'L', 'E'], revealedIndex: 3 },
        { word: "PRUNING", hint: "Trimming plants to help them grow", letters: ['R', 'N', 'U', 'P', 'I', 'G', 'N'], revealedIndex: 4 },
        { word: "WATERING", hint: "Giving plants a drink", letters: ['A', 'E', 'T', 'R', 'I', 'W', 'G', 'N'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 13,
      category: "Kite Flying",
      funFact: "Observing the wind, watching the clouds, and feeling the breeze all help to create a deeper connection to the world around us. Kite flying is a holistic way to improve physical, mental, and emotional health.",
      quote: "Spring is nature's way of saying, 'Let's party!'",
      quoteAuthor: "Robin Williams",
      words: [
        { word: "TAIL", hint: "Ribbon that trails behind the kite", letters: ['A', 'T', 'L', 'I'], revealedIndex: 0 },
        { word: "WINDY", hint: "Weather perfect for kites", letters: ['I', 'D', 'N', 'W', 'Y'], revealedIndex: 2 },
        { word: "STRING", hint: "What you hold to control the kite", letters: ['T', 'I', 'R', 'S', 'G', 'N'], revealedIndex: 3 },
        { word: "SOARING", hint: "Flying high in the sky", letters: ['O', 'R', 'A', 'S', 'I', 'G', 'N'], revealedIndex: 4 },
        { word: "DIAMOND", hint: "Classic kite shape", letters: ['I', 'M', 'A', 'O', 'D', 'D', 'N'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 14,
      category: "Birdsong",
      funFact: "The bird most famously called the \"singing bird,\" especially for its beautiful and complex nocturnal songs, is the Nightingale. While the Nightingale is renowned, many birds are known for their singing, including the robin, canary, mockingbird, and sparrow, all part of the larger group of birds known as songbirds.",
      quote: "The earth laughs in flowers.",
      quoteAuthor: "Ralph Waldo Emerson",
      words: [
        { word: "ROBIN", hint: "Red-breasted bird, a sign of spring", letters: ['O', 'R', 'I', 'B', 'N'], revealedIndex: 0 },
        { word: "FINCH", hint: "Small colorful songbird", letters: ['I', 'C', 'N', 'F', 'H'], revealedIndex: 2 },
        { word: "SPARROW", hint: "Common brown chirping bird", letters: ['P', 'R', 'A', 'S', 'O', 'R', 'W'], revealedIndex: 3 },
        { word: "CARDINAL", hint: "Bright red bird with a crest", letters: ['A', 'D', 'R', 'I', 'C', 'L', 'A', 'N'], revealedIndex: 4 },
        { word: "BLUEBIRD", hint: "Symbol of happiness with sky-colored feathers", letters: ['L', 'E', 'U', 'I', 'B', 'D', 'B', 'R'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 15,
      category: "Farmers Market",
      funFact: "Farmers markets offer ultra-fresh, locally sourced produce, with over 85% of vendors traveling fewer than 50 miles. These community hubs promote sustainability, often feature organic-standard produce, and allow farmers to keep up to 90 cents of every dollar. They are also vibrant social spaces with high-quality, unique items not found in typical grocery stores.",
      quote: "Spring: the music of open windows.",
      quoteAuthor: "Terri Guillemets",
      words: [
        { word: "FRESH", hint: "Just picked, not old", letters: ['R', 'F', 'S', 'E', 'H'], revealedIndex: 0 },
        { word: "LOCAL", hint: "From nearby farms", letters: ['O', 'A', 'C', 'L', 'L'], revealedIndex: 2 },
        { word: "VENDOR", hint: "Person selling goods at a market", letters: ['E', 'D', 'N', 'V', 'R', 'O'], revealedIndex: 3 },
        { word: "PRODUCE", hint: "Fruits and vegetables", letters: ['R', 'D', 'O', 'U', 'P', 'E', 'C'], revealedIndex: 4 },
        { word: "ORGANIC", hint: "Grown without chemicals", letters: ['R', 'A', 'G', 'N', 'O', 'C', 'I'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 16,
      category: "Sunny Days",
      funFact: "Spring officially begins with the March equinox (around March 20, 2026), when the Earth's axis tilts toward the sun, leading to longer days, warmer weather, and increased thunderstorm activity. This transitional season features rising sap for maple syrup, blooming flowers, and the arrival of migrating animals.",
      quote: "Here comes the sun.",
      quoteAuthor: "The Beatles",
      words: [
        { word: "WARM", hint: "Pleasantly hot temperature", letters: ['A', 'W', 'M', 'R'], revealedIndex: 0 },
        { word: "CLEAR", hint: "Sky without clouds", letters: ['L', 'A', 'E', 'C', 'R'], revealedIndex: 2 },
        { word: "BREEZY", hint: "Gently windy", letters: ['R', 'E', 'E', 'B', 'Y', 'Z'], revealedIndex: 3 },
        { word: "WEATHER", hint: "Daily conditions outside", letters: ['E', 'T', 'A', 'H', 'W', 'R', 'E'], revealedIndex: 4 },
        { word: "BRIGHTER", hint: "More full of light", letters: ['R', 'G', 'I', 'H', 'T', 'B', 'R', 'E'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 17,
      category: "Spring Tea",
      funFact: "Tea is the world's second most consumed beverage after water, with over 3 billion cups consumed daily. All true tea (white, green, oolong, black) comes from the same plant, camellia sinesis. It originated as medicine in ancient China, and it takes about 2,000 hand-picked leaves to make one pound of finished tea.",
      quote: "O, wind, if winter comes, can spring be far behind?",
      quoteAuthor: "Percy Bysshe Shelley",
      words: [
        { word: "BREW", hint: "To make tea by steeping", letters: ['R', 'B', 'W', 'E'], revealedIndex: 0 },
        { word: "HONEY", hint: "Sweet golden tea sweetener", letters: ['O', 'E', 'N', 'H', 'Y'], revealedIndex: 2 },
        { word: "KETTLE", hint: "Pot for boiling water", letters: ['E', 'T', 'T', 'K', 'E', 'L'], revealedIndex: 3 },
        { word: "CALMING", hint: "Soothing and relaxing", letters: ['A', 'M', 'L', 'I', 'C', 'G', 'N'], revealedIndex: 4 },
        { word: "JASMINE", hint: "Fragrant floral tea variety", letters: ['A', 'M', 'S', 'I', 'N', 'J', 'E'], revealedIndex: 5 },
      ],
    },
    {
      puzzleNumber: 18,
      category: "April Showers",
      funFact: "April showers are primarily caused by the shifting jet stream, which brings unstable, alternating cold and warm air, resulting in frequent, sudden rain in the Northern Hemisphere. While famous for promoting spring growth, April is often not the wettest month, but it provides crucial hydration for flowers.",
      quote: "Blossom by blossom the spring begins.",
      quoteAuthor: "Algernon Charles Swinburne",
      words: [
        { word: "RAIN", hint: "Water falling from clouds", letters: ['A', 'R', 'N', 'I'], revealedIndex: 0 },
        { word: "STORM", hint: "Heavy weather with wind and rain", letters: ['T', 'R', 'O', 'S', 'M'], revealedIndex: 2 },
        { word: "PUDDLE", hint: "Small pool of water on the ground", letters: ['U', 'D', 'D', 'P', 'E', 'L'], revealedIndex: 3 },
        { word: "DRIZZLE", hint: "Light gentle rain", letters: ['R', 'Z', 'I', 'L', 'D', 'E', 'Z'], revealedIndex: 4 },
        { word: "UMBRELLA", hint: "Handheld rain protection", letters: ['M', 'R', 'B', 'L', 'E', 'U', 'A', 'L'], revealedIndex: 5 },
      ],
    },
  ];

  // ============================================
  // PUZZLE SELECTION
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
      const letters = [...w.letters];
      const revealedLetter = w.word[w.revealedIndex];
      const revealedIdx = letters.indexOf(revealedLetter);
      if (revealedIdx !== -1) {
        letters.splice(revealedIdx, 1);
      }
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

🌸 Letter Griddle Cottage
${season.eventTitle}
${puzzleData.category}

${'🌷'.repeat(completedWords.filter(c => c).length)}
${completedWords.filter(c => c).length}/5 words${isReplay ? ' (Replay)' : ''}

Play at lettergriddlecottage.com`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Letter Griddle Cottage',
          text: text,
        });
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }
    
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
        <div className={`text-xl ${season.text}`}>🌸 Loading Cottage...</div>
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
              {['🌸', '🌷', '🦋', '🌼', '✨'][i % 5]}
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
        @keyframes bounceIn { 
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        .shake { animation: shake 0.4s ease-in-out; }
        .animate-bounce-in { animation: bounceIn 0.6s ease-out forwards; }
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
        input, textarea, [contenteditable] {
          caret-color: transparent !important;
        }
      `}</style>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="flex justify-center items-center gap-2 mb-1">
            <span className="text-2xl">🌸</span>
            <h1 className={`text-xl md:text-2xl font-bold ${season.text}`} style={{ fontFamily: 'Georgia, serif' }}>
              Letter Griddle Cottage
            </h1>
            <span className="text-2xl">🌸</span>
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

        {/* Open House Puzzle Selector */}
       <div className={`bg-white/15 border-2 border-pink-400 rounded-xl p-2 mb-3 animate-pulse`}>
          <div className="flex items-center justify-center gap-2">
            <span className={`text-xs ${season.text}`}>🌸 Spring Puzzle Selector:</span>
            <button onClick={goToPreviousPuzzle} className={`p-1 rounded-full bg-white/20 hover:bg-white/30 ${season.text}`}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => setShowPuzzleSelector(true)} className={`px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-semibold shadow-md hover:scale-105 transition-transform`}>
  Puzzle {puzzleData.puzzleNumber}/{allPuzzles.length}
</button>
            <button onClick={goToNextPuzzle} className={`p-1 rounded-full bg-white/20 hover:bg-white/30 ${season.text}`}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
<div className={`bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center rounded-lg p-3 mb-3 shadow-lg animate-pulse`}>
  <p className="text-base font-bold">
    🌸 Tap the pink button above to explore all {allPuzzles.length} puzzles! 🌸
  </p>
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

        {/* Progress Notice */}
        {!allComplete && (
          <div className={`text-center text-xs ${season.textMuted} mb-3`}>
            ✨ Progress saves automatically!
            <button onClick={resetPuzzle} className="ml-2 underline hover:no-underline">🔄 Reset</button>
          </div>
        )}

        {/* Completion Modal */}
        {allComplete && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 p-4">
            <div className={`bg-gradient-to-br ${season.cardBg} backdrop-blur rounded-2xl p-6 max-w-md w-full text-center border-2 ${season.border} shadow-2xl transform animate-bounce-in`}>
              <p className="text-4xl mb-2">🌷</p>
              <p className={`text-2xl font-bold ${season.text} mb-1`} style={{ fontFamily: 'Georgia, serif' }}>Cottage Complete!</p>
              <p className={`text-lg ${season.text} mb-2`} style={{ fontFamily: 'Georgia, serif' }}>{puzzleData.category}</p>
              <p className={`${season.text} text-lg mb-3`}>{'🌷'.repeat(5)}</p>
              <p className={`${season.textMuted} text-sm mb-4`}>5/5 words{isReplay ? ' (Replay)' : ''}</p>
              
             <div className={`bg-white/10 rounded-lg p-3 mb-4 text-center`}>
  <p className={`text-lg italic ${season.text} mb-2`}>"{puzzleData.quote}"</p>
  <p className={`text-sm ${season.textMuted}`}>— {puzzleData.quoteAuthor}</p>
</div>

<div className={`bg-white/10 rounded-lg p-3 mb-4 text-left`}>
  <p className={`text-xs font-bold ${season.text} mb-1`}>🌸  Did you know?</p>
  <p className={`text-sm ${season.text}`}>{puzzleData.funFact}</p>
</div>
              
             <div className="flex justify-center gap-3 flex-wrap">
  <button onClick={() => setShowShare(true)} className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${season.accent} text-white font-semibold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform`}>
    🌸 Share
  </button>
  {currentPuzzleIndex < allPuzzles.length - 1 && (
    <button 
      onClick={() => { setCurrentPuzzleIndex(currentPuzzleIndex + 1); }} 
      className={`px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform`}
    >
      🌷 Next Puzzle
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
                  ${isFocused ? `border-pink-400/50 bg-white/5` : `${season.border} border-transparent`}
                  ${isCelebrating ? 'ring-4 ring-pink-400/50 scale-[1.02]' : ''}
                  ${isComplete ? 'opacity-80' : ''}
                `}
              >
                {/* Word Header */}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">🌸</span>
                    <span className={`text-xs font-bold ${season.text}`}>{wordData.word.length} Letters</span>
                    {isComplete && <span>🌷</span>}
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
                    {['Fresh start! 🌱', 'Blooming brilliance! 🌷', 'Spring forward! 🦋', 'Spring beauty! 🌼', 'Wonderful! ✨'][wordIdx]}
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
        <div className={`mt-6 text-center text-xs ${season.textMuted}`}>
          <p className="mb-1">🌸 Letter Griddle Cottage • Part of the Letter Griddle Family 🥞</p>
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
              <h2 className={`text-lg font-bold ${season.text}`}>🌸 Select Puzzle</h2>
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
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold mb-1">🌸 How to Play</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Click a letter, then click an empty slot</li>
                  <li>OR click a slot first, then click a letter</li>
                  <li>Click placed letters to remove them</li>
                  <li>One letter is revealed to help you start</li>
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
            <p className={`mt-4 text-center text-xs ${season.textMuted}`}>Stats saved locally</p>
          </div>
        </div>
      )}

      {/* Share */}
      {showShare && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowShare(false)}>
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-5 max-w-md w-full border ${season.border}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-bold ${season.text}`}>🌸 Share Results</h2>
              <button onClick={() => setShowShare(false)} className={`${season.text} hover:opacity-70`}><X size={24} /></button>
            </div>
            <div className={`bg-black/20 rounded-lg p-4 mb-4 font-mono text-xs ${season.text}`}>
              <pre className="whitespace-pre-wrap">{`Free & ad-free!
Part of the Letter Griddle Games 🥞
More games: lettergriddle.com

🌸 Letter Griddle Cottage
${season.eventTitle}
${puzzleData.category}

${'🌷'.repeat(completedWords.filter(c => c).length)}
${completedWords.filter(c => c).length}/5 words${isReplay ? ' (Replay)' : ''}

Play at lettergriddlecottage.com`}</pre>
            </div>
            <button onClick={handleShare} className={`w-full py-3 rounded-full bg-gradient-to-r ${season.accent} text-white font-bold`}>
              {shareCopied ? '✓ Copied!' : '🌸 Share Results'}
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
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={() => setMusicEnabled(!musicEnabled)}
                  className={`px-4 py-2 rounded-full font-semibold ${musicEnabled ? `bg-gradient-to-r ${season.accent} text-white` : `bg-white/20 ${season.text}`}`}
                >
                  {musicEnabled ? '🔊 Music On' : '🔇 Music Off'}
                </button>
              </div>
              {season.tracks.length > 0 && (
                <div className="space-y-2">
                  {season.tracks.map((track, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setCurrentTrack(idx); setMusicEnabled(true); }}
                      className={`w-full p-3 rounded-lg text-left transition-all ${currentTrack === idx && musicEnabled ? `bg-gradient-to-r ${season.accent} text-white` : `bg-white/10 ${season.text} hover:bg-white/20`}`}
                    >
                      <span className="mr-2">{currentTrack === idx && musicEnabled ? '🎵' : '🎶'}</span>
                      {track.name}
                    </button>
                  ))}
                </div>
              )}
              <div className="mt-4">
                <label className={`text-xs ${season.textMuted} block mb-2`}>Volume</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => { setVolume(parseFloat(e.target.value)); localStorage.setItem('cottageMusicVolume', e.target.value); }}
                  className="w-full"
                />
              </div>
            </div>
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
                  <p className="text-2xl mb-1">🌸</p>
                  <p className="font-bold">Spring is here!</p>
                  <p className={`text-sm ${season.textMuted}`}> Puzzles have fun facts and inspirational quotes.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Welcome Screen */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className={`bg-gradient-to-br ${season.gradient} rounded-2xl p-6 max-w-md w-full border-2 ${season.border} shadow-2xl max-h-[90vh] overflow-y-auto`}>
            <div className="text-center mb-4">
              <p className="text-5xl mb-3">🏠</p>
             <h1 className={`text-2xl font-bold ${season.text} mb-1`} style={{ fontFamily: 'Georgia, serif' }}>
                Welcome to Letter Griddle Cottage!
              </h1>
              <p className={`${season.textMuted} text-sm`}>A cozy seasonal word puzzle retreat 🌸</p>
            </div>

            <div className="bg-emerald-500/20 border-2 border-emerald-400/50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🌷</span>
                <h2 className={`text-lg font-bold ${season.text}`}>Spring Awakening!</h2>
              </div>
              <p className={`${season.text} text-sm`}>
                Unscramble the letters in each word's griddle to solve all 5 words. 
                Enjoy cozy spring puzzles with fun facts and inspirational quotes!
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-4">
              <h3 className={`font-bold ${season.text} mb-3 flex items-center gap-2`}>
                <span>🌸</span> How to Play
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

            <button
              onClick={dismissWelcome}
              className={`w-full py-4 rounded-full bg-gradient-to-r ${season.accent} text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2`}
            >
              <span>🌷</span> Let's Play!
            </button>

            <p className={`text-center ${season.textMuted} text-xs mt-4`}>
              You can always tap <HelpCircle size={12} className="inline" /> for help
            </p>
          </div>
        </div>
      )}
    </div>
  );
}