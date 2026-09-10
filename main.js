/* ==========================================================================
   Maître DJAÉ OULOVAVO Mohamed — Application JS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const CONFIG = {
    whatsappNumber: '33646135201',
  };

  // ============================================================
  // TRANSLATIONS
  // ============================================================
  const translations = {
    fr: {
      "nav.sub": "Cabinet d'Avocat", "nav.domaines": "Domaines", "nav.parcours": "Parcours",
      "nav.enseignement": "Enseignement", "nav.contact": "Contact", "nav.cta": "Prendre RDV",

      "hero.badge": "Assermenté Barreau",
      "hero.eyebrow": "Avocat au Barreau de Moroni",
      "hero.eyebrow2": "Docteur en droit & professeur des universités",
      "hero.title": "Docteur en droit privé — Université Lumière Lyon 2",
      "hero.tagline": "J'accompagne particuliers, entreprises et institutions avec rigueur, stratégie et dévouement dans la défense de leurs droits et la sécurisation de leurs enjeux juridiques.",
      "hero.cta_main": "Prendre un Rendez-vous",

      "domains.d1_short": "⚖️ Droit des affaires & des contrats",
      "domains.d2_short": "🏛️ Droit pénal & Procédure",
      "domains.d3_short": "🏖️ Droit du tourisme & hôtellerie",
      "domains.d4_short": "🏢 Droit commun des sociétés",

      "lh.cabinet_label": "Cabinet", "lh.cabinet_val": "Maître DJAÉ OULOVAVO Mohamed",
      "lh.barreau_label": "Barreau", "lh.barreau_val": "Barreau de Moroni, Comores",
      "lh.phone_label": "Téléphone", "lh.email_label": "Email",

      "intro.text": "Le droit n'est pas seulement une discipline. C'est un engagement absolu envers celles et ceux qui recherchent une défense juste, un conseil stratégique éclairé et une écoute attentive. Chaque dossier mérite la même exigence scientifique, la même rigueur et le même respect.",
      "intro.text2": "Je m'engage à défendre les intérêts de mes clients avec dignité, conscience, indépendance, probité et humanité. Chaque affaire est abordée avec intégrité, confidentialité et une détermination constante à rechercher la solution la plus juste.",
      "intro.author": "— Maître DJAÉ OULOVAVO Mohamed",

      "values.eyebrow": "Nos Engagements", "values.title": "Les Valeurs du Cabinet",
      "values.v1_title": "Rigueur Scientifique",
      "values.v1_desc": "Doctorat en droit privé gage d'une maîtrise doctrinale et d'une analyse juridique irréprochable.",
      "values.v2_title": "Écoute & Empathie",
      "values.v2_desc": "Compréhension approfondie des enjeux humains, personnels et économiques de chaque client.",
      "values.v3_title": "Confidentialité Stricte",
      "values.v3_desc": "Respect absolu du secret professionnel et protection totale des données de nos mandants.",
      "values.v4_title": "Réactivité & Action",
      "values.v4_desc": "Intervention rapide et suivi proactif pour faire valoir vos droits sans délai inutiles.",

      "domains.eyebrow": "Domaines de Compétences", "domains.title": "Expertises Juridiques & Contentieux",
      "domains.sub": "Le cabinet intervient aussi bien en conseil préventif qu'en défense contentieuse devant l'ensemble des juridictions.",
      "domains.d1_title": "Droit des Affaires & des Contrats",
      "domains.d1_desc": "Rédaction, consultations, négociation et audit de contrats commerciaux, baux commerciaux, partenariats internationaux et contentieux des affaires.",
      "domains.d1_i1": "Négociation & Rédaction contractuelle",
      "domains.d1_i2": "Contentieux commercial & Recouvrement",
      "domains.d1_i3": "Conseil en management juridique des entreprises",
      "domains.cta": "Consulter en Droit des Affaires",
      "domains.d2_title": "Droit Pénal & Procédure",
      "domains.d2_desc": "Défense pénale à tous les stades de la procédure (garde à vue, instruction, tribunal correctionnel, cour d'assises, affaires pénales des affaires).",
      "domains.d2_i1": "Assistance immédiate & Garde à vue",
      "domains.d2_i2": "Droit pénal général & des affaires",
      "domains.d2_i3": "Défense des victimes & Réparation des préjudices",
      "domains.cta_penal": "Consulter en Droit Pénal",
      "domains.d3_title": "Droit du Tourisme & de l'Hôtellerie",
      "domains.d3_desc": "Accompagnement juridique spécialisé pour les investisseurs, opérateurs touristiques, complexes hôteliers, agences de voyages et réglementation du secteur.",
      "domains.d3_i1": "Investissements & Projets Hôteliers",
      "domains.d3_i2": "Contrats d'agences & opérateurs touristiques",
      "domains.d3_i3": "Réglementation & Litiges du secteur touristique",
      "domains.cta_tourisme": "Consulter en Droit du Tourisme",

      "stats.s1": "Doctorat en Droit Privé", "stats.s2": "Universités Partenaires",
      "stats.s3": "Années d'Excellence Académique", "stats.s4": "Confidentialité & Engagement",

      "parcours.eyebrow": "Cursus & Expériences", "parcours.title": "Parcours Académique & Professionnel",
      "parcours.sub": "Une alliance unique entre enseignement universitaire de haut niveau et pratique du barreau.",
      "parcours.p1_title": "Membre du Conseil d'Administration",
      "parcours.p1_desc": "Engagement actif dans la gouvernance universitaire et le développement des programmes juridiques.",
      "parcours.p2_title": "Docteur en Droit Privé",
      "parcours.p2_desc": "Obtention du Doctorat d'État spécialité droit des affaires et droit des contrats.",
      "parcours.p3_title": "École des Avocats (EDARA)",
      "parcours.p3_desc": "Formation professionnelle d'avocat, déontologie, plaidoirie et pratique judiciaire.",
      "parcours.p4_title": "Cabinets d'Avocats à Lyon",
      "parcours.p4_desc": "Collaborations et juriste spécialisé en droit des contrats internationaux, pénal et affaires.",
      "parcours.p5_title": "Avocat inscrit au Barreau de Moroni",
      "parcours.p5_desc": "Exercice libéral complet et défense des intérêts de nos mandants aux Comores et à l'international.",

      "teach.eyebrow": "Pédagogie & Transmission", "teach.title": "Enseignement Universitaire",
      "teach.sub": "La transmission du savoir au cœur de la rigueur juridique.",
      "teach.u1_desc": "Méthodologie juridique, rédaction d'actes judiciaires, droit des personnes, droit commercial et des affaires, droit commun des sociétés.",
      "teach.u2_desc": "Droit général et spécial des obligations & responsabilité civile.",
      "teach.u3_desc": "Droit international et du commerce international.",
      "teach.u4_desc": "Droit des biens, procédure pénale, droit processuel, droit commun et spécial des sociétés.",

      "pub.eyebrow": "Doctrine & Travaux Scientifiques", "pub.title": "Publications & Engagements",
      "pub.item1_title": "« Le management juridique des entreprises — étude de droit des affaires comparé »",
      "pub.item1_desc": "Éditions du Panthéon, Mai 2021. Analyse des leviers juridiques de performance et de sécurisation pour les entreprises.",
      "pub.item2_title": "Ouvrage sur le Droit Commun des Sociétés",
      "pub.item2_desc": "Synthèse doctrinale et pratique de la gouvernance et de la création des sociétés commerciales.",
      "pub.item3_title": "Président-Fondateur de la COIDF",
      "pub.item3_desc": "« Les Comores, l'Océan Indien et la Diversité en France » (Lyon) — Promotion de la diversité et intégration par le droit.",

      "contact.title": "Besoin d'un Conseil ou d'une Défense Juridique ?",
      "contact.lead": "Le cabinet vous accueille à Moroni ou organise une téléconsultation confidentielle à votre convenance.",
      "contact.cta_booking": "Réserver un RDV en Ligne", "contact.cta_wa": "Contacter sur WhatsApp",
      "contact.ad_title": "ADRESSE DU CABINET", "contact.ph_title": "TÉLÉPHONE",
      "contact.em_title": "EMAIL", "contact.ho_title": "HORAIRES D'OUVERTURE",

      "form.title": "Formulaire de Message Direct",
      "form.name": "Nom & Prénom *", "form.phone": "Téléphone", "form.email": "Adresse Email *",
      "form.subject": "Sujet de votre demande",
      "form.opt1": "Conseil en Droit des Affaires & Contrats", "form.opt2": "Défense en Droit Pénal",
      "form.opt3": "Consultation Juridique Générale", "form.opt4": "Autre demande",
      "form.opt5": "Droit du Tourisme & Hôtellerie",
      "form.message": "Exposé sommaire du dossier *", "form.submit": "Envoyer le Message",

      "map.note": "📍 Cabinet situé à Moroni, Grande Comore — Consultations sur rendez-vous.",
      "footer.mentions": "Mentions Légales", "footer.privacy": "Politique de Confidentialité",

      "booking.title": "Prise de Rendez-vous en Ligne",
      "booking.sub": "Choisissez votre créneau et le type de consultation juridique.",
      "booking.type_label": "Motif de Consultation",
      "booking.opt1": "Consultation Initiale Droit Général (1h)",
      "booking.opt2": "Droit des Affaires & Contrats (Entreprises/Projets)",
      "booking.opt3": "Droit Pénal (Assistance / Garde à Vue / Procédure)",
      "booking.opt4": "Téléconsultation en Visioconférence",
      "booking.opt5": "Droit du Tourisme & Hôtellerie",
      "booking.date_label": "Date Souhaitée", "booking.time_label": "Créneau Horaire",
      "booking.name_label": "Votre Nom Complet *", "booking.phone_label": "Téléphone *",
      "booking.email_label": "Email de Confirmation *", "booking.confirm_btn": "Confirmer le Rendez-vous",

      "common.cancel": "Annuler", "common.close": "Fermer"
    },

    en: {
      "nav.sub": "Law Firm", "nav.domaines": "Practice Areas", "nav.parcours": "Background",
      "nav.enseignement": "Academia", "nav.contact": "Contact", "nav.cta": "Book Now",
      "hero.badge": "Admitted to the Bar", "hero.eyebrow": "Attorney at Law — Moroni Bar",
      "hero.eyebrow2": "Doctor of Law & University Professor",
      "hero.title": "Doctor of Private Law — Université Lumière Lyon 2",
      "hero.tagline": "Providing individuals, businesses, and institutions with rigorous, strategic, and dedicated legal representation and counsel.",
      "hero.cta_main": "Book a Consultation",
      "domains.d1_short": "⚖️ Business & Contract Law", "domains.d2_short": "🏛️ Criminal Law & Litigation",
      "domains.d3_short": "🏖️ Tourism & Hospitality Law", "domains.d4_short": "🏢 Corporate Law",
      "lh.cabinet_label": "Firm", "lh.cabinet_val": "Mohamed Djaé Oulovavo Law Firm",
      "lh.barreau_label": "Bar", "lh.barreau_val": "Bar of Moroni, Comoros",
      "lh.phone_label": "Phone", "lh.email_label": "Email",
      "intro.text": "Law is not merely a discipline; it is an unyielding commitment to those seeking fair defense, enlightened strategy, and attentive counsel. Every case demands scientific precision, rigor, and respect.",
      "intro.text2": "I am committed to defending my clients' interests with dignity, integrity, independence, honesty, and humanity. Every case is handled with the utmost integrity, confidentiality, and a steadfast commitment to pursuing the fairest possible outcome.",
      "intro.author": "— Attorney Mohamed Djaé Oulovavo, PhD",
      "values.eyebrow": "Our Commitments", "values.title": "Firm Values",
      "values.v1_title": "Scientific Rigor",
      "values.v1_desc": "PhD in private law guaranteeing deep doctrinal mastery and flawless legal analysis.",
      "values.v2_title": "Active Listening",
      "values.v2_desc": "Thorough understanding of the human, personal, and financial stakes of every client.",
      "values.v3_title": "Strict Confidentiality",
      "values.v3_desc": "Absolute adherence to attorney-client privilege and data protection.",
      "values.v4_title": "Proactive Action",
      "values.v4_desc": "Swift intervention to enforce and uphold your legal rights without delay.",
      "domains.eyebrow": "Practice Areas", "domains.title": "Legal Expertise & Litigation",
      "domains.sub": "Assisting clients in preventive advisory as well as litigation before all courts.",
      "domains.d1_title": "Business & Contract Law",
      "domains.d1_desc": "Drafting, consolidation, negotiation and audit of commercial contracts, commercial leases, international partnerships and business litigation.",
      "domains.d1_i1": "Contract Negotiation & Drafting",
      "domains.d1_i2": "Commercial Litigation & Recovery",
      "domains.d1_i3": "Corporate Legal Management Advisory",
      "domains.cta": "Consult in Business Law",
      "domains.d2_title": "Criminal Law & Procedure",
      "domains.d2_desc": "Defense at all procedural stages (police custody, investigation, criminal courts, assize courts, white-collar crime).",
      "domains.d2_i1": "Immediate Police Custody Assistance",
      "domains.d2_i2": "General & White-Collar Criminal Law",
      "domains.d2_i3": "Victim Defense & Compensation",
      "domains.cta_penal": "Consult in Criminal Law",
      "domains.d3_title": "Tourism & Hospitality Law",
      "domains.d3_desc": "Specialized legal counsel for investors, resort complexes, tour operators, travel agencies, and industry regulations.",
      "domains.d3_i1": "Hotel Investments & Project Advisory",
      "domains.d3_i2": "Travel Agency & Operator Contracts",
      "domains.d3_i3": "Tourism Sector Regulations & Disputes",
      "domains.cta_tourisme": "Consult in Tourism Law",
      "stats.s1": "PhD in Private Law", "stats.s2": "Partner Universities",
      "stats.s3": "Years of Academic Excellence", "stats.s4": "Confidentiality & Commitment",
      "parcours.eyebrow": "Background & Career", "parcours.title": "Academic & Professional Journey",
      "parcours.sub": "A unique synergy between high-level university teaching and law practice.",
      "parcours.p1_title": "Member of the Board of Directors",
      "parcours.p1_desc": "Active participation in university governance and academic law programs.",
      "parcours.p2_title": "Doctor of Private Law (PhD)",
      "parcours.p2_desc": "Awarded PhD specializing in business and contract law.",
      "parcours.p3_title": "Bar Training Institute (EDARA)",
      "parcours.p3_desc": "Professional lawyer qualification, ethics, advocacy, and court practice.",
      "parcours.p4_title": "Law Firms in Lyon, France",
      "parcours.p4_desc": "Legal practitioner specializing in international contracts, criminal, and business law.",
      "parcours.p5_title": "Attorney Admitted to the Moroni Bar",
      "parcours.p5_desc": "Full legal practice protecting client interests in Comoros and internationally.",
      "teach.eyebrow": "Academia & Teaching", "teach.title": "University Academic Roles",
      "teach.sub": "Knowledge transfer at the core of legal excellence.",
      "teach.u1_desc": "Legal methodology, judicial drafting, personal law, commercial law, and corporate law.",
      "teach.u2_desc": "General and special contract law & civil liability.",
      "teach.u3_desc": "International law and international trade law.",
      "teach.u4_desc": "Property law, criminal procedure, procedural law, corporate law.",
      "pub.eyebrow": "Scholarship & Publications", "pub.title": "Publications & Civic Engagement",
      "pub.item1_title": "“Legal Management of Corporations — Comparative Business Law Study”",
      "pub.item1_desc": "Éditions du Panthéon, May 2021. In-depth research on legal risk management for companies.",
      "pub.item2_title": "Treatise on General Corporate Law",
      "pub.item2_desc": "Practical and academic synthesis of corporate governance.",
      "pub.item3_title": "Founding President of COIDF",
      "pub.item3_desc": "“Comoros, Indian Ocean & Diversity in France” (Lyon) — Promoting integration through law.",
      "contact.title": "Need Legal Counsel or Court Representation?",
      "contact.lead": "Our firm welcomes you in Moroni or via secure video consultation.",
      "contact.cta_booking": "Book Appointment Online", "contact.cta_wa": "Contact on WhatsApp",
      "contact.ad_title": "FIRM ADDRESS", "contact.ph_title": "PHONE",
      "contact.em_title": "EMAIL", "contact.ho_title": "OPENING HOURS",
      "form.title": "Direct Message Form",
      "form.name": "Full Name *", "form.phone": "Phone Number", "form.email": "Email Address *",
      "form.subject": "Case Subject",
      "form.opt1": "Business & Contract Law Advice", "form.opt2": "Criminal Law Defense",
      "form.opt3": "General Legal Consultation", "form.opt4": "Other Request",
      "form.opt5": "Tourism & Hospitality Law",
      "form.message": "Case Summary *", "form.submit": "Send Message",
      "map.note": "📍 Law firm located in Moroni, Grand Comore — Consultations by appointment.",
      "footer.mentions": "Legal Notice", "footer.privacy": "Privacy Policy",
      "booking.title": "Online Appointment Booking",
      "booking.sub": "Select your preferred date and consultation type.",
      "booking.type_label": "Reason for Consultation",
      "booking.opt1": "Initial Consultation General Law (1h)",
      "booking.opt2": "Business & Contract Law (Corporate/Projects)",
      "booking.opt3": "Criminal Defense & Custody Assistance",
      "booking.opt4": "Video Teleconsultation", "booking.opt5": "Tourism & Hospitality Law",
      "booking.date_label": "Preferred Date", "booking.time_label": "Time Slot",
      "booking.name_label": "Your Full Name *", "booking.phone_label": "Phone *",
      "booking.email_label": "Confirmation Email *", "booking.confirm_btn": "Confirm Appointment",
      "common.cancel": "Cancel", "common.close": "Close"
    },

    ar: {
      "nav.sub": "مكتب المحاماة", "nav.domaines": "مجالات الاختصاص", "nav.parcours": "المسار المهني",
      "nav.enseignement": "التعليم التدريسي", "nav.contact": "الاتصال", "nav.cta": "حجز موعد",
      "hero.badge": "محامٍ معتمد بالجدول", "hero.eyebrow": "محامٍ لدى هيئة المحامين بموروني",
      "hero.eyebrow2": "دكتور في القانون وأستاذ جامعي",
      "hero.title": "دكتور في القانون الخاص — جامعة ليون 2",
      "hero.tagline": "نرافق الأفراد والشركات والمؤسسات بدقة واستراتيجية وتكتم تام للدفاع عن حقوقهم.",
      "hero.cta_main": "حجز موعد استشارة",
      "domains.d1_short": "⚖️ قانون الأعمال والعقود", "domains.d2_short": "🏛️ القانون الجنائي",
      "domains.d3_short": "🏖️ قانون السياحة والفندقة", "domains.d4_short": "🏢 قانون الشركات",
      "lh.cabinet_label": "المكتب", "lh.cabinet_val": "مكتب الأستاذ محمد دجاي أولوفافو",
      "lh.barreau_label": "الهيئة", "lh.barreau_val": "هيئة المحامين بموروني",
      "lh.phone_label": "الهاتف", "lh.email_label": "البريد",
      "intro.text": "القانون ليس مجرد تخصص، بل التزام مطلق تجاه من يبحث عن دفاع عادل.",
      "intro.text2": "ألتزم بالدفاع عن مصالح موكّليّ بكرامة وضمير واستقلالية ونزاهة وإنسانية.",
      "intro.author": "— الأستاذ محمد جاي أولوفافو",
      "values.eyebrow": "التزاماتنا", "values.title": "قيم المكتب",
      "values.v1_title": "الدقة العلمية", "values.v1_desc": "دكتوراه في القانون الخاص.",
      "values.v2_title": "الاستماع", "values.v2_desc": "فهم عميق لرهانات كل موكل.",
      "values.v3_title": "السرية", "values.v3_desc": "التزام مطلق بالسر المهني.",
      "values.v4_title": "السرعة", "values.v4_desc": "تدخل سريع ومتابعة مستمرة.",
      "domains.eyebrow": "مجالات الاختصاص", "domains.title": "الخبرات القانونية",
      "domains.sub": "نقدم الاستشارات الوقائية والترافع أمام كافة المحاكم.",
      "domains.d1_title": "قانون الأعمال والعقود", "domains.d1_desc": "صياغة وتدقيق العقود التجارية.",
      "domains.d1_i1": "التفاوض والصياغة", "domains.d1_i2": "النزاعات التجارية", "domains.d1_i3": "الإدارة القانونية",
      "domains.cta": "استشارة قانون الأعمال",
      "domains.d2_title": "القانون الجنائي", "domains.d2_desc": "الدفاع في جميع مراحل الإجراءات.",
      "domains.d2_i1": "المساعدة الفورية", "domains.d2_i2": "القانون الجنائي العام", "domains.d2_i3": "الدفاع عن الضحايا",
      "domains.cta_penal": "استشارة جنائية",
      "domains.d3_title": "قانون السياحة", "domains.d3_desc": "مواكبة قانونية للمستثمرين السياحيين.",
      "domains.d3_i1": "المشاريع الفندقية", "domains.d3_i2": "عقود الوكالات", "domains.d3_i3": "تنظيم القطاع",
      "domains.cta_tourisme": "استشارة سياحية",
      "stats.s1": "دكتوراه", "stats.s2": "جامعات شريكة", "stats.s3": "سنوات التميز", "stats.s4": "السرية",
      "parcours.eyebrow": "المسار", "parcours.title": "التكوين والمسار",
      "parcours.sub": "مزيج فريد بين التدريس الجامعي والممارسة.",
      "parcours.p1_title": "عضو مجلس الإدارة", "parcours.p1_desc": "مشاركة فعالة في الحوكمة.",
      "parcours.p2_title": "دكتور في القانون الخاص", "parcours.p2_desc": "دكتوراه في قانون الأعمال.",
      "parcours.p3_title": "مدرسة المحاماة", "parcours.p3_desc": "التكوين المهني للمحاماة.",
      "parcours.p4_title": "مكاتب المحاماة بليون", "parcours.p4_desc": "خبرة في العقود الدولية.",
      "parcours.p5_title": "محامٍ بهيئة موروني", "parcours.p5_desc": "ممارسة حرة كاملة.",
      "teach.eyebrow": "التدريس", "teach.title": "الجامعات والتدريس",
      "teach.sub": "نقل المعرفة في صميم الصرامة القانونية.",
      "teach.u1_desc": "المنهجية القانونية وقانون الشركات.",
      "teach.u2_desc": "قانون الالتزامات والمسؤولية المدنية.",
      "teach.u3_desc": "القانون الدولي.", "teach.u4_desc": "قانون الملكية والإجراءات.",
      "pub.eyebrow": "المنشورات", "pub.title": "الفقه والالتزامات",
      "pub.item1_title": "«الإدارة القانونية للشركات»", "pub.item1_desc": "منشورات بانتيون، 2021.",
      "pub.item2_title": "كتاب في القانون العام للشركات", "pub.item2_desc": "خلاصة فقهية وعملية.",
      "pub.item3_title": "الرئيس المؤسس لـ COIDF", "pub.item3_desc": "تعزيز الاندماج من خلال القانون.",
      "contact.title": "هل تحتاج استشارة قانونية؟", "contact.lead": "نرحب بكم في موروني.",
      "contact.cta_booking": "حجز موعد", "contact.cta_wa": "واتساب",
      "contact.ad_title": "العنوان", "contact.ph_title": "الهاتف",
      "contact.em_title": "البريد", "contact.ho_title": "الأوقات",
      "form.title": "نموذج التواصل", "form.name": "الاسم *", "form.phone": "الهاتف",
      "form.email": "البريد *", "form.subject": "الموضوع",
      "form.opt1": "قانون الأعمال", "form.opt2": "القانون الجنائي",
      "form.opt3": "استشارة عامة", "form.opt4": "آخر", "form.opt5": "قانون السياحة",
      "form.message": "الرسالة *", "form.submit": "إرسال",
      "map.note": "📍 المكتب في موروني.",
      "footer.mentions": "الإشعارات", "footer.privacy": "الخصوصية",
      "booking.title": "حجز موعد", "booking.sub": "اختر التاريخ ونوع الاستشارة.",
      "booking.type_label": "السبب",
      "booking.opt1": "استشارة أولية", "booking.opt2": "قانون الأعمال",
      "booking.opt3": "الدفاع الجنائي", "booking.opt4": "استشارة فيديو", "booking.opt5": "قانون السياحة",
      "booking.date_label": "التاريخ", "booking.time_label": "الوقت",
      "booking.name_label": "الاسم *", "booking.phone_label": "الهاتف *",
      "booking.email_label": "البريد *", "booking.confirm_btn": "تأكيد",
      "common.cancel": "إلغاء", "common.close": "إغلاق"
    }
  };

  // ---- LANGUAGE ----
  const langSwitcher = document.getElementById('lang-switcher');

  function setLanguage(lang) {
    if (!translations[lang]) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    localStorage.setItem('mdo_lang', lang);
  }

  langSwitcher.addEventListener('change', e => setLanguage(e.target.value));
  const savedLang = localStorage.getItem('mdo_lang') || 'fr';
  langSwitcher.value = savedLang;
  setLanguage(savedLang);

  // ---- THEME ----
  const themeBtn = document.getElementById('theme-toggle');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mdo_theme', theme);
  }

  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  setTheme(localStorage.getItem('mdo_theme') || 'light');

  // ---- SCROLL ----
  const mainNav = document.getElementById('main-nav');
  const progress = document.getElementById('scroll-progress');

  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    if (mainNav) mainNav.classList.toggle('scrolled', y > 30);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- MODALS ----
  const bookingModal = document.getElementById('booking-modal');
  const detailModal = document.getElementById('detail-modal');

  document.querySelectorAll('.open-booking-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const type = btn.getAttribute('data-booking-type');
      const sel = document.getElementById('booking-type');
      if (type && sel) {
        const map = { affaires: 'Droit des Affaires & Contrats', penal: 'Droit Pénal & Procédure', tourisme: 'Droit du Tourisme & Hôtellerie' };
        if (map[type]) sel.value = map[type];
      }
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateInput = document.getElementById('booking-date');
      dateInput.valueAsDate = tomorrow;
      dateInput.min = new Date().toISOString().split('T')[0];
      bookingModal.showModal();
    });
  });

  [bookingModal, detailModal].forEach(m => {
    m.addEventListener('click', e => {
      const r = m.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) m.close();
    });
  });

  // ---- BOOKING FORM → WHATSAPP ----
  document.getElementById('booking-form').addEventListener('submit', e => {
    e.preventDefault();
    const type = document.getElementById('booking-type').value;
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('booking-phone').value.trim();
    const email = document.getElementById('booking-email').value.trim();
    const dateFormatted = date ? new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : date;
    const msg = `*Nouvelle demande de rendez-vous*\n\n👤 ${name}\n📞 ${phone}\n✉️ ${email}\n\n📋 ${type}\n📅 ${dateFormatted}\n🕐 ${time}\n\n— Envoyé depuis le site`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    showToast(`✅ Merci ${name}, votre demande a été préparée.`);
    setTimeout(() => { bookingModal.close(); document.getElementById('booking-form').reset(); }, 800);
  });

  // ---- CONTACT FORM → WHATSAPP ----
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('f-name').value.trim();
    const phone = document.getElementById('f-phone').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const subject = document.getElementById('f-subject').value;
    const message = document.getElementById('f-message').value.trim();
    if (!name || !email || !message) { showToast('⚠️ Veuillez remplir les champs obligatoires.'); return; }
    const msg = `*Nouveau message du site*\n\n👤 ${name}\n📞 ${phone || '—'}\n✉️ ${email}\n📋 ${subject}\n\n💬 ${message}`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    showToast(`✅ Merci ${name}, votre message va être transmis.`);
    e.target.reset();
  });

  // ---- TOAST ----
  function showToast(text) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = text;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(40px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 320);
    }, 5000);
  }

  // ---- REVEAL ----
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('active'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // ---- COUNTERS ----
  const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounter(e.target, parseInt(e.target.dataset.target, 10)); statsObs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(el => statsObs.observe(el));

  function animateCounter(el, target) {
    const start = performance.now();
    const duration = 1600;
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }

  // ---- MOBILE MENU ----
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // ---- DETAIL MODAL ----
  const detailBody = document.getElementById('detail-modal-body');

  const detailContent = {
    mentions: {
      fr: `<h3>Mentions Légales</h3><p><b>Éditeur :</b> Cabinet de Maître DJAÉ OULOVAVO Mohamed</p><p><b>Qualité :</b> Avocat au Barreau de Moroni — Docteur en droit privé</p><p><b>Adresse :</b> Moroni, Grande Comore, Union des Comores</p><p><b>Contact :</b> contact@cabinet-oulovavo.com / +33 6 46 13 52 01</p>`,
      en: `<h3>Legal Notice</h3><p><b>Editor:</b> Law firm of Attorney Mohamed Djaé Oulovavo</p><p><b>Capacity:</b> Attorney at the Moroni Bar — PhD in Private Law</p><p><b>Address:</b> Moroni, Grand Comore, Union of the Comoros</p>`,
      ar: `<h3>الإشعارات القانونية</h3><p><b>الناشر:</b> مكتب الأستاذ محمد دجاي أولوفافو</p><p><b>الصفة:</b> محامٍ بهيئة موروني</p>`
    },
    privacy: {
      fr: `<h3>Politique de Confidentialité</h3><p>Le Cabinet garantit le secret professionnel absolu et la confidentialité de toutes les informations transmises via ce site.</p><p>Les données saisies sont destinées exclusivement au traitement de votre demande.</p>`,
      en: `<h3>Privacy Policy</h3><p>The firm guarantees absolute professional secrecy and confidentiality for all information submitted via this website.</p><p>Data entered is used exclusively to process your inquiry.</p>`,
      ar: `<h3>سياسة الخصوصية</h3><p>يضمن المكتب السر المهني المطلق وسرية جميع المعلومات المرسلة عبر هذا الموقع.</p>`
    }
  };

  document.querySelectorAll('.open-detail-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const type = btn.dataset.detail;
      const lang = document.documentElement.lang || 'fr';
      detailBody.innerHTML = detailContent[type]?.[lang] || detailContent[type]?.fr || '';
      detailModal.showModal();
    });
  });

  // ---- SMOOTH ANCHOR ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ============================================================
// ✨ NOUVEAUX BLOCS D'ANIMATION
// ============================================================

// ---- 1. PARALLAXE DES ORBES AU MOUVEMENT DE LA SOURIS ----
const orbs = document.querySelectorAll('.orb');
let mouseX = 0, mouseY = 0;
let currentOrbX = 0, currentOrbY = 0;

document.addEventListener('mousemove', e => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function animateOrbs() {
  currentOrbX += (mouseX - currentOrbX) * 0.06;
  currentOrbY += (mouseY - currentOrbY) * 0.06;
  orbs.forEach((orb, i) => {
    const depth = (i + 1) * 12;
    orb.style.transform = `translate(${currentOrbX * depth}px, ${currentOrbY * depth}px)`;
  });
  requestAnimationFrame(animateOrbs);
}
if (orbs.length) animateOrbs();

// ---- 2. EFFET TILT 3D SUR LES CARTES ----
const tiltCards = document.querySelectorAll('.domain-card, .value-card, .teach-card');

tiltCards.forEach(card => {
  let rafId = null;

  card.addEventListener('mousemove', e => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotX = -y * 6;
      const rotY = x * 6;
      const lift = -8;

      card.style.transform = `perspective(1000px) translateY(${lift}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
  });

  card.addEventListener('mouseleave', () => {
    if (rafId) cancelAnimationFrame(rafId);
    card.style.transform = '';
  });
});

// ---- 3. EFFET RIPPLE SUR LES BOUTONS ----
document.querySelectorAll('.cta-btn, .nav-cta-btn, .float-btn, .domain-cta-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
  });
});

// ---- 4. NAVIGATION ACTIVE AU SCROLL ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('nav.links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('nav-link-active', a.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.3, rootMargin: '-120px 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ---- 5. PULSE DES COMPTEURS APRÈS ANIMATION ----
// Modifiez la fonction animateCounter pour ajouter la classe "completed"
// Remplacez la fonction existante par celle-ci :

function animateCounter(el, target) {
  const start = performance.now();
  const duration = 1600;
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (p < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target;
      el.classList.add('completed');
      setTimeout(() => el.classList.remove('completed'), 800);
    }
  }
  requestAnimationFrame(tick);
}

});