// All treks & tours offered. `featured: true` items surface in the
// homepage "Top Picks" rail. `hasDetail: false` items route to the
// generic enquiry CTA instead of a full itinerary, same as the source
// listing (several tours are "ask for details" only).

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "trekking", label: "Trekking" },
  { id: "pilgrimage", label: "Pilgrimage Tours" },
  { id: "cultural", label: "Cultural & Scenic Tours" },
];

export const treks = [
  {
    slug: "adi-kailash-om-parvat-yatra",
    // name: "Adi Kailash & Om \u0950 Parvat Yatra",
    name: "Adi Kailash ",
    category: "pilgrimage",
    badge: "From \u20b921,999pp",
    days: "3\u20137",
    groupSize: "4\u201320",
    difficulty: "Moderate",
    startPoint: "Delhi, Kathgodam or Pithoragarh",
    tone: "dusk",
    image: "/images/adi-kailash.jpg",
    summary:
      "Two sacred, snow-crowned peaks on the Indo-Tibetan border, framed by the Kali river valley and Kumaoni high pastures.",
    description:
      "Adi Kailash and Om Parvat sit close to the Indo-Tibetan frontier in the Kumaon Himalayas, and the natural snow markings on Om Parvat's face give the peak its name. The yatra follows the old trade road up the Kali valley through Dharchula, Gunji and Nabhidhang, gaining altitude gently enough for first-time high-altitude travellers while still delivering genuine mountain scale. Most groups combine the two peaks with a side trip to Parvati Kund, a glacial lake tucked beneath Adi Kailash.",
    highlights: [
      "Darshan of Om Parvat from Nabhidhang, at roughly 4,600m",
      "Overnight stops in Vyas valley border villages",
      "Optional detour to Parvati Kund below Adi Kailash",
      "Inner Line Permit and local registrations arranged for you",
    ],
    hasDetail: true,
    featured: true,
  },
  {
    slug: "Om-parvat",
    name: "Om-parvat",
    category: "trekking",
    days: "2\u20135",
    groupSize: "N/A",
    difficulty: "Easy / Moderate",
    startPoint: "Sari village, Chopta",
    tone: "forest",
    image: "/images/om-parvat.jpg",

    summary:
      "The world's highest Shiva temple at Tungnath (3,680m) and a sunrise summit of Chandrashila (4,000m).",
    description:
      "Munsyari makes a compact base for short, high-reward outings. Khalia Top is a snowfield above the tree line with a 360\u00b0 sweep of Panchachuli and the Kumaon peaks, while Birthi Falls is a short, easy detour on the road in. Both work well as a gentler add-on before or after a longer expedition, or as a standalone weekend trip.",
    highlights: [
      "Khalia Top viewpoint over the Panchachuli range",
      "Birthi Falls, an easy roadside detour",
      "Short itineraries that suit families",
      "Local guides from Munsyari",
    ],
    hasDetail: true,
    featured: true,
  },
  ,
  {
    slug: "darma-valley-trek",
    name: "Darma Valley Trek",
    category: "trekking",
    badge: "Most Popular",
    days: "3\u20137",
    groupSize: "4\u201350",
    difficulty: "Moderate",
    startPoint: "Dharchula, Pithoragarh",
    tone: "forest",
    image: "/images/darma-valley.jpg",
    summary:
      "An offbeat river-valley trail through alpine meadows and Shauka villages beneath the Panchachuli massif.",
    description:
      "Darma Valley is one of Kumaon's quieter corners \u2014 a long, glacier-fed valley that runs beneath the five spires of Panchachuli. The trail threads terraced villages, walnut and juniper groves, and open meadows that turn gold in October. Because the valley is inhabited by the Shauka trading community, the route also carries a strong cultural thread alongside the scenery: watermills, old trade caravans, and village festivals depending on the season.",
    highlights: [
      "Panchachuli massif views from Dantu and Sela villages",
      "Trail follows the Darma river most of the route",
      "Best in May\u2013June (rhododendron) or Sept\u2013Nov (clear peaks)",
      "Stays in village homestays and trekker huts",
    ],
    hasDetail: true,
    featured: true,
  },
    {
      slug: "Khalia Top",
      name: "Khalia Top Trek",
      category: "trekking",
      badge: "Beginner Friendly",
      days: "5\u20136",
      groupSize: "4\u201312",
      difficulty: "Easy / Moderate",
      startPoint: "Kathgodam or Bageshwar",
      tone: "glacier",
      image: "/images/khalia-top.jpg",
      summary:
        "One of Uttarakhand's most classic approach treks, ending at the snout of the Pindari glacier below Nanda Devi's east wall.",
      description:
        "Pindari is often the trek people cut their teeth on \u2014 a well-graded trail with forest rest houses at each stage, gradually opening from oak and rhododendron forest into high pasture and finally bare glacial moraine. The final push to Zero Point rewards the effort with close views of Nanda Kot and the Pindari glacier itself, one of the more accessible glaciers in the Kumaon range.",
      highlights: [
        "Forest rest-house stays at Dhakuri, Khati and Dwali",
        "Zero Point views of Nanda Kot and Pindari glacier snout",
        "Gentle daily gain, good for first-time trekkers",
        "Runs May\u2013June and Sept\u2013Nov",
      ],
      hasDetail: true,
      featured: true,
    },
  {
    slug: "munsyari-treks",
    name: "Munsyari Treks \u2014 Khalia Top & Birthi Falls",
    category: "trekking",
    badge: "Beginner Friendly",
    days: "2\u20135",
    groupSize: "N/A",
    difficulty: "Easy / Moderate",
    startPoint: "Munsyari",
    tone: "meadow",
    image: "/images/munsiyari.jpg",
    summary:
      "Gentle Himalayan trails perfect for families and weekend hikers, taking in snowy meadows and the Birthi waterfall.",
    description:
      "Munsyari makes a compact base for short, high-reward outings. Khalia Top is a snowfield above the tree line with a 360\u00b0 sweep of Panchachuli and the Kumaon peaks, while Birthi Falls is a short, easy detour on the road in. Both work well as a gentler add-on before or after a longer expedition, or as a standalone weekend trip.",
    highlights: [
      "Khalia Top viewpoint over the Panchachuli range",
      "Birthi Falls, an easy roadside detour",
      "Short itineraries that suit families",
      "Local guides from Munsyari",
    ],
    hasDetail: true,
    featured: true,
  },
  {
    slug: "Milam",
    name: "Milam-trek",
    category: "trekking",
    days: "2\u20135",
    groupSize: "N/A",
    difficulty: "Easy / Moderate",
    startPoint: "Sari village, Chopta",
    tone: "forest",
    image: "/images/milam.jpg",
    summary:
      "The world's highest Shiva temple at Tungnath (3,680m) and a sunrise summit of Chandrashila (4,000m).",
    description:
      "Munsyari makes a compact base for short, high-reward outings. Khalia Top is a snowfield above the tree line with a 360\u00b0 sweep of Panchachuli and the Kumaon peaks, while Birthi Falls is a short, easy detour on the road in. Both work well as a gentler add-on before or after a longer expedition, or as a standalone weekend trip.",
    highlights: [
      "Khalia Top viewpoint over the Panchachuli range",
      "Birthi Falls, an easy roadside detour",
      "Short itineraries that suit families",
      "Local guides from Munsyari",
    ],
    hasDetail: true,
    featured: true,
  },
   
];

export const getTrekBySlug = (slug) => treks.find((t) => t.slug === slug);
