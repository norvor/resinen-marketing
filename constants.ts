export const dossierData = {
  homePage: {
    hero: {
      title: "Navigating the Era of High Entropy",
      subtitle: "Resinen operates at the intersection of graph theory and business physics. We help the world's most ambitious organizations build self-correcting systems for growth, talent, and logistics.",
      cta: "Read the Firm's Doctrine"
    },
    // New Section: "McKinsey-style" Featured Articles
    featuredInsights: [
      {
        id: "insight-1",
        category: "Growth Strategy",
        title: "The Death of Intuition: Why SEO is Now a Math Problem",
        summary: "Applying the Knapsack Problem and Boolean Logic to search engine dominance.",
        date: "OCT 2024",
        linkType: "framework",
        linkId: "alpine-quant-yield"
      },
      {
        id: "insight-2",
        category: "Human Capital",
        title: "Talent as Energy: Moving Beyond the Static Org Chart",
        summary: "Why traditional HRIS fails to capture the kinetic potential of a modern workforce.",
        date: "SEP 2024",
        linkType: "engine",
        linkId: "talent-engine"
      },
      {
        id: "insight-3",
        category: "Market Positioning",
        title: "Signal Transmission in a Noisy World",
        summary: "Treating brand resonance as an electrical circuit to minimize impedance.",
        date: "AUG 2024",
        linkType: "framework",
        linkId: "brand-resonance-graph"
      }
    ],
    // New Section: Firm Impact
    impactStats: [
      { label: "Capital Optimized", value: "$4.2B" },
      { label: "Systems Deployed", value: "140+" },
      { label: "Entropy Reduced", value: "94%" }
    ],
    frameworkPreview: {
      title: "Strategic Doctrines"
    },
    enginePreview: {
      title: "Operational Engines"
    }
  },
  // ... (keep existing frameworks and engines arrays) ...
  frameworks: [
    // ... (keep existing frameworks)
    {
      id: 'alpine-quant-yield',
      name: 'Alpine Quant-Yield Framework',
      subject: 'Isomorphic Graph-Based Search Engine Dominance',
      description: "A proprietary operating system for organic growth, mapping SEO to a Traveling Salesperson Problem (TSP) isomorphism to maximize velocity and eliminate resource waste.",
      summary: {
        p1: "The Alpine Quant-Yield Framework is a proprietary operating system for organic growth. It rejects the traditional, linear 'checklist' approach to SEO in favor of a Traveling Salesperson Problem (TSP) isomorphism.",
        p2: "We view the journey from Initial State (S₀: Zero Visibility) to Success State (S_final: Market Dominance) as a graph traversal problem. By breaking the ecosystem into disjoint logical components and solving for the shortest Hamiltonian path, we eliminate resource waste (entropy) and maximize velocity.",
        directive: "Do not build what cannot be calculated. Do not write what cannot rank."
      },
      isomorphism: {
        intro: "We map the chaotic environment of Search Engine Optimization into 5 disjoint, testable nodes ('Cities'). The goal is to visit all required nodes to 'unlock' the Success State with the minimum total cost (Time + Budget)."
      },
      nodes: [
        {
          id: "A",
          name: "SEL (Selection / Yield)",
          function: "The financial audit.",
          logic: "'The Knapsack Problem.'",
          input: "Raw Market Data (Keywords, Volume, CPC).",
          output: "A prioritized list of 'Gold' targets that fit within our resource capacity.",
          failureState: "Targeting low-value or impossible-to-rank keywords."
        },
        {
          id: "B",
          name: "TRU (Trust / Gate)",
          function: "The security clearance.",
          logic: "'Boolean Satisfaction (SAT).'",
          input: "Domain Metrics (Backlinks, Age, Tech Stack).",
          output: "Binary PASS/FAIL for 'permission to enter' a specific niche.",
          failureState: "'Ghost Yield' (Content that exists but is invisible due to lack of authority)."
        },
        {
          id: "C",
          name: "ARC (Architecture / Zoning)",
          function: "The structural blueprint.",
          logic: "'Community Detection (Graph Clustering).'",
          input: "SERP Overlap Data.",
          output: "A clustered sitemap (Hubs & Spokes) and 'Bridge Node' locations.",
          failureState: "Cannibalization (Pages fighting each other)."
        },
        {
          id: "D",
          name: "SEM (Semantic / Production)",
          function: "The asset manufacturing.",
          logic: "'Vector Space Alignment.'",
          input: "User Intent Vectors & Knowledge Graph Entities.",
          output: "Content that mathematically matches the query's meaning.",
          failureState: "Semantic Mismatch (Writing 'Blue' when the user wants 'Azure')."
        },
        {
          id: "E",
          name: "SIG (Signal / Optimization)",
          function: "The feedback loop.",
          logic: "'Multi-Armed Bandit.'",
          input: "Impression & Click Data.",
          output: "Optimized Click-Through Rates (CTR).",
          failureState: "'Bleeding Assets' (High visibility, zero traffic)."
        }
      ],
      solution: {
        intro: "We tested various permutations of these nodes. The optimal path (Shortest Path Algorithm) that minimizes 'Rework Risk' and maximizes 'Time-to-Value' is:",
        path: ["SEL", "TRU", "ARC", "SEM", "SIG"],
        reasons: [
          { title: "SEL First", description: "We filter out 90% of bad ideas before spending a dollar. (Lowest Entropy start)." },
          { title: "TRU Second", description: "We verify eligibility before building infrastructure. If we can't rank, we don't build." },
          { title: "ARC Third", description: "We organize the remaining targets so we build efficiently." },
          { title: "SEM Fourth", description: "We manufacture only what is planned and verified." },
          { title: "SIG Last", description: "We tune the machine once it is running." }
        ]
      },
      formulas: {
        intro: "This framework runs on strict mathematical models, not intuition.",
        items: [
          {
            title: "I. The Efficiency Score (Node: SEL)",
            description: "Used to prioritize the 'Knapsack' of keywords.",
            equation: "E = (V * CPC) / D²",
            visualizationType: "efficiency",
            variables: [
              "V = Monthly Search Volume",
              "CPC = Cost Per Click (Proxy for Commercial Intent)",
              "D = Keyword Difficulty (Squared to penalize difficulty exponentially)"
            ]
          },
          {
            title: "II. The Vector Alignment (Node: SEM)",
            description: "Used to grade content quality before publishing.",
            equation: "Sim(A, B) = cos(θ) = (A · B) / (||A|| ||B||)",
            visualizationType: "vector",
            variables: [
              "A = Our Content Vector",
              "B = The 'Ideal' Vector (Top Ranking Average)",
              "Target: Score > 0.85"
            ]
          },
          {
            title: "III. The Bandit Reward (Node: SIG)",
            description: "Used to determine if a title tag test is a winner.",
            equation: "Q_new(a) = Q_old(a) + α(R - Q_old(a))",
            visualizationType: "bandit",
            variables: [
              "Q = Estimated Value (CTR)",
              "R = Actual Reward (Observed Clicks)",
              "α = Learning Rate (Speed of adaptation)"
            ]
          }
        ]
      },
      protocol: {
        intro: "",
        phases: [
          {
            title: "Phase 1: The Initialization (Days 1-5)",
            role: "Data Scientist / Strategist",
            task: "Run the SEL module. Scrap market data, apply the Efficiency formula.",
            deliverable: "The 'Gold List' (Top 50 viable keywords)."
          },
          {
            title: "Phase 2: The Gate Check (Day 6)",
            role: "Technical Lead",
            task: "Run the TRU module. Compare domain metrics against the average difficulty of the 'Gold List.'",
            deliverable: "Decision: Green (Proceed) or Red (Abort)."
          },
          {
            title: "Phase 3: The Blueprinting (Days 7-10)",
            role: "Architect / SEO Manager",
            task: "Run ARC. Map the 'Gold List' into clusters using SERP overlap. Define the URL structure.",
            deliverable: "The 'Attack Map' (Sitemap)."
          },
          {
            title: "Phase 4: Manufacturing (Days 11-30)",
            role: "Content Engineer / AI Operator",
            task: "Run SEM. Generate content. Verify Vector Alignment. Inject Schema Entities.",
            deliverable: "Published Assets."
          },
          {
            title: "Phase 5: The Watchtower (Ongoing)",
            role: "Growth Hacker",
            task: "Run SIG. Monitor Search Console. Identify low CTR pages. Deploy new titles (Bandit arms).",
            deliverable: "Monthly Yield Reports."
          }
        ]
      },
      values: {
        intro: "This framework is designed to protect the team:",
        points: [
          {
            title: "Protection from Futility",
            description: "No one ever works on a 'dead end' project because SEL and TRU filter them out."
          },
          {
            title: "Cognitive Clarity",
            description: "The separation of ARC (Planning) and SEM (Doing) allows creators to focus purely on creation without worrying about strategy."
          },
          {
            title: "Measurable Success",
            description: "Every step has a mathematical 'Success State,' providing constant dopamine hits and validation for the team."
          }
        ]
      }
    },
    {
      id: 'brand-resonance-graph',
      name: 'Brand-Resonance Graph',
      subject: 'Isomorphic Signal Transmission & Market Positioning',
      description: "A framework for high-signal communication, viewing marketing as an electrical circuit to transmit a value proposition with zero impedance.",
      summary: {
        p1: "The Brand-Resonance Graph is a framework for high-signal communication. It rejects the 'Creative-First' approach (starting with logos, slogans, or ad aesthetics) in favor of a Signal Transmission Isomorphism.",
        p2: "We view Marketing not as 'art,' but as an electrical circuit connecting a Source (Product Truth) to a Receiver (Customer Wallet). The goal is to transmit the value proposition with zero impedance (friction/confusion).",
        directive: 'Do not shout louder. Tune the frequency to match the receiver.'
      },
      isomorphism: {
        intro: 'We map the chaotic world of branding into 5 disjoint, testable nodes. The goal is to establish a clear circuit where the signal ($Message$) triggers a specific voltage response ($Action$) in the receiver.'
      },
      nodes: [
        {
          id: 'A',
          name: 'PAIN (The Enemy)',
          function: 'The Voltage Source.',
          logic: '"Negative Motivation."',
          input: 'Customer interviews, complaint forums, negative reviews of competitors.',
          output: 'The specific "Hell" the customer is currently living in.',
          failureState: '"Nice-to-Have" Syndrome (Solving a minor annoyance instead of a bleeding neck).'
        },
        {
          id: 'B',
          name: 'WHO (The Receiver)',
          function: 'The Tuning Fork.',
          logic: '"Radical Exclusion."',
          input: 'Demographic data, psychographics, behavioral triggers.',
          output: 'A single, hyper-specific Avatar (e.g., "Frustrated CTOs scaling past Series B," not "Business Owners").',
          failureState: '"Broadcasting" (Trying to speak to everyone, resulting in static).'
        },
        {
          id: 'C',
          name: 'POS (Positioning / The Filter)',
          function: 'The Frequency Modulator.',
          logic: `"The 'Only' Claim."`,
          input: 'Competitive landscape map.',
          output: 'The statement: "We are the only [Category] that [Solves Pain A] for [Who B]."',
          failureState: '"Me-Too" Positioning (Being better, not different).'
        },
        {
          id: 'D',
          name: 'CHAN (Channel / The Wire)',
          function: 'The Transmission Medium.',
          logic: '"Contextual Fit."',
          input: 'Where the "WHO" actually consumes information (e.g., LinkedIn for CTOs, TikTok for Gen Z).',
          output: 'The single primary channel for distribution.',
          failureState: '"Omnichannel Dilution" (Trying to be everywhere with insufficient resources).'
        },
        {
          id: 'E',
          name: 'CREAT (Creative / The Payload)',
          function: 'The Signal Packet.',
          logic: '"Visual/Verbal Encoding."',
          input: 'The outputs of Pain, Who, and Pos.',
          output: 'The ad, the headline, the video, the colors.',
          failureState: `"Art for Art's Sake" (Beautiful ads that say nothing).`
        }
      ],
      solution: {
        intro: 'Most companies fail because they start at CREAT (making cool ads) or CHAN (posting on social media) without the prerequisites. The Alpine Shortest Path is:',
        path: ['PAIN', 'WHO', 'POS', 'CHAN', 'CREAT'],
        reasons: [
          { title: 'PAIN First', description: 'We define the energy source. If there is no pain, there is no market. (Entropy Check).' },
          { title: 'WHO Second', description: 'We identify who has that pain.' },
          { title: 'POS Third', description: "We design the specific key to unlock that person's problem." },
          { title: 'CHAN Fourth', description: 'We find where that person lives.' },
          { title: 'CREAT Last', description: 'We construct the message to fit the channel and the person.' }
        ]
      },
      formulas: {
        intro: 'This framework runs on strict mathematical models, not intuition.',
        items: [
          {
            title: 'I. The Resonance Score (R)',
            description: 'Used to grade if a message will stick.',
            equation: 'R = (P × I) / N',
            visualizationType: 'static',
            variables: [
              'P = Pain Intensity (How bad does it hurt? 1-10)',
              'I = Identity Match (How much do they see themselves in the copy? 1-10)',
              'N = Market Noise (How many competitors are saying the same thing?)',
              'Goal: Maximize P and I, Minimize N via Positioning.'
            ]
          },
          {
            title: 'II. The Conversion Probability (Cp)',
            description: 'This formula dictates our Creative strategy: Increase M/V, reduce F/A.',
            equation: 'Cp = (M + V) / F - A',
            visualizationType: 'static',
            variables: [
              'M = Motivation (Pain)',
              'V = Value Clarity (Positioning)',
              'F = Friction (Channel/UX difficulty)',
              'A = Anxiety (Trust)'
            ]
          }
        ]
      },
      protocol: {
        intro: "",
        phases: [
          {
            title: 'Phase 1: The Diagnostics (Days 1-5)',
            role: 'Strategist / Founder',
            task: 'Run PAIN & WHO. Conduct 10 "Jobs-to-be-Done" interviews. Scrape Reddit/reviews for "hate" keywords.',
            deliverable: 'The "Enemy Profile" (e.g., "The Enemy is Spreadsheet Chaos").'
          },
          {
            title: 'Phase 2: The Calibration (Days 6-8)',
            role: 'Product Marketer',
            task: 'Run POS. Map the competitors. Find the "White Space." Draft the "Only" Statement.',
            deliverable: 'The Positioning Manifesto.'
          },
          {
            title: 'Phase 3: The Wiring (Day 9)',
            role: 'Growth Hacker',
            task: 'Run CHAN. Audit where the "WHO" spends time. Select ONE primary channel.',
            deliverable: 'The Channel Strategy (e.g., "100% LinkedIn Inbound").'
          },
          {
            title: 'Phase 4: The Encoding (Days 10-20)',
            role: 'Copywriter / Designer',
            task: 'Run CREAT. Translate the Manifesto into assets (Ads, Landing Pages) that fit the Channel.',
            deliverable: 'High-Signal Assets.'
          },
          {
            title: 'Phase 5: The Feedback (Ongoing)',
            role: 'Analyst',
            task: 'Measure Resonance (R). If CTR is low, is it the Creative (Node E) or did we get the Pain (Node A) wrong? Trace back up the graph.',
            deliverable: 'Monthly Yield Reports.'
          }
        ]
      },
      values: {
        intro: 'This framework is designed to protect the team:',
        points: [
          {
            title: 'End of Subjective Hell',
            description: 'We stop arguing about "blue vs. red" or "funny vs. serious." Creative decisions are dictated by the PAIN and WHO nodes. Data wins.'
          },
          {
            title: 'Respect for the Audience',
            description: "We don't spam. We only transmit on channels where the user is listening, and we only speak to pains we can actually solve."
          },
          {
            title: 'Sanity for the Team',
            description: 'By defining the "Enemy" and the "Avatar" first, the creative team has clear constraints. Creativity flourishes in constraints; it drowns in infinite choice.'
          }
        ]
      }
    },
    {
      id: 'deal-flow-algorithm',
      name: 'Deal-Flow Algorithm',
      subject: 'Isomorphic Graph-Based Pipeline Velocity',
      description: "A rigorous protocol for B2B revenue generation that replaces 'persistence selling' with a graph traversal optimization to eliminate 'Zombie Deals' and maximize velocity.",
      summary: {
        p1: "The Deal-Flow Algorithm is a rigorous protocol for B2B revenue generation. It replaces 'persistence selling' (chasing leads indefinitely) with a Graph Traversal Optimization.",
        p2: "We view a 'Deal' not as a relationship to be nurtured, but as a state-change problem. The lead must move from the Unqualified State (S₀) to the Contract State (S_final) with minimum friction and zero backtracking.",
        directive: "Disqualify bad deals immediately to conserve kinetic energy for the winners."
      },
      isomorphism: {
        intro: "We decompose the sales cycle into 5 disjoint nodes. The objective is to traverse the graph without hitting 'Dead Ends' (Ghosting) or 'Loops' (Indecision)."
      },
      nodes: [
        {
          id: "A",
          name: "QUAL (The Hard Gate)",
          function: "The Bouncer.",
          logic: '"Resource Protection."',
          input: "Discovery Call data (BANT).",
          output: "Binary GO/NO-GO.",
          failureState: '"Hopium" (Keeping bad deals alive).'
        },
        {
          id: "B",
          name: "STAKE (Stakeholder Map)",
          function: "The Political Map.",
          logic: '"Consensus Physics."',
          input: "Org chart analysis.",
          output: "List of Decision Makers.",
          failureState: '"Single-Threading" (Selling to non-buyers).'
        },
        {
          id: "C",
          name: "DEMO (The Proof)",
          function: "The Solution Fit.",
          logic: '"Vector Alignment."',
          input: "Pain Points from QUAL.",
          output: "Verbal confirmation.",
          failureState: '"The Harbor Tour" (Boring feature dump).'
        },
        {
          id: "D",
          name: "PROP (The Business Case)",
          function: "The Pricing Logic.",
          logic: '"ROI Calculation."',
          input: "Cost of problem vs. Solution.",
          output: "Proposal for the CFO.",
          failureState: '"Sticker Shock".'
        },
        {
          id: "E",
          name: "CLOSE (The Execution)",
          function: "The Signature.",
          logic: '"Friction Removal."',
          input: "Procurement process.",
          output: "Signed contract.",
          failureState: '"Legal Limbo".'
        }
      ],
      solution: {
        intro: "Most sales teams fail because they Demo to strangers ($D -> P -> Q$). The Alpine Shortest Path is:",
        path: ["QUAL", "STAKE", "DEMO", "PROP", "CLOSE"],
        reasons: [
          { title: "QUAL First", description: "Save 40% of calendar time by ignoring bad leads." },
          { title: "STAKE Second", description: "Identify the Real Buyer before showing the product." },
          { title: "DEMO Third", description: "Present the solution to the entire buying committee at once." },
          { title: "PROP Fourth", description: "Only price a verified solution." },
          { title: "CLOSE Last", description: "Administrative formality." }
        ]
      },
      formulas: {
        intro: "Sales is a physics problem.",
        items: [
          {
            title: "I. The Deal Probability Score (Pd)",
            description: "Used to forecast revenue accuracy.",
            equation: "Pd = (P × A × T) / C",
            visualizationType: "static",
            variables: ["P = Pain Validation (0-1)", "A = Access to Power (0-1)", "T = Timeline (0-1)", "C = Competitor Count"]
          },
          {
            title: "II. Pipeline Velocity (V)",
            description: "The most important metric for growth.",
            equation: "V = (L × D × W) / T",
            visualizationType: "static",
            variables: ["L = Qualified Leads", "D = Deal Size", "W = Win Rate %", "T = Sales Cycle Time"]
          }
        ]
      },
      protocol: {
        intro: "",
        phases: [
          { title: "Phase 1: The Gate", role: "Account Executive", task: "Run QUAL. Ask hard questions (Budget/Timeline).", deliverable: "Go/No-Go." },
          { title: "Phase 2: The Mapping", role: "SDR/AE", task: "Run STAKE. Identify the Champion and Economic Buyer.", deliverable: "Invite to Demo." },
          { title: "Phase 3: The Show", role: "Sales Engineer", task: "Run DEMO. Tie features to dollar value.", deliverable: "Verbal Agreement." },
          { title: "Phase 4: The Logic", role: "AE", task: "Run PROP. Draft ROI-based proposal.", deliverable: "CFO-Ready Doc." },
          { title: "Phase 5: The Paperwork", role: "Legal", task: "Run CLOSE. Navigate procurement.", deliverable: "Signed Contract." }
        ]
      },
      values: {
        intro: "Restoring dignity to sales:",
        points: [
          { title: "No More Ghosting", description: "By running STAKE early, we know who decides. We are rarely surprised." },
          { title: "Respect for the 'No'", description: "A quick 'No' is the second-best result. The only enemy is 'Maybe'." },
          { title: "High-Status Selling", description: "We are consultants, not beggars. Qualifying rigorously signals value." }
        ]
      }
    },
    {
      id: 'capital-efficiency-lattice',
      name: 'Capital-Efficiency Lattice',
      subject: 'Isomorphic Fundraising & Valuation Optimization',
      description: "A protocol for fundraising that rejects 'Spray and Pray' in favor of a lattice path optimization to maximize valuation and minimize time spent trading equity.",
      summary: {
        p1: "The Capital-Efficiency Lattice is a rigorous protocol for fundraising. It rejects the 'Spray and Pray' method in favor of a Lattice Path Optimization.",
        p2: "We view Fundraising as a Marketplace Transaction where we trade equity for capital. To maximize valuation and minimize time, we must traverse the graph in a specific order.",
        directive: "Fix the physics (Math) before you paint the picture (Story)."
      },
      isomorphism: {
        intro: "We decompose the fundraising cycle into 5 disjoint nodes. The objective is to move from Bootstrapped (S₀) to Funded (S_final) without suffering valuation discounts."
      },
      nodes: [
        {
          id: "A",
          name: "UNIT (The Physics)",
          function: "The Financial Core.",
          logic: '"Unit Economics Verification."',
          input: "CAC, LTV, Gross Margins.",
          output: "Proof of the 'Money Machine'.",
          failureState: '"The Leaky Bucket".'
        },
        {
          id: "B",
          name: "NARR (The Narrative)",
          function: "The Story Wrapper.",
          logic: '"Contextual Framing."',
          input: "The 'Why Now' trigger.",
          output: "The Core Thesis.",
          failureState: '"Solution in Search of a Problem".'
        },
        {
          id: "C",
          name: "LIST (The Target)",
          function: "The Investor Filter.",
          logic: '"Thesis Matching."',
          input: "Investor databases.",
          output: "Tiered Hit List.",
          failureState: '"Shotgunning" (Blind pitching).'
        },
        {
          id: "D",
          name: "DECK (The Asset)",
          function: "The Sales Material.",
          logic: '"Visual Proof."',
          input: "Physics + Narrative.",
          output: "10-slide Deck.",
          failureState: '"The Novel" (Too much text).'
        },
        {
          id: "E",
          name: "TERM (The Deal)",
          function: "The Closing Mechanism.",
          logic: '"Leverage Management."',
          input: "Term sheets.",
          output: "Cash in bank.",
          failureState: '"Bad Marriage" (Toxic terms).'
        }
      ],
      solution: {
        intro: "Most founders fail because they start with DECK or LIST before fixing UNIT. The Alpine Shortest Path is:",
        path: ["UNIT", "NARR", "LIST", "DECK", "TERM"],
        reasons: [
          { title: "UNIT First", description: "Verify the machine works. If LTV:CAC < 3, don't raise." },
          { title: "NARR Second", description: "Build a story around the working math." },
          { title: "LIST Third", description: "Find investors who like your specific math/story." },
          { title: "DECK Fourth", description: "Build materials to target that list." },
          { title: "TERM Last", description: "Negotiate from strength." }
        ]
      },
      formulas: {
        intro: "Fundraising is not magic; it is finance.",
        items: [
          {
            title: "I. The Hype Factor (Burn Multiple)",
            description: "Used to verify efficiency.",
            equation: "BM = Net Burn / Net New ARR",
            visualizationType: "static",
            variables: ["< 1.0 = Amazing", "1.0 - 1.5 = Good", "> 2.0 = Bad (Do not pitch)"]
          },
          {
            title: "II. The Valuation Target (Vt)",
            description: "Used to set expectations.",
            equation: "Vt = ARR × M × (1 + G)",
            visualizationType: "static",
            variables: ["ARR = Annual Recurring Revenue", "M = Market Multiplier (e.g. 10x)", "G = Growth Premium"]
          }
        ]
      },
      protocol: {
        intro: "",
        phases: [
          { title: "Phase 1: The Audit", role: "CFO", task: "Run UNIT. Audit P&L and Retention.", deliverable: "Venture Backable Verdict." },
          { title: "Phase 2: The Script", role: "CEO", task: "Run NARR. Write the 'Memo' (Thesis).", deliverable: "Written Narrative." },
          { title: "Phase 3: Headhunting", role: "Ops", task: "Run LIST. Build the Hit List.", deliverable: "Target Spreadsheet." },
          { title: "Phase 4: The Design", role: "Founder", task: "Run DECK. Visualize the Memo.", deliverable: "Pitch Deck." },
          { title: "Phase 5: Roadshow", role: "CEO", task: "Run TERM. Pitch Tier 3 first, then Tier 1.", deliverable: "Term Sheet." }
        ]
      },
      values: {
        intro: "Protecting founder equity and sanity:",
        points: [
          { title: "Respect for Truth", description: "We do not lie. By running UNIT first, we pitch with integrity." },
          { title: "Founder Sanity", description: "Batching the process compresses the 'Roadshow' into a tight window." },
          { title: "Power Balance", description: "We don't beg. We offer an opportunity to invest in a working machine." }
        ]
      }
    },
    {
      id: 'validation-vector',
      name: 'Validation-Vector',
      subject: 'Isomorphic Product-Market Fit Discovery',
      description: "A framework for innovation that prevents 'Builder's Trap' by proving market demand before writing code.",
      summary: {
        p1: "The Validation-Vector prevents startups from burning cash on products nobody wants. It rejects the 'Build it and they will come' mentality.",
        p2: "We traverse from Idea (S₀) to Revenue (S_final) by selling the promise before the product exists.",
        directive: "Sell the promise. Get the cash. Then write the code."
      },
      isomorphism: {
        intro: "We map the innovation process into 5 disjoint nodes to validate demand without engineering waste."
      },
      nodes: [
        { id: "A", name: "PROB (Problem)", function: "Pain Discovery.", logic: '"Pain Magnitude."', input: "User Interviews.", output: "Verified Pain Point.", failureState: "Indifference." },
        { id: "B", name: "OFFER (Promise)", function: "The Solution Concept.", logic: '"Value Proposition."', input: "Landing Page Copy.", output: "The 'Hook'.", failureState: "Confusion." },
        { id: "C", name: "TRAC (Traction)", function: "The Wallet Vote.", logic: '"Pre-Sales."', input: "Stripe/Deposit.", output: "Cash Commitment.", failureState: "False Positives (Likes)." },
        { id: "D", name: "PROTO (Prototype)", function: "The MVP.", logic: '"Minimum Viable."', input: "No-Code/Mockups.", output: "Functional value.", failureState: "Over-engineering." },
        { id: "E", name: "SCALE (Dev)", function: "The System.", logic: '"Robustness."', input: "Codebase.", output: "Production App.", failureState: "Technical Debt." }
      ],
      solution: {
        intro: "The 'Builder Trap' path is Proto -> Scale -> Offer. The Alpine Shortest Path is:",
        path: ["PROB", "OFFER", "TRAC", "PROTO", "SCALE"],
        reasons: [
          { title: "PROB First", description: "Verify the pain exists." },
          { title: "OFFER Second", description: "Test if the solution resonates." },
          { title: "TRAC Third", description: "Get paid before building. This is the ultimate validation." },
          { title: "PROTO Fourth", description: "Build only what was sold." },
          { title: "SCALE Last", description: "Optimize the code only after PMF." }
        ]
      },
      formulas: {
        intro: "Validation is binary: Cash or No Cash.",
        items: [
          {
            title: "I. The Demand Coefficient (D)",
            description: "Measures market pull.",
            equation: "D = (Pain × Freq) / Friction",
            visualizationType: "static",
            variables: ["Pain = Severity", "Freq = Occurrence Rate", "Friction = Ease of Switch"]
          }
        ]
      },
      protocol: {
        intro: "",
        phases: [
          { title: "Phase 1: Discovery", role: "Founder", task: "Run PROB. Interview 50 potential users.", deliverable: "Pain Report." },
          { title: "Phase 2: The Pitch", role: "Marketer", task: "Run OFFER. Launch Landing Page.", deliverable: "Waitlist/Offer." },
          { title: "Phase 3: The Ask", role: "Sales", task: "Run TRAC. Collect pre-orders.", deliverable: "First Revenue." },
          { title: "Phase 4: The Hack", role: "Maker", task: "Run PROTO. Deliver manually (Concierge MVP).", deliverable: "Happy Customer." },
          { title: "Phase 5: The Build", role: "Engineer", task: "Run SCALE. Automate the manual process.", deliverable: "Software." }
        ]
      },
      values: {
        intro: "Building with certainty:",
        points: [
          { title: "Zero Waste", description: "We never write code that ends up deleted." },
          { title: "Customer Funded", description: "Revenue validates the business better than VC money." },
          { title: "Reality Check", description: "We face the market immediately." }
        ]
      }
    },
    {
      id: 'churn-damping-protocol',
      name: 'Churn-Damping Protocol',
      subject: 'Isomorphic Retention & LTV Maximization',
      description: "A framework for SaaS retention that treats churn as an entropy problem, optimizing the user journey for habit formation before expansion.",
      summary: {
        p1: "The Churn-Damping Protocol solves the 'Leaky Bucket' problem. It costs 5x more to acquire a new customer than to keep one.",
        p2: "We traverse from Signup (S₀) to Habit (S_final) by forcing the 'Aha!' moment early.",
        directive: "Habit first. Revenue second."
      },
      isomorphism: {
        intro: "We map the user journey into 5 nodes to minimize drop-off."
      },
      nodes: [
        { id: "A", name: "AHA (First Value)", function: "The Dopamine Hit.", logic: '"Time to Value."', input: "Core Feature.", output: "User Success.", failureState: "Boredom." },
        { id: "B", name: "SETUP (Config)", function: "The Investment.", logic: '"Sunk Cost."', input: "Data Import.", output: "configured account.", failureState: "Friction." },
        { id: "C", name: "HABIT (Routine)", function: "The Hook.", logic: '"Frequency."', input: "Daily Usage.", output: "Dependency.", failureState: "Disengagement." },
        { id: "D", name: "EDU (Mastery)", function: "The Deepening.", logic: '"Power Usage."', input: "Advanced Features.", output: "Expert User.", failureState: "Overwhelm." },
        { id: "E", name: "UPSELL (Expansion)", function: "The Harvest.", logic: '"LTV Growth."', input: "New Tiers.", output: "Higher ARPU.", failureState: "Greed." }
      ],
      solution: {
        intro: "Most SaaS tools force SETUP -> EDU -> AHA. This kills momentum. The Alpine Shortest Path is:",
        path: ["AHA", "SETUP", "HABIT", "EDU", "UPSELL"],
        reasons: [
          { title: "AHA First", description: "Show value immediately (e.g. Empty State template)." },
          { title: "SETUP Second", description: "Now that they see value, they will do the work." },
          { title: "HABIT Third", description: "Lock in the daily routine." },
          { title: "EDU Fourth", description: "Teach them more once they are hooked." },
          { title: "UPSELL Last", description: "Expand revenue only when happy." }
        ]
      },
      formulas: {
        intro: "Retention is a function of habit strength.",
        items: [
          {
            title: "I. The LTV Equation",
            description: "The ceiling of growth.",
            equation: "LTV = ARPU / Churn Rate",
            visualizationType: "static",
            variables: ["ARPU = Avg Revenue Per User", "Churn = % leaving monthly"]
          }
        ]
      },
      protocol: {
        intro: "",
        phases: [
          { title: "Phase 1: Onboarding", role: "Product", task: "Run AHA. Remove all friction to first value.", deliverable: "Activated User." },
          { title: "Phase 2: Integration", role: "CS", task: "Run SETUP. Help them import data.", deliverable: "Sticky Account." },
          { title: "Phase 3: Hook", role: "Product", task: "Run HABIT. Email triggers/Notifications.", deliverable: "DAU/MAU Ratio." },
          { title: "Phase 4: Education", role: "Marketing", task: "Run EDU. Webinars/Docs.", deliverable: "Power User." },
          { title: "Phase 5: Expansion", role: "Sales", task: "Run UPSELL. Propose Enterprise tier.", deliverable: "Net Negative Churn." }
        ]
      },
      values: {
        intro: "Keeping customers for life:",
        points: [
          { title: "Value Leading", description: "We give before we take." },
          { title: "Psychology First", description: "We design for human dopamine loops." },
          { title: "Anti-Churn", description: "Retention is the best acquisition channel." }
        ]
      }
    },
    {
      id: 'talent-mesh-framework',
      name: 'Talent-Mesh Framework',
      subject: 'Isomorphic High-Signal Hiring',
      description: "A protocol for hiring A-Players that filters for skill before selling the vision, preventing 'False Positives' and culture dilution.",
      summary: {
        p1: "The Talent-Mesh Framework treats hiring as a signal-to-noise problem. A bad hire adds massive entropy.",
        p2: "We traverse from Stranger (S₀) to Teammate (S_final) by filtering relentlessly.",
        directive: "Filter the noise. Amplify the signal."
      },
      isomorphism: {
        intro: "We map hiring into 5 nodes to ensure density of talent."
      },
      nodes: [
        { id: "A", name: "DEF (Definition)", function: "The Scorecard.", logic: '"Target Vector."', input: "Outcomes req.", output: "Job Spec.", failureState: "Vague Role." },
        { id: "B", name: "FILT (The Filter)", function: "The Hard Screen.", logic: '"Skill Check."', input: "Test/Portfolio.", output: "Qualified Lead.", failureState: "Charisma Trap." },
        { id: "C", name: "SOURCE (Outbound)", function: "The Hunt.", logic: '"Sniper Approach."', input: "LinkedIn.", output: "Candidate Pool.", failureState: "Inbound Noise." },
        { id: "D", name: "VIBE (Culture)", function: "The Soft Screen.", logic: '"Values Match."', input: "Interview.", output: "Cultural Add.", failureState: "Toxic Hire." },
        { id: "E", name: "SELL (The Offer)", function: "The Close.", logic: '"Vision Alignment."', input: "Equity/Comp.", output: "Acceptance.", failureState: "Rejection." }
      ],
      solution: {
        intro: "The standard 'Rescue Mission' is Source -> Vibe -> Sell -> Filt. The Alpine Shortest Path is:",
        path: ["DEF", "FILT", "SOURCE", "VIBE", "SELL"],
        reasons: [
          { title: "DEF First", description: "Know exactly what you need." },
          { title: "FILT Second", description: "Test skills before you fall in love with personality." },
          { title: "SOURCE Third", description: "Find people who pass the filter." },
          { title: "VIBE Fourth", description: "Check culture only on qualified people." },
          { title: "SELL Last", description: "Spend emotional energy closing only the best." }
        ]
      },
      formulas: {
        intro: "Hiring is probability management.",
        items: [
          {
            title: "I. The Talent Density (TD)",
            description: "The average capability of the team.",
            equation: "TD = (Sum of Skills) / Headcount",
            visualizationType: "static",
            variables: ["Goal: Increase TD with every hire."]
          }
        ]
      },
      protocol: {
        intro: "",
        phases: [
          { title: "Phase 1: Scorecard", role: "Manager", task: "Run DEF. Define outcomes, not tasks.", deliverable: "The Rubric." },
          { title: "Phase 2: Screening", role: "Recruiter", task: "Run FILT. Work sample test.", deliverable: "Shortlist." },
          { title: "Phase 3: Hunting", role: "Recruiter", task: "Run SOURCE. Pitch A-Players.", deliverable: "Pipeline." },
          { title: "Phase 4: Interview", role: "Team", task: "Run VIBE. Bar raiser interview.", deliverable: "Decision." },
          { title: "Phase 5: Closing", role: "Founder", task: "Run SELL. The vision pitch.", deliverable: "Signed Offer." }
        ]
      },
      values: {
        intro: "Building a championship team:",
        points: [
          { title: "Evidence Over Charisma", description: "We hire for what people can do, not how well they talk." },
          { title: "Protect the Bar", description: "It is better to leave a role open than to lower standards." },
          { title: "Respect Candidates", description: "We don't waste their time. Fast Yes or Fast No." }
        ]
      }
    }
  ],
  engines: [
    {
      id: 'talent-engine',
      name: 'The Talent Engine',
      category: 'Human Capital Management (HCM) & HRIS',
      description: "A Resource Operating System that treats your workforce as a dynamic pool of talent that can be deployed, analyzed, and optimized in real-time.",
      hero: {
        title: "Most companies treat their employees like furniture.",
        subtitle: "They list them in a static database. But your people are energy—they move, learn, and evolve. Standard HR software is just a digital filing cabinet; it doesn't help you manage the work.",
        solution: "The Talent Engine is different. It is a Resource Operating System. It treats your workforce as a dynamic pool of talent that can be deployed, analyzed, and optimized in real-time."
      },
      modules: [
        {
          title: 'The "Living Profile" (Not Just a Bio)',
          problem: "In normal software, an employee profile is dead text.",
          solution: 'A profile is a live dashboard of Capacity and Skill.',
          detail: 'You don\'t just see "Job Title." You see Current Load (e.g. 110% capacity), Verified Skill Stack, and an Availability "Green Light" for new tasks.'
        },
        {
          title: 'The "Kinetic" Org Chart',
          problem: "Traditional Org Charts are rigid pyramids that break with cross-functional teams.",
          solution: 'We use Matrix Linking to handle "two boss" realities.',
          detail: 'Drag-and-drop an employee into multiple teams. The software automatically splits their "Cost" and "Time" between budgets, mirroring how modern companies actually work.'
        },
        {
          title: 'The "Smart Pulse" (Retention Radar)',
          problem: "Great employees leave because they are overworked and management didn't notice.",
          solution: 'The system watches for Burnout Signals in real-time.',
          detail: 'Alert: "Sarah has logged 12 hours of overtime for 3 weeks." Action: The system suggests a "Rest Block" or prompts a manager check-in before she quits.'
        },
        {
          title: 'The "Growth Loop" (Automated Onboarding)',
          problem: "Training shouldn't be a boring PDF no one reads.",
          solution: 'Onboarding is built as a Quest System.',
          detail: 'New hires see "Level 1: Setup." Clicking a box auto-generates email; watching a video unlocks drive access. Managers track exactly where hires are stuck.'
        }
      ],
      comparison: {
        intro: "Why is this better than BambooHR, Rippling, or Workday?",
        analogy: "Standard HR software is like a Bus: fixed seats, fixed route. The Talent Engine is a Fleet of Cars: You decide who drives, where they go, and how fast.",
        rows: [
          { feature: 'Org Structure', standard: 'Rigid Pyramid (1 Manager). Breaks if you have "Squads" or "Pods."', resinen: 'Fluid Matrix: An employee can belong to 5 different teams. The system handles the complexity for you.' },
          { feature: 'Data Fields', standard: '"First Name, Last Name, SSN." Impossible to track niche things like "T-Shirt Size."', resinen: 'Infinite Fields: You can add a "Dietary Restriction" block or a "Laptop Serial Number" block in seconds.' },
          { feature: 'Performance', standard: 'Once-a-year "Performance Reviews" that everyone hates.', resinen: 'Real-Time Feedback: Feedback is a "Comment Block" attached to actual work. "Great job" is recorded forever.' },
          { feature: 'Cost', standard: 'High monthly fees per user, even for features you don\'t use.', resinen: 'Usage-Based: You don\'t pay for a "Performance Module" if you aren\'t using it.' }
        ]
      },
      bottomLine: "Stop paying for software that treats your brilliant team like a list of names in a spreadsheet. The Talent Engine gives you the visibility to put the right people on the right problems at the right time—without burning them out."
    },
    {
      id: 'revenue-engine',
      name: 'The Revenue Engine',
      category: 'Next-Generation CRM & Sales Operations',
      description: "A dynamic system that models your specific way of selling. It unifies Marketing, Sales, and Finance into a single, continuous stream of truth, replacing static databases with an adaptive workflow.",
      hero: {
        title: "Most companies hate their CRM.",
        subtitle: "Why? Because they are forced to work for the software, instead of the software working for them. You have to fill out endless forms, click through ten different tabs, and at the end of the day, you still don't know which deals are actually going to close.",
        solution: "The Revenue Engine is different. It is not a static database; it is a dynamic system that models your specific way of selling."
      },
      modules: [
        {
          title: 'The "Unified Truth" Database',
          problem: "In traditional software, your leads are in one place, your emails are in another, and your contracts are in a third.",
          solution: 'We build a single "Master Record" for every customer.',
          detail: "A single view shows you everything: the first ad they clicked, every email sent by your team, the current stage of the deal, and the live status of their invoice. No more jumping between apps."
        },
        {
          title: 'The Adaptive Pipeline',
          problem: 'Standard CRMs force you into a generic "Lead -> Opportunity -> Close" flow.',
          solution: 'We build the stages to match your reality.',
          detail: 'Need a "Sample Sent" stage that triggers a warehouse alert? We snap that block in. Need a "Legal Review" stage that locks the deal value? We add that rule. It behaves like a strict process manager.'
        },
        {
          title: 'The "Radar" (Smart Views)',
          problem: "Data is useless if you can't see what matters.",
          solution: 'Instead of a cluttered dashboard, we provide role-specific "Feeds."',
          detail: 'For the Rep: A "Focus Feed" showing the 5 leads that need action today. For the Manager: A "Health Feed" highlighting stuck deals that haven\'t moved in 14 days.'
        },
        {
          title: 'The "Autopilot" (Automation)',
          problem: "You shouldn't have to hire a developer to automate your work.",
          solution: 'If a deal moves to "Closed Won," the Engine handles the rest.',
          detail: 'It automatically generates the PDF Contract, emails it to the client, alerts the Onboarding Team, and updates the Finance forecast.'
        }
      ],
      comparison: {
        intro: "Why is this better than Salesforce, HubSpot, or Pipedrive?",
        analogy: "Imagine buying a suit. The Competition is 'Off-the-Rack'—it fits okay, but never quite right. The Revenue Engine is 'Bespoke'—we measure you first and build the software around your exact business body.",
        rows: [
          { feature: 'Data Fields', standard: 'You are stuck with "First Name, Last Name, Company." Adding fields is buried in complex menus.', resinen: 'Infinite Flexibility: You want to track "Favorite Coffee" or "Truck Size"? You add that block in seconds.' },
          { feature: 'Process Changes', standard: 'Changing your sales process requires an IT ticket or an expensive consultant.', resinen: 'Drag-and-Drop Evolution: You can change your entire pipeline structure yourself in minutes.' },
          { feature: 'Visibility', standard: 'You see a list of names. You have to click into each one to know what\'s happening.', resinen: 'Rich Context: You see the data on the card. Deal value, last contact, and next step are visible without clicking.' },
          { feature: 'Cost', standard: 'You pay per user, even if they only use 10% of the features.', resinen: 'Usage-Based: You pay for the value the system delivers. It’s an asset, not a tax on your headcount.' }
        ]
      },
      bottomLine: "Stop using spreadsheets to fix the holes in your expensive CRM. The Revenue Engine is the only system that starts perfect and stays perfect, because it’s built to change as fast as your business does."
    },
    {
      id: 'logistics-engine',
      name: 'The Logistics Engine',
      category: 'Supply Chain, Inventory Management & ERP',
      description: "A Digital Twin of your operation that mirrors your exact warehouse layout, manufacturing steps, and delivery routes. It doesn't just count items; it directs their flow.",
      hero: {
        title: "Managing physical goods is the hardest problem in business.",
        subtitle: "Why? Because the Physical World and the Digital World are rarely in sync. Spreadsheets say you have 50 units, but the shelf is empty. Generic ERP systems are just 'accounting tools' that care about value, not movement.",
        solution: "The Logistics Engine is different. It creates a Digital Twin of your operation. It mirrors your exact warehouse layout, your specific manufacturing steps, and your unique delivery routes."
      },
      modules: [
        {
          title: 'The "Digital Twin" Inventory',
          problem: "Standard software gives you a list of items; it doesn't map reality.",
          solution: 'We build a spatial map: Zone B -> Aisle 4 -> Bin 2.',
          detail: 'Includes the "Atom" Concept (tracking raw materials to finished goods) and Mobile-First Scanning so floor workers use a simple phone interface instead of bulky scanners.'
        },
        {
          title: 'The "Smart Procurement" (The Brain)',
          problem: "Ordering based on 'gut feeling' leads to cash tied up in stock or lost sales.",
          solution: 'Kinetic Forecasting based on live Sales Velocity.',
          detail: 'The engine calculates exactly when you will run out based on current speed. Alert: "You have 14 days of stock left. Vendor lead time is 10 days. Order NOW."'
        },
        {
          title: 'The "Production Flow" (Kanban)',
          problem: "Manufacturing isn't just a database entry; it's a process.",
          solution: 'A "Drag-and-Drop" Production Board.',
          detail: 'Worker drags blocks to "Assembly" (auto-deducting raw materials). QC snaps photos of defects attached to the record. Finished items automatically become available for Sales.'
        },
        {
          title: 'The "Last Mile" (Distribution)',
          problem: "The job isn't done until the customer holds the package.",
          solution: 'Integrated Delivery Management without separate software.',
          detail: 'Drivers open a simplified "Feed": "Go to Address A, drop off Package B." When they swipe "Delivered," the customer gets an email instantly.'
        }
      ],
      comparison: {
        intro: "Why is this better than SAP, Oracle NetSuite, or Fishbowl?",
        analogy: "Standard ERPs are like a Concrete Bunker: strong but impossible to move. The Logistics Engine is a Tent City: durable, but you can move, expand, or change it in an afternoon.",
        rows: [
          { feature: 'Warehouse Layout', standard: 'Rigid. Forces you to use their "Bin/Lot" logic.', resinen: '100% Custom: Organize by color, temperature, or expiration. We build the logic to match your physical shelves.' },
          { feature: 'Interfaces', standard: 'Cluttered "Data-Entry" screens designed for accountants.', resinen: 'Worker-Centric: Big buttons, simple scanners, and clean views designed for people standing on a factory floor.' },
          { feature: 'Connectivity', standard: 'Connected to Finance, but disconnected from Sales and HR.', resinen: 'Unified: Late shipment? Sales knows instantly. Driver sick? HR Engine alerts Dispatch.' },
          { feature: 'Implementation', standard: 'Takes 6 to 18 months. Costs millions.', resinen: 'Rapid Deployment: We map your inventory and go live in weeks.' }
        ]
      },
      bottomLine: "Your inventory is your cash. Don't leave it in the dark. The Logistics Engine turns the lights on in your warehouse, connecting the physical item on the shelf directly to the digital order on the screen."
    },
    {
      id: 'work-engine',
      name: 'The Work Engine',
      category: 'Project & Portfolio Management (PPM) / Collaborative Work Management',
      description: "A Construction Kit for Complexity that structures your entire operational reality. It brings planning, execution, documents, and communication into a single, infinite environment.",
      hero: {
        title: 'Most companies suffer from "App Fatigue."',
        subtitle: "Work is scattered across Asana, Slack, Drive, and spreadsheets. Fragmentation kills momentum. Standard tools are just flat, rigid Digital To-Do Lists.",
        solution: "The Work Engine is different. It is a Construction Kit for Complexity. It brings planning, execution, documents, and communication into a single, infinite environment."
      },
      modules: [
        {
          title: 'The "Infinite Nesting" (Fractal Architecture)',
          problem: "Standard software forces rigid hierarchy (Team -> Project -> Task). Real work is deeper.",
          solution: 'Infinite Depth: A "Task" is just a Block.',
          detail: 'Turn a simple task into a full project with 50 sub-blocks. Zoom out to see "Global Strategy" or zoom in to see a single "Bug Fix" without changing tabs.'
        },
        {
          title: 'The "Context" War Room',
          problem: "Task in one tab, document in another. 'Did you see the file on Slack?'",
          solution: 'Unified Context: The "Task Block" is the document.',
          detail: 'Write specs, attach files, chat with the team, and track status all inside the same object. No context switching.'
        },
        {
          title: 'The "Capacity Balancer" (Linked to HR)',
          problem: "Tools assume infinite time, letting you assign 100 hours to someone with 40 available.",
          solution: 'Connects to Talent Engine to check real capacity.',
          detail: 'Alert: "Sarah is at 95% capacity. Suggested alternative: Mike (60%)." Prevents burnout and missed deadlines before they happen.'
        },
        {
          title: 'The "Glass Wall" (Client Portals)',
          problem: "Wasting hours emailing status updates to clients.",
          solution: 'Selective Permeability.',
          detail: 'Mark a specific View as "Public." Clients get a secure link to see real-time progress, but cannot see your internal messy chats or costs.'
        }
      ],
      comparison: {
        intro: "Why is this better than Asana, Jira, or Monday.com?",
        analogy: "Standard tools are like a Hotel: check in, use the room as designed. The Work Engine is a Studio: move walls, change lighting, and build furniture to suit the project.",
        rows: [
          { feature: 'Structure', standard: 'Rigid "Board" or "List" views. Hard to mix.', resinen: 'Polymorphic: One team sees a Kanban Board. The Manager sees a Gantt Chart. The CEO sees a Dashboard. All from the same data.' },
          { feature: 'Complexity', standard: 'Good for simple lists. Breaks down on complex programs.', resinen: 'Enterprise Scale: Handles massive complexity through nesting. Manage a skyscraper construction or software launch with equal ease.' },
          { feature: 'Automation', standard: 'Basic "If this, then that" rules.', resinen: 'Deep Logic: "If budget > $10k, lock task & require Manager Approval from HR Engine."' },
          { feature: 'Cost', standard: 'Pay for "Seats" (even for viewers).', resinen: 'Usage-Based: Invite clients and freelancers for free. You only pay for the engine\'s processing.' }
        ]
      },
      bottomLine: "Work isn't flat, so why is your software? The Work Engine is the only platform deep enough to handle your complexity, but simple enough that your team will actually want to use it."
    }
  ],
  // NEW SECTIONS BELOW
  aboutPage: {
    hero: {
      title: "The Resinen Doctrine",
      subtitle: "We are not consultants. We are architects of entropy reduction. We believe that business is not an art, but a physics problem waiting to be solved."
    },
    sections: [
      {
        title: "The Axiom",
        content: "Traditional consulting is based on 'Best Practices'—a statistical regression to the mean. It tells you what worked for others yesterday. Resinen is based on 'First Principles'—the specific physics of your business graph. We do not ask 'What is industry standard?' We ask 'What is mathematically optimal?'"
      },
      {
        title: "The Methodology",
        content: "We use Isomorphic Mapping. We translate chaotic business problems (Hiring, Sales, SEO) into solved mathematical problems (Signal Processing, Graph Traversal, Game Theory). Once mapped, the solution becomes an algorithm, not a guess."
      },
      {
        title: "The Standard",
        content: "We do not bill by the hour. We do not sell PowerPoint decks. We build Engines—systems that run without us. If we cannot measure the yield of our work, we do not send the invoice."
      }
    ]
  },
  contactPage: {
    title: "Initialize Engagement",
    subtitle: "Resinen operates by invitation and application. We accept a limited number of partners each quarter to ensure maximum operational bandwidth.",
    formFields: [
      { label: "Entity Name", placeholder: "Company or Organization" },
      { label: "Operational Sector", placeholder: "e.g. SaaS, Manufacturing, FinTech" },
      { label: "Primary Constraint", placeholder: "What is the single biggest bottleneck?" },
      { label: "Signal Coordinates", placeholder: "Email Address" }
    ]
  }

  
};