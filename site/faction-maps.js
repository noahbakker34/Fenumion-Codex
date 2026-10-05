// Source-grounded faction interaction maps. Method adapted from NN/G relationship mapping.
window.FENUMION_FACTION_MAPS = {
  "ale-chemy-knights": {
    "kind": "interaction",
    "title": "Ale-Chemy Knights interaction map",
    "intro": "Select a person, institution, or resource to trace their role, what they contribute, what the faction provides in return, and the limits of the recovered record. This is a historical network, not a current attendance roster.",
    "center": {
      "title": "Ale-Chemy Knights",
      "subtitle": "Cooperative · mutual aid · reconstruction"
    },
    "filters": [
      {
        "id": "all",
        "label": "All interactions"
      },
      {
        "id": "bond",
        "label": "Members & participants"
      },
      {
        "id": "power",
        "label": "Resources & logistics"
      },
      {
        "id": "politics",
        "label": "Civic & faction links"
      },
      {
        "id": "conflict",
        "label": "Scrutiny & risks"
      }
    ],
    "nodes": [
      {
        "id": "farkur",
        "title": "Farkur",
        "subtitle": "Founder · organizer",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Founder · organizer",
        "history": "Farkur and Ryvyt are identified as founders. Farkur directs specialist crafting to Ryvyt and records equipment loans.",
        "consequence": "Organizes pooled equipment, work, property, and newcomer support.",
        "resource": "Building expertise, organization, shared inventory and project coordination.",
        "receives": "The cooperative turns his plans into shared assets and a wider working network.",
        "evidence": "Tobias is a main member, not a proven founder. Farkur’s later disappearance has no established cause or outcome.",
        "source": "Knights record: main members; shop and inventory; missing Knights.",
        "article": "farkur",
        "x": 50,
        "y": 8
      },
      {
        "id": "ryvyt",
        "title": "Ryvyt",
        "subtitle": "Founder · specialist crafter",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Founder · specialist crafter",
        "history": "In July 2025, Farkur marks Ryvyt’s requested equipment as loaned. In May 2026, Ryvyt calls himself the remaining founder.",
        "consequence": "Handles crafting beyond Farkur’s expertise and asks for project requests to be left for completion.",
        "resource": "Specialist crafting, research, and borrowed mission equipment.",
        "receives": "Borrows shared equipment for jobs, including the Hazewind Cape, Puzzler’s Wit ring, and a Bag of Holding.",
        "evidence": "That phrase does not establish Farkur’s death. Ryvyt’s personal research is not automatically faction policy.",
        "source": "Knights record: 25 Jul 2025; 26 May–21 Aug 2026.",
        "article": "ryvyt",
        "x": 78,
        "y": 17
      },
      {
        "id": "tobias",
        "title": "Tobias",
        "subtitle": "Main member · builder & guide",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Main member · builder & guide",
        "history": "Tobias turns the proposed newcomer service into witnessed support, helping adventurers become more independent.",
        "consequence": "Provides Fredrick with safety, food, a map, lodging and employment guidance, escort, and help with money.",
        "resource": "Building work, local orientation, escort, and personal financial assistance.",
        "receives": "The Knights’ welcome system supplies an institutional setting for his practical assistance.",
        "evidence": "Tobias is missing again by 8 Dec 2025; the earlier absence and later outcome remain unknown.",
        "source": "Knights record: welcome system; main members; December 2025.",
        "article": "tobias",
        "x": 84,
        "y": 40
      },
      {
        "id": "ruben",
        "title": "Ruben",
        "subtitle": "Scout · operational representative",
        "category": "power",
        "strength": 2,
        "direction": "mutual",
        "relation": "Scout · operational representative",
        "history": "Ruben’s “Flight now, haul later” separates finding a resource from extracting and processing it.",
        "consequence": "Locates resources and explains how materials, paid labor, crafting, equipment, ships, and pooled money connect.",
        "resource": "Prospecting, maps, resource markings, and knowledge of the economic system.",
        "receives": "The wider organization can use preserved routes and transform discovered materials through its labor and supply network.",
        "evidence": "His operational role is established; complete rank and formal membership rules are not.",
        "source": "Knights record: late-2025 resources; 8 Dec 2025 economic system.",
        "article": "ale-chemy-knights",
        "x": 80,
        "y": 68
      },
      {
        "id": "anky",
        "title": "St. Anky",
        "subtitle": "Associate · religious intermediary",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Associate · religious intermediary",
        "history": "Anky is an important associate whose religious role belongs beside the cooperative’s practical work.",
        "consequence": "Appears in the Knights’ inner network and is known as their Saint.",
        "resource": "Religious mediation and close ties to the founder circle.",
        "receives": "Receives a place in the organization’s social and religious network; specific reciprocal material support is not recovered.",
        "evidence": "Exact formal membership or founder status is imprecise. The title Saint does not establish command authority.",
        "source": "docs/ALE_CHEMY_KNIGHTS_HISTORY.md: important associates.",
        "article": "st-anky",
        "x": 62,
        "y": 90
      },
      {
        "id": "pristinia",
        "title": "Pristinia & Eovar",
        "subtitle": "Public works · property & transport",
        "category": "politics",
        "strength": 2,
        "direction": "mutual",
        "relation": "Public works · property & transport",
        "history": "The collective votes to buy an Eovar tavern. Melian calls the Knights’ contributions invaluable; Severina connects their Eovar tower and wall works to public needs.",
        "consequence": "Public projects and customers give the cooperative work and places to invest its resources.",
        "resource": "Walls, towers, quarry work, tavern property, ships, and community labor.",
        "receives": "The Knights fund Pristinia fortifications, pay supervised newcomers, and supply infrastructure used in civic planning.",
        "evidence": "The full legal ownership of pooled assets and the durability of civic financial dependence remain unresolved.",
        "source": "Knights record: July property; public works; Apr–May 2026 civic power.",
        "article": "prima-pristinia",
        "x": 35,
        "y": 90
      },
      {
        "id": "gael",
        "title": "Gael market",
        "subtitle": "Reconstruction · skilled trade",
        "category": "politics",
        "strength": 2,
        "direction": "mutual",
        "relation": "Reconstruction · skilled trade",
        "history": "By 19 Sep 2026, the market exists; Marius contrasts it with the region’s earlier lack of economy.",
        "consequence": "Gael provides the setting in which the Knights’ reconstruction model becomes a working civic institution.",
        "resource": "An open-air market divided by skill set.",
        "receives": "The Knights establish a specialized market where an economy can develop around skilled work.",
        "evidence": "Marius’s comparison remains attributed. The market’s complete staffing and management are not recovered.",
        "source": "Knights record: Gael reconstruction; regional history, 19 Sep 2026.",
        "article": "gael",
        "x": 17,
        "y": 70
      },
      {
        "id": "gregory",
        "title": "Gregory Greenleaf",
        "subtitle": "Financing critic · accountability",
        "category": "conflict",
        "strength": 2,
        "direction": "mutual",
        "relation": "Financing critic · accountability",
        "history": "Ruben describes roughly ten percent of cost per mission, with ownership after a twelfth mission. Gregory challenges that arrangement.",
        "consequence": "Questions the effective cost of equipment financing and keeps the Knights’ claims of fairness open to challenge.",
        "resource": "Public ethical scrutiny of rental and financing terms.",
        "receives": "Receives an explanation of the proposed rental-to-ownership model; the record does not establish agreement.",
        "evidence": "Neither interpretation is an objective verdict. Gregory’s criticism is not evidence of membership or a permanent feud.",
        "source": "Knights record: 8 Dec 2025 economic system.",
        "article": "ale-chemy-knights",
        "x": 16,
        "y": 42
      },
      {
        "id": "veilguard",
        "title": "The Veilguard",
        "subtitle": "Separate faction · operational overlap",
        "category": "politics",
        "strength": 2,
        "direction": "mutual",
        "relation": "Separate faction · operational overlap",
        "history": "The two factions are explicitly separate even when people and operations overlap.",
        "consequence": "Offers a distinct protective network whose operations sometimes intersect with the Knights’ logistics.",
        "resource": "A protective company with shared recovery needs and inter-island ambitions.",
        "receives": "The Knights’ wider resources and contacts overlap with Veilguard operations; Ryvyt is a later operational link.",
        "evidence": "No merger, joint command, blanket alliance, or complete shared roster is established.",
        "source": "Veilguard record: people; open record; canon ruling, 3 Oct 2026.",
        "article": "veilguard",
        "x": 23,
        "y": 17
      }
    ],
    "insights": [
      {
        "label": "Main members",
        "value": "Farkur · Ryvyt · Tobias",
        "note": "Only Farkur and Ryvyt are established founders."
      },
      {
        "label": "Working system",
        "value": "Scout → craft → supply",
        "note": "Specialized labor and pooled assets connect practical needs."
      },
      {
        "label": "Civic result",
        "value": "Gael’s market",
        "note": "A confirmed reconstruction outcome by September 2026."
      },
      {
        "label": "Principal gap",
        "value": "Missing Knights",
        "note": "Absence is established; causes and outcomes are not."
      }
    ],
    "connections": [
      {
        "from": "farkur",
        "to": "ryvyt",
        "label": "Crafting referral and equipment loans"
      },
      {
        "from": "ruben",
        "to": "gregory",
        "label": "Financing explanation and ethical challenge",
        "mutual": true
      }
    ]
  },
  "veilguard": {
    "kind": "interaction",
    "title": "The Veilguard interaction map",
    "intro": "Select a person, institution, or resource to trace their role, what they contribute, what the faction provides in return, and the limits of the recovered record. This is a historical network, not a current attendance roster.",
    "center": {
      "title": "The Veilguard",
      "subtitle": "Protective company · entrusted leadership"
    },
    "filters": [
      {
        "id": "all",
        "label": "All interactions"
      },
      {
        "id": "bond",
        "label": "Members & participants"
      },
      {
        "id": "power",
        "label": "Resources & logistics"
      },
      {
        "id": "politics",
        "label": "Civic & faction links"
      }
    ],
    "nodes": [
      {
        "id": "severina",
        "title": "Lady Severina",
        "subtitle": "Selected leader · organizer",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Selected leader · organizer",
        "history": "On 14 Apr 2026, Severina receives the strongest support. By late May, the company is publicly named Veilguard.",
        "consequence": "Organizes roles and reserves, seeks inter-island mobility, and takes responsibility for bringing Thorn home.",
        "resource": "Adaptive command, personnel organization, recovery planning, and portable equipment.",
        "receives": "Receives peer confidence and leadership entrusted by Kasiri and Camilla in the April selection.",
        "evidence": "The naming day, complete charter, and command structure beneath Severina remain unrecovered.",
        "source": "Veilguard record: selection; name; doctrine; Thorn recovery.",
        "article": "lady-severina",
        "x": 50,
        "y": 8
      },
      {
        "id": "pelagia",
        "title": "Pelagia",
        "subtitle": "Founding participant · shared recovery",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Founding participant · shared recovery",
        "history": "Pelagia’s principle is “We love people and use items. Not the other way around.”",
        "consequence": "Defines worthy leadership and discusses gold, crafting, favors, and magical resources with Severina during Thorn’s loss.",
        "resource": "Leadership judgment and participation in pooled recovery resources.",
        "receives": "Works within a company that treats people as the purpose of shared equipment and resources.",
        "evidence": "Founding participation is established; a permanent rank or complete resource inventory is not.",
        "source": "Veilguard record: 14 Apr selection; Aug–Sep Thorn recovery.",
        "article": "veilguard",
        "x": 78,
        "y": 17
      },
      {
        "id": "thorn",
        "title": "Thorn",
        "subtitle": "Explicit member · mutual watchfulness",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Explicit member · mutual watchfulness",
        "history": "By 19 Sep, Thorn is alive in Prima, identifies as Veilguard, and feels obliged to return to Gael.",
        "consequence": "Challenges leadership that relies on speeches, then names mutual protection as the company’s lived culture.",
        "resource": "Field experience, critical judgment, and an explicit account of belonging.",
        "receives": "Receives a recovery commitment; Severina preserves and carries her body home after it is found on 6 Sep.",
        "evidence": "The mechanism of her return and the complete recovery company remain unresolved.",
        "source": "Veilguard record: selection; 27 Aug promise; 6–19 Sep recovery.",
        "article": "thorn",
        "x": 84,
        "y": 40
      },
      {
        "id": "camilla",
        "title": "Camilla Blackwood",
        "subtitle": "Founding participant · leadership judgment",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Founding participant · leadership judgment",
        "history": "Camilla’s support is part of the recovered selection, rather than evidence of an appointed rank.",
        "consequence": "Supports Severina for the ability to act without surrendering judgment to fear or sentiment.",
        "resource": "Judgment grounded in duty, discipline, and acting under pressure.",
        "receives": "Has a chosen leader whose authority begins in the confidence of her peers.",
        "evidence": "Her permanent position and later attendance are not established by the selection alone.",
        "source": "Veilguard record: 14 Apr 2026 leadership selection.",
        "article": "veilguard",
        "x": 80,
        "y": 68
      },
      {
        "id": "kasiri",
        "title": "Kasiri Ruza",
        "subtitle": "Founding participant · trust in judgment",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Founding participant · trust in judgment",
        "history": "Kasiri’s vote establishes authority through trust rather than a demand for blind obedience.",
        "consequence": "Chooses Severina because she trusts her judgment even when acting rightly might cost Kasiri.",
        "resource": "Peer assessment and trust that allows personal cost.",
        "receives": "Entrusts leadership while retaining the moral importance of independent judgment.",
        "evidence": "No permanent rank or complete later service record is established here.",
        "source": "Veilguard record: 14 Apr 2026 leadership selection.",
        "article": "veilguard",
        "x": 62,
        "y": 90
      },
      {
        "id": "modeli",
        "title": "Modeli",
        "subtitle": "Founding participant · care for lives",
        "category": "bond",
        "strength": 2,
        "direction": "mutual",
        "relation": "Founding participant · care for lives",
        "history": "Modeli is directly present in the recovered founding selection.",
        "consequence": "Participates in the selection and is praised for compassion and careful reasoning.",
        "resource": "Compassion, reasoning, and refusal to waste lives.",
        "receives": "Participates in a protective project where resources and leadership are meant to serve people.",
        "evidence": "No specialized operational assignment or permanent command role is recovered.",
        "source": "Veilguard record: founding participants; people.",
        "article": "veilguard",
        "x": 35,
        "y": 90
      },
      {
        "id": "knights",
        "title": "Ale-Chemy Knights",
        "subtitle": "Distinct faction · logistics contact",
        "category": "politics",
        "strength": 2,
        "direction": "mutual",
        "relation": "Distinct faction · logistics contact",
        "history": "Both factions remain separately identified in the public record.",
        "consequence": "Provides an overlapping operational network; Ryvyt appears among later Veilguard links.",
        "resource": "A wider cooperative network of crafting, supplies, property, and transport.",
        "receives": "The Veilguard supplies a distinct protective context for those overlapping contacts; exact reciprocal arrangements are not recovered.",
        "evidence": "An operational link does not prove that Ryvyt joined the Veilguard or that the companies share command.",
        "source": "Veilguard record: people and open record; 3 Oct canon ruling.",
        "article": "ale-chemy-knights",
        "x": 17,
        "y": 70
      },
      {
        "id": "gael",
        "title": "Gael",
        "subtitle": "Field of operations · Thorn’s return",
        "category": "politics",
        "strength": 2,
        "direction": "mutual",
        "relation": "Field of operations · Thorn’s return",
        "history": "Reports after Thorn’s death describe a cult intending a ritual against a Gael Shard.",
        "consequence": "Creates the regional conditions in which mutual protection and recovery are tested.",
        "resource": "Regional danger, husk hunts, and the need to bring companions home.",
        "receives": "Receives the company’s attention to danger; Thorn feels an obligation to return to Gael.",
        "evidence": "The full ritual outcome and the faction’s wider regional jurisdiction remain unknown.",
        "source": "Veilguard record: Thorn recovery; 19 Sep belonging.",
        "article": "gael",
        "x": 16,
        "y": 42
      },
      {
        "id": "equipment",
        "title": "Shared equipment",
        "subtitle": "Mobility · recovery resources",
        "category": "power",
        "strength": 2,
        "direction": "mutual",
        "relation": "Mobility · recovery resources",
        "history": "Severina seeks mobility equipment in May; later discussions with Pelagia put shared resources toward Thorn’s recovery.",
        "consequence": "Enables planned rapid travel and the shared effort to recover a fallen companion.",
        "resource": "Pooled gold, crafting, favors, and portable magical resources.",
        "receives": "The company seeks and pools resources, with the stated principle that items serve people.",
        "evidence": "Exact inventory, custody, spending rules, and equipment allocation are unresolved.",
        "source": "Veilguard record: May institution-building; Aug–Sep resource ethic.",
        "article": "veilguard",
        "x": 23,
        "y": 17
      }
    ],
    "insights": [
      {
        "label": "Entrusted leader",
        "value": "Severina",
        "note": "Kasiri and Camilla support her judgment in April 2026."
      },
      {
        "label": "Founding participants",
        "value": "Six named people",
        "note": "Participation at selection does not prove a permanent roster."
      },
      {
        "label": "Defining obligation",
        "value": "Bring people home",
        "note": "Thorn’s loss tests whether the company’s promises endure."
      },
      {
        "label": "Principal gap",
        "value": "Roster & resources",
        "note": "Ranks, equipment custody, and later membership remain incomplete."
      }
    ],
    "connections": [
      {
        "from": "kasiri",
        "to": "severina",
        "label": "Entrusts leadership"
      },
      {
        "from": "camilla",
        "to": "severina",
        "label": "Supports leadership"
      },
      {
        "from": "severina",
        "to": "thorn",
        "label": "Recovery promise and carrying home"
      },
      {
        "from": "pelagia",
        "to": "equipment",
        "label": "Shared recovery resource discussions"
      }
    ]
  }
};
