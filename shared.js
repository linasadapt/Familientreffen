/* =========================================================
   Family Gathering 2026 — shared front-end (i18n + nav)
   Loaded by every page. Page-specific JS lives inline.
   ========================================================= */
(function () {
  "use strict";

  // ----- CONFIG ----------------------------------------------------------
  const CONFIG = {
    // Apps Script Web App URL — paste here once you deploy the script.
    endpoint: "https://script.google.com/macros/s/AKfycbyUfxphyFhQr7-gPoy0j-WPSZitheQvu3t0XUOjxU_SwiFzqpN7NIBuKhHwd8JhN6OI/exec",
    organizerEmail: "linas@adaptagency.com",
    buildDate: "2026-04-27"
  };
  window.FG_CONFIG = CONFIG;

  // ----- I18N ------------------------------------------------------------
  // Flat keys, one source of truth. Used across all pages.
  const I18N = {
    en: {
      // Brand / nav / footer
      "brand":              "Family Gathering 2026",
      "nav.home":           "Practical info",
      "nav.register":       "Register",
      "nav.about":          "About Druskininkai",
      "nav.family":         "Family members",
      "footer.dates":       "8–9 August 2026 · Druskininkai, Lithuania",
      "footer.contact":     "Contact",
      "footer.lastUpdated": "Last updated",

      // Home
      "home.hero.title":    "Family Gathering 2026 — <em>Druskininkai,</em> Lithuania",
      "home.hero.lead":     "Two days together, somewhere quiet, somewhere green. Save the dates and register when you're ready.",
      "home.hero.cta":      "Register",
      "home.essentials.h":  "Essentials",
      "home.es.dates.l":    "Dates",
      "home.es.dates.v":    "Saturday 8 → Sunday 9 August 2026",
      "home.es.loc.l":      "Location",
      "home.es.loc.v":      "Druskininkai, southern Lithuania",
      "home.es.deadline.l": "Registration deadline",
      "home.es.deadline.v": "Friday 15 May 2026",
      "home.es.contact.l":  "Contact",
      "home.together.h":    "Things we might do together",
      "home.together.intro":"Nothing is mandatory — these are gentle ideas to help the weekend feel connected.",
      "home.t.0":           "A family quiz or Kahoot — easy, fun, multi-generational.",
      "home.t.1":           "Photo sharing — bring a few favourites from your branch of the family.",
      "home.t.2":           "Family history snippets — short stories that connect us.",
      "home.t.3":           "Outdoor games and walks for those who want to move.",
      "home.t.4":           "Kids-friendly activities and quiet corners for the small ones.",
      "home.t.5":           "An optional Sunday walk in the Druskininkai area.",

      // Register
      "reg.hero.title":     "Register for the <em>gathering</em>",
      "reg.hero.lead":      "A few minutes to fill in. We need to know who's coming, when, and what they need.",
      "reg.note":           "Each person registers separately. Feel free to register elders, kids, or close ones if you have all their info — that's helpful and welcome.",
      "reg.form.contact":   "About this person",
      "reg.f.name":         "Full name",
      "reg.f.namePh":       "First and last name",
      "reg.f.email":        "Email",
      "reg.f.emailPh":      "Optional, but useful for updates",
      "reg.f.phone":        "Phone",
      "reg.f.phonePh":      "Optional, +country code",
      "reg.f.country":      "Country",
      "reg.f.city":         "City",
      "reg.f.cityPh":       "So we can place a pin on the family map",
      "reg.f.age":          "Age group",
      "reg.f.langs":        "Languages spoken or understood",
      "reg.f.langsHint":    "Tick all that apply.",
      "reg.f.langs.en":     "English",
      "reg.f.langs.de":     "German",
      "reg.f.langs.ru":     "Russian",
      "reg.f.langs.uk":     "Ukrainian",
      "reg.f.langs.lt":     "Lithuanian",
      "reg.f.langs.other":  "Other",
      "reg.f.langsOtherPh": "Which other language(s)?",

      "reg.form.travel":    "Travel",
      "reg.f.arrival":      "Date of arrival",
      "reg.f.mean":         "Mean of arrival",
      "reg.f.mean.car":     "Car",
      "reg.f.mean.plane":   "Plane",
      "reg.f.mean.train":   "Train",
      "reg.f.mean.bus":     "Bus",
      "reg.f.mean.camper":  "Camper / van",
      "reg.f.mean.other":   "Other",
      "reg.f.departure":    "Date of departure",
      "reg.f.departureT":   "Time of departure",
      "reg.f.diet":         "Dietary preferences",
      "reg.f.dietPh":       "e.g. \"no restrictions\", vegetarian, gluten-free, halal…",

      "reg.form.acc":       "Accommodation preference",
      "reg.f.acc.group":    "Group solution — staying at the event venue overnight",
      "reg.f.acc.hotel":    "Hotel room in Druskininkai",
      "reg.f.acc.camper":   "Camper van & campsite",
      "reg.f.acc.other":    "Other",
      "reg.f.acc.own":      "I already have a solution",
      "reg.f.accOtherPh":   "Tell us briefly",

      "reg.form.act":       "Activity preferences",
      "reg.f.actHint":      "Tick whichever you'd like to be included in. Optional.",
      "reg.f.act.quiz":     "Family quiz / Kahoot",
      "reg.f.act.photos":   "Photo sharing",
      "reg.f.act.history":  "Family history snippets",
      "reg.f.act.games":    "Outdoor games & walks",
      "reg.f.act.kids":     "Kids-friendly activities",
      "reg.f.act.walk":     "Sunday walk in Druskininkai",

      "reg.form.notes":     "Notes",
      "reg.f.notesPh":      "Anything else we should know — accessibility, allergies, things to coordinate.",

      "reg.f.consent":      "I'm OK with this info being used by the organizer to plan the gathering.",

      "reg.submit":         "Send registration",
      "reg.submitting":     "Sending…",
      "reg.success":        "Thanks — registration received.",
      "reg.error":          "Couldn't send. Use the email fallback below or download the JSON.",
      "reg.fallback.lead":  "No backend yet — pick one:",
      "reg.fallback.email": "Email it",
      "reg.fallback.dl":    "Download as JSON",
      "reg.req":            "Required",

      // About
      "about.hero.title":   "About <em>Druskininkai</em> & Lithuania",
      "about.hero.lead":    "A small spa town in southern Lithuania, surrounded by pine forest and three small lakes. Quiet, walkable, and easy on small kids and grandparents alike.",
      "about.druskininkai.h": "Druskininkai at a glance",
      "about.druskininkai.l": "Druskininkai is Lithuania's oldest spa resort, known since the 19th century for its healing mineral springs. Surrounded by pine forests and three small lakes, the town is compact and walkable — wooden spa villas, parks, and the Druskonis lakefront all within a few minutes of each other.",
      "about.photo.fountain":"The central fountain in the resort park",
      "about.photo.lake":    "Druskonis Lake — the heart of the town",
      "about.photo.lakefnt": "The Druskonis Lake fountain at dusk",
      "about.photo.lakeside":"Lakeside path through Vijūnėlė Park",
      "about.photo.oldspa":  "The historic Old Spa, 19th-century spa architecture",
      "about.photo.rotonda": "The mineral-water rotonda — a town landmark",
      "about.photo.villa":   "Traditional wooden spa villa",
      "about.photo.aqua":    "Druskininkai Aquapark — the year-round water resort",
      "about.photo.nemunas": "The Nemunas River flowing past the town",

      "about.lt.h":         "About Lithuania",
      "about.lt.f1.l":      "Population",
      "about.lt.f1.v":      "~2.8 million",
      "about.lt.f2.l":      "Currency",
      "about.lt.f2.v":      "Euro (€)",
      "about.lt.f3.l":      "Languages",
      "about.lt.f3.v":      "Lithuanian; English & Russian widely understood",
      "about.lt.f4.l":      "EU / Schengen / NATO",
      "about.lt.f4.v":      "Yes (no internal EU border checks)",
      "about.lt.f5.l":      "Time zone",
      "about.lt.f5.v":      "EET (UTC+2 / +3 in summer)",
      "about.lt.f6.l":      "August weather",
      "about.lt.f6.v":      "Mild — typically 18–25 °C, occasional showers",

      "about.getting.h":    "Getting there",
      "about.getting.lead": "Druskininkai is in southern Lithuania, about 130 km from Vilnius (the capital) and 130 km from Kaunas. There's no airport in town — most people fly into Vilnius or Kaunas and continue by car or bus.",
      "about.getting.air":  "By air",
      "about.getting.airV": "Vilnius (VNO) is the main airport, 1 h 45 min by car. Kaunas (KUN) is a similar drive. Warsaw Modlin/Chopin (Poland) is also an option — about 4 h 30 min driving from there.",
      "about.getting.car":  "By car",
      "about.getting.carV": "Driving from Vilnius is the most flexible — straight south on the A4, then west on the A4. Druskininkai has plenty of free street parking, and the town centre is small enough to walk.",
      "about.getting.bus":  "By bus",
      "about.getting.busV": "Daily coaches connect Vilnius and Druskininkai (~2 h). Less convenient with luggage and small kids, but workable.",

      "close.quote":        "See you in the pines, by the lake, in August.",

      "home.essentials.intro": "The four things to know.",

      "about.hero.eyebrow": "Where we're gathering",
      "about.glance.kicker":"At a glance",
      "about.glance.credit":"the heart of the town — Druskonis Lake",
      "about.gallery.kicker":"A few favourites",
      "about.gallery.h":   "Worth a wander.",
      "about.getting.airH":"Vilnius (VNO) or Kaunas (KUN)",
      "about.getting.airT":"1 h 45 min onward by car",
      "about.getting.carH":"Straight south on the A4",
      "about.getting.carT":"~1 h 45 min from Vilnius",
      "about.getting.busH":"Daily coaches from Vilnius",
      "about.getting.busT":"~2 h direct",
      "about.t1.h":        "Wooden villas & cherry blossom",
      "about.t1.p":        "Pastel 19th-century spa villas tucked between cherry trees and daffodil meadows.",
      "about.t2.h":        "Pine alleys & flower beds",
      "about.t2.p":        "The walking park behind the spa — long shade, planters in bloom, benches everywhere.",
      "about.t3.h":        "The mineral-water wall",
      "about.t3.p":        "A free public tasting fountain — bring a cup, the kids love filling them.",
      "about.t4.h":        "Evenings by the fountain",
      "about.t4.p":        "The town's living room — bands play, kids run, ice-cream from the kiosk.",
      "about.t5.h":        "Forest on the doorstep",
      "about.t5.p":        "Pine and birch trails start where the pavement ends — ten minutes' walk from the centre.",
      "about.t6.h":        "The lake & its fountain",
      "about.t6.p":        "Walk the loop in 25 minutes; pedal-boats from the south bank if the kids have energy left.",

      // Family
      "family.hero.title":  "Family across Europe",
      "family.hero.lead":   "Where people are coming from. A pin per registered family member, plus our destination in Druskininkai. The list updates as people register.",
      "family.map.title":   "On the map",
      "family.list.h":      "Who, and from where",
      "family.legend.dest": "Druskininkai (destination)",
      "family.legend.fam":  "Family member",
      "family.empty":       "No family members on the map yet.",

      // Organizer
      "org.title":          "Organizer view",
      "org.lead":           "Live counts and a CSV export for planning.",
      "org.tokenLabel":     "Organizer token",
      "org.tokenSubmit":    "Open dashboard",
      "org.empty":          "No registrations yet.",
      "org.export":         "Export CSV",
      "org.refresh":        "Refresh",
      "org.m.persons":      "Persons registered",
      "org.m.byCar":        "Coming by car / camper",
      "org.m.byPlane":      "Coming by plane",
      "org.m.byTrain":      "Coming by train / bus",
      "org.m.accGroup":     "Want group / venue stay",
      "org.m.accHotel":     "Want a hotel",
      "org.m.accCamper":    "Camper & campsite",
      "org.m.accOwn":       "Already sorted",
      "org.m.diets":        "With dietary needs"
    },

    lt: {
      "brand":              "Šeimos susitikimas 2026",
      "nav.home":           "Praktinė informacija",
      "nav.register":       "Registracija",
      "nav.about":          "Apie Druskininkus",
      "nav.family":         "Šeimos nariai",
      "footer.dates":       "2026 m. rugpjūčio 8–9 d. · Druskininkai, Lietuva",
      "footer.contact":     "Kontaktai",
      "footer.lastUpdated": "Atnaujinta",

      "home.hero.title":    "Šeimos susitikimas 2026 — <em>Druskininkai</em>",
      "home.hero.lead":     "Dvi dienos kartu, ramioje ir žalioje vietoje. Pasižymėkit datas ir užsiregistruokit, kai būsit pasiruošę.",
      "home.hero.cta":      "Registruotis",
      "home.essentials.h":  "Esmė",
      "home.es.dates.l":    "Datos",
      "home.es.dates.v":    "Šeštadienis 8 → sekmadienis 9 rugpjūčio 2026",
      "home.es.loc.l":      "Vieta",
      "home.es.loc.v":      "Druskininkai, pietų Lietuva",
      "home.es.deadline.l": "Registracijos terminas",
      "home.es.deadline.v": "Penktadienis, 2026 m. gegužės 15 d.",
      "home.es.contact.l":  "Kontaktas",
      "home.together.h":    "Ką galim veikti kartu",
      "home.together.intro":"Niekas neprivaloma — tai švelnios idėjos, kad savaitgalis jaustųsi jungesnis.",
      "home.t.0":           "Šeimos viktorina arba Kahoot — paprasta, smagu, įvairioms kartoms.",
      "home.t.1":           "Dalinimasis nuotraukomis — atsineškit kelias mėgstamiausias iš savo šeimos šakos.",
      "home.t.2":           "Šeimos istorijos fragmentai — trumpos istorijos, kurios mus jungia.",
      "home.t.3":           "Lauko žaidimai ir pasivaikščiojimai tiems, kurie nori pajudėti.",
      "home.t.4":           "Veiklos vaikams ir ramūs kampeliai mažiesiems.",
      "home.t.5":           "Pasirinktinis sekmadienio pasivaikščiojimas Druskininkų apylinkėse.",

      "reg.hero.title":     "Registracija į <em>susitikimą</em>",
      "reg.hero.lead":      "Užtruksit kelias minutes. Turim sužinoti, kas atvyksta, kada ir ko jiems reikia.",
      "reg.note":           "Kiekvienas asmuo registruojamas atskirai. Drąsiai užregistruokit vyresnius, vaikus ar artimus, jei žinot jų informaciją — tai padeda ir yra labai laukiama.",
      "reg.form.contact":   "Apie šį asmenį",
      "reg.f.name":         "Vardas ir pavardė",
      "reg.f.namePh":       "Vardas ir pavardė",
      "reg.f.email":        "El. paštas",
      "reg.f.emailPh":      "Nebūtina, bet pravartu naujienoms",
      "reg.f.phone":        "Telefonas",
      "reg.f.phonePh":      "Nebūtina, su +šalies kodu",
      "reg.f.country":      "Šalis",
      "reg.f.city":         "Miestas",
      "reg.f.cityPh":       "Kad pažymėtume šeimos žemėlapyje",
      "reg.f.age":          "Amžiaus grupė",
      "reg.f.langs":        "Kalbos, kurias kalba ar supranta",
      "reg.f.langsHint":    "Pažymėkit visas tinkamas.",
      "reg.f.langs.en":     "Anglų",
      "reg.f.langs.de":     "Vokiečių",
      "reg.f.langs.ru":     "Rusų",
      "reg.f.langs.uk":     "Ukrainiečių",
      "reg.f.langs.lt":     "Lietuvių",
      "reg.f.langs.other":  "Kita",
      "reg.f.langsOtherPh": "Kokia (-ios) kita kalba?",

      "reg.form.travel":    "Kelionė",
      "reg.f.arrival":      "Atvykimo data",
      "reg.f.mean":         "Atvykimo būdas",
      "reg.f.mean.car":     "Automobiliu",
      "reg.f.mean.plane":   "Lėktuvu",
      "reg.f.mean.train":   "Traukiniu",
      "reg.f.mean.bus":     "Autobusu",
      "reg.f.mean.camper":  "Kemperiu / mikroautobusu",
      "reg.f.mean.other":   "Kitaip",
      "reg.f.departure":    "Išvykimo data",
      "reg.f.departureT":   "Išvykimo laikas",
      "reg.f.diet":         "Mitybos pageidavimai",
      "reg.f.dietPh":       "pvz., „be apribojimų“, vegetariška, be glitimo, halal…",

      "reg.form.acc":       "Apgyvendinimo pageidavimas",
      "reg.f.acc.group":    "Grupinis sprendimas — nakvojam renginio vietoje",
      "reg.f.acc.hotel":    "Viešbučio kambarys Druskininkuose",
      "reg.f.acc.camper":   "Kemperis ir kempingas",
      "reg.f.acc.other":    "Kita",
      "reg.f.acc.own":      "Jau turiu sprendimą",
      "reg.f.accOtherPh":   "Trumpai apie tai",

      "reg.form.act":       "Veiklos pageidavimai",
      "reg.f.actHint":      "Pažymėkit, kuriose norėtumėt dalyvauti. Nebūtina.",
      "reg.f.act.quiz":     "Šeimos viktorina / Kahoot",
      "reg.f.act.photos":   "Dalinimasis nuotraukomis",
      "reg.f.act.history":  "Šeimos istorijos",
      "reg.f.act.games":    "Lauko žaidimai ir pasivaikščiojimai",
      "reg.f.act.kids":     "Veiklos vaikams",
      "reg.f.act.walk":     "Sekmadienio pasivaikščiojimas",

      "reg.form.notes":     "Pastabos",
      "reg.f.notesPh":      "Bet kas kita, ką turėtumėm žinoti — prieinamumas, alergijos, dalykai, kuriuos reikia suderinti.",

      "reg.f.consent":      "Sutinku, kad ši informacija būtų naudojama susitikimui planuoti.",

      "reg.submit":         "Siųsti registraciją",
      "reg.submitting":     "Siunčiama…",
      "reg.success":        "Ačiū — registracija gauta.",
      "reg.error":          "Nepavyko išsiųsti. Naudokit el. pašto variantą žemiau arba parsisiųskit JSON.",
      "reg.fallback.lead":  "Backend dar neprijungtas — pasirinkit:",
      "reg.fallback.email": "Siųsti el. paštu",
      "reg.fallback.dl":    "Atsisiųsti kaip JSON",
      "reg.req":            "Privaloma",

      "about.hero.title":   "Apie <em>Druskininkus</em> ir Lietuvą",
      "about.hero.lead":    "Mažas SPA miestelis pietų Lietuvoje, apsuptas pušynų ir trijų mažų ežerų. Tylus, pėsčiomis apeinamas, patogus ir mažiems vaikams, ir seneliams.",
      "about.druskininkai.h": "Druskininkai trumpai",
      "about.druskininkai.l": "Druskininkai — seniausias Lietuvos kurortas, nuo XIX amžiaus žinomas dėl gydomųjų mineralinių šaltinių. Jį supa pušynai ir trys nedideli ežerai; medinės kurortinės vilos, parkai ir Druskonio ežero pakrantė — viskas čia arti, viską galima apvaikščioti pėsčiomis.",
      "about.photo.fountain":"Centrinis fontanas kurorto parke",
      "about.photo.lake":    "Druskonio ežeras — miesto širdis",
      "about.photo.lakefnt": "Druskonio ežero fontanas vakarop",
      "about.photo.lakeside":"Pakrantės takas Vijūnėlės parke",
      "about.photo.oldspa":  "Istorinis senasis SPA — XIX a. kurortinė architektūra",
      "about.photo.rotonda": "Mineralinio vandens rotonda — miesto simbolis",
      "about.photo.villa":   "Tradicinė medinė kurortinė vila",
      "about.photo.aqua":    "Druskininkų akvaparkas — vandens kurortas ištisus metus",
      "about.photo.nemunas": "Nemunas, tekantis pro miestą",

      "about.lt.h":         "Apie Lietuvą",
      "about.lt.f1.l":      "Gyventojai",
      "about.lt.f1.v":      "~2,8 mln.",
      "about.lt.f2.l":      "Valiuta",
      "about.lt.f2.v":      "Euras (€)",
      "about.lt.f3.l":      "Kalbos",
      "about.lt.f3.v":      "Lietuvių; angliškai ir rusiškai daugelis supranta",
      "about.lt.f4.l":      "ES / Šengenas / NATO",
      "about.lt.f4.v":      "Taip (jokių vidinių ES sienos patikrų)",
      "about.lt.f5.l":      "Laiko juosta",
      "about.lt.f5.v":      "EET (UTC+2 / vasarą +3)",
      "about.lt.f6.l":      "Rugpjūčio orai",
      "about.lt.f6.v":      "Šilta — paprastai 18–25 °C, kartais lietūs",

      "about.getting.h":    "Kaip atvykti",
      "about.getting.lead": "Druskininkai pietų Lietuvoje, apie 130 km nuo Vilniaus ir 130 km nuo Kauno. Mieste oro uosto nėra — dauguma atskrenda į Vilnių ar Kauną ir toliau važiuoja automobiliu ar autobusu.",
      "about.getting.air":  "Lėktuvu",
      "about.getting.airV": "Vilnius (VNO) — pagrindinis oro uostas, 1 val. 45 min. automobiliu. Kaunas (KUN) — panaši kelionė. Varšuva (Modlin / Chopin) Lenkijoje — apie 4 val. 30 min. važiuojant.",
      "about.getting.car":  "Automobiliu",
      "about.getting.carV": "Iš Vilniaus patogiausia — tiesiai į pietus magistrale A4. Druskininkuose pakanka nemokamų vietų gatvėse, o miesto centras pėsčiomis apeinamas.",
      "about.getting.bus":  "Autobusu",
      "about.getting.busV": "Maršrutinis autobusas tarp Vilniaus ir Druskininkų (~2 val.). Mažiau patogu su bagažu ir vaikais, bet įmanoma.",

      "close.quote":        "Susitiksime pušynuose, prie ežero, rugpjūtį.",

      "home.essentials.intro": "Keturi svarbiausi dalykai.",

      "about.hero.eyebrow": "Kur susirenkame",
      "about.glance.kicker":"Trumpai",
      "about.glance.credit":"miesto širdis — Druskonio ežeras",
      "about.gallery.kicker":"Keletas mėgstamiausių",
      "about.gallery.h":   "Verta pasivaikščioti.",
      "about.getting.airH":"Vilnius (VNO) arba Kaunas (KUN)",
      "about.getting.airT":"1 val. 45 min. automobiliu",
      "about.getting.carH":"Tiesiai į pietus magistrale A4",
      "about.getting.carT":"~1 val. 45 min. iš Vilniaus",
      "about.getting.busH":"Kasdieniai autobusai iš Vilniaus",
      "about.getting.busT":"~2 val. tiesiogiai",
      "about.t1.h":        "Medinės vilos ir vyšnių žiedai",
      "about.t1.p":        "Pastelinės XIX a. kurortinės vilos tarp vyšnių ir narcizų pievų.",
      "about.t2.h":        "Pušų alėjos ir gėlynai",
      "about.t2.p":        "Pasivaikščiojimų parkas už SPA — ilgas pavėsis, žydintys vazonai, suoliukai visur.",
      "about.t3.h":        "Mineralinio vandens siena",
      "about.t3.p":        "Nemokamas viešas degustacinis fontanas — atsineškit puodelį, vaikams labai patinka.",
      "about.t4.h":        "Vakarai prie fontano",
      "about.t4.p":        "Miesto svetainė — groja grupės, bėgioja vaikai, ledų iš kiosko.",
      "about.t5.h":        "Miškas prie pat durų",
      "about.t5.p":        "Pušų ir beržų takai prasideda ten, kur baigiasi grindinys — dešimt minučių pėsčiomis nuo centro.",
      "about.t6.h":        "Ežeras ir jo fontanas",
      "about.t6.p":        "Apeiti ratu — 25 minutės; pedaliniai laivai iš pietinio kranto, jei vaikams dar liko energijos.",

      "family.hero.title":  "Šeima visoje Europoje",
      "family.hero.lead":   "Iš kur visi atvyksta. Po smeigtuką kiekvienam užsiregistravusiam, plius mūsų tikslas — Druskininkai. Sąrašas pildosi pagal registracijas.",
      "family.map.title":   "Žemėlapyje",
      "family.list.h":      "Kas ir iš kur",
      "family.legend.dest": "Druskininkai (tikslas)",
      "family.legend.fam":  "Šeimos narys",
      "family.empty":       "Šeimos narių žemėlapyje dar nėra.",

      "org.title":          "Organizatoriaus rodinys",
      "org.lead":           "Gyvi skaičiai ir CSV eksportas planavimui.",
      "org.tokenLabel":     "Organizatoriaus žetonas",
      "org.tokenSubmit":    "Atidaryti pultą",
      "org.empty":          "Registracijų dar nėra.",
      "org.export":         "Eksportuoti CSV",
      "org.refresh":        "Atnaujinti",
      "org.m.persons":      "Užsiregistravo asmenų",
      "org.m.byCar":        "Atvyksta automobiliu / kemperiu",
      "org.m.byPlane":      "Atvyksta lėktuvu",
      "org.m.byTrain":      "Atvyksta traukiniu / autobusu",
      "org.m.accGroup":     "Nori grupinio / vietos sprendimo",
      "org.m.accHotel":     "Nori viešbučio",
      "org.m.accCamper":    "Kemperis ir kempingas",
      "org.m.accOwn":       "Jau turi sprendimą",
      "org.m.diets":        "Su mitybos pageidavimais"
    },

    de: {
      "brand":              "Familientreffen 2026",
      "nav.home":           "Praktische Infos",
      "nav.register":       "Anmelden",
      "nav.about":          "Über Druskininkai",
      "nav.family":         "Familie",
      "footer.dates":       "8.–9. August 2026 · Druskininkai, Litauen",
      "footer.contact":     "Kontakt",
      "footer.lastUpdated": "Aktualisiert",

      "home.hero.title":    "Familientreffen 2026 — <em>Druskininkai,</em> Litauen",
      "home.hero.lead":     "Zwei Tage zusammen, an einem ruhigen, grünen Ort. Datum vormerken und melden, wenn ihr soweit seid.",
      "home.hero.cta":      "Anmelden",
      "home.essentials.h":  "Das Wichtigste",
      "home.es.dates.l":    "Datum",
      "home.es.dates.v":    "Samstag 8. → Sonntag 9. August 2026",
      "home.es.loc.l":      "Ort",
      "home.es.loc.v":      "Druskininkai, Süd-Litauen",
      "home.es.deadline.l": "Anmeldeschluss",
      "home.es.deadline.v": "Freitag, 15. Mai 2026",
      "home.es.contact.l":  "Kontakt",
      "home.together.h":    "Was wir gemeinsam machen könnten",
      "home.together.intro":"Nichts ist Pflicht — das sind sanfte Ideen, damit sich das Wochenende verbunden anfühlt.",
      "home.t.0":           "Ein Familienquiz oder Kahoot — einfach, lustig, generationenübergreifend.",
      "home.t.1":           "Fotos teilen — bringt ein paar Lieblingsbilder aus eurem Familienzweig mit.",
      "home.t.2":           "Schnipsel aus der Familiengeschichte — kurze Geschichten, die uns verbinden.",
      "home.t.3":           "Spiele draußen und Spaziergänge für alle, die in Bewegung sein wollen.",
      "home.t.4":           "Aktivitäten für Kinder und ruhige Ecken für die Kleinen.",
      "home.t.5":           "Ein optionaler Sonntagsspaziergang in Druskininkai.",

      "reg.hero.title":     "Anmeldung zum <em>Treffen</em>",
      "reg.hero.lead":      "Ein paar Minuten zum Ausfüllen. Wir müssen wissen, wer kommt, wann und was sie brauchen.",
      "reg.note":           "Jede Person meldet sich einzeln an. Meldet gerne Ältere, Kinder oder Nahestehende mit an, wenn ihr alle Infos habt — das hilft sehr und ist ausdrücklich willkommen.",
      "reg.form.contact":   "Über diese Person",
      "reg.f.name":         "Vor- und Nachname",
      "reg.f.namePh":       "Vor- und Nachname",
      "reg.f.email":        "E-Mail",
      "reg.f.emailPh":      "Optional, hilft für Updates",
      "reg.f.phone":        "Telefon",
      "reg.f.phonePh":      "Optional, mit +Ländervorwahl",
      "reg.f.country":      "Land",
      "reg.f.city":         "Stadt",
      "reg.f.cityPh":       "Damit wir auf der Familienkarte einen Pin setzen",
      "reg.f.age":          "Altersgruppe",
      "reg.f.langs":        "Sprachen, die gesprochen oder verstanden werden",
      "reg.f.langsHint":    "Alles ankreuzen, was zutrifft.",
      "reg.f.langs.en":     "Englisch",
      "reg.f.langs.de":     "Deutsch",
      "reg.f.langs.ru":     "Russisch",
      "reg.f.langs.uk":     "Ukrainisch",
      "reg.f.langs.lt":     "Litauisch",
      "reg.f.langs.other":  "Andere",
      "reg.f.langsOtherPh": "Welche andere(n) Sprache(n)?",

      "reg.form.travel":    "Anreise",
      "reg.f.arrival":      "Anreisedatum",
      "reg.f.mean":         "Verkehrsmittel",
      "reg.f.mean.car":     "Auto",
      "reg.f.mean.plane":   "Flugzeug",
      "reg.f.mean.train":   "Zug",
      "reg.f.mean.bus":     "Bus",
      "reg.f.mean.camper":  "Wohnmobil / Van",
      "reg.f.mean.other":   "Anders",
      "reg.f.departure":    "Abreisedatum",
      "reg.f.departureT":   "Abreisezeit",
      "reg.f.diet":         "Ernährungswünsche",
      "reg.f.dietPh":       "z. B. „keine Einschränkungen“, vegetarisch, glutenfrei, halal…",

      "reg.form.acc":       "Unterkunft",
      "reg.f.acc.group":    "Gruppenlösung — Übernachtung am Veranstaltungsort",
      "reg.f.acc.hotel":    "Hotelzimmer in Druskininkai",
      "reg.f.acc.camper":   "Wohnmobil & Campingplatz",
      "reg.f.acc.other":    "Andere",
      "reg.f.acc.own":      "Habe schon eine Lösung",
      "reg.f.accOtherPh":   "Kurz zur Erklärung",

      "reg.form.act":       "Aktivitäts­wünsche",
      "reg.f.actHint":      "Kreuzt an, wo ihr dabei sein wollt. Optional.",
      "reg.f.act.quiz":     "Familienquiz / Kahoot",
      "reg.f.act.photos":   "Fotos teilen",
      "reg.f.act.history":  "Familiengeschichten",
      "reg.f.act.games":    "Spiele draußen & Spaziergänge",
      "reg.f.act.kids":     "Aktivitäten für Kinder",
      "reg.f.act.walk":     "Sonntagsspaziergang",

      "reg.form.notes":     "Anmerkungen",
      "reg.f.notesPh":      "Sonst noch was — Barrierefreiheit, Allergien, Dinge, die wir koordinieren sollten.",

      "reg.f.consent":      "Ich bin damit einverstanden, dass diese Angaben für die Planung des Treffens genutzt werden.",

      "reg.submit":         "Anmeldung absenden",
      "reg.submitting":     "Wird gesendet…",
      "reg.success":        "Danke — Anmeldung erhalten.",
      "reg.error":          "Konnte nicht gesendet werden. Nutzt unten den E-Mail-Fallback oder ladet das JSON herunter.",
      "reg.fallback.lead":  "Backend noch nicht verbunden — wählt eine Option:",
      "reg.fallback.email": "Per E-Mail",
      "reg.fallback.dl":    "Als JSON herunterladen",
      "reg.req":            "Pflichtfeld",

      "about.hero.title":   "Über <em>Druskininkai</em> & Litauen",
      "about.hero.lead":    "Ein kleiner Kurort im Süden Litauens, eingebettet in Kiefernwald und drei kleine Seen. Ruhig, fußläufig, gut für kleine Kinder und Großeltern.",
      "about.druskininkai.h": "Druskininkai auf einen Blick",
      "about.druskininkai.l": "Druskininkai ist Litauens ältester Kurort, seit dem 19. Jahrhundert für seine heilsamen Mineralquellen bekannt. Von Kiefernwäldern und drei kleinen Seen umgeben, ist die Stadt kompakt und gut zu Fuß erschlossen — Holzvillen, Parks und das Ufer des Druskonis-Sees liegen nur wenige Gehminuten voneinander.",
      "about.photo.fountain":"Der zentrale Brunnen im Kurpark",
      "about.photo.lake":    "Druskonis-See — das Herz der Stadt",
      "about.photo.lakefnt": "Der Druskonis-Brunnen in der Dämmerung",
      "about.photo.lakeside":"Uferweg im Vijūnėlė-Park",
      "about.photo.oldspa":  "Das historische Alte Bad — Kurarchitektur des 19. Jh.",
      "about.photo.rotonda": "Die Mineralwasser-Rotunde — ein Wahrzeichen",
      "about.photo.villa":   "Traditionelle hölzerne Kurvilla",
      "about.photo.aqua":    "Druskininkai-Aquapark — das Wasserresort fürs ganze Jahr",
      "about.photo.nemunas": "Die Memel (Nemunas) am Stadtrand",

      "about.lt.h":         "Über Litauen",
      "about.lt.f1.l":      "Bevölkerung",
      "about.lt.f1.v":      "~2,8 Millionen",
      "about.lt.f2.l":      "Währung",
      "about.lt.f2.v":      "Euro (€)",
      "about.lt.f3.l":      "Sprachen",
      "about.lt.f3.v":      "Litauisch; Englisch & Russisch weit verbreitet",
      "about.lt.f4.l":      "EU / Schengen / NATO",
      "about.lt.f4.v":      "Ja (keine EU-internen Grenzkontrollen)",
      "about.lt.f5.l":      "Zeitzone",
      "about.lt.f5.v":      "OEZ (UTC+2 / im Sommer +3)",
      "about.lt.f6.l":      "Wetter im August",
      "about.lt.f6.v":      "Mild — meist 18–25 °C, gelegentlich Schauer",

      "about.getting.h":    "Anreise",
      "about.getting.lead": "Druskininkai liegt im Süden Litauens, etwa 130 km von Vilnius und 130 km von Kaunas. In der Stadt selbst gibt es keinen Flughafen — die meisten fliegen nach Vilnius oder Kaunas und fahren dann mit Auto oder Bus weiter.",
      "about.getting.air":  "Mit dem Flugzeug",
      "about.getting.airV": "Vilnius (VNO) ist der Hauptflughafen, 1 Std. 45 Min. mit dem Auto. Kaunas (KUN) ähnlich. Warschau (Modlin / Chopin) in Polen ist auch eine Option — etwa 4 Std. 30 Min. Fahrt.",
      "about.getting.car":  "Mit dem Auto",
      "about.getting.carV": "Aus Vilnius am bequemsten — gerade nach Süden auf der A4. Druskininkai hat genug kostenlose Stellplätze, und das Zentrum ist klein genug zum Laufen.",
      "about.getting.bus":  "Mit dem Bus",
      "about.getting.busV": "Tägliche Busse zwischen Vilnius und Druskininkai (~2 Std.). Mit Gepäck und kleinen Kindern weniger bequem, aber machbar.",

      "close.quote":        "Wir sehen uns in den Kiefern, am See, im August.",

      "home.essentials.intro": "Die vier wichtigsten Dinge.",

      "about.hero.eyebrow": "Wo wir uns treffen",
      "about.glance.kicker":"Auf einen Blick",
      "about.glance.credit":"das Herz der Stadt — der Druskonis-See",
      "about.gallery.kicker":"Ein paar Lieblinge",
      "about.gallery.h":   "Einen Spaziergang wert.",
      "about.getting.airH":"Vilnius (VNO) oder Kaunas (KUN)",
      "about.getting.airT":"1 Std. 45 Min. mit dem Auto",
      "about.getting.carH":"Geradeaus nach Süden auf der A4",
      "about.getting.carT":"~1 Std. 45 Min. von Vilnius",
      "about.getting.busH":"Tägliche Busse aus Vilnius",
      "about.getting.busT":"~2 Std. direkt",
      "about.t1.h":        "Holzvillen & Kirschblüte",
      "about.t1.p":        "Pastellfarbene Kurvillen aus dem 19. Jh., eingebettet zwischen Kirschbäumen und Narzissenwiesen.",
      "about.t2.h":        "Kiefernalleen & Blumenbeete",
      "about.t2.p":        "Der Spazierpark hinter dem Kurhaus — langer Schatten, blühende Pflanzgefäße, Bänke überall.",
      "about.t3.h":        "Die Mineralwasserwand",
      "about.t3.p":        "Ein kostenloser Probier-Brunnen — Becher mitbringen, die Kinder lieben das Befüllen.",
      "about.t4.h":        "Abende am Brunnen",
      "about.t4.p":        "Das Wohnzimmer der Stadt — Bands spielen, Kinder laufen, Eis vom Kiosk.",
      "about.t5.h":        "Wald vor der Haustür",
      "about.t5.p":        "Kiefern- und Birkenpfade beginnen, wo das Pflaster endet — zehn Minuten zu Fuß vom Zentrum.",
      "about.t6.h":        "Der See & sein Brunnen",
      "about.t6.p":        "Die Runde läuft sich in 25 Minuten; Tretboote am Südufer, falls die Kinder noch Energie haben.",

      "family.hero.title":  "Familie in Europa",
      "family.hero.lead":   "Wo alle herkommen. Eine Nadel pro angemeldetes Familienmitglied, dazu unser Ziel in Druskininkai. Die Liste wächst mit den Anmeldungen.",
      "family.map.title":   "Auf der Karte",
      "family.list.h":      "Wer kommt woher",
      "family.legend.dest": "Druskininkai (Ziel)",
      "family.legend.fam":  "Familienmitglied",
      "family.empty":       "Noch keine Familienmitglieder auf der Karte.",

      "org.title":          "Organisator-Ansicht",
      "org.lead":           "Live-Zahlen und CSV-Export für die Planung.",
      "org.tokenLabel":     "Organisator-Token",
      "org.tokenSubmit":    "Dashboard öffnen",
      "org.empty":          "Noch keine Anmeldungen.",
      "org.export":         "CSV exportieren",
      "org.refresh":        "Aktualisieren",
      "org.m.persons":      "Personen angemeldet",
      "org.m.byCar":        "Anreise mit Auto / Wohnmobil",
      "org.m.byPlane":      "Anreise mit Flugzeug",
      "org.m.byTrain":      "Anreise mit Zug / Bus",
      "org.m.accGroup":     "Wollen Gruppen- / Veranstaltungslösung",
      "org.m.accHotel":     "Wollen ein Hotel",
      "org.m.accCamper":    "Wohnmobil & Campingplatz",
      "org.m.accOwn":       "Schon erledigt",
      "org.m.diets":        "Mit Ernährungswünschen"
    }
  };
  window.FG_I18N = I18N;

  // ----- LANG ------------------------------------------------------------
  const STORAGE_KEY = "fg2026.lang";
  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;
    const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (nav.startsWith("lt")) return "lt";
    if (nav.startsWith("de")) return "de";
    return "en";
  }
  function getLang() { return detectLang(); }
  function setLang(lang) {
    if (!I18N[lang]) lang = "en";
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyLang(lang, document);
    updateLangSwitcher(lang);
    document.dispatchEvent(new CustomEvent("fg:langchange", { detail: { lang } }));
  }
  function t(key, lang) {
    const dict = I18N[lang || getLang()] || I18N.en;
    return dict[key] != null ? dict[key] : (I18N.en[key] != null ? I18N.en[key] : key);
  }
  function applyLang(lang, root) {
    const r = root || document;
    r.querySelectorAll("[data-i18n]").forEach(el => {
      el.innerHTML = t(el.getAttribute("data-i18n"), lang);
    });
    r.querySelectorAll("[data-i18n-ph]").forEach(el => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"), lang));
    });
    r.querySelectorAll("[data-i18n-aria]").forEach(el => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"), lang));
    });
  }
  function updateLangSwitcher(active) {
    document.querySelectorAll(".lang button").forEach(b => {
      b.classList.toggle("on", b.dataset.lang === active);
    });
  }
  window.FG = { I18N, getLang, setLang, t, applyLang };

  // ----- NAV / HEADER ----------------------------------------------------
  function initNavActive() {
    const page = document.body.dataset.page;
    if (!page) return;
    document.querySelectorAll(".nav a[data-page-link]").forEach(a => {
      a.classList.toggle("active", a.dataset.pageLink === page);
    });
  }

  function initLangSwitcher() {
    document.querySelectorAll(".lang button").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
  }

  function initFooterStamp() {
    const stamp = document.querySelector("[data-build-date]");
    if (stamp) stamp.textContent = CONFIG.buildDate;
    document.querySelectorAll("[data-organizer-email]").forEach(el => {
      const email = CONFIG.organizerEmail;
      if (el.tagName === "A") { el.href = "mailto:" + email; el.textContent = email; }
      else el.textContent = email;
    });
  }

  // Public: each page calls this on DOMContentLoaded.
  window.FG.init = function () {
    const lang = getLang();
    document.documentElement.lang = lang;
    applyLang(lang, document);
    updateLangSwitcher(lang);
    initLangSwitcher();
    initNavActive();
    initFooterStamp();
  };

  document.addEventListener("DOMContentLoaded", () => window.FG.init());
})();
