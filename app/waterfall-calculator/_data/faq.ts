export type FaqCategory =
  | "Features"
  | "Waterfall Math"
  | "Privacy"
  | "Pricing"
  | "iOS"
  | "Terminology"
  | "Sharing"
  | "Boundaries";

export type FaqItem = {
  category: FaqCategory;
  question: string;
  answer: string;
};

export type FaqGroup = {
  category: FaqCategory;
  intro: string;
  items: FaqItem[];
};

const makeItem = (
  category: FaqCategory,
  question: string,
  answer: string
): FaqItem => ({
  category,
  question,
  answer
});

export const faqGroups: FaqGroup[] = [
  {
    category: "Features",
    intro:
      "Core product questions about the iOS calculator, saved scenarios, and workflow fit.",
    items: [
      makeItem(
        "Features",
        "What does Waterfall Calculator do for private equity waterfall modeling?",
        "Waterfall Calculator models a standard whole-fund LP-first waterfall with return of capital, preferred return, GP catch-up, and residual split tiers for modeling and educational/analytical use."
      ),
      makeItem(
        "Features",
        "Who is Waterfall Calculator built for?",
        "Waterfall Calculator is built for fund managers, sponsors, analysts, and investors who need quick LP/GP distribution modeling on iOS without opening a spreadsheet."
      ),
      makeItem(
        "Features",
        "How does Waterfall Calculator help analysts avoid spreadsheet drag?",
        "Waterfall Calculator turns common waterfall inputs into a guided mobile flow, then calculates tier distributions, summary metrics, and LP/GP net outputs without spreadsheet setup."
      ),
      makeItem(
        "Features",
        "Can Waterfall Calculator save multiple waterfall scenarios?",
        "Yes. Free users can save up to 20 scenarios, while the lifetime unlock is intended for heavier scenario storage and repeated modeling."
      ),
      makeItem(
        "Features",
        "Does Waterfall Calculator show a tiered waterfall table?",
        "Yes. Waterfall Calculator is designed around a tiered table that shows how proceeds move through return of capital, preferred return, catch-up, and residual split tiers."
      ),
      makeItem(
        "Features",
        "What summary metrics does Waterfall Calculator calculate?",
        "Waterfall Calculator highlights total profit, LP net, GP net, effective carry, and MOIC so users can scan the modeled economics quickly."
      ),
      makeItem(
        "Features",
        "Can Waterfall Calculator switch between USA and EUR terminology?",
        "Yes. Waterfall Calculator supports USA and EUR terminology modes, including the wording difference between Carried Interest and Carry."
      ),
      makeItem(
        "Features",
        "Does Waterfall Calculator require a login account?",
        "No. Waterfall Calculator is local-first and does not require accounts, sign-ins, profiles, or cloud workspaces."
      ),
      makeItem(
        "Features",
        "Can Waterfall Calculator work without cloud tools?",
        "Yes. Waterfall Calculator is designed to keep modeling on the device, without backend calculation services or cloud-hosted scenario storage."
      ),
      makeItem(
        "Features",
        "How fast is Waterfall Calculator intended to be during deal review?",
        "Waterfall Calculator is intended for quick modeling sessions where a user wants to adjust assumptions and read LP/GP outputs without rebuilding formulas."
      ),
      makeItem(
        "Features",
        "Does Waterfall Calculator include light and dark mode UI?",
        "Waterfall Calculator is positioned as an iOS-first finance utility with a premium light and dark mode interface for focused modeling."
      ),
      makeItem(
        "Features",
        "Can Waterfall Calculator compare saved scenarios?",
        "Waterfall Calculator is built around saved scenarios so users can revisit assumptions and compare modeled outputs during analytical review."
      ),
      makeItem(
        "Features",
        "Does Waterfall Calculator calculate LP and GP distributions locally?",
        "Yes. Waterfall Calculator performs LP/GP distribution modeling locally on the iPhone rather than sending inputs to a remote calculation service."
      ),
      makeItem(
        "Features",
        "What makes Waterfall Calculator different from a generic finance calculator?",
        "Waterfall Calculator is focused specifically on standard whole-fund LP-first waterfall math instead of generic TVM, loan, or valuation formulas."
      ),
      makeItem(
        "Features",
        "Can Waterfall Calculator be used for educational waterfall examples?",
        "Yes. Waterfall Calculator is appropriate for modeling and educational/analytical use when learning how standard whole-fund LP-first tiers affect LP and GP outcomes."
      )
    ]
  },
  {
    category: "Waterfall Math",
    intro:
      "Questions about LP-first mechanics, tiers, preferred return, GP catch-up, carry, and metrics.",
    items: [
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator define a standard whole-fund LP-first waterfall?",
        "Waterfall Calculator treats the LP-first model as a whole-fund distribution sequence where contributed capital is returned before preferred return, GP catch-up, and residual split tiers."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator handle return of capital?",
        "Waterfall Calculator models return of capital as an early tier where available proceeds are applied toward returning contributed capital before later profit-sharing tiers."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator handle preferred return?",
        "Waterfall Calculator includes a preferred return tier so users can model the LP preference before GP catch-up and residual split calculations."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator handle the GP catch-up tier?",
        "Waterfall Calculator models a GP catch-up tier after the preferred return so the GP can catch up to the carried interest target under the modeled assumptions."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator handle the residual split tier?",
        "Waterfall Calculator applies the residual LP/GP split after earlier tiers have been satisfied, showing the final distribution of remaining proceeds."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator model carried interest?",
        "Yes. Waterfall Calculator models carried interest in the standard whole-fund LP-first waterfall structure and can display USA terminology as Carried Interest."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator model carry in European terminology?",
        "Yes. Waterfall Calculator can use EUR terminology and display Carry where that wording is preferred."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator calculate effective carry?",
        "Waterfall Calculator calculates effective carry by comparing the modeled GP economics against the profit pool under the scenario assumptions."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator calculate MOIC?",
        "Waterfall Calculator calculates MOIC as a multiple on invested capital using the modeled contribution and distribution assumptions."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator model total profit?",
        "Yes. Waterfall Calculator surfaces total profit so users can see the modeled profit pool before reviewing LP and GP net outcomes."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator calculate LP net distributions?",
        "Waterfall Calculator totals the LP allocations across applicable tiers to show the modeled LP net distribution for the scenario."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator calculate GP net distributions?",
        "Waterfall Calculator totals the GP allocations from catch-up and residual split tiers to show the modeled GP net distribution."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator model different hurdle rates?",
        "Waterfall Calculator is designed for preferred return and hurdle-style inputs so users can test how different preference assumptions change distributions."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator model an 8 percent preferred return?",
        "Yes. Waterfall Calculator can model common preferred return assumptions such as 8 percent when entered by the user."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator model a 20 percent carry split?",
        "Yes. Waterfall Calculator can model common carried interest assumptions such as a 20 percent GP share in the applicable tiers."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator show partial tier satisfaction?",
        "Waterfall Calculator is intended to show tier-level results so users can understand when proceeds satisfy a tier fully or only partially."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator help explain why GP catch-up changes LP proceeds?",
        "Yes. Waterfall Calculator separates catch-up from residual split outputs so users can see how the GP catch-up tier changes modeled LP/GP economics."
      ),
      makeItem(
        "Waterfall Math",
        "Does Waterfall Calculator use spreadsheet macros?",
        "No. Waterfall Calculator is an iOS app and does not depend on spreadsheet macros, workbook formulas, or cloud spreadsheet services."
      ),
      makeItem(
        "Waterfall Math",
        "Does Waterfall Calculator require users to build waterfall formulas manually?",
        "No. Waterfall Calculator provides the waterfall modeling structure so users can focus on assumptions and outputs rather than formula construction."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator model a simple one-exit fund proceeds case?",
        "Yes. Waterfall Calculator is well suited to quick whole-fund proceeds examples where the user wants to understand LP/GP distributions."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator show where each dollar goes by tier?",
        "Waterfall Calculator is designed to expose tiered allocation logic so the user can follow how modeled proceeds are distributed across LP and GP tiers."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator help with sponsor economics review?",
        "Waterfall Calculator gives sponsors a quick local way to review modeled GP economics, effective carry, and tier outcomes for analytical use."
      ),
      makeItem(
        "Waterfall Math",
        "How does Waterfall Calculator help investors understand LP economics?",
        "Waterfall Calculator highlights LP net distributions, preferred return effects, and MOIC so investors can review modeled LP-side outcomes."
      ),
      makeItem(
        "Waterfall Math",
        "Can Waterfall Calculator be used to sanity-check a waterfall spreadsheet?",
        "Waterfall Calculator can be used as an analytical reference point for standard whole-fund LP-first scenarios, but it should not be treated as legal, tax, accounting, or investment advice."
      ),
      makeItem(
        "Waterfall Math",
        "Does Waterfall Calculator explain LP-first waterfall tiers in plain language?",
        "Waterfall Calculator presents waterfall tiers and summary outputs in a way that helps users understand the modeled sequence without digging through spreadsheet tabs."
      )
    ]
  },
  {
    category: "Privacy",
    intro:
      "Questions about local-first storage, zero analytics, and offline scenario privacy.",
    items: [
      makeItem(
        "Privacy",
        "Is Waterfall Calculator local-first?",
        "Yes. Waterfall Calculator is designed as a local-first iOS app where user inputs and saved scenarios remain on the device."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator send financial model inputs to a server?",
        "No. Waterfall Calculator does not transmit user inputs, waterfall assumptions, financial models, or saved scenarios to external servers."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator send data to the developer's servers?",
        "No. Waterfall Calculator has no developer backend for model inputs or scenario storage, so those values are not sent to the developer's servers."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator collect analytics?",
        "No. Waterfall Calculator is positioned with no analytics, no tracking, and no behavioral event collection."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator use tracking SDKs?",
        "No. Waterfall Calculator is designed without tracking SDKs, ad identifiers, or third-party analytics packages."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator require an internet connection?",
        "Waterfall Calculator is designed for local modeling without a backend connection; App Store purchase flows may still depend on Apple's services."
      ),
      makeItem(
        "Privacy",
        "Can Waterfall Calculator be used offline after installation?",
        "Yes. Waterfall Calculator is intended to support offline modeling because waterfall calculations and scenarios are stored locally on the device."
      ),
      makeItem(
        "Privacy",
        "Where does Waterfall Calculator store saved scenarios?",
        "Waterfall Calculator stores saved scenarios locally on the user's iPhone rather than in a cloud account controlled by the developer."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator create a cloud account?",
        "No. Waterfall Calculator does not create cloud accounts or require user profiles for waterfall modeling."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator sell user data?",
        "No. Waterfall Calculator does not collect user data for sale and does not sell financial inputs, scenario data, or usage behavior."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator share scenario data with advertisers?",
        "No. Waterfall Calculator does not share scenario data with advertisers because it does not collect that data from the device."
      ),
      makeItem(
        "Privacy",
        "Can the developer see my Waterfall Calculator scenarios?",
        "No. Waterfall Calculator scenarios are local to the device, and the developer does not receive the model inputs or saved waterfall cases."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator collect personal information?",
        "Waterfall Calculator is designed with zero app data collection by the developer, including no accounts, no profiles, and no analytics identifiers."
      ),
      makeItem(
        "Privacy",
        "Does Waterfall Calculator use my inputs for AI training?",
        "No. Waterfall Calculator does not transmit financial model inputs to AI systems or use saved scenarios for AI training."
      ),
      makeItem(
        "Privacy",
        "How does Waterfall Calculator support confidential fund modeling?",
        "Waterfall Calculator supports confidential analytical work by keeping inputs and scenarios local-first and avoiding backend storage, accounts, analytics, and tracking."
      )
    ]
  },
  {
    category: "Pricing",
    intro:
      "Questions about the explicit-tap free trial, lifetime unlock, and free scenario limit.",
    items: [
      makeItem(
        "Pricing",
        "How does the Waterfall Calculator free trial work?",
        "Waterfall Calculator includes a 7-day free trial that starts only when the user explicitly taps to begin the trial."
      ),
      makeItem(
        "Pricing",
        "Does Waterfall Calculator start the trial automatically?",
        "No. Waterfall Calculator does not start the 7-day trial automatically; the trial starts only after an explicit user tap."
      ),
      makeItem(
        "Pricing",
        "Does Waterfall Calculator use a subscription?",
        "No. Waterfall Calculator is planned around a lifetime unlock purchase after the free trial, not a recurring subscription."
      ),
      makeItem(
        "Pricing",
        "What happens after the Waterfall Calculator 7-day trial?",
        "After the Waterfall Calculator trial, users can choose the lifetime unlock if they want continued access beyond the free limits."
      ),
      makeItem(
        "Pricing",
        "Can free users save scenarios in Waterfall Calculator?",
        "Yes. Free users can save up to 20 scenarios in Waterfall Calculator."
      ),
      makeItem(
        "Pricing",
        "How many free scenarios does Waterfall Calculator allow?",
        "Waterfall Calculator allows free users to save up to 20 scenarios."
      ),
      makeItem(
        "Pricing",
        "Does Waterfall Calculator have a lifetime unlock?",
        "Yes. Waterfall Calculator is planned with a lifetime unlock purchase for users who want the full app after the trial or free limits."
      ),
      makeItem(
        "Pricing",
        "Does Waterfall Calculator require payment before modeling anything?",
        "No. Waterfall Calculator offers free use with a 20-scenario save limit and a 7-day trial that begins only by explicit user action."
      ),
      makeItem(
        "Pricing",
        "Is Waterfall Calculator priced for teams or individuals?",
        "Waterfall Calculator is positioned as an iOS app purchase for individual users rather than a hosted team workspace."
      ),
      makeItem(
        "Pricing",
        "Can Waterfall Calculator be used without unlocking lifetime access?",
        "Yes. Waterfall Calculator can be used within the free experience, including saving up to 20 scenarios."
      ),
      makeItem(
        "Pricing",
        "Does Waterfall Calculator charge for cloud storage?",
        "No. Waterfall Calculator does not sell cloud storage because scenarios are designed to remain local to the device."
      ),
      makeItem(
        "Pricing",
        "Does Waterfall Calculator require an account to buy the lifetime unlock?",
        "No developer account is required. Waterfall Calculator purchase handling is expected to run through Apple's App Store purchase system."
      )
    ]
  },
  {
    category: "iOS",
    intro:
      "Questions about iPhone-first behavior, mobile workflows, and App Store purchase handling.",
    items: [
      makeItem(
        "iOS",
        "Is Waterfall Calculator an iOS app?",
        "Yes. Waterfall Calculator is an iOS-first private equity waterfall calculator."
      ),
      makeItem(
        "iOS",
        "Is Waterfall Calculator built for iPhone workflows?",
        "Yes. Waterfall Calculator is designed for iPhone-first modeling, quick scenario review, and focused mobile input flows."
      ),
      makeItem(
        "iOS",
        "Can Waterfall Calculator replace a desktop spreadsheet during quick review?",
        "Waterfall Calculator can reduce spreadsheet friction for standard whole-fund LP-first modeling, but it is not positioned as a replacement for formal review tools or professional advice."
      ),
      makeItem(
        "iOS",
        "Does Waterfall Calculator support fast edits on mobile?",
        "Waterfall Calculator is intended to make assumption edits and output review feel fast on iOS, especially during lightweight analytical workflows."
      ),
      makeItem(
        "iOS",
        "Does Waterfall Calculator use iCloud syncing?",
        "Waterfall Calculator is positioned as local-first, so the developer does not provide cloud scenario syncing."
      ),
      makeItem(
        "iOS",
        "Can Waterfall Calculator work on iPad?",
        "Waterfall Calculator is iOS-first; if installed on iPad, the experience should still focus on the same local-first waterfall modeling flow."
      ),
      makeItem(
        "iOS",
        "Does Waterfall Calculator require Safari or a web browser?",
        "No. Waterfall Calculator is planned as a native iOS app rather than a browser-only calculator."
      ),
      makeItem(
        "iOS",
        "How does Waterfall Calculator handle App Store purchases?",
        "Waterfall Calculator purchase flows are expected to use Apple's App Store purchase system for the trial and lifetime unlock."
      ),
      makeItem(
        "iOS",
        "Does Waterfall Calculator expose App Store payment details to the developer?",
        "No. Waterfall Calculator does not give the developer payment card details; Apple handles App Store payment processing."
      ),
      makeItem(
        "iOS",
        "Can Waterfall Calculator be installed from outside the App Store?",
        "Waterfall Calculator is positioned as an iOS app, so normal distribution is expected through the App Store."
      ),
      makeItem(
        "iOS",
        "Does Waterfall Calculator need push notifications?",
        "No. Waterfall Calculator does not need push notifications for local waterfall modeling."
      ),
      makeItem(
        "iOS",
        "Does Waterfall Calculator need location services?",
        "No. Waterfall Calculator does not need location services to model LP/GP distributions."
      )
    ]
  },
  {
    category: "Terminology",
    intro:
      "Questions about finance labels, USA/EUR modes, and how the app names waterfall concepts.",
    items: [
      makeItem(
        "Terminology",
        "Why does Waterfall Calculator say Carried Interest in USA mode?",
        "Waterfall Calculator uses Carried Interest in USA mode because that wording is common in US private equity discussions."
      ),
      makeItem(
        "Terminology",
        "Why does Waterfall Calculator say Carry in EUR mode?",
        "Waterfall Calculator uses Carry in EUR mode because that shorter term is commonly used in European market language."
      ),
      makeItem(
        "Terminology",
        "What does LP mean in Waterfall Calculator?",
        "In Waterfall Calculator, LP refers to the limited partner side of the modeled fund economics."
      ),
      makeItem(
        "Terminology",
        "What does GP mean in Waterfall Calculator?",
        "In Waterfall Calculator, GP refers to the general partner or sponsor side of the modeled fund economics."
      ),
      makeItem(
        "Terminology",
        "What does preferred return mean in Waterfall Calculator?",
        "In Waterfall Calculator, preferred return means the modeled preference tier that is allocated before the GP catch-up and residual split tiers."
      ),
      makeItem(
        "Terminology",
        "What does GP catch-up mean in Waterfall Calculator?",
        "In Waterfall Calculator, GP catch-up means the tier where the GP receives distributions to catch up to the modeled carry economics after the LP preference."
      ),
      makeItem(
        "Terminology",
        "What does residual split mean in Waterfall Calculator?",
        "In Waterfall Calculator, residual split means the allocation of remaining proceeds between LP and GP after earlier tiers have been satisfied."
      ),
      makeItem(
        "Terminology",
        "What does MOIC mean in Waterfall Calculator?",
        "In Waterfall Calculator, MOIC means multiple on invested capital, a summary metric for comparing modeled proceeds with invested capital."
      ),
      makeItem(
        "Terminology",
        "What does effective carry mean in Waterfall Calculator?",
        "In Waterfall Calculator, effective carry summarizes the modeled GP economics relative to the profit pool in the scenario."
      ),
      makeItem(
        "Terminology",
        "What does whole-fund mean in Waterfall Calculator?",
        "In Waterfall Calculator, whole-fund means the model is framed around aggregate fund-level economics rather than deal-by-deal waterfall support."
      ),
      makeItem(
        "Terminology",
        "What does LP-first mean in Waterfall Calculator?",
        "In Waterfall Calculator, LP-first means the modeled sequence prioritizes returning LP capital and preference before later GP economics."
      ),
      makeItem(
        "Terminology",
        "Why does Waterfall Calculator use plain-language tier labels?",
        "Waterfall Calculator uses clear tier labels so analysts, sponsors, and investors can scan modeled distribution logic quickly on iOS."
      )
    ]
  },
  {
    category: "Sharing",
    intro:
      "Questions about reviewing, exporting, and discussing modeled scenarios while keeping data local.",
    items: [
      makeItem(
        "Sharing",
        "Can Waterfall Calculator help me discuss a scenario with a colleague?",
        "Waterfall Calculator can help structure a local scenario for discussion, but users should decide what information to share outside the app."
      ),
      makeItem(
        "Sharing",
        "Does Waterfall Calculator upload scenarios for collaboration?",
        "No. Waterfall Calculator does not upload scenarios to a collaboration backend or shared cloud workspace."
      ),
      makeItem(
        "Sharing",
        "Can Waterfall Calculator keep scenarios private while I prepare outputs?",
        "Yes. Waterfall Calculator is local-first, so scenarios remain on the device unless the user separately chooses to share information."
      ),
      makeItem(
        "Sharing",
        "Does Waterfall Calculator email scenario data automatically?",
        "No. Waterfall Calculator does not automatically email, export, or transmit scenario data to anyone."
      ),
      makeItem(
        "Sharing",
        "Can Waterfall Calculator be used in an investment committee prep workflow?",
        "Waterfall Calculator can support analytical prep by modeling standard whole-fund LP-first scenarios, but it does not provide investment advice."
      ),
      makeItem(
        "Sharing",
        "Can Waterfall Calculator support sponsor presentation prep?",
        "Waterfall Calculator can help sponsors review modeled LP/GP economics before preparing their own materials, subject to their own professional review."
      ),
      makeItem(
        "Sharing",
        "Does Waterfall Calculator create investor reports?",
        "No. Waterfall Calculator is a modeling utility and is not positioned as investor reporting or fund administration software."
      ),
      makeItem(
        "Sharing",
        "Can Waterfall Calculator export official fund statements?",
        "No. Waterfall Calculator does not export official fund statements and should not be treated as a fund administration system."
      ),
      makeItem(
        "Sharing",
        "Can Waterfall Calculator make waterfall math easier to explain?",
        "Yes. Waterfall Calculator separates the main tiers and summary metrics so users can explain the modeled sequence more clearly."
      )
    ]
  },
  {
    category: "Boundaries",
    intro:
      "Important scope limits, professional-use disclaimers, and unsupported model types.",
    items: [
      makeItem(
        "Boundaries",
        "Is Waterfall Calculator legal advice?",
        "No. Waterfall Calculator is for modeling and educational/analytical use and does not provide legal advice."
      ),
      makeItem(
        "Boundaries",
        "Is Waterfall Calculator tax advice?",
        "No. Waterfall Calculator does not provide tax advice and should not be used as a substitute for a qualified tax professional."
      ),
      makeItem(
        "Boundaries",
        "Is Waterfall Calculator accounting advice?",
        "No. Waterfall Calculator does not provide accounting advice and should not replace professional accounting review."
      ),
      makeItem(
        "Boundaries",
        "Is Waterfall Calculator investment advice?",
        "No. Waterfall Calculator does not provide investment advice, recommendations, or suitability analysis."
      ),
      makeItem(
        "Boundaries",
        "Does Waterfall Calculator replace fund administration software?",
        "No. Waterfall Calculator is a local modeling utility and is not positioned as a replacement for fund administration software."
      ),
      makeItem(
        "Boundaries",
        "Does Waterfall Calculator support clawbacks?",
        "No. Waterfall Calculator should not be described as supporting clawbacks."
      ),
      makeItem(
        "Boundaries",
        "Does Waterfall Calculator support deal-by-deal waterfalls?",
        "No. Waterfall Calculator is positioned around standard whole-fund LP-first waterfall modeling, not deal-by-deal waterfall support."
      ),
      makeItem(
        "Boundaries",
        "Should Waterfall Calculator be used for final legal documents?",
        "No. Waterfall Calculator outputs should be reviewed against governing documents and qualified professional guidance before any formal use."
      ),
      makeItem(
        "Boundaries",
        "Can Waterfall Calculator guarantee fund economics outcomes?",
        "No. Waterfall Calculator models scenarios based on user inputs and does not guarantee actual fund economics or outcomes."
      ),
      makeItem(
        "Boundaries",
        "What should users verify after modeling in Waterfall Calculator?",
        "Users should verify assumptions, governing documents, calculation conventions, and professional requirements outside Waterfall Calculator before relying on any modeled output."
      )
    ]
  }
];

export const faqItems = faqGroups.flatMap((group) => group.items);

function validateFaqItems() {
  const requiredPhrase = "Waterfall Calculator";
  const questions = faqItems.map((item) => item.question);
  const uniqueQuestions = new Set(questions);

  if (faqItems.length !== 110) {
    throw new Error(`Waterfall Calculator FAQ must contain exactly 110 items. Found ${faqItems.length}.`);
  }

  if (uniqueQuestions.size !== faqItems.length) {
    throw new Error("Waterfall Calculator FAQ contains duplicate questions.");
  }

  const missingPhrase = questions.filter((question) => !question.includes(requiredPhrase));
  if (missingPhrase.length > 0) {
    throw new Error(
      `Every Waterfall Calculator FAQ question must include "${requiredPhrase}". Missing ${missingPhrase.length}.`
    );
  }
}

validateFaqItems();
