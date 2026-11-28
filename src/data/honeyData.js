export const BRAND_INFO = {
  companyName: "YSSP",
  legalName: "Yellow Sapphire Strategic Partners Pty Ltd",
  tagline: "Yellow Sapphire Strategic Partners Pty Ltd",
  description: "Pure, unpasteurised, unblended raw Australian honey. Never heated above hive temperature, retaining natural pollen, and bottled in clean glass jars and food-grade wholesale pails.",
  headquarters: "Sydney, New South Wales, Australia",
  address: "Suite 402, 115 Pitt Street, Sydney NSW 2000, Australia",
  emails: {
    general: "wholesale@ysspartners.com",
    wholesale: "wholesale@ysspartners.com"
  },
  phones: {
    primary: "+61 (02) 8000 7890"
  },
  hours: "Monday – Friday: 9:00 AM – 5:00 PM (AEST)"
};

export const HONEY_PRODUCTS = [
  {
    id: "wild-forest-honey",
    name: "Raw Wild Forest Honey",
    subtitle: "100% Raw & Unfiltered Forest Nectar",
    category: "wild-forest",
    categoryLabel: "Wild Forest",
    image: "/images/product-wild-forest.jpg",
    origin: "Native Forest Reserves, Eastern Australia",
    floralSource: "Wild Eucalypt, Stringybark & Native Flora",
    color: "Deep Warm Amber",
    flavor: "Rich woody caramel, subtle malt, and a warm lingering sweetness.",
    description: "Sourced directly from untouched Australian forest reserves. Coarsely strained without heat processing to preserve the living enzymes, natural bee pollen, and rich antioxidant properties. A deeply aromatic, full-bodied raw honey.",
    packSizes: ["250g Glass Jar", "500g Glass Jar", "1kg Glass Jar", "14kg Food-Grade Pail"],
    highlights: [
      "100% Raw, Unpasteurised & Unfiltered",
      "Rich in Natural Bee Pollen & Living Enzymes",
      "Zero Added Sugar, Artificial Syrups, or Corn Syrup",
      "Cold-Extracted Below 40°C (Hive Temperature)"
    ],
    tastingNotes: {
      aroma: "Earthy timber & wild blooming blossoms",
      taste: "Bold caramel sweetness with subtle malt undertones",
      finish: "Clean, lingering velvety warmth"
    },
    isHighlight: true
  },
  {
    id: "pure-eucalyptus-honey",
    name: "Pure Raw Eucalyptus Honey",
    subtitle: "Single-Origin Native Eucalyptus",
    category: "eucalyptus",
    categoryLabel: "Single Origin",
    image: "/images/product-eucalyptus.jpg",
    origin: "Riverina Basin & Western Slopes, Australia",
    floralSource: "Eucalyptus Melliodora (Yellow Box & Red Gum)",
    color: "Golden Amber",
    flavor: "Delicate buttery sweetness with smooth floral aroma.",
    description: "Harvested from native Australian eucalyptus blossoms. Naturally rich in natural fructose, giving it a velvety golden flow that resists crystallisation. Loved by gourmet kitchens, daily tea drinkers, and hospitality chefs.",
    packSizes: ["250g Glass Jar", "500g Glass Jar", "1kg Glass Jar", "14kg Food-Grade Pail", "300kg Drum"],
    highlights: [
      "Single-Origin Australian Eucalyptus",
      "Smooth, Naturally Non-Crystallising Flow",
      "Unheated & Cold Gravity Settled",
      "Pure Natural Table & Culinary Honey"
    ],
    tastingNotes: {
      aroma: "Fresh eucalyptus blossom & sun-warmed woods",
      taste: "Gentle buttery sweetness, balanced and mellow",
      finish: "Smooth, clean floral finish"
    },
    isHighlight: true
  },
  {
    id: "wildflower-blossom-honey",
    name: "Raw Wildflower Blossom Honey",
    subtitle: "Spring Meadow Harvest with Raw Comb",
    category: "wildflower",
    categoryLabel: "Blossom Honey",
    image: "/images/product-wildflower.jpg",
    origin: "Coastal Valleys, New South Wales",
    floralSource: "Spring Wildflowers & Native Acacia",
    color: "Light Golden Amber",
    flavor: "Fragrant floral sweetness with notes of fresh spring blossoms.",
    description: "Bottled in an artisanal hexagonal glass jar featuring authentic natural raw honeycomb inside. Gathered by bees across vibrant spring wildflower meadows with a delicate sweetness perfect for daily breakfast, fruit bowls, and herbal teas.",
    packSizes: ["225g Hexagonal Jar", "500g Glass Jar", "1kg Glass Jar", "14kg Pail"],
    highlights: [
      "Includes Fresh Raw Honeycomb Inside",
      "Light, Fragrant Floral Character",
      "100% Pure Virgin Nectar",
      "Gentle Everyday Natural Sweetener"
    ],
    tastingNotes: {
      aroma: "Sweet spring blossom & clover nectar",
      taste: "Light, sunny floral sweetness with delicate fruit notes",
      finish: "Crisp and uplifting"
    },
    isHighlight: true
  },
  {
    id: "raw-cut-honeycomb",
    name: "100% Raw Cut Honeycomb",
    subtitle: "Untouched Honeycomb Slice in Raw Nectar",
    category: "comb",
    categoryLabel: "Raw Comb",
    image: "/images/product-raw-comb.jpg",
    origin: "Pristine Native Bushland Sanctuaries",
    floralSource: "Wild Native Blossom & Eucalypt",
    color: "Luminous Golden Cells",
    flavor: "Crisp natural wax cells bursting with warm, unheated liquid honey.",
    description: "The most authentic, untouched honey experience on earth. Cut directly from the beekeeper's frame and served fresh. Deliciously chewy edible natural beeswax cells bursting with pristine liquid nectar and natural propolis.",
    packSizes: ["200g Fresh Cut Cassette", "400g Gourmet Dish Tray", "Master Shipper of 12"],
    highlights: [
      "100% Edible Natural Beeswax Comb",
      "Zero Filtering, Zero Heat, Pure Virgin Comb",
      "Contains Natural Propolis, Pollen & Trace Royal Jelly",
      "Gourmet Table & Cheese Board Presentation"
    ],
    tastingNotes: {
      aroma: "Warm beeswax, fresh hive aroma & nectar",
      taste: "Crisp wax texture bursting into pure liquid floral honey",
      finish: "Chewy, satisfying raw honey experience"
    },
    isHighlight: false
  },
  {
    id: "bulk-food-service-honey",
    name: "Commercial Bulk Honey (Pails & Drums)",
    subtitle: "Food-Grade Wholesale & Manufacturing Supply",
    category: "bulk",
    categoryLabel: "Bulk & Wholesale",
    image: "/images/product-bulk-pails.jpg",
    origin: "Regional Australian Commercial Apiaries",
    floralSource: "100% Pure Australian Floral Honey",
    color: "Golden Amber (Calibrated Pfund)",
    flavor: "Clean, consistent floral sweetness for culinary manufacturing.",
    description: "Calibrated 100% pure Australian honey supplied in heavy-duty food-grade 14kg (10L) and 28kg (20L) buckets, 300kg lined steel export drums, and 1,400kg IBC totes for commercial bakeries, food processors, and wholesale packers.",
    packSizes: ["14kg Food-Grade Pail (~10L)", "28kg Food-Grade Pail (~20L)", "300kg Lined Steel Drum", "1,400kg / 1,000L IBC Tote"],
    highlights: [
      "100% Australian Harvest Origin",
      "No Added C4 Syrups or Artificial Sugars",
      "Tamper-Evident Lids with Wire Handles",
      "Pallet (64 Pails) to Full 20ft Container Loads"
    ],
    tastingNotes: {
      aroma: "Clean warm honey bouquet",
      taste: "Rich, dependable honey sweetness",
      finish: "Balanced culinary finish"
    },
    isHighlight: false
  }
];

export const HOW_WE_WORK_SIMPLE = [
  {
    step: "01",
    tag: "Native Apiaries",
    title: "Ethical Bushland Sourcing",
    desc: "Directly harvested from protected Australian eucalyptus reserves and coastal wildflower sanctuaries with ethical bee welfare."
  },
  {
    step: "02",
    tag: "Purity Handling",
    title: "Cold Gravity Settling",
    desc: "Coarsely strained below 40°C hive warmth without added syrups to preserve natural pollen and enzyme character."
  },
  {
    step: "03",
    tag: "Clean Packing",
    title: "Hygienic Bottling",
    desc: "Poured into reusable flint glass jars for retail and tamper-evident food-grade pails for commercial wholesale supply."
  },
  {
    step: "04",
    tag: "Fast Delivery",
    title: "Direct Traceable Dispatch",
    desc: "Dispatched from Sydney with complete batch provenance, Certificates of Analysis, and reliable supply continuity."
  }
];

export const WHY_CHOOSE_US_SIMPLE = [
  {
    num: "01",
    title: "100% Raw & Unprocessed",
    desc: "Never heated, ultra-filtered, or pasteurized. Natural bee pollen, propolis, and living enzymes remain active.",
    icon: "Droplets"
  },
  {
    num: "02",
    title: "Zero Added Sugars",
    desc: "Pure floral honey prepared without corn syrup, rice syrup, invert sugar, or artificial flavourings.",
    icon: "ShieldCheck"
  },
  {
    num: "03",
    title: "Glass Jars & Clean Packaging",
    desc: "Bottled in sustainable glass jars to protect flavor and prevent microplastic leaching.",
    icon: "Package"
  },
  {
    num: "04",
    title: "Direct Apiary Traceability",
    desc: "Harvested by regional Australian beekeeping partners with batch origin records available on request.",
    icon: "Compass"
  }
];

export const RAW_VS_COMMERCIAL_COMPARISON = [
  {
    feature: "Heating & Pasteurization",
    raw: "Cold extracted below 40°C (Hive temperature)",
    commercial: "Flash-heated to 70°C+ which kills natural enzymes"
  },
  {
    feature: "Natural Bee Pollen",
    raw: "Retains rich native floral pollen & antioxidants",
    commercial: "Ultra-filtered under high pressure to remove all pollen"
  },
  {
    feature: "Sugar & Syrup Adulteration",
    raw: "Zero syrups, 100% pure flower nectar",
    commercial: "Often diluted with cheap rice syrup or corn syrup"
  },
  {
    feature: "Packaging",
    raw: "Premium recyclable glass jars & food-grade pails",
    commercial: "Thin plastic squeeze bottles prone to leaching"
  }
];

export const FAQS_SIMPLE = [
  {
    q: "Why does raw honey crystallize, and is it still good?",
    a: "Yes! Pure, unprocessed raw honey naturally crystallizes over time due to its natural glucose and pollen content. This is proof that the honey has never been flash-heated or pasteurized. To reliquefy, simply place your jar in a bowl of warm water (under 40°C)."
  },
  {
    q: "Is your honey 100% Australian?",
    a: "Yes, 100%. We exclusively harvest from Australian regional apiaries. We never blend with or import foreign honeys."
  },
  {
    q: "What packaging formats do you offer for bulk buyers?",
    a: "We offer 14kg (10L) and 28kg (20L) food-grade pails, 300kg lined steel export drums, and 1,400kg IBC totes for commercial bakeries and food manufacturers."
  },
  {
    q: "How can I place a wholesale order or request samples?",
    a: "Simply click 'Wholesale Enquiry' or use our contact form. Our Sydney team will get in touch with product specifications and palletization details."
  }
];

export const HERO_SLIDES = [
  {
    id: "slide-1",
    tag: "100% PURE AUSTRALIAN FOREST HONEY",
    title: "Raw, Pure & Untouched. From Native Forest to Jar.",
    desc: "Cold-extracted under 40°C directly from pristine Australian native eucalyptus and wildflower bushland. Never heated, zero added syrups—living enzymes and floral pollen intact.",
    image: "/images/honey-hero-drip.jpg",
    badge: "Fresh Raw Extraction",
    ctaPrimary: "Explore Our Honey",
    ctaSecondary: "Wholesale Enquiry"
  },
  {
    id: "slide-2",
    tag: "PURE ORIGIN • UNBLENDED HONEY",
    title: "Raw Australian Honey Without Added Syrups.",
    desc: "Single-origin Australian floral nectar extracted without industrial heat pasteurisation, corn syrup, rice syrup, or artificial additives.",
    image: "/images/product-eucalyptus.jpg",
    badge: "Unheated • Pure Origin",
    ctaPrimary: "View Purity Standards",
    ctaSecondary: "Request Batch COA"
  },
  {
    id: "slide-3",
    tag: "DISCOVER THE PRISTINE WORLDS OF HONEY",
    title: "Wild Forest Nectars & 100% Raw Cut Honeycomb.",
    desc: "From rich dark eucalyptus forest harvests to fresh cut honeycombs straight from ethical Australian apiaries. Bottled into recyclable glass jars and food-service wholesale pails.",
    image: "/images/product-raw-comb.jpg",
    badge: "Artisanal Australian Harvest",
    ctaPrimary: "Explore Range",
    ctaSecondary: "Bulk Supply Formats"
  }
];

export const HONEY_RECIPES = [
  {
    id: "pancakes",
    title: "Saffron Honey Pancakes",
    time: "15 mins or less",
    serves: "Serves 2",
    desc: "Dig into this scrumptious pancake breakfast with the natural golden goodness of raw honey and royal saffron essence, melting together in warm velvety harmony.",
    bg: "bg-[#EBF2E8]", // soft pastel green like Dadev Image 6
    border: "border-[#C5D8C1]",
    tag: "Morning Breakfast",
    image: "/images/honey-hero-drip.jpg"
  },
  {
    id: "warm-water",
    title: "Morning Warm Lemon Honey Elixir",
    time: "5 mins",
    serves: "Daily Ritual",
    desc: "A time-honoured wellness elixir combining lukewarm water, fresh Australian lemon juice, and a spoonful of raw unheated eucalyptus honey to awaken living digestive enzymes.",
    bg: "bg-[#F9F5EA]", // soft ivory
    border: "border-[#E7DDC4]",
    tag: "Daily Wellness",
    image: "/images/product-wild-forest.jpg"
  },
  {
    id: "cheese-board",
    title: "Artisanal Cheese & Cut Honeycomb",
    time: "10 mins",
    serves: "Gourmet Platter",
    desc: "Pair thin slices of aged Australian cheddar, mild brie, or creamy goat cheese with pure cut honeycomb. The natural beeswax and bursting nectar create an unforgettable culinary pairing.",
    bg: "bg-[#F3EFE6]", // soft warm linen
    border: "border-[#DFD6C3]",
    tag: "Culinary Entertaining",
    image: "/images/product-raw-comb.jpg"
  }
];

