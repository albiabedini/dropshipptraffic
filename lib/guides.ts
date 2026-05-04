export type GuideSection = {
  heading: string;
  body: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  sections: GuideSection[];
  faq?: GuideFaq[];
  relatedWebsiteSlug?: string;
  meta: {
    title: string;
    description: string;
  };
};

export const guides: Guide[] = [
  {
    title: "How to Choose Products Online Safely: A Beginner Checklist",
    slug: "how-to-choose-products-online",
    category: "Product research",
    excerpt:
      "A beginner-friendly guide to evaluating product pages, checking details, reading feedback, spotting red flags, and deciding whether an unfamiliar website is clear enough to trust.",
    relatedWebsiteSlug: "northline-goods",
    meta: {
      title: "How to Choose Products Online Safely | Beginner Checklist",
      description:
        "Learn how to evaluate product pages online with a simple checklist for specs, policies, reviews, trust signals, and common red flags.",
    },
    sections: [
      {
        heading: "Start with the problem the product should solve",
        body: "Before comparing pages, write down what the product needs to do in plain language. Include practical limits such as size, compatibility, material, care needs, durability expectations, setup requirements, and any accessibility or safety concerns. This keeps research from turning into open-ended browsing. A clear need also helps you ignore impressive-looking details that do not matter for your situation. For example, a page may highlight a premium finish, but if the item will sit outside, weather resistance may matter more than appearance. Add deal breakers too, such as too large for the space, no visible care guidance, unclear fit information, or missing compatibility notes. Those limits make later comparisons calmer and less dependent on first impressions.",
      },
      {
        heading: "Read the full page, not just the headline",
        body: "Product pages are designed to be scanned, so the largest text is rarely the whole story. Read the description, specifications, sizing notes, warranty language, care instructions, included-parts list, and frequently asked questions before you trust the page. Check whether the same terms are used consistently. If a material, size, model number, or compatibility note changes from one area to another, slow down and verify. Strong pages make details easy to check; weak pages lean on vague claims and attractive images. Also notice what is not said. Missing dimensions, unclear included parts, no support path, or broad promises without examples can matter as much as the details that appear.",
      },
      {
        heading: "Compare measurable details side by side",
        body: "A practical product research checklist should include measurable details: dimensions, weight, capacity, included parts, setup requirements, cleaning instructions, warranty limits, support options, and any conditions that affect use. Put two or three options in a note and compare the same fields for each one. This removes some noise from photos and slogans. If one page gives exact measurements while another only says compact, lightweight, or durable, the more specific page is usually easier to evaluate. For beginners, consistency is the point: ask the same questions across every page instead of letting each website decide what you notice.",
      },
      {
        heading: "Use feedback as context, not as a final verdict",
        body: "Reviews and comments can help, but they are strongest when you look for patterns. Read recent feedback first, then scan for repeated comments about sizing, setup, support, durability, confusing instructions, or mismatched expectations. One angry comment or one glowing sentence should not decide the issue by itself. Look for specific examples: photos from real use, clear descriptions of what worked, and notes about whether support information matched the website. Thin, repetitive, or overly polished feedback deserves caution. A useful question is: does this feedback describe a real situation I can learn from, or is it only a reaction?",
      },
      {
        heading: "Check policies and support before relying on the site",
        body: "Trust is not only about the product description. Look for plain policy pages, contact options, privacy wording, warranty explanations, delivery estimates, issue-resolution steps, and instructions for handling problems. A website does not need to be fancy to be helpful, but it should answer basic questions without making you hunt. Red flags include missing contact details, copied policy text that does not match the site, unclear ownership, broken help links, and promises that sound too broad to verify. If the page asks you to rely on it, it should give you enough information to check later.",
      },
      {
        heading: "Save a short note about why a page passed your check",
        body: "If you are comparing several pages, write a one-sentence note about why each page seems clear or questionable. Examples: clear size chart, no visible support path, good care details, unclear warranty, helpful user photos, or policy wording needs review. These notes prevent you from restarting the same research later. They also make it easier to explain your reasoning to someone else. The goal is not to create a perfect research file; it is to make your decision process visible enough to review. A short note also protects you from memory bias, where the cleanest design feels more reliable simply because it was easier to read.",
      },
      {
        heading: "Use examples carefully and keep the final judgment yours",
        body: "A related website profile can be useful as a concrete example of how a product page presents details, policies, and explanations. Treat it as a reference point, not as a recommendation you must follow. The practical habit is to ask the same questions everywhere: What is included? What is missing? Who is responsible for support? What information can be verified? What should be checked on the original site? When you use the same checklist across websites, you become less dependent on design polish and more confident in your own research.",
      },
    ],
    faq: [
      {
        question: "What should I check first on a product page?",
        answer:
          "Start with the details that affect real use: dimensions, compatibility, materials, included parts, setup needs, and care instructions. Then check policies and support information before relying on the page.",
      },
      {
        question: "How do I know if a product page is clear enough?",
        answer:
          "A clear page answers likely follow-up questions without making you guess from photos. It uses specific measurements, consistent terms, plain policies, and visible contact or support paths.",
      },
      {
        question: "Are reviews always useful when evaluating a page?",
        answer:
          "Reviews are most useful when they describe specific situations. Look for repeated patterns in recent feedback instead of treating one extreme comment as the final answer.",
      },
      {
        question: "What are red flags on product information pages?",
        answer:
          "Common red flags include missing measurements, vague claims, copied policy text, broken help links, unclear ownership, and details that contradict other parts of the same page.",
      },
      {
        question: "Should I compare more than one website?",
        answer:
          "Yes. Comparing two or three pages often reveals missing details. Use the same checklist each time so the comparison is based on evidence, not just design or familiarity.",
      },
    ],
  },
  {
    title: "Online Browsing Mistakes Beginners Should Avoid",
    slug: "online-shopping-mistakes-to-avoid",
    category: "Online safety",
    excerpt:
      "A practical guide to common online browsing mistakes, including vague policies, rushed trust decisions, weak account habits, stale pages, and misleading product details.",
    relatedWebsiteSlug: "northline-goods",
    meta: {
      title: "Online Browsing Mistakes Beginners Should Avoid",
      description:
        "Learn common online browsing mistakes beginners make when reading product pages, checking policies, creating accounts, and evaluating website trust signals.",
    },
    sections: [
      {
        heading: "Mistake 1: Trusting the first clear-looking page",
        body: "A page can look organized and still leave important questions unanswered. Beginners often stop at the first website that seems readable, especially when the layout feels familiar. Instead, pause long enough to check the basics: who runs the site, what the page is explaining, when details were last updated, and where policies or support information live. A good first impression is useful, but it should start your evaluation rather than end it. If a second page answers the same question with clearer evidence, better examples, or more transparent ownership, the first page may not be the strongest source. Comparing two pages is often enough to reveal what the first one left out.",
      },
      {
        heading: "Mistake 2: Skipping the small details",
        body: "Small details often carry the practical meaning of a page. Measurements, compatibility notes, care instructions, material descriptions, image captions, update dates, and support links can change how useful a product or reference page really is. If you only read the headline and the first few bullets, you may miss limits that matter later. A simple habit helps: before trusting a page, find the exact details that would answer your main question without guessing from photos. When those details are missing, write that down instead of filling the gap with assumptions.",
      },
      {
        heading: "Mistake 3: Treating every review as equal",
        body: "Feedback is helpful when it contains context. It is less helpful when it is vague, old, repeated across pages, or disconnected from the specific item being discussed. Look for patterns across recent comments instead of reacting to the loudest opinion. Helpful feedback often explains the situation: how the item was used, what surprised the person, whether instructions were clear, and whether support information matched the website. This makes reviews part of your research rather than the whole answer. A useful question is: does this feedback describe a real situation I can learn from?",
      },
      {
        heading: "Mistake 4: Creating accounts too quickly",
        body: "Accounts can make websites easier to revisit, but they also create another place where personal information may sit. Before creating one, ask whether the account is needed for the task you are doing. Check for HTTPS, basic privacy wording, a reasonable password process, and a way to manage or close the account later. Use unique passwords and avoid reusing sensitive login details. A cautious account habit is one of the simplest online safety tips for beginners. If you only need to read a guide, compare information, or check a policy, an account may not be necessary yet.",
      },
      {
        heading: "Mistake 5: Ignoring policy and contact red flags",
        body: "Policy pages are easy to ignore until something goes wrong, but they are useful trust signals from the start. Look for contact methods, privacy explanations, issue-resolution wording, and support expectations. Red flags include empty policy pages, contact forms with no other identity, copied text with wrong names, broken links, and language that promises everything without explaining anything. Clear policies do not make a website perfect, but unclear policies make evaluation harder. If a page asks for personal information before explaining how it is handled, slow down and look for more context.",
      },
      {
        heading: "Mistake 6: Forgetting that pages can go stale",
        body: "A page that was useful last year may not be accurate now. Product details, availability notes, support hours, policies, screenshots, and external references can all change. Beginners often bookmark a page and assume it will stay dependable forever. Instead, glance at update dates, version notes, recent comments, and whether internal links still work. If a page covers safety, compatibility, rules, or anything time-sensitive, cross-check against current source material before relying on it. Stale pages are not always wrong, but they need extra verification.",
      },
      {
        heading: "A simple mistake-avoidance checklist",
        body: "Before you trust an unfamiliar product or reference page, run through a short checklist: Can I identify who is behind the site? Are the details specific? Do the policies answer obvious questions? Are reviews or comments recent and useful? Does the page ask for more information than the task requires? Are there broken links or vague claims? Can I verify the key point elsewhere? This checklist keeps the process calm. It also turns online browsing into a repeatable skill instead of a series of quick guesses. Over time, you will notice patterns faster because you have practiced looking for the same signals.",
      },
    ],
    faq: [
      {
        question: "What is the most common mistake beginners make online?",
        answer:
          "A common mistake is trusting a page because it looks polished. Design helps readability, but it does not replace clear ownership, specific details, current information, and visible policies.",
      },
      {
        question: "How can I avoid misleading websites?",
        answer:
          "Read beyond the headline, check who is responsible for the content, look for source links or policy pages, and compare important claims with another reliable source.",
      },
      {
        question: "Is it risky to create accounts on unfamiliar websites?",
        answer:
          "It can be. Create accounts only when they are needed, use unique passwords, check privacy wording, and make sure there is a way to manage account details later.",
      },
      {
        question: "How do I spot stale information?",
        answer:
          "Look for old update dates, broken internal links, outdated screenshots, old comments, or instructions that no longer match the current website layout.",
      },
      {
        question: "What should I do when a page feels unclear?",
        answer:
          "Pause and compare it with another source. If the same question is answered more clearly elsewhere, use that clearer page as your main reference.",
      },
    ],
  },
  {
    title: "How to Compare Websites Before Trusting Them",
    slug: "how-to-compare-online-stores",
    category: "Discovery",
    excerpt:
      "A beginner guide to comparing websites using transparency, source quality, policy clarity, support signals, update habits, and common trust red flags.",
    relatedWebsiteSlug: "northline-goods",
    meta: {
      title: "How to Compare Websites Before Trusting Them",
      description:
        "Use this beginner website trust checklist to compare transparency, policies, source quality, support signals, and red flags before relying on a site.",
    },
    sections: [
      {
        heading: "Decide what kind of trust you need",
        body: "Not every website needs the same level of scrutiny. Reading a casual idea list is different from relying on a page for health, finance, safety, identity, or technical decisions. Start by naming the risk: What could go wrong if this information is incomplete or outdated? A low-risk page may only need a quick scan for clarity. A higher-risk page deserves source checks, update dates, author information, and confirmation from official or primary references. This first step keeps you from over-checking harmless pages while under-checking pages that can affect important choices. It also gives beginners permission to be practical: the amount of checking should match the consequence of being wrong.",
      },
      {
        heading: "Compare identity and accountability",
        body: "A trustworthy website usually makes it easy to understand who is responsible for the content. Look for an about page, contact information, author or organization names, editorial notes, and signs that the same identity appears consistently across the site. Be cautious when a website hides ownership, uses generic names, or gives no way to ask questions. Accountability does not guarantee accuracy, but it gives readers something concrete to evaluate. If two sites explain the same topic, the one with clearer responsibility is often easier to verify. If neither site explains who stands behind the content, look for a stronger source.",
      },
      {
        heading: "Look at how the site explains its information",
        body: "Strong informational pages show their reasoning. They define terms, explain tradeoffs, link to sources, and separate facts from opinions. Thin pages often repeat broad claims without examples or context. When comparing two websites, ask which one helps you understand the topic well enough to explain it later. The clearer page is not always the longest one; it is the one that answers likely follow-up questions without hiding the reasoning. Examples, definitions, diagrams, and source links are all signs that the page is trying to teach rather than simply persuade.",
      },
      {
        heading: "Check policies, privacy wording, and support paths",
        body: "Policies are not only for legal pages. They reveal how carefully a website handles readers, accounts, data, questions, and problems. Compare whether privacy wording is specific, contact options are realistic, help pages are current, and terms are written for actual humans. Red flags include missing policies, broken contact links, mismatched organization names, or language that seems copied from somewhere else without being adapted to the site. If the site invites you to share information, download files, or create an account, policy clarity matters even more.",
      },
      {
        heading: "Scan for freshness and maintenance signals",
        body: "Useful websites need upkeep. Check publication dates, update notes, working links, current screenshots, active help pages, and whether old information is corrected or archived. A page can still be useful without a recent date, especially for evergreen topics, but stale signals matter when details change often. If a site discusses tools, rules, safety, or technical steps, freshness becomes part of the trust checklist. Broken internal links, outdated screenshots, and unanswered comments can suggest the page is no longer maintained. A maintained site usually makes updates easier to see.",
      },
      {
        heading: "Use red flags as prompts, not instant verdicts",
        body: "One red flag does not always mean a website is useless. A small personal site may have limited design but excellent citations. A polished site may have weak sourcing. Treat red flags as prompts for more questions: Why is this missing? Can I verify it elsewhere? Is the page asking me to act before explaining enough? Common red flags include exaggerated claims, vague authorship, aggressive popups, copied wording, and unsupported comparisons. The most important pattern is accumulation. Several small red flags on the same page usually matter more than one harmless imperfection.",
      },
      {
        heading: "Build a simple comparison routine",
        body: "When you compare websites, use the same routine each time: identify the purpose, check who runs it, read the evidence, scan policies, look for update signals, and note any red flags. Then write a short conclusion such as useful for definitions, good for examples, unclear on sources, or needs official confirmation. This routine makes web research less emotional and more repeatable, which is especially helpful for beginners. It also gives you a record of why one source seemed stronger than another. If you return later, that note saves time and helps you decide whether the source still fits the question.",
      },
    ],
    faq: [
      {
        question: "How do I know if a website is trustworthy?",
        answer:
          "Look for clear ownership, specific explanations, current pages, working links, realistic policies, and source material. A trustworthy website usually makes verification easier.",
      },
      {
        question: "What are website red flags for beginners?",
        answer:
          "Red flags include vague authorship, broken links, copied policy text, exaggerated claims, aggressive prompts, missing contact details, and important claims with no source.",
      },
      {
        question: "Should I trust a website with no update date?",
        answer:
          "It depends on the topic. Evergreen explanations may still be fine, but safety, technical, legal, or fast-changing topics need stronger freshness signals.",
      },
      {
        question: "Is a polished design a trust signal?",
        answer:
          "It can help readability, but it is not enough. A polished page still needs clear responsibility, evidence, maintenance, and practical support information.",
      },
      {
        question: "What is the quickest website comparison method?",
        answer:
          "Compare purpose, ownership, evidence, policy clarity, update signals, and red flags. A short note for each site is usually enough for everyday research.",
      },
    ],
  },
  {
    title: "How to Find Useful Websites: A Beginner Framework",
    slug: "beginner-guide-finding-useful-websites",
    category: "Discovery",
    excerpt:
      "Learn simple ways to find useful websites, search with clearer intent, judge source quality, organize bookmarks, and avoid common discovery mistakes.",
    relatedWebsiteSlug: "atlas-reference-library",
    meta: {
      title: "How to Find Useful Websites | Beginner Discovery Guide",
      description:
        "A beginner guide to finding useful websites with better searches, source checks, bookmark habits, examples, and practical discovery tips.",
    },
    sections: [
      {
        heading: "Start by naming the task, not the website",
        body: "Many people search for a website before they have named what they need from it. Start with the task instead: learn a concept, compare definitions, fix a small problem, find examples, make a checklist, or understand a process. This changes the search from vague browsing to purposeful discovery. A query like how to evaluate a source for a school project is usually stronger than useful websites because it describes the outcome you want. Once the task is clear, you can judge results by usefulness instead of popularity alone. Write the task as a question if that helps: What do I need to understand next?",
      },
      {
        heading: "Use search phrases that reveal intent",
        body: "Useful websites often appear when your search includes informational words such as how to, beginner guide, checklist, examples, mistakes, tips, explained, template, glossary, or step by step. These phrases tell search engines that you want help understanding something, not just a homepage. Try combining the topic with the format you need: spreadsheet checklist, website trust red flags, simple explanation, or examples for beginners. If results are too broad, add words like for students, for beginners, plain English, official source, or printable checklist. The goal is to make your question more precise, not longer for its own sake.",
      },
      {
        heading: "Look beyond the first familiar result",
        body: "The first result is not always the most useful result for your situation. Open several pages and compare how each one explains the topic. Some pages are good for definitions, others for examples, tools, templates, or deeper references. A useful discovery habit is to ask: What does this page do well? You may keep one site for quick explanations and another for source material. That is more realistic than expecting one website to solve every question. This also helps you avoid mistaking ranking position for reliability or confusing familiarity with quality.",
      },
      {
        heading: "Favor websites that show structure",
        body: "A helpful website makes it easier to orient yourself. Look for clear headings, internal links, categories, summaries, examples, update notes, and pages that connect related topics. Structure matters because it helps you continue learning after the first answer. If a site has a guide library, glossary, templates, or organized topic paths, it may be easier to revisit. Atlas-style reference sites are one example of how structured content can make independent research less scattered. Good structure is especially helpful when you are new to a subject and do not know the vocabulary yet.",
      },
      {
        heading: "Test unfamiliar websites with low-risk actions",
        body: "When a website is new to you, start with reading, comparing, using public resources when appropriate, or trying a simple feature that does not require sensitive information. Delay accounts, personal data, and important decisions until the site passes basic checks: HTTPS, clear identity, privacy wording, working links, and a reasonable reputation elsewhere. This beginner safety habit lets you explore widely without treating every discovery as equally trustworthy. If a site pressures you to move faster than you intended, treat that pressure as another signal to pause and compare.",
      },
      {
        heading: "Organize bookmarks so they stay useful",
        body: "A long list of unlabeled bookmarks becomes a junk drawer. Use short folders or tags based on tasks: learning, tools, official sources, templates, examples, or research leads. Add a one-line note when a bookmark is not obvious, such as good glossary, clear checklist, official documentation, or useful examples. These tiny labels help your future self remember why the site mattered and whether it should still be trusted. If a link has no clear purpose, it probably does not need to stay in the list. You can also mark links as read, test later, or primary source so your next visit starts with context.",
      },
      {
        heading: "Refresh your discovery list regularly",
        body: "Useful websites can change direction, stop updating, move pages, or become less relevant to your needs. Every so often, remove duplicates, fix broken bookmarks, and replace weak resources with stronger ones. Keep the list small enough that you actually use it. The goal of website discovery is not to collect endless links; it is to build a practical set of sources that help you answer questions with less friction. A short monthly review is enough for most people: remove what no longer helps and keep what still clearly earns its place.",
      },
    ],
    faq: [
      {
        question: "How do I find useful websites faster?",
        answer:
          "Search by task and format. Add terms such as checklist, examples, beginner guide, glossary, or step by step so results match the kind of help you need.",
      },
      {
        question: "What makes a website worth bookmarking?",
        answer:
          "A bookmark-worthy website answers a recurring question, explains its topic clearly, stays maintained, and is easy to understand when you return later.",
      },
      {
        question: "Should I keep every helpful link?",
        answer:
          "No. Keep links that serve a clear purpose. A smaller set of labeled bookmarks is easier to use than a large list of forgotten pages.",
      },
      {
        question: "How can I tell if a discovery site is reliable?",
        answer:
          "Check who runs it, how it explains sources, whether links work, whether pages are current, and whether the site separates explanation from opinion.",
      },
      {
        question: "What should I do with unfamiliar websites?",
        answer:
          "Start with low-risk reading and comparison. Delay accounts or sensitive information until the site passes basic safety and identity checks.",
      },
    ],
  },
  {
    title: "Useful Website Categories Worth Bookmarking",
    slug: "useful-websites-worth-checking",
    category: "Roundups",
    excerpt:
      "A beginner-friendly overview of useful website categories, including learning paths, reference libraries, tools, research aids, templates, and safety check resources.",
    relatedWebsiteSlug: "atlas-reference-library",
    meta: {
      title: "Useful Website Categories Worth Bookmarking",
      description:
        "Explore useful website categories for beginners, including learning resources, reference libraries, tools, research aids, templates, and safety checklists.",
    },
    sections: [
      {
        heading: "Learning paths and beginner guides",
        body: "Learning websites are most helpful when they offer sequence, not just scattered posts. Look for beginner paths, prerequisites, glossaries, examples, practice tasks, and summaries that help you understand what to read next. A strong learning site does not assume you already know the vocabulary. It explains terms, links related ideas, and makes progress feel manageable. This category is useful for skills, hobbies, software basics, language learning, and any topic where sequence matters. Good learning pages also tell you what to ignore at first, which keeps beginners from getting buried in advanced details too early.",
      },
      {
        heading: "Reference libraries and explainers",
        body: "Reference websites help when you need a clear answer, definition, template, or explanation you can revisit. Good reference libraries show update dates, organize topics by category, and link to deeper source material when the subject is complex. They are especially helpful for independent research because you can move from a basic explanation to supporting details at your own pace. A library-style profile can also show how structured content reduces search fatigue. Keep reference links separate from casual reading links so they are easy to find when accuracy matters. If a reference page explains both the short answer and the reasoning behind it, it is more helpful than a bare definition.",
      },
      {
        heading: "Lightweight tools and calculators",
        body: "Some useful websites are not article libraries at all. They are small tools: calculators, converters, planners, timers, text utilities, accessibility checkers, map tools, or formatting helpers. The best lightweight tools solve one task clearly and explain any assumptions. Before depending on a tool, check whether it stores data, whether results can be exported, and whether the method is explained. A simple tool is most trustworthy when its limits are visible. If the result affects something important, compare it with another source instead of treating one tool as final.",
      },
      {
        heading: "Research aids and source finders",
        body: "Research websites help you find documents, compare definitions, trace citations, or locate official sources. Examples include public databases, library search tools, government portals, academic indexes, standards pages, and topic-specific directories. These sites may feel less polished than consumer websites, but they often point closer to original information. When using them, save the source link and note what question it answered so you can verify it again later. A good research aid is not always easy, but it should make the trail of information clearer and easier to retrace.",
      },
      {
        heading: "Templates, checklists, and examples",
        body: "Templates and checklists are helpful when you need a starting structure. Look for pages that explain how to use the template, who it is for, and what should be changed for different situations. Examples are helpful when they show reasoning, not just finished output. A good checklist makes a task easier to repeat: website trust checks, research planning, project planning, document review, accessibility review, or personal organization. Save the blank version and one filled example when possible; together they teach both format and judgment.",
      },
      {
        heading: "Online safety and trust-check resources",
        body: "Safety resources deserve their own bookmark category. Helpful pages may explain password habits, privacy settings, scam warning signs, source evaluation, browser security, or how to report suspicious activity. Favor sources that keep advice current and separate simple everyday tips from high-risk situations that require official guidance. For beginners, this category is less about fear and more about having a reliable place to check basic web safety questions. Label these bookmarks clearly so they are easy to reopen when something feels suspicious.",
      },
      {
        heading: "Keep the list useful instead of large",
        body: "A bookmark list should support your actual questions. Keep one or two strong examples in each category and remove links that are outdated, confusing, or rarely used. Add short labels like official, beginner guide, examples, calculator, template, or trust checklist. This turns a list of websites into a working research toolkit. The most helpful website collection is not the longest one; it is the one you can reopen and understand quickly. Review the list every few months so weak links do not crowd out the pages that still help. When a bookmark no longer has a clear job, archive it or remove it. Keep notes short so the list remains easy to scan.",
      },
    ],
    faq: [
      {
        question: "What types of websites are worth bookmarking?",
        answer:
          "Good categories include learning paths, reference libraries, small tools, research aids, templates, examples, and web safety resources.",
      },
      {
        question: "How many websites should I keep in each category?",
        answer:
          "Keep only a few strong examples. One reliable reference, one practical tool, and one deeper source are often more helpful than a long unsorted list.",
      },
      {
        question: "How do I decide if a website stays on my list?",
        answer:
          "Ask whether it still answers a real question, whether links work, whether the page is clear, and whether you understand why you saved it.",
      },
      {
        question: "Are tools and calculators safe to use?",
        answer:
          "Many are fine for simple tasks, but check whether the tool explains its method, stores information, or asks for details the task does not require.",
      },
      {
        question: "Why separate safety resources from other bookmarks?",
        answer:
          "Safety links are easiest to use when they are easy to find. A clear label helps you reopen them quickly when something looks suspicious.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getLatestGuides(count: number): Guide[] {
  return guides.slice(0, count);
}

export function getGuideCategories(): string[] {
  return [...new Set(guides.map((g) => g.category))];
}
