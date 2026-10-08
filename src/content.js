// ✏️ Your text is kept exactly as written. Empty "" = a gap between paragraphs.
export const config = { me: "", her: "" };

// 📸 Photos live in /public/photos. To add more: drop 27.jpg, 28.jpg ... in that folder and add a line below.
// `pos` = focal point so faces stay in frame (x% y%). Order here = order on the page.
// 1–8 = older couple photos, 13–26 = newer couple photos (9–12 unused).
const B = import.meta.env.BASE_URL;
const list = [
  [1, "50% 65%"], [13, "50% 40%"], [2, "50% 45%"], [15, "50% 40%"], [3, "50% 45%"], [18, "50% 62%"],
  [4, "50% 50%"], [20, "50% 58%"], [5, "50% 48%"], [22, "50% 45%"], [6, "50% 55%"], [19, "50% 40%"],
  [7, "50% 45%"], [21, "50% 45%"], [8, "50% 40%"], [14, "50% 45%"], [16, "50% 60%"], [23, "50% 50%"],
  [17, "50% 55%"],  [25, "50% 55%"], [26, "50% 50%"],
];
export const photos = list.map(([n, pos]) => ({ src: `${B}photos/${n}.jpg`, pos }));
export const video = { src: `${B}video/bg.mp4`, poster: `${B}video/poster.jpg` };
export const thanks = []; // (unused now)

export const opening = {
  title: "HAI KUTTTTT 🫶",
  lines: ["TODAY'S MY BIRTHDAY 🎉, BUT I WANNA CELEBRATE WITH YOU 🫶.", "THAT'S WHY I'M CREATING THIS SITE FOR YOU."],
};

export const chapters = {
  why: {
    title: ["NJN NTHINA ITH CREATE", "CHEYUNATHNU ARIYUO?"],
    lines: [
      "YOU KNOW!",
      "EVERY YEAR, OCT 09 ENIK VENDI IYAL MATTI VEKKAR UND!",
      "SO, THIS YEAR I'M PLANNING TO DEVELOP A PERSONAL SITE FOR YOU 😌.",
      "THAT'S WHY I'M HERE.👀",
    ],
  },
  friend: {
    title: "TO MY BEST BEST BEST FRIEND 🫶",
    small: true,
    lines: [
      "IYAL NTE BEST FRIEND AND PARTNER AHNU.",
      "I'M THANKFUL TO GOD 🤍, BECAUSE ITH ELLAM ORU COINCIDENCE AHNU.",
      "",
      "YOU KNOW!",
      "NAMMAL ORUMICH 3 YEARS PADICHITTUND.",
      "NNITT NAMMAL PARASPARAM MINDITTILLA.",
      "ATH MATHRAM ALLA, ONNU JUST FACE TO FACE NOKKITT POLUM ILLA.",
      "NAMMAL AA CLASSIL ORUMICH PADICHATH POLUM ENIK ORMA ILLA.",
      "",
      "PINNE ENGANEYA NAMMAL RELATION AAYATH?",
      "ONNU AALOCHICHAL, ITHOKE ALLE COINCIDENCE.",
      "",
      "IYALK ARIYO NAMMAL NTH KOND RELATION IL AAYATH?",
      "",
      "NAMMADA FRIENDSHIP, NAMMADA CONNECTION, ATHOKKE KOND AANU. 🫶",
      "",
      "NAMUK NTH ONDELUM VANNU PARAYAN PATTUNA ORAL AAL INDAVULE ATH AHNU NAMMAL",
      "CHERTH AHNELUM VELUTH AHNELUM NAMMAL SAMSARIKUM",
      "",
      "INNIYUM ITHU POLE KORE KORE KORE YEARS ORUMICH POVUM",
    ],
  },
  thanks: {
    title: "THANKS A LOT KUTTU 💗 ",
    small: true,
    lines: [
      "I THINK ITH NAMMAL ORUMICH CELEBRATE CHEYUNNA 5TH BIRTHDAY AHNU",
      "",
      "NJN ADHIYAM THANNEY ORU HUGEEEEE THANKS PARAYUVAAHHH!",
      "",
      "NTHIN AHNU NNU PARAYANADALLO",
      "BEING THE BEST BEST FRIEND FOR ME",
      "ETHARA THANKS PARANJALUM MATHI AVULA I KNOW !",
      "",
      "ITHREM NAAL NTE KOODEY ORUMICH NINNATHINUM , SUPPORT CHEYTHATHINUM , VAZHAK PARANJATHINUM , NA BETTER AKKAN NOKIYATHINUM OKEHH",
      "",
      "THANKSSSSSS KUTTEEE.🫶",
      "",
      "LOVE YO DO.💗 ",
      "UMMMAAHHHHHHHHH.💋💋",
      "",
      "NJN IYALDA KOODA EPPOLUM INDAVUM AND I LOVE YOU MOREEE EVERYDAY 🫶",
      "",
      "MMMMMMMMMMM!.😘",
    ],
  },
  wish: {
    title: "WISH YOU ALL THE BEST.🫶",
    small: true,
    lines: [
      "WISH YOU ALL THE BEST FOR YOUR CAREER.",
      "",
      "IYAL NALLONAM HARDWORK CHEYUND , I KNOW VERY WELL , NJN. ATH KANAR IND . ATHOKE ORU DAY PAID OFF AYI KITTUM FOR SUREE !. POSTOFFICE KITTYAPOLUM IYAL KORE KORE STRUGGLE CHEYUNATH NJN KANAR IND. ATHREM STRUGGLE TA EDAKUM IYAL",
      "NANAYI HARD WORK CHEYUND .",
      "",
      "IYAL AGRAHIKUNNA PLACEIL IYAL ETHUM  ",
      "ALL THE BEST KUTTU 💗",
      
      "",
      "INI NTE KARIYAM,",
      "ENIK EE JOB ALMOST SET AHNU , ENIK ARIYAM ITH ALLA NTE FUTURE JOB . BUT NJN IVDA PIDICH NIKUM FOR SURE",
      "IVDA NINU NJN NTE FUTURE BUILD CHEYUM . ENIK ARIYAM NJN FOCUSED ALLA NJN CONFUSED AHNU LATE AHNU ,",
      "BUT NJN PADIKUM DAY BY DAY NJN IMPROVE AVUM , ORAPPAYITTUM",
      "",
      "KOODUTHAL PARANJ KOLLAM AKUNILA",
      "",
      "ALL THE BEST FOR OUR FUTURE 🤍 ",
      "AND",
      "ADVANCE HAPPY BIRTHDAY TO MY KUTT 🎉😘",
      "LOVE YOUUU DOOO.💗",
      "UMMMMMAAHHHHHHHHH.💋💋",
    ],
  },
};

export const ending = { title: "THANK YOU KUTTUUUUU.💗", lines: [ "MMMMMMMMMM!.💋💋"] };