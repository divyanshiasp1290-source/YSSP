export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'wholesale-retail', label: 'Wholesale & Retail' },
  { id: 'industrial-bulk', label: 'Industrial & Bulk' },
  { id: 'export-contract', label: 'Export & Contract Packing' }
];

export const SERVICES_DATA = [
  {
    id: "wholesale-honey-supply",
    title: "Wholesale Honey Supply",
    subtitle: "Artisanal Retail-Ready Jars & Cut Comb for Gourmet Stockists",
    category: "wholesale-retail",
    categoryLabel: "Retail & Wholesale",
    badge: "Specialty & Retail Stockists",
    icon: "ShoppingBag",
    image: "/images/product-wild-forest.jpg",
    secondaryImage: "/images/product-raw-comb.jpg",
    shortOverview: "Consistent wholesale supply of pure, unpasteurised Australian raw honey in shelf-ready glass jars and fresh cut honeycombs for gourmet delis, organic grocers, and independent retailers.",
    fullDescription: "Our Wholesale Honey Supply program connects independent retailers, boutique supermarkets, organic grocers, and specialty providores with authentic, 100% pure Australian honey. Sourced directly from native eucalypt and wildflower reserves across Eastern Australia, our honey is cold-extracted below 40°C without industrial heat pasteurization or microfiltration, ensuring living enzymes and natural bee pollen remain intact.\n\nEvery jar comes packaged in recyclable flint glass with tamper-evident security seals, accompanied by batch provenance records. Stocking our range allows retailers to provide their discerning clientele with genuine, unadulterated Australian raw honey that commands premium shelf presence and strong customer loyalty.",
    targetCustomers: [
      {
        name: "Specialty & Gourmet Grocers",
        desc: "High-end providores seeking authentic, single-origin honey with premium visual presentation."
      },
      {
        name: "Organic & Health Food Stores",
        desc: "Retailers seeking raw, unheated honey without artificial syrups or corn syrup."
      },
      {
        name: "Artisanal Cheese & Farm Shops",
        desc: "Food destinations pairing raw cut honeycombs and amber forest honey with artisanal dairy products."
      },
      {
        name: "Luxury Hamper & Corporate Gifting",
        desc: "Curators assembling premium Australian produce hampers requiring elegant, long-shelf-life goods."
      }
    ],
    businessApplications: [
      "Retail shelf displays with distinctive amber-gold clarity",
      "Gourmet charcuterie and cheese accompaniment stations",
      "Premium wellness gift bundles and tourist retail showcases",
      "Artisanal farm gate and boutique market retailing"
    ],
    packagingOptions: [
      {
        format: "Artisanal Glass Jars (250g / 500g / 1kg)",
        spec: "Flint glass with gold metal twist-off lug lids and tamper-evident neck bands",
        palletInfo: "Master cartons of 6, 12, or 24 jars | Custom palletization available"
      },
      {
        format: "Artisanal Hexagonal Jar (225g)",
        spec: "Distinctive honeycomb hexagon profile containing real comb slice inside",
        palletInfo: "Cartons of 12 jars | Starter retail pallets"
      },
      {
        format: "100% Raw Cut Honeycomb (200g / 400g)",
        spec: "Ultra-clear sealed food-grade cassette tray preserving intact hive wax cells",
        palletInfo: "Master shipper of 12 cassettes | Temperature-controlled dispatch"
      }
    ],
    minimumOrder: "Starter carton trial orders from 1 master carton; Tiered discounts apply from 1 full mixed pallet (approx. 60–80 cartons).",
    keyFeatures: [
      "100% Pure Australian Harvest – Never blended with imported honey",
      "Cold-Extracted Below 40°C to preserve living bioactive enzymes",
      "Shelf-ready premium glass presentation with barcodes & nutritional panels",
      "Reliable recurring fulfillment dispatched directly from Sydney, NSW"
    ],
    serviceProcess: [
      {
        step: "01",
        title: "Wholesale Discovery & Samples",
        desc: "Review our product catalog, request sample jars, and discuss margin structures with our Sydney trade desk."
      },
      {
        step: "02",
        title: "Account Setup & Terms",
        desc: "Seamless wholesale trade registration with volume pricing tiers and flexible payment arrangements."
      },
      {
        step: "03",
        title: "Order Assembly & Packing",
        desc: "Cartons carefully picked, batch-coded, and pallet-wrapped with corner boards for damage-free transit."
      },
      {
        step: "04",
        title: "Direct National Dispatch",
        desc: "Fast dispatch via reliable freight partners across NSW, VIC, QLD, SA, and national regional corridors."
      }
    ],
    faqs: [
      {
        q: "What is the shelf life of your retail glass jars?",
        a: "Pure raw honey has no true expiration date when stored in cool, dark conditions. All retail jars carry a standard best-before date of 3 to 5 years from packing."
      },
      {
        q: "Can we order mixed pallets containing different varieties?",
        a: "Yes. Wholesale partners can combine Raw Wild Forest, Pure Eucalyptus, Blossom Honey, and Cut Honeycomb within a single consolidated pallet."
      },
      {
        q: "Do you supply point-of-sale display materials or shelf talkers?",
        a: "Yes, we provide printed tasting notes, origin story cards, and digital assets highlighting our ethical Australian harvest to assist in customer education."
      }
    ]
  },
  {
    id: "bulk-honey-supply",
    title: "Bulk Honey Supply",
    subtitle: "Industrial Pails, Steel Export Drums & 1,400kg IBC Totes",
    category: "industrial-bulk",
    categoryLabel: "Industrial & Manufacturing",
    badge: "Commercial Manufacturing",
    icon: "Truck",
    image: "/images/product-bulk-pails.jpg",
    secondaryImage: "/images/sourcing-apiary.jpg",
    shortOverview: "High-volume commercial supply of calibrated Australian honey in 14kg/28kg food-grade pails, 300kg epoxy-lined drums, and 1,400kg IBC totes for food processors and commercial bakeries.",
    fullDescription: "YSSP delivers heavy-duty commercial bulk honey supply tailored to the demanding requirements of industrial food manufacturers, commercial bakeries, beverage companies, and secondary packers. We understand that industrial lines depend on absolute consistency in Brix level, moisture percentage, color graduation (Pfund scale), and micro-biological purity.\n\nOur bulk honey is cold-settled under gravity to eliminate coarse hive debris while safeguarding the natural floral sugars from thermal degradation. Packaged into food-grade virgin polypropylene pails, hermetically sealed 300kg lined steel drums, or 1,400kg IBC totes fitted with bottom discharge valves, our bulk supply ensures effortless integration with industrial pumping systems.",
    targetCustomers: [
      {
        name: "Commercial Bakeries & Pastry Plants",
        desc: "Industrial facilities requiring natural invert sweetness, moisture retention, and golden browning."
      },
      {
        name: "Sauce, Marinade & Dressing Producers",
        desc: "Condiment makers demanding consistent viscosity, natural acidity balance, and clean label appeal."
      },
      {
        name: "Cereal & Snack Bar Manufacturers",
        desc: "Granola and energy bar lines seeking a clean-label binding agent free of artificial glucose syrups."
      },
      {
        name: "Cosmetic & Natural Skincare Formulators",
        desc: "Formulators using unheated, enzyme-rich raw honey for humectant and emollient skincare applications."
      }
    ],
    businessApplications: [
      "Natural clean-label sweetener replacing refined sugar and corn syrups",
      "Moisture retaining agent extending shelf life in commercial baked goods",
      "Enzyme-active base ingredient for health tonics and cosmetic creams",
      "Glaze, marinade, and barbecue sauce manufacturing"
    ],
    packagingOptions: [
      {
        format: "14kg (~10L) Food-Grade Pail",
        spec: "Virgin food-grade polypropylene with tamper-evident tear seal and metal wire handle",
        palletInfo: "64 pails per standard Australian wooden pallet (896kg Net Honey)"
      },
      {
        format: "28kg (~20L) Commercial Pail",
        spec: "Heavy-duty dual-handle bucket with airtight resealable snap lid",
        palletInfo: "32 pails per standard pallet (896kg Net Honey)"
      },
      {
        format: "300kg Lined Steel Export Drum",
        spec: "Internally food-grade epoxy lined, hermetically sealed steel bung drum",
        palletInfo: "4 drums strapped on heavy-duty export pallet (1,200kg Net Honey)"
      },
      {
        format: "1,400kg (~1,000L) Intermediate Bulk Container (IBC)",
        spec: "UV-stabilized HDPE bottle encased in galvanized tubular steel cage with butterfly valve",
        palletInfo: "Single IBC footprint (1,400kg Net Honey) | 4-way forklift access"
      }
    ],
    minimumOrder: "1 standard pallet (64 x 14kg pails, 32 x 28kg pails, or 4 x 300kg drums) or 1 full IBC tote.",
    keyFeatures: [
      "Australian Regional Origin – Sourced from partner regional apiaries",
      "Prepared without added C3/C4 syrups or corn syrup dilution",
      "Batch Certificate of Analysis (COA) documentation available on request (subject to company confirmation)",
      "Integrated butterfly discharge valve on IBCs for automated pumping line tie-in"
    ],
    serviceProcess: [
      {
        step: "01",
        title: "Technical Spec Matching",
        desc: "Share your target Brix, moisture, and colour spectrum requirements with our team (specifications subject to batch availability and company confirmation)."
      },
      {
        step: "02",
        title: "Batch COA & Sample Approval",
        desc: "We coordinate available batch specifications and evaluation samples upon request (subject to company confirmation)."
      },
      {
        step: "03",
        title: "Contract Reservation & Packaging",
        desc: "Selected batch reserved in our Sydney warehouse and prepared in tamper-evident industrial packaging."
      },
      {
        step: "04",
        title: "Palletised Freight & Delivery",
        desc: "Delivered via tail-lift trucks or flatbed container trailers equipped for immediate warehouse receiving."
      }
    ],
    faqs: [
      {
        q: "What testing data is supplied with each bulk delivery?",
        a: "Batch Certificate of Analysis (COA) parameters—such as moisture, Brix, HMF, diastase, and C3/C4 screening where tested—are provided upon request and subject to company confirmation per consignment."
      },
      {
        q: "How should bulk pails and drums be stored in a factory setting?",
        a: "We recommend storing bulk honey in a temperature-controlled dry warehouse between 18°C and 24°C away from direct sunlight to maintain optimal viscosity."
      },
      {
        q: "Do you support recurring standing monthly bulk supply contracts?",
        a: "Yes, quarterly and annual supply arrangements with scheduled volume allocations and pricing terms can be discussed with our Sydney trade desk (subject to company confirmation)."
      }
    ]
  },
  {
    id: "honey-export",
    title: "Honey Export",
    subtitle: "FCL Container Loads & Export Documentation Support",
    category: "export-contract",
    categoryLabel: "International Trade",
    badge: "Global Export Desk",
    icon: "Globe2",
    image: "/images/sourcing-apiary.jpg",
    secondaryImage: "/images/product-bulk-pails.jpg",
    shortOverview: "Turnkey export supply of pure Australian honey in 20ft Full Container Loads (FCL) or palletised consignments, with export documentation coordinated per shipment subject to destination requirements.",
    fullDescription: "Australian honey is recognised globally for its floral diversity and pristine bushland harvesting conditions. YSSP operates a dedicated Honey Export desk that coordinates international trade logistics from our Sydney hub through Port Botany.\n\nWe work with overseas importers, supermarket chains, and food ingredient buyers seeking Australian raw honey in export-grade packaging. Our team assists with export documentation—including biosecurity paperwork, Certificates of Origin, Certificate of Analysis (COA), Phytosanitary certificates, and consular legalization where required—subject to destination regulations and company confirmation.",
    targetCustomers: [
      {
        name: "Overseas Food & Beverage Importers",
        desc: "International trading firms seeking authenticated, single-origin Australian honey lines."
      },
      {
        name: "International Supermarket Chains",
        desc: "Retail conglomerates in Asia-Pacific, North America, and Europe stocking premium Australian honey."
      },
      {
        name: "Foreign Honey Packers & Blenders",
        desc: "Overseas bottling facilities sourcing pure Australian table and eucalypt honey in bulk drums."
      },
      {
        name: "Global Health & Wellness Distributors",
        desc: "Distributors marketing raw, unheated Australian forest honey to health-conscious international markets."
      }
    ],
    businessApplications: [
      "Full Container Load (FCL) import for regional redistribution",
      "High-value raw Australian honey for premium overseas supermarket shelves",
      "Bulk raw ingredient supply for international pharmaceutical and confectionary plants",
      "Duty-advantaged trade under Australian bilateral Free Trade Agreements (FTAs)"
    ],
    packagingOptions: [
      {
        format: "20ft Full Container Load (FCL) – Drums",
        spec: "64 to 72 heavy-gauge steel export drums (300kg Net each) with food-grade epoxy interior",
        palletInfo: "Approx. 19.2 to 21.6 Metric Tonnes Net Honey per 20ft container"
      },
      {
        format: "20ft Full Container Load (FCL) – IBC Totes",
        spec: "14 to 16 Intermediate Bulk Containers (1,400kg each) with container securing dunnage",
        palletInfo: "Approx. 19.6 to 22.4 Metric Tonnes Net Honey per 20ft container"
      },
      {
        format: "Containerised Palletised Retail Cartons",
        spec: "Floor-loaded or palletised master cartons of 250g, 500g, and 1kg glass jars shrink-wrapped",
        palletInfo: "10 to 12 export pallets per 20ft FCL container"
      }
    ],
    minimumOrder: "1 full 20ft container (approx. 19–22 tonnes net) for sea freight; LCL palletised air freight available for sample verification and urgent consignments.",
    keyFeatures: [
      "Single-Origin Australian Honey – No foreign honey blending",
      "Export documentation (COA, Certificate of Origin, Phytosanitary, Bill of Lading) coordinated per shipment subject to destination requirements",
      "Port Botany, Sydney dispatch coordination with shipping lines to international ports",
      "Moisture-barrier container wrapping and desiccant placement for ocean transit"
    ],
    serviceProcess: [
      {
        step: "01",
        title: "Export Consultation & Incoterms",
        desc: "Define destination port, required Incoterms (FOB Sydney, CFR, or CIF), and target honey specifications."
      },
      {
        step: "02",
        title: "Regulatory & Compliance Review",
        desc: "Verify import regulations, biosecurity parameters, and labeling compliance for destination country."
      },
      {
        step: "03",
        title: "Container Loading & Strapping",
        desc: "Factory loading into export-grade 20ft sea containers with thermal liners, dunnage bags, and heavy-duty strapping."
      },
      {
        step: "04",
        title: "Customs Clearance & Sail Notification",
        desc: "Issuance of original Bills of Lading, COO, and lab analysis certificates upon vessel departure."
      }
    ],
    faqs: [
      {
        q: "What Incoterms do you typically trade under for export?",
        a: "We predominantly trade under FOB (Port Botany, Sydney), CFR, and CIF terms depending on our buyer's preferred freight forwarding relationships."
      },
      {
        q: "Can you provide country-specific export documentation?",
        a: "Yes. We coordinate Certificates of Origin under relevant Free Trade Agreements (e.g. ChAFTA, KAFTA, JAEPA, A-UKFTA), manufacturer declarations, and health certificates."
      },
      {
        q: "How do you protect honey quality during long ocean voyages?",
        a: "All containers are lined with moisture-barrier thermal insulation foil, desiccants to control condensation, and dunnage to prevent container shifting during sea transit."
      }
    ]
  },
  {
    id: "private-label-contract-packing",
    title: "Private Label & Contract Packing",
    subtitle: "Custom Bottling, Formulation Matching & Turnkey Brand Solutions",
    category: "export-contract",
    categoryLabel: "Contract Manufacturing",
    badge: "OEM & Brand Solutions",
    icon: "PackageCheck",
    image: "/images/about-wellness-honey.jpg",
    secondaryImage: "/images/product-wildflower.jpg",
    shortOverview: "End-to-end private label packaging and contract bottling of pure Australian honey in premium glass jars and food-grade packaging for retailers, wellness brands, and food companies.",
    fullDescription: "Launch or expand your own brand of premium Australian honey with YSSP's Private Label & Contract Packing service. We provide companies worldwide with an effortless turnkey solution—from sourcing single-origin Australian raw honey to bottling, capping, batch-coding, and applying your custom brand labels.\n\nOur packing procedures respect the live enzyme structure of raw honey by operating cold gravity filling below 40°C. Whether you need luxury hexagonal jars featuring authentic raw comb slices, classic flint glass jars, or food-service packaging under your house brand, our Sydney packing facility guarantees the highest standards of food safety, hygiene, and visual finish.",
    targetCustomers: [
      {
        name: "Supermarket & Grocer Private Brands",
        desc: "Retailers developing high-margin private label raw honey lines to compete with national brands."
      },
      {
        name: "Boutique Wellness & Skincare Brands",
        desc: "Health brands integrating pure raw Australian honey into their branded daily wellness product suites."
      },
      {
        name: "Hospitality & Luxury Hotel Groups",
        desc: "Hotels and resorts wanting bespoke mini-jars for guest breakfast service, VIP gifting, and mini-bars."
      },
      {
        name: "Corporate Gifting & Event Agencies",
        desc: "Agencies curating custom-branded, authentic Australian culinary gifts for conferences and events."
      }
    ],
    businessApplications: [
      "Retail-ready house brand honey lines with custom barcode and label art",
      "Bespoke luxury hotel breakfast jars and room amenities",
      "Co-branded honey pairings for gourmet food brands and farm markets",
      "Artisanal promotional products for high-profile Australian corporate campaigns"
    ],
    packagingOptions: [
      {
        format: "Flint Glass Jars with Custom Labels",
        spec: "250g, 500g, and 1kg round glass jars with gold, black, or silver twist-off lug caps",
        palletInfo: "Cartons of 12 or 24 | Fully branded shipper cartons available"
      },
      {
        format: "Hexagonal Specialty Glass Jars (225g)",
        spec: "Luxury six-sided jar option, with or without pure raw cut honeycomb inside",
        palletInfo: "Cartons of 12 jars | Ideal for premium retail positioning"
      },
      {
        format: "Single-Serve Gourmet Pots (30g – 50g)",
        spec: "Miniature glass jars tailored for hotel room trays, airline first class, and gift boxes",
        palletInfo: "Master cartons of 48 to 96 units"
      }
    ],
    minimumOrder: "Private label production runs starting from 1,000 units per variant; Economies of scale realized from 3,000+ units.",
    keyFeatures: [
      "100% Pure, Unadulterated Australian Honey – Wild Forest, Eucalyptus, or Blossom",
      "Cold gravity-settled filling preserves natural active enzymes and aroma",
      "Label specification support aligned with FSANZ Standard 2.8.2 or destination packaging guidelines (final regulatory sign-off subject to company confirmation)",
      "Batch coding, tamper-evident seals, and protective export carton packing"
    ],
    serviceProcess: [
      {
        step: "01",
        title: "Honey Profile & Jar Selection",
        desc: "Select your preferred floral character (Eucalyptus, Wild Forest, Blossom) and choose jar format and closure."
      },
      {
        step: "02",
        title: "Label Artwork & Proofing",
        desc: "We supply dielines, verify regulatory nutritional wording, and approve label print proofs."
      },
      {
        step: "03",
        title: "Hygienic Bottling & Sealing",
        desc: "Cold gravity filling, precision capping, tamper-evident neck band application, and lot coding."
      },
      {
        step: "04",
        title: "Master Carton Packing & Dispatch",
        desc: "Packed into reinforced inner cartons and palletized for direct delivery to your distribution center."
      }
    ],
    faqs: [
      {
        q: "Can we supply our own printed labels or packaging components?",
        a: "Yes. Clients can either supply their own finished roll labels and printed cartons, or utilize our established packaging partners for end-to-end production."
      },
      {
        q: "What information must be included on our private label design?",
        a: "Under Australian food standards (FSANZ 2.8.2), labels must include legal product name, net weight, country of origin statement, nutrition information panel, and distributor details."
      },
      {
        q: "How long does a private label production cycle take from approval?",
        a: "Production turnaround and dispatch lead times are confirmed per project following artwork approval and packaging component receipt (subject to company confirmation)."
      }
    ]
  },
  {
    id: "commercial-foodservice-supply",
    title: "Commercial & Food-Service Supply",
    subtitle: "Kitchen-Ready 14kg & 28kg Pails for Chefs, Bakeries & Hospitality",
    category: "industrial-bulk",
    categoryLabel: "Hospitality & Culinary",
    badge: "Culinary & Hospitality",
    icon: "UtensilsCrossed",
    image: "/images/honey-hero-drip.jpg",
    secondaryImage: "/images/product-eucalyptus.jpg",
    shortOverview: "Kitchen-friendly 14kg and 28kg food-grade pails featuring tamper-evident tear seals and wire handles, engineered for effortless back-of-house dispensing in commercial hospitality.",
    fullDescription: "Chefs, head bakers, and hospitality operators require honey that delivers exceptional depth of flavor, predictable baking performance, and ergonomic handling in busy commercial kitchens. YSSP's Commercial & Food-Service Supply provides hospitality establishments with unheated, 100% natural Australian honey in sturdy 14kg and 28kg food-grade pails.\n\nOur Pure Raw Eucalyptus honey is naturally high in fructose, yielding a smooth, buttery consistency that resists premature crystallization—making it ideal for tea service, dressings, pastries, and marinades. Fitted with comfortable metal wire handles and wide-diameter openings for quick measuring, our food-service pails eliminate kitchen waste while elevating culinary quality.",
    targetCustomers: [
      {
        name: "Fine Dining & Modern Australian Restaurants",
        desc: "Culinary teams looking for complex floral profiles to elevate sauces, glazes, and dessert menus."
      },
      {
        name: "Artisan Bakeries & Patisseries",
        desc: "Bakers needing reliable moisture retention and golden crust caramelisation in sourdough and pastries."
      },
      {
        name: "Cafes & Specialty Coffee Roasters",
        desc: "Busy beverage bars serving raw honey with matcha, specialty teas, and breakfast bowls."
      },
      {
        name: "Hotel Catering & Convention Centers",
        desc: "Large-scale hospitality kitchens requiring consistent bulk pail deliveries on dependable schedules."
      }
    ],
    businessApplications: [
      "Natural sweetening in signature bakery recipes, cakes, and artisan breads",
      "Specialty beverage sweetening (honey lattes, iced teas, and cold-pressed juices)",
      "High-end savory glazes, barbecue reductions, and salad vinaigrettes",
      "Breakfast buffet honeycomb displays and yogurt bar accompaniments"
    ],
    packagingOptions: [
      {
        format: "14kg (~10L) Food-Service Bucket",
        spec: "Heavy-duty virgin PP with wire carry handle, tamper-evident tear strip, and tight snap lid",
        palletInfo: "Single pails to full pallets of 64 units (896kg Net)"
      },
      {
        format: "28kg (~20L) Kitchen Pail",
        spec: "Molded heavy-duty handles with airtight lid designed for high-volume kitchen prep",
        palletInfo: "Full pallets of 32 units (896kg Net)"
      },
      {
        format: "Cut Honeycomb Presentation Trays",
        spec: "Whole raw honeycomb frames or portioned cassettes for luxury breakfast buffets",
        palletInfo: "Food-service cartons of 6 or 12 display units"
      }
    ],
    minimumOrder: "Minimum order starts from 2 pails for local Sydney hospitality accounts; Pallet quantities (64 pails) for national distribution.",
    keyFeatures: [
      "100% Pure Raw Australian Honey – No syrups, fillers, or artificial colorings",
      "Naturally non-crystallizing flow (Eucalyptus varietal) for easy kitchen pouring",
      "Hygienic tamper-evident packaging with sturdy metal wire handles",
      "Flexible recurring standing orders (weekly, fortnightly, or monthly delivery)"
    ],
    serviceProcess: [
      {
        step: "01",
        title: "Kitchen Needs Assessment",
        desc: "Our trade team consults with your head chef or procurement manager to match flavor intensity and weekly usage."
      },
      {
        step: "02",
        title: "Trial Pail Dispatch",
        desc: "We send sample pails so kitchen teams can trial performance across baking, cold emulsions, and glazing."
      },
      {
        step: "03",
        title: "Standing Schedule Setup",
        desc: "Lock in predictable delivery intervals to guarantee your kitchen never runs out during peak operational days."
      },
      {
        step: "04",
        title: "Reliable Recurring Delivery",
        desc: "Dispatched direct to your kitchen loading dock with automated invoicing and batch tracking."
      }
    ],
    faqs: [
      {
        q: "Which honey variety is best suited for commercial baking?",
        a: "Our Raw Wild Forest Honey provides deep caramel malt undertones that hold up through high-temperature baking, while our Eucalyptus Honey offers a smoother, lighter sweetness."
      },
      {
        q: "What if the honey crystallizes during winter storage in the kitchen?",
        a: "Because our honey is 100% raw and unpasteurized, natural glucose crystallization can occur in cold climates. Simply place the bucket in warm water (under 40°C) to restore its liquid flow."
      },
      {
        q: "Can we set up a direct commercial wholesale account with 30-day payment terms?",
        a: "Commercial trading terms and account arrangements for Australian hospitality venues with active ABNs are subject to company confirmation and approval."
      }
    ]
  },
  {
    id: "custom-honey-supply-solutions",
    title: "Custom Honey Supply Solutions",
    subtitle: "Calibrated Floral Profiles, Batch Reservation & Bespoke Logistics",
    category: "wholesale-retail",
    categoryLabel: "Tailored Programs",
    badge: "Bespoke & Tailored",
    icon: "SlidersHorizontal",
    image: "/images/product-eucalyptus.jpg",
    secondaryImage: "/images/hero-products-bg.jpg",
    shortOverview: "Tailored honey solutions offering floral varietal matching, calibrated color and Brix specifications, dedicated harvest reservations, and bespoke delivery programs for food innovators and craft producers.",
    fullDescription: "Not every commercial operation fits into standard off-the-shelf packaging or conventional honey blends. YSSP's Custom Honey Supply Solutions are designed for food innovators, craft beverage producers, meaderies, functional health brands, and specialty culinary manufacturers who require precise floral profiles and customized operational arrangements.\n\nWhether your product requires a specific Pfund color grade for visual clarity, low-moisture honey for confectionery shelf-stability, or dedicated harvest reservation from an identified regional forest reserve, our beekeeping relationships and Sydney processing capabilities allow us to tailor a supply program precisely to your technical parameters.",
    targetCustomers: [
      {
        name: "Craft Breweries, Distilleries & Meaderies",
        desc: "Fermentation artisans seeking 100% fermentable single-origin raw honey with distinctive floral esters."
      },
      {
        name: "Health & Functional Food Innovators",
        desc: "Producers crafting lozenges, syrups, and energy gels seeking raw unheated honey."
      },
      {
        name: "Specialty Confectioners & Chocolatiers",
        desc: "Chocolatiers and nougat makers requiring exact moisture control and calibrated crystallization characteristics."
      },
      {
        name: "Export Consolidators with Unique Requirements",
        desc: "Trading houses requiring mixed-format containers, custom pallet heights, or specialized barrier liners."
      }
    ],
    businessApplications: [
      "Craft honey ale, mead, and botanical spirits fermentation",
      "Specialty nougat, honeycomb brittle, and artisanal confectionery",
      "Nutraceutical throat syrups and natural health elixirs",
      "Staggered multi-site supply programs for multi-venue restaurant groups"
    ],
    packagingOptions: [
      {
        format: "Custom Mixed-Consignment Pallets",
        spec: "Combination of food service pails, retail glass jars, and honeycomb cassettes on one consolidated pallet",
        palletInfo: "Tailored to client receiving dock restrictions"
      },
      {
        format: "Calibrated Industrial Totes & Drums",
        spec: "Single-origin forest or eucalyptus harvest calibrated to exact moisture (e.g. <17.5%) and color requirements",
        palletInfo: "300kg drums or 1,400kg IBCs with batch laboratory analysis"
      },
      {
        format: "Dedicated Harvest Reserve Allotments",
        spec: "Exclusive batch reservation held in climate-controlled Sydney storage with scheduled call-offs",
        palletInfo: "Scheduled monthly or quarterly releases"
      }
    ],
    minimumOrder: "Custom supply solutions typically commence from 2 to 3 pallets, or dedicated batch reservations from 5 tonnes upwards.",
    keyFeatures: [
      "Custom floral selection (Yellow Box, Red Gum, Stringybark, Wildflower)",
      "Batch specification and COA documentation available per consignment (subject to company confirmation)",
      "Dedicated Sydney warehouse storage coordination with scheduled call-offs (subject to agreement)",
      "Direct technical consultation with our commercial honey specialists"
    ],
    serviceProcess: [
      {
        step: "01",
        title: "Technical Discovery Call",
        desc: "Define your target parameters: moisture %, Brix, aroma, viscosity, and desired delivery schedule."
      },
      {
        step: "02",
        title: "Apiary Selection & Bench Testing",
        desc: "We screen reserve batches and coordinate evaluation data alongside physical bench samples."
      },
      {
        step: "03",
        title: "Supply Agreement & Batch Reserve",
        desc: "Formalize volume commitments with agreed pricing schedules and reserved lot allocations (subject to contract confirmation)."
      },
      {
        step: "04",
        title: "Scheduled Phased Dispatch",
        desc: "Consignments released according to your production calendar, ensuring fresh product with minimal on-site inventory burden."
      }
    ],
    faqs: [
      {
        q: "Can you hold reserved bulk inventory in Sydney for phased delivery?",
        a: "Yes. Under a formal supply contract, we can warehouse your reserved harvest in our temperature-managed facility and dispatch pallet increments upon scheduled call-off."
      },
      {
        q: "Can you provide honey tailored specifically for craft fermentation?",
        a: "Absolutely. We supply meaderies and craft breweries with unheated, single-origin honey rich in natural floral aromatics, free from sulfur or chemical residues that could disrupt yeast fermentation."
      },
      {
        q: "How do we get started on a custom honey program?",
        a: "Submit an enquiry with your estimated annual volume, required technical parameters, and preferred delivery schedule. Our commercial trade director will contact you directly."
      }
    ]
  }
];

export const COMMERCIAL_CAPABILITIES = [
  {
    title: "100% Australian Harvest",
    desc: "Exclusively harvested from protected regional native forest reserves in Eastern Australia. Never blended with imported or industrial syrup adulterants.",
    icon: "ShieldCheck"
  },
  {
    title: "Cold Gravity Extraction (<40°C)",
    desc: "Extracted and settled below hive temperature. Retains living enzymes, natural bee pollen, and delicate native floral aromatic compounds.",
    icon: "Droplets"
  },
  {
    title: "Batch Testing & COA Availability",
    desc: "Commercial consignments can be accompanied by Batch Certificate of Analysis (COA) documentation upon request, subject to company confirmation.",
    icon: "FileCheck2"
  },
  {
    title: "Scalable Packaging Formats",
    desc: "From 250g retail glass jars to 14kg/28kg kitchen pails, 300kg export steel drums, and 1,400kg Intermediate Bulk Containers (IBC totes).",
    icon: "Boxes"
  }
];

export const PACKAGING_MATRIX = [
  {
    format: "Retail Glass Jars",
    sizes: "250g, 500g, 1kg & 225g Hexagonal",
    grossWeight: "Approx. 450g – 1.4kg / unit",
    packagingType: "Flint glass with gold lug lid & tamper seal",
    typicalBuyer: "Gourmet delis, health food grocers, gift hampers",
    minOrder: "Master cartons of 6 to 24 units"
  },
  {
    format: "Food Service Pails",
    sizes: "14kg (~10L) & 28kg (~20L)",
    grossWeight: "14.6kg & 29.2kg / pail",
    packagingType: "Virgin food-grade PP with metal wire handle & tear strip",
    typicalBuyer: "Bakeries, restaurants, cafes, pastry kitchens",
    minOrder: "1 pallet (64 x 14kg pails = 896kg Net)"
  },
  {
    format: "Industrial Export Drums",
    sizes: "300kg Net Honey (~210L)",
    grossWeight: "Approx. 318kg / drum",
    packagingType: "Heavy-gauge lined steel with hermetic bung seal",
    typicalBuyer: "Industrial food plants, export bottlers, distributors",
    minOrder: "1 pallet (4 drums = 1,200kg Net)"
  },
  {
    format: "Intermediate Bulk Totes (IBC)",
    sizes: "1,400kg Net Honey (~1,000L)",
    grossWeight: "Approx. 1,465kg total",
    packagingType: "UV-stabilized HDPE in galvanized steel cage with valve",
    typicalBuyer: "Large-scale bottling plants, industrial processors",
    minOrder: "1 IBC unit (1,400kg Net)"
  }
];
