
export const dossierData = {
  homePage: {
    hero: {
      title: "Data-Driven Strategy for Market Leaders",
      subtitle: "Resinen combines proprietary quantitative frameworks with deep industry expertise to unlock unparalleled growth and market dominance for our clients.",
      cta: "Explore Our Frameworks"
    },
    frameworkPreview: {
      title: "Our Frameworks"
    }
  },
  frameworks: [
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
    }
  ]
};