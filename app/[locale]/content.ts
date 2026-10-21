export type Locale = "ka" | "en" | "fr";

export const copy = {
  ka: {
    nav: ["მთავარი", "ნამუშევრები", "ჩემ შესახებ", "კონტაქტი"],
    heroKicker: "მხატვარი · საქართველო / ევროპა",
    heroTitle: "მარიამ\nმამუკელაშვილი",
    heroText: "ფერწერა · შერეული ტექნიკა · 2022—2026",
    explore: "ნახატების ნახვა", selected: "ნამუშევრები", all: "ყველა ნამუშევარი",
    storyLabel: "ნამუშევრები",
    aboutTitle: "მხატვარი",
    aboutText: "მარიამ მამუკელაშვილი — ქართველი მხატვარი, რომელიც ცხოვრობს და მუშაობს ევროპაში.",
    aboutLink: "ჩემ შესახებ", contactTitle: "კონტაქტი",
    contactText: "გამოფენებისა და თანამშრომლობის საკითხებზე.",
    contactLink: "მომწერე", back: "გალერეაში დაბრუნება", story: "ნამუშევრის ისტორია",
    note: "ნახატს შეიძლება ბევრი ინტერპრეტაცია ჰქონდეს — ეს მხოლოდ ერთი ხედვაა."
  },
  en: {
    nav: ["Home", "Artworks", "About", "Contact"], heroKicker: "Artist · Georgia / Europe",
    heroTitle: "Mariam\nMamukelashvili", heroText: "Painting · Mixed media · 2022—2026",
    explore: "Explore artworks", selected: "Selected works", all: "View all works", storyLabel: "Selected works",
    aboutTitle: "Artist",
    aboutText: "Mariam Mamukelashvili is a Georgian artist living and working in Europe.",
    aboutLink: "About the artist", contactTitle: "Contact", contactText: "For exhibition and collaboration enquiries.",
    contactLink: "Get in touch", back: "Back to gallery", story: "The story behind the work",
    note: "A painting can hold many interpretations — this is only one perspective."
  },
  fr: {
    nav: ["Accueil", "Œuvres", "À propos", "Contact"], heroKicker: "Artiste · Géorgie / Europe",
    heroTitle: "Mariam\nMamukelashvili", heroText: "Peinture · Technique mixte · 2022—2026",
    explore: "Découvrir les œuvres", selected: "Œuvres", all: "Voir toutes les œuvres", storyLabel: "Œuvres choisies",
    aboutTitle: "Artiste",
    aboutText: "Mariam Mamukelashvili est une artiste géorgienne qui vit et travaille en Europe.",
    aboutLink: "À propos de l’artiste", contactTitle: "Contact", contactText: "Pour les expositions et les collaborations.",
    contactLink: "Me contacter", back: "Retour à la galerie", story: "L’histoire de l’œuvre",
    note: "Une peinture peut accueillir plusieurs interprétations — voici seulement un regard possible."
  }
} as const;

export const artworks = [
  {
    slug: "when-the-world-was-still-in-colour", year: "2022",
    title: { ka: "სამყარო ჯერ კიდევ ფერადი იყო", en: "When the World Was Still in Colour", fr: "Quand le monde était encore en couleurs" },
    medium: { ka: "შერეული ტექნიკა", en: "Mixed media", fr: "Technique mixte" }, image: "/artworks/when-world-was-colour.jpeg",
    story: {
      ka: "ეს ჩემი პირველი ნამუშევარია, რომელიც საფრანგეთში შევქმენი. ახალი ჩამოსული ვიყავი — პატარა გოგონა, რომელიც ჯერ კიდევ უცხო სამყაროს შეიცნობდა. ყველაფერი ახალი იყო, მაგრამ სამყაროს ჯერ კიდევ ფერადად ვხედავდი. ამ ნახატში შემონახულია ჩემი მაშინდელი მზერა: გულწრფელი, ცნობისმოყვარე და იმედით სავსე. პეპელა შეიძლება გარდაქმნისა და ახალი დასაწყისის სიმბოლოდ წავიკითხოთ, ხოლო ფერები იმ სამყაროს გამოხატავს, სადაც ჯერ კიდევ ყველაფერი შესაძლებელია. ეს ნამუშევარი ჩემი პირველი შეხვედრის მოგონებაა საფრანგეთთან, ახალი ისტორიის დასაწყისში.",
      en: "This was the first painting I created in France. I had only recently arrived—a young girl still discovering an unfamiliar world. Everything was new, yet I still saw the world in colour. The work preserves that way of seeing: sincere, curious, and full of hope. The butterfly can suggest transformation and new beginnings, while the colours evoke a world where everything still feels possible. It holds the memory of my first encounter with France, at the beginning of a new chapter.",
      fr: "C’est la première œuvre que j’ai créée en France. Je venais d’arriver — une jeune fille qui découvrait encore un monde inconnu. Tout était nouveau, et pourtant je voyais encore le monde en couleurs. Cette œuvre conserve ce regard sincère, curieux et plein d’espoir. Le papillon peut évoquer la transformation et les nouveaux départs, tandis que les couleurs suggèrent un monde où tout semble encore possible. Elle garde la trace de ma première rencontre avec la France, au commencement d’un nouveau chapitre."
    }
  },
  {
    slug: "inner-world", year: "2024", title: { ka: "შინაგანი სამყარო", en: "Inner World", fr: "Monde intérieur" },
    medium: { ka: "აბსტრაქტული ფერწერა", en: "Abstract painting", fr: "Peinture abstraite" }, image: "/artworks/inner-world.jpeg",
    story: {
      ka: "ამ ნამუშევარში ჩემი შინაგანი სამყარო აბსტრაქტული ფორმებით, ფერებითა და ერთმანეთში გადახლართული ფიგურებით გამოვხატე. დაკვირვებისას მათში სახეები, სილუეტები და პატარა დეტალები იკვეთება. ნახატი მზა პასუხს არ გვთავაზობს — ის მაყურებელს საკუთარი ასოციაციების აღმოჩენის თავისუფლებას უტოვებს. შინაგანი სამყარო ჩემთვის მრავალშრიანი, ფერადი, წინააღმდეგობრივი და ბოლომდე ამოუხსნელია.",
      en: "In this work, I express my inner world through abstract forms, colours, and intertwined figures. Looking closely, faces, silhouettes, and small details begin to emerge. The painting offers no definitive answer; it leaves viewers free to discover their own associations. To me, the inner world is layered, colourful, contradictory, and never entirely understood.",
      fr: "Dans cette œuvre, j’exprime mon monde intérieur à travers des formes abstraites, des couleurs et des figures entrelacées. En observant attentivement, des visages, des silhouettes et de petits détails apparaissent. La peinture n’apporte pas de réponse définitive : elle laisse au spectateur la liberté de créer ses propres associations. Pour moi, le monde intérieur est multiple, coloré, contradictoire et impossible à comprendre entièrement."
    }
  },
  {
    slug: "flowers-in-saint-roman-de-codieres", year: "2026", title: { ka: "ყვავილები სენ-რომან-დე-კოდიერში", en: "Flowers in Saint-Roman-de-Codières", fr: "Fleurs à Saint-Roman-de-Codières" },
    medium: { ka: "იმპრესიონიზმით შთაგონებული ნატურმორტი", en: "Impressionist-inspired still life", fr: "Nature morte inspirée de l’impressionnisme" }, image: "/artworks/flowers-saint-roman.jpeg",
    story: {
      ka: "ეს ნამუშევარი საფრანგეთში, სენ-რომან-დე-კოდიერში, Le Savel-ში შევქმენი. მასში ბუნების მშვიდი მომენტია — ყვავილები ლითონის ჭურჭელში, ლურჯი ზედაპირი და შორეული ლანდშაფტი. ფერების ურთიერთობით, სინათლის შეგრძნებითა და თავისუფალი მონასმებით ვცდილობდი წამიერი შთაბეჭდილება შემენარჩუნებინა. ზოგჯერ ხელოვნებას განსაკუთრებული მოვლენა არ სჭირდება; საკმარისია შეჩერდე და ყოველდღიურობაში დამალული სილამაზე დაინახო.",
      en: "I created this painting in Le Savel, Saint-Roman-de-Codières, France. It captures a quiet moment: flowers in a simple metal jug, a blue surface, and a landscape in the distance. Through colour relationships, the impression of light, and free brushstrokes, I sought to preserve a fleeting impression. Art does not always need an extraordinary event; sometimes it is enough to pause and notice the beauty hidden in everyday life.",
      fr: "J’ai réalisé cette peinture au Savel, à Saint-Roman-de-Codières, en France. Elle capture un instant paisible : des fleurs dans un récipient en métal, une surface bleue et un paysage au loin. Par les relations entre les couleurs, la sensation de lumière et la liberté des coups de pinceau, j’ai cherché à préserver une impression fugitive. L’art n’a pas toujours besoin d’un événement extraordinaire ; parfois, il suffit de s’arrêter et de remarquer la beauté du quotidien."
    }
  },
  {
    slug: "symphony-of-flowers", year: "2026", title: { ka: "ყვავილების სიმფონია", en: "Symphony of Flowers", fr: "Symphonie florale" },
    medium: { ka: "ნატურმორტი, ტექსტურული ფერწერა", en: "Textured still life", fr: "Nature morte texturée" }, image: "/artworks/symphony-of-flowers.jpeg",
    story: {
      ka: "ამ ნამუშევარში ყვავილების მრავალფეროვნება ფერებისა და ფორმების თავისუფალ დიალოგად ვაქციე. მზესუმზირის ოქროსფერი სითბო, ვარდისფერი და იისფერი ყვავილების სინაზე და წითელი ტოტების მოძრაობა ერთ კომპოზიციაში ერთიანდება. თავისუფალი მონასმებითა და ტექსტურიანი ზედაპირებით ვცდილობდი სიცოცხლისა და მოძრაობის შეგრძნება გადმომეცა. ჩემთვის სილამაზე განსხვავებების ჰარმონიაშია.",
      en: "In this painting, the diversity of flowers becomes a free dialogue of colours and forms. The golden warmth of the sunflower, the delicacy of pink and purple blossoms, and the movement of red branches meet in one composition. Expressive brushstrokes and textured surfaces bring a sense of vitality and movement. For me, beauty lies in the harmony of differences.",
      fr: "Dans cette peinture, la diversité des fleurs devient un dialogue libre de couleurs et de formes. La chaleur dorée du tournesol, la délicatesse des fleurs roses et violettes et le mouvement des branches rouges se réunissent dans une même composition. Les coups de pinceau expressifs et les surfaces texturées apportent une sensation de vitalité. Pour moi, la beauté réside dans l’harmonie des différences."
    }
  },
  {
    slug: "woman-beyond-the-pages", year: "2023", title: { ka: "ქალი ფურცლებს მიღმა", en: "Woman Beyond the Pages", fr: "La Femme au-delà des pages" },
    medium: { ka: "აკრილი და კოლაჟი", en: "Acrylic and collage", fr: "Acrylique et collage" }, image: "/artworks/woman-beyond-pages.jpeg",
    story: {
      ka: "ეს ნამუშევარი საფრანგეთში ცხოვრებისას შევქმენი. ფონად ძველი ფრანგული წიგნების, ჟურნალებისა და გაზეთების გვერდები გამოვიყენე. ტექსტებისა და გაცვეთილი ქაღალდის ფენები წარსულის კვალსა და აწმყოს გამოცდილებას აერთიანებს. ქალის პორტრეტი ჩემთვის სიძლიერის სიმბოლოა — ქალის, რომელიც საკუთარ შინაგან სამყაროს ინარჩუნებს მაშინაც კი, როცა გარემო იცვლება. ძველი ტექსტების ფონზე ის თითქოს საკუთარ ისტორიას ატარებს, რომელიც ყოველთვის სიტყვებით არ გამოითქმის.",
      en: "Created while living in France, this painting combines a female portrait with a collage of pages from old French books, magazines, and newspapers. Printed text and aged paper bring traces of the past into the present. For me, the woman represents strength: someone who keeps hold of her inner world even as her surroundings change. Surrounded by fragments of other stories, she carries a story of her own—one that cannot always be expressed in words.",
      fr: "Créée lorsque je vivais en France, cette œuvre associe un portrait féminin à un collage de pages anciennes de livres, de magazines et de journaux français. Les textes imprimés et le papier patiné font entrer les traces du passé dans le présent. Pour moi, cette femme symbolise la force : celle qui préserve son monde intérieur même lorsque son environnement change. Entourée de fragments d’autres histoires, elle porte la sienne — une histoire qui ne peut pas toujours se dire avec des mots."
    }
  },
  {
    slug: "grief-in-bloom", year: "2023", title: { ka: "ყვავილებში დამალული ტკივილი", en: "Grief in Bloom", fr: "Le chagrin en fleurs" },
    medium: { ka: "შერეული ტექნიკა", en: "Mixed media", fr: "Technique mixte" }, image: "/artworks/grief-and-flowers.jpeg",
    story: {
      ka: "ეს ნახატი თავდაპირველად ჰარმონიულ ყვავილებში მოქცეულ გოგონაზე უნდა ყოფილიყო. მისი შექმნისას ბაბუა გარდამეცვალა. შორს, უცხო ქვეყანაში ყოფნის გამო, ვერ შევძელი ისე დამემშვიდობებინა და მეგლოვა, როგორც მინდოდა. ამ ტკივილმა ნამუშევრის ხასიათი შეცვალა: ფერები დამძიმდა, გამოსახულება უფრო ემოციური გახდა. ნახატი გლოვის, მონატრებისა და იმ სიყვარულის კვალია, რომელიც დანაკარგის შემდეგაც ჩვენში რჩება.",
      en: "This painting was originally imagined as a girl surrounded by harmonious flowers. While I was creating it, my grandfather passed away. Living far away in another country, I could not say goodbye or grieve in the way I needed to. That loss changed the work: its colours grew heavier and its mood more intense. The painting became a trace of grief, longing, and the love that remains within us after loss.",
      fr: "Au départ, j’imaginais une jeune fille entourée de fleurs harmonieuses. Pendant la création de cette œuvre, mon grand-père est décédé. Loin de chez moi, dans un pays étranger, je n’ai pas pu lui dire au revoir ni vivre mon deuil comme je l’aurais souhaité. Cette perte a transformé la peinture : les couleurs sont devenues plus lourdes et l’atmosphère plus intense. L’œuvre garde la trace du chagrin, du manque et de l’amour qui demeure après la perte."
    }
  },
  {
    slug: "georgia-for-freedom", year: "2026", title: { ka: "საქართველო — თავისუფლების იმედი", en: "Georgia — Hope for Freedom", fr: "Géorgie — l’espoir de liberté" },
    medium: { ka: "აკრილი ტილოზე", en: "Acrylic on canvas", fr: "Acrylique sur toile" }, image: "/artworks/georgia-for-freedom.jpeg",
    story: {
      ka: "ეს ნახატი ჩემი ყველაზე დიდი ტკივილისა და იმედის შესახებ არის — საქართველოს შესახებ, რომელიც დღეს იბრძვის ნათელი მომავლისთვის, თავისუფლებისთვის, დემოკრატიისთვის და თანასწორობისთვის. დროშა და ვარსკვლავებით მოფენილი ცა იმ ევროპულ გზას გამოხატავს, რომლისკენაც ბევრი ქართველი ისწრაფვის. თოვლიანი მთები ჩვენი ქვეყნის სილამაზესა და სიმტკიცეს გვახსენებს, ხალხის სილუეტები კი საერთო მომავლისთვის ერთად დგომას. ეს ნამუშევარი ჩემი ქვეყნისადმი სიყვარულის, შფოთვისა და რწმენის გამოხატულებაა — რწმენისა, რომ თავისუფლებისკენ სწრაფვა მომავალს კვლავ ანათებს.",
      en: "This painting holds both my deepest pain and my hope: Georgia, a country striving for a brighter future, freedom, democracy, and equality. The flag beneath a star-filled sky evokes the European path toward which many Georgians look. The snowy mountains speak of the country’s beauty and resilience, while the silhouettes of people suggest standing together for a shared future. This work expresses my love for Georgia, my worry for its present, and my belief that the pursuit of freedom can still light the way ahead.",
      fr: "Cette peinture porte à la fois ma douleur la plus profonde et mon espoir : celui de la Géorgie, qui lutte pour un avenir meilleur, la liberté, la démocratie et l’égalité. Le drapeau sous un ciel étoilé évoque la voie européenne vers laquelle se tournent de nombreux Géorgiens. Les montagnes enneigées rappellent la beauté et la résilience du pays, tandis que les silhouettes expriment l’unité face à l’avenir. Cette œuvre témoigne de mon amour pour la Géorgie, de mes inquiétudes pour son présent et de ma conviction que la quête de liberté peut encore éclairer le chemin à venir."
    }
  },
  {
    slug: "legacy-of-the-golden-age", year: "2024", title: { ka: "ოქროს ხანის მემკვიდრეობა", en: "The Legacy of the Golden Age", fr: "L’Héritage de l’âge d’or" },
    medium: { ka: "აკრილი და შერეული ტექნიკა ტილოზე", en: "Acrylic and mixed media on canvas", fr: "Acrylique et techniques mixtes sur toile" }, image: "/artworks/golden-age-legacy.jpeg",
    story: {
      ka: "ეს ნამუშევარი საქართველოს ისტორიისა და კულტურის ოქროს ხანას ეძღვნება, სადაც თამარ მეფისა და შოთა რუსთაველის „ვეფხისტყაოსნის“ სამყარო ერთ მხატვრულ ისტორიად ერთიანდება. თამარ მეფის სიმბოლური სახე ღირსებას, სიბრძნესა და კულტურის აყვავებას გამოხატავს, ვეფხვი კი სიმამაცეს, ერთგულებასა და შინაგან ძალას უკავშირდება. წიგნი იმ ლიტერატურულ მემკვიდრეობას განასახიერებს, რომელმაც საუკუნეებს გაუძლო. ჩემთვის ეს ნამუშევარი წარსულის ხსოვნა და ცოცხალი კულტურული მემკვიდრეობის აღნიშვნაა.",
      en: "This painting honours Georgia’s Golden Age, bringing together Queen Tamar and the world of Shota Rustaveli’s The Knight in the Panther’s Skin. The symbolic image of Tamar evokes dignity, wisdom, and cultural flourishing; the leopard suggests courage, loyalty, and inner strength. The book represents a literary heritage that has endured through centuries. For me, this work is both a remembrance of the past and a celebration of a living cultural legacy.",
      fr: "Cette peinture rend hommage à l’âge d’or de la Géorgie en réunissant la reine Tamar et l’univers du Chevalier à la peau de panthère de Chota Roustavéli. L’image symbolique de Tamar évoque la dignité, la sagesse et l’épanouissement culturel ; le léopard suggère le courage, la loyauté et la force intérieure. Le livre représente un héritage littéraire qui a traversé les siècles. Pour moi, cette œuvre est à la fois un souvenir du passé et une célébration d’un héritage culturel vivant."
    }
  }
] as const;
