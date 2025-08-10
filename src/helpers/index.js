import city1 from "../assets/city1.jpg";
import city2 from "../assets/city2.jpg";
import city3 from "../assets/city3.jpg";
import city4 from "../assets/city4.jpg";
import city5 from "../assets/city5.jpg";
import city6 from "../assets/city6.jpg";
import city7 from "../assets/city7.jpg";
import city8 from "../assets/city8.jpg";
import city9 from "../assets/city9.jpg";
import city10 from "../assets/city10.jpg";
import tou1 from "../assets/tou1.jpg";
import tou2 from "../assets/tou2.jpg";
import tou3 from "../assets/tou3.jpg";
import tou4 from "../assets/tou4.jpg";
import tou5 from "../assets/tou5.jpg";
import tou6 from "../assets/tou6.jpg";
import tou7 from "../assets/tou7.jpg";
import tou8 from "../assets/tou8.jpg";
import tou9 from "../assets/tou9.jpg";
import tou10 from "../assets/tou10.jpg";

export const navItems = [
  {
    id: "home",
    label: "Home",
    link: "/",
  },
  {
    id: "destinations",
    label: "Destinations",
    link: "/destinations",
  },
  {
    id: "packages",
    label: "Tours & Packages",
    link: "/packages",
  },
  {
    id: "planner",
    label: "Trip Planner",
    link: "/trip-planner",
  },
  {
    id: "contact",
    label: "Contact",
    link: "/contact",
  },
];

export const destinationFilters = [
  { id: "", label: "All" },
  { id: "popular", label: "Popular" },
  { id: "adventure", label: "Adventure" },
  { id: "cultural", label: "Cultural" },
  { id: "romantic", label: "Romantic" },
  { id: "nature", label: "Nature" },
  { id: "luxury", label: "Luxury" },
];

export const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: city1,
    category: "popular",
    shortDescription: "The city of love, art, and history.",
    longDescription:
      "Paris offers timeless charm with its iconic Eiffel Tower, romantic Seine River cruises, exquisite cuisine, and world-famous art at the Louvre. Perfect for couples, art lovers, and cultural explorers.",
    bestTimeToVisit: "April to June, September to October",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame Cathedral",
    ],
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    image: city2,
    category: "cultural",
    shortDescription: "A serene blend of tradition and nature.",
    longDescription:
      "Kyoto boasts centuries-old temples, peaceful gardens, and traditional tea ceremonies. Experience cherry blossom season or vibrant autumn leaves for a truly magical trip.",
    bestTimeToVisit: "March to May, October to November",
    highlights: [
      "Kinkaku-ji",
      "Fushimi Inari Shrine",
      "Arashiyama Bamboo Grove",
    ],
  },
  {
    id: 3,
    name: "Cape Town, South Africa",
    image: city3,
    category: "adventure",
    shortDescription: "Where mountains meet the sea.",
    longDescription:
      "From the iconic Table Mountain to pristine beaches and vibrant markets, Cape Town offers adventure, culture, and breathtaking views at every turn.",
    bestTimeToVisit: "November to March",
    highlights: [
      "Table Mountain",
      "Cape Point",
      "Robben Island",
      "Boulders Beach",
    ],
  },
  {
    id: 4,
    name: "Rome, Italy",
    image: city4,
    category: "cultural",
    shortDescription: "The eternal city of history and flavor.",
    longDescription:
      "Walk through history with ancient ruins, Renaissance art, and mouthwatering Italian cuisine. Rome is a feast for both the eyes and the taste buds.",
    bestTimeToVisit: "April to June, September to October",
    highlights: ["Colosseum", "Vatican City", "Trevi Fountain", "Pantheon"],
  },
  {
    id: 5,
    name: "Santorini, Greece",
    image: city5,
    category: "romantic",
    shortDescription: "Whitewashed houses and deep blue seas.",
    longDescription:
      "Santorini’s sunsets are legendary, its beaches are stunning, and its charm is irresistible. Perfect for relaxation and romance.",
    bestTimeToVisit: "May to October",
    highlights: ["Oia Village", "Red Beach", "Akrotiri Archaeological Site"],
  },
  {
    id: 6,
    name: "Marrakech, Morocco",
    image: city6,
    category: "cultural",
    shortDescription: "A colorful feast for the senses.",
    longDescription:
      "Lose yourself in bustling souks, marvel at Moorish architecture, and enjoy aromatic Moroccan cuisine in this vibrant desert city.",
    bestTimeToVisit: "March to May, September to November",
    highlights: ["Jemaa el-Fnaa", "Majorelle Garden", "Bahia Palace"],
  },
  {
    id: 7,
    name: "New York City, USA",
    image: city7,
    category: "popular",
    shortDescription: "The city that never sleeps.",
    longDescription:
      "From Broadway shows to Central Park strolls, NYC is bursting with culture, cuisine, and world-famous landmarks.",
    bestTimeToVisit: "April to June, September to November",
    highlights: [
      "Statue of Liberty",
      "Times Square",
      "Central Park",
      "Broadway",
    ],
  },
  {
    id: 8,
    name: "Dubai, UAE",
    image: city8,
    category: "luxury",
    shortDescription: "Where luxury meets desert adventure.",
    longDescription:
      "Dubai offers futuristic skyscrapers, luxury shopping, desert safaris, and a blend of modern and traditional Arabian culture.",
    bestTimeToVisit: "November to March",
    highlights: [
      "Burj Khalifa",
      "Palm Jumeirah",
      "Desert Safari",
      "Dubai Mall",
    ],
  },
  {
    id: 9,
    name: "Sydney, Australia",
    image: city9,
    category: "nature",
    shortDescription: "Sun, surf, and stunning sights.",
    longDescription:
      "Sydney combines vibrant city life with iconic landmarks and breathtaking beaches, perfect for both relaxation and adventure.",
    bestTimeToVisit: "September to November, March to May",
    highlights: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"],
  },
  {
    id: 10,
    name: "Banff, Canada",
    image: city10,
    category: "nature",
    shortDescription: "Nature’s masterpiece in the Rockies.",
    longDescription:
      "Banff National Park offers crystal-clear lakes, towering mountains, and wildlife encounters, making it a dream for outdoor enthusiasts.",
    bestTimeToVisit: "June to August, December to March",
    highlights: ["Lake Louise", "Moraine Lake", "Sulphur Mountain"],
  },
];

export const latestStories = [
  {
    image: tou1,
    name: "Alice Mwangi",
    story:
      "Alice’s weekend escape to Lamu was nothing short of magical. She wandered through the narrow streets lined with centuries-old Swahili architecture, the air heavy with the scent of cloves and the sound of distant waves. Her evenings were spent on traditional dhow boats, watching the golden sun sink into the horizon, painting the sky in deep oranges and pinks. Every moment felt like stepping back in time to a simpler, slower way of life.",
    placeVisited: "Lamu, Kenya",
    relevantDetail: "Attended the annual Lamu Cultural Festival",
    latest: false,
  },
  {
    image: tou2,
    name: "Brian Otieno",
    story:
      "Brian’s hike up Mount Longonot was both a physical challenge and a spiritual experience. The steep trails tested his endurance, but each turn revealed views more breathtaking than the last. Upon reaching the crater rim, he stood in awe, gazing down into the vast green expanse inside the dormant volcano. The cool breeze carried the scent of wild grass, and the silence was broken only by distant bird calls. It was a reminder of nature’s quiet power.",
    placeVisited: "Mount Longonot, Kenya",
    relevantDetail: "Completed the hike in under 4 hours",
    latest: false,
  },
  {
    image: tou3,
    name: "Claire Njeri",
    story:
      "Claire found herself lost in the magic of Marrakech, where every corner of the Medina seemed to tell its own story. She wandered past stalls overflowing with colorful spices, intricate lanterns, and handwoven rugs. The calls of merchants mixed with the sweet aroma of mint tea drifting from nearby cafés. By evening, she found a rooftop restaurant overlooking the city, where the setting sun bathed the red walls in a warm glow, and the hum of life below felt endless.",
    placeVisited: "Marrakech, Morocco",
    relevantDetail: "Bought a handcrafted Moroccan teapot",
    latest: false,
  },
  {
    image: tou4,
    name: "Daniel Kimani",
    story:
      "Daniel’s camping trip by Lake Naivasha was a retreat into serenity. Mornings began with the sound of rippling water and birdsong, as mist gently lifted from the lake. During the day, he explored nearby trails and spotted hippos basking along the shores. Nights were spent under a sky bursting with stars, the crackle of a campfire his only companion. In those quiet hours, the world seemed far away, and time moved at the pace of nature.",
    placeVisited: "Lake Naivasha, Kenya",
    relevantDetail: "Tried fishing for the first time",
    latest: false,
  },
  {
    image: tou5,
    name: "Esther Wambui",
    story:
      "Esther’s journey through Stone Town in Zanzibar felt like stepping into a living museum. The carved wooden doors told tales of traders and travelers from centuries past, and the labyrinth of alleys held surprises at every turn. She joined a local cooking class, learning to prepare spiced pilau while listening to stories about the island’s history. As the day ended, she stood by the waterfront, watching dhows glide across the shimmering Indian Ocean.",
    placeVisited: "Stone Town, Zanzibar",
    relevantDetail: "Learned to cook pilau from a local chef",
    latest: false,
  },
  {
    image: tou6,
    name: "Felix Omondi",
    story:
      "Felix’s safari in Maasai Mara began with the roar of a lion in the early morning mist. Over the next two days, he witnessed a spectacle of wildlife — elephants marching in herds, cheetahs sprinting across the plains, and giraffes grazing lazily. The highlight was seeing thousands of wildebeest crossing the Mara River, the water splashing wildly as they battled the currents. It was nature at its rawest, a reminder of how small we are in the grand story of life.",
    placeVisited: "Maasai Mara, Kenya",
    relevantDetail: "Witnessed the Great Wildebeest Migration",
    latest: false,
  },
  {
    image: tou7,
    name: "Grace Achieng",
    story:
      "Grace’s winter getaway to the Swiss Alps was like stepping into a snow globe. She spent her mornings skiing down pristine slopes with the mountains towering like silent guardians around her. Afternoons were for warming up with cheese fondue in cozy wooden chalets. One day, she boarded the Glacier Express, watching the white-covered valleys and frozen lakes roll by like scenes from a painting. Every moment was a postcard brought to life.",
    placeVisited: "Zermatt, Switzerland",
    relevantDetail: "Took a scenic train ride on the Glacier Express",
    latest: false,
  },
  {
    image: tou8,
    name: "Henry Kiptoo",
    story:
      "Henry’s adventure in Cape Town began at the lively V&A Waterfront, where the air was filled with the sound of buskers and the smell of grilled seafood. He visited Robben Island, standing in the very cell where Nelson Mandela once stayed, feeling the weight of history. Later, he took a cable car up Table Mountain, where the city stretched out below like a sparkling tapestry bordered by the ocean. Cape Town left him inspired and humbled.",
    placeVisited: "Cape Town, South Africa",
    relevantDetail: "Toured Robben Island",
    latest: false,
  },
  {
    image: tou9,
    name: "Ivy Chebet",
    story:
      "Ivy’s journey through Tokyo was a seamless dance between ancient tradition and cutting-edge modernity. She began her days visiting serene temples, where incense filled the air and koi fish swam lazily in garden ponds. By night, she plunged into the neon chaos of Shibuya Crossing, swept along by thousands of strangers. One afternoon, she joined a traditional tea ceremony, savoring matcha in silence, the hum of the city momentarily fading away.",
    placeVisited: "Tokyo, Japan",
    relevantDetail: "Tried authentic matcha in a traditional tea house",
    latest: false,
  },
  {
    image: tou10,
    name: "James Mworia",
    story:
      "James’ trip to Iceland felt like an expedition to another planet. He explored roaring waterfalls that plunged into icy rivers, walked across ancient glaciers, and stood on black sand beaches where waves crashed with a thunderous roar. One evening, he soaked in the Blue Lagoon, warm mineral-rich waters contrasting with the chilly air. As the northern lights danced overhead, he felt an overwhelming sense of wonder at Earth’s wild beauty.",
    placeVisited: "Reykjavík & South Coast, Iceland",
    relevantDetail: "Soaked in the Blue Lagoon hot springs",
    latest: true,
  },
];
