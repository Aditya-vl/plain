export const posts = [
  {
    slug: "adi-kailash-om-parvat-planning-guide",
    title: "Planning an Adi Kailash & Om Parvat Yatra: what to know first",
    date: "2026-08-18",
    categories: ["Cultural Insights", "Travel Tips"],
    author: "Kartik",
    excerpt:
      "Permits, acclimatisation days, and the best months to see Om Parvat clear \u2014 the practical questions we get asked most before this yatra.",
    body: [
      "Most of the questions we get about this yatra aren't about the walking \u2014 they're about the paperwork and the timing. Because the route runs close to the Indo-Tibetan border, an Inner Line Permit is mandatory, along with a police registration that we handle on your behalf once your documents are in.",
      "The second most common question is when to go. Om Parvat's summit is usually visible on clear mornings between May and June, and again from September into October once the monsoon clouds clear out of the valley. Afternoons tend to cloud over, so we build itineraries around early starts.",
      "Altitude is the other factor worth planning around. The route gains height steadily rather than sharply, but Nabhidhang still sits above 4,500m, so we keep at least one buffer day in the schedule and carry oxygen and basic medical supplies as standard.",
    ],
  },
  {
    slug: "darma-valley-best-season",
    title: "Darma Valley through the seasons: when the Panchachuli views are best",
    date: "2026-07-28",
    categories: ["Travel Tips"],
    author: "Kartik",
    excerpt:
      "Rhododendron season, harvest season, or the crisp clear skies of autumn \u2014 how the Darma valley changes across the year.",
    body: [
      "Darma reads very differently depending on when you walk it. Late May into June brings rhododendron forest into bloom on the lower stages, with the Panchachuli peaks often hazier in the afternoon heat.",
      "September through November is the classic window: the monsoon has cleared the air, the terraces above the villages are being harvested, and the five Panchachuli spires tend to stay visible for most of the day rather than clouding over by noon.",
      "Winter access is limited by snow above Dantu, so most groups plan around these two windows rather than the colder months.",
    ],
  },
  {
    slug: "first-time-high-altitude-trekking",
    title: "New to high-altitude trekking? Start here",
    date: "2026-06-14",
    categories: ["Travel Tips"],
    author: "Kartik",
    excerpt:
      "A short, practical checklist for anyone doing their first Himalayan trek with us \u2014 fitness, kit, and what altitude actually feels like.",
    body: [
      "You don't need mountaineering experience for most of the treks we run \u2014 Pindari and the Munsyari trails are graded specifically with first-timers in mind. What matters more is basic cardiovascular fitness in the weeks before you travel: regular walking, stairs, or a light jog a few times a week is enough for most itineraries.",
      "Pack in layers rather than one heavy jacket \u2014 mornings and evenings at altitude are cold even in the warmer trekking months, while midday sun on open ground can be surprisingly strong.",
      "If you do feel the effects of altitude \u2014 mild headache, shortness of breath on exertion \u2014 tell your guide immediately. Our teams carry oxygen and basic medical kit on all high-altitude routes and build acclimatisation days into the schedule for exactly this reason.",
    ],
  },
  {
    slug: "kumaon-mountain-marathon-2026",
    title: "Nainital Monsoon Mountain Marathon 2026: what runners should know",
    date: "2026-07-28",
    categories: ["Events", "Travel Tips"],
    author: "Kartik",
    excerpt:
      "A look at this monsoon's mountain running calendar around Nainital, and how we support runners travelling in for it.",
    body: [
      "Monsoon in the Kumaon hills brings out a different crowd \u2014 trail runners rather than trekkers, drawn by cooler temperatures and green, low-traffic routes around Nainital.",
      "If you're travelling in for a race, we can arrange transport from Kathgodam or Pithoragarh, pre- and post-race accommodation, and short acclimatisation walks in the days beforehand for anyone coming from sea level.",
    ],
  },
];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);
