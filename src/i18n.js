import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        contact: "Contact",
        bookNow: "Book Now",
        aboutTitle: "About Akoya",
        aboutDescription: "We provide premium laundry services.",

        services: "Services",
        visionMission: "Vision & Mission",
        clientLogin: "Client Login",

        signInToAccount: "Sign in to your account",
        emailAddress: "Email Address",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        signIn: "Sign in",
        newToAkoya: "New to AKOYA?",
        createYourAccount: "Create your account",
        resetYourPassword: "Reset your password",
        sendCode: "Send Code",
        rememberYourPassword: "Remember your password?",
        createPremiumAccount: "Create your premium account",
        fullName: "Full Name",
        confirmPassword: "Confirm Password",
        whatsappPhoneNumber: "WhatsApp Phone Number",
        enterYourFullName: "Enter your full name",
        enterFullWhatsApp:
          "Enter your full WhatsApp number with country code (e.g., +1234567890)",
        termsAndConditions: "terms and conditions",
        createAccount: "Create Account",
        alreadyHaveAccount: "Already have an account?",

        premiumGarmentCare: "Premium Garment Care",
        expertCleaning:
          "Expert cleaning for your most delicate fabrics",
        schedulePickup: "Schedule Pickup",
        ecoConsciousCleaning: "Eco-Conscious Cleaning",
        sustainableMethods:
          "Sustainable methods without compromising quality",

        signatureLines: "Signature Lines",
        akoyaCollection: "THE AKOYA COLLECTION",
        platinumCare: "The Platinum Care",
        platinumDescription:
          "Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue.",
        discover: "Discover ~",
        viewAllCollection: "View All Collection →",

        howWouldYouLikeItWashed: "How Would You Like It Washed?",
        chooseYourExperience: "CHOOSE YOUR EXPERIENCE",
        standardWash: "Standard Wash",
        standardWashDescription:
          "Our signature 48-hour service with gentle cleaning, eco-friendly detergents, and basic folding.",
        from50Qar: "From 50 QAR",
        expressWash: "Express Wash",
        expressWashDescription:
          "Need it fast? Get 24-hour turnaround, priority processing, and premium care.",
        from80Qar: "From 80 QAR",
        continueGarmentSelection: "Continue to Garment Selection",

        akoyaSignatureFragrances: "Akoya Signature Fragrances",
        premiumScents:
          "Premium scents crafted to elevate your laundry experience",
        add: "Add",

        maknoun: "Maknoun",
        mad: "Mad",
        lulwa: "Lulwa",
        sadf: "Sadf",
        marjan: "Marjan",

        maknounDescription:
          "A luxurious fragrance that embodies the charm of a confident man. A refined blend of fresh fruits, elegant florals, and a warm base of musk and amber, leaving an unforgettable signature.",
        madDescription:
          "A powerful masculine fragrance that radiates prestige and luxury. Its unique composition blends saffron, jasmine, and incense, with a leathery amber base for a timeless presence.",
        lulwaDescription:
          "The fragrance of radiant femininity, combining modern freshness with timeless elegance. A stunning blend of bergamot, ginger, and patchouli with a soft musky touch, leaving a memorable sparkle.",
        sadfDescription:
          "A refreshing fragrance for both men and women, featuring bright citrus notes, warm ginger, and ambergris for an elegant and long-lasting touch.",
        marjanDescription:
          "A fragrance born from the depths of the sea, opening with the freshness of Calabrian bergamot and a touch of black pepper and Sichuan pepper warmth. At its heart, the softness of lavender blends with the elegance of geranium for timeless balance and sophistication. The base features deep patchouli, warm cedarwood, vetiver, and ambroxan, with a gentle vanilla touch for lasting warmth.",

        perfumePrice: "4-8 QAR",

        theFinalTouch: "The Final Touch",
        packagingOptions: "PACKAGING OPTIONS",

        plasticWrap: "Plastic Wrap",
        plasticWrapDescription:
          "Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.",
        included: "Included",
        medicalGradeTransparency: "Medical-grade transparency",
        antiStaticInterior: "Anti-static interior",
        recyclableMaterial: "Recyclable material",
        tamperEvidentClosure: "Tamper-evident closure",

        luxuryFabricWrap: "Luxury Fabric Wrap",
        luxuryFabricWrapDescription:
          "Cashmere-lined protective casing with magnetic closure and monogram option.",
        plus10Qar: "+10 QAR",
        italianWoolExterior: "Italian wool exterior",
        silkLinedInterior: "Silk-lined interior",
        magneticSeal: "Magnetic seal",
        reusableDesign: "Reusable design",

        premiumWrappingBox: "Premium Wrapping Box",
        premiumWrappingBoxDescription:
          "Handcrafted wooden presentation case with velvet interior and scent capsule.",
        plus4Qar: "+4 QAR",
        sandalwoodConstruction: "Sandalwood construction",
        frenchVelvetLining: "French velvet lining",
        integratedScentCapsule: "Integrated scent capsule",
        heirloomQuality: "Heirloom quality",

        selected: "SELECTED",
        bookYourOrder: "Book your Order",

        howItWorks: "How It Works",
        seamlessPickupProcess: "SEAMLESS PICKUP PROCESS",

        scheduleYourPickup: "Schedule Your Pickup",
        schedulePickupDescription:
          "Book through our app, WhatsApp, or website. We offer flexible 2-hour pickup windows.",
        bookingAvailability: "24/7 booking availability",
        recurringPickup:
          "Recurring pickup scheduling available",

        professionalCollection: "Professional Collection",
        professionalCollectionDescription:
          "Our trained team collects your garments carefully from your doorstep.",
        convenientPickup: "Convenient pickup available",
        professionalDrivers: "Professional drivers",

        expertProcessing: "Expert Processing",
        expertProcessingDescription:
          "Your garments are carefully processed using our professional cleaning methods.",
        advancedGarmentCleaning: "Advanced garment cleaning",
        qualityControl: "Quality control at every stage",

        luxuryDelivery: "Luxury Delivery",
        luxuryDeliveryDescription:
          "Impeccably packaged garments are delivered right to your door.",
        sameDayDelivery: "Same-day delivery available",
        longLastingFreshness: "Long-lasting freshness assured",

        exclusive: "EXCLUSIVE",
        akoyaClub: "Akoya Club",
        forTheFewWhoKnow: "FOR THE FEW WHO KNOW",
        akoyaClubDescription:
          "Our invitation-only membership program offers unparalleled benefits for those who demand the absolute best in garment care and convenience.",

        priorityScheduling:
          "Priority scheduling with 2-hour pickup windows",
        dedicatedGarmentConcierge:
          "Dedicated garment concierge",
        complimentaryFragrance:
          "Complimentary fragrance infusion",
        luxuryPackaging:
          "Luxury packaging as standard",
        coutureCare:
          "Bi-annual complimentary couture care",
        exclusiveSeasonalOffers:
          "Exclusive seasonal offers",

        requestInvitation: "Request Invitation ＋",
        learnMore: "Learn More ⓘ",

        emailRequired: "Email is required",
        passwordRequired: "Password is required",
        fullNameRequired: "Full name is required",
        confirmPasswordRequired:
          "Confirm password is required",
        passwordsDoNotMatch:
          "Passwords do not match",
        whatsappRequired:
          "WhatsApp number is required",
        loginSuccessfully:
          "Login Successfully",
        checkYourInbox:
          "Check your inbox",
        accountCreatedSuccessfully:
          "Account Created Successfully",

        welcomeDearGuests: "Welcome dear guests",
        welcomeMessage1:
          "We're delighted to have you visit AKOYA Premium Laundry.",
        welcomeMessage2:
          "Experience our exceptional laundry and garment care",
        welcomeMessage3:
          "services",
        popupAutoClose:
          "This message will close automatically in 10 seconds",

        footerDescription:
          "Premium laundry and garment care services designed for your finest clothes.",

        ourServices: "Our Services",
        premiumLaundry: "Premium Laundry",
        dryCleaning: "Dry Cleaning",
        steamPressing: "Steam Pressing",
        fragranceInfusion: "Fragrance Infusion",
        coutureCare: "Couture Care",
        vipClub: "VIP Club",

        contactUs: "Contact Us",
        area: "Area",
        zone: "Zone",
        streetNo: "Street No.",
        buildingNo: "Building No.",

        newsletter: "Newsletter",
        newsletterDescription:
          "Subscribe to our newsletter for exclusive offers and updates.",
        subscribe: "Subscribe",

        allRightsReserved: "All Rights Reserved",
        privacyPolicy: "Privacy Policy",
        termsOfServices: "Terms of Services",
        sitemap: "Sitemap",
        poweredBy: "Powered by",

        visionPage: {
          title: "Vision & Mission",
          subtitle: "Akoya Premium Laundry",
          description: "Redefining Fabric Care and Personal Luxury in Qatar",

          excellenceTitle: "Excellence in Every Detail",
          excellenceSubtitle: "Technology, Artistry, and Care",

          experienceTitle: "Experience Excellence Today",
          bookNow: "Book Now",

          ourVision: "Our Vision",
          visionText:
            "To redefine fabric care and personal luxury in Qatar through innovation, fragrance, and flawless service — making Akoya Premium Laundry the symbol of elegance and trust in every home",

          missionText:
            "At Akoya Premium Laundry, we strive to offer premium laundry, delivery, and custom perfume solutions that combine technology, artistry, and care. Our mission is to transform daily routines into refined experiences through exceptional service, attention to detail, and sustainable practices.",

          ourMission: "Our Mission",

          coreValues: "Our Core Values",

          core: {
            0: {
              title: "Excellence",
              des: "Every item, every wash, every fragrance meets the highest standards.",
            },
            1: {
              title: "Innovation",
              des: "We use advanced systems and smart logistics to deliver faster and cleaner results.",
            },
            2: {
              title: "Sustainability",
              des: "We commit to eco-friendly methods and responsible operations.",
            },
            3: {
              title: "Customer Focus",
              des: "Your satisfaction drives everything we do.",
            },
          },
        },

        aboutPage: {
          hero: {
            title: "Luxury Laundry. Reimagined.",
            button: "Schedule Your Pickup",
          },

          choose: {
            title: "Why Choose",
            premiumQuality: {
              title: "Premium Quality",
              des: "We use only the finest eco-friendly detergents and state-of-the-art equipment",
            },
            personalizedService: {
              title: "Personalized Service",
              des: "Tailored solutions for each garment with our expert fabric specialists",
            },
            convenience: {
              title: "Convenience",
              des: "24/7 booking with flexible pickup and delivery options",
            },
          },

          journey: {
            title: "Our Service Journey",

            selectWashType: {
              title: "1. Select Wash Type",
              des: "Standard or Express wash options to suit your needs",
            },

            chooseGarments: {
              title: "2. Choose Garments",
              des: "From daily wear to delicate couture - we handle all",
            },

            steamFinishing: {
              title: "3. Steam Finishing",
              des: "Professional pressing for impeccable results",
            },

            fragranceInfusion: {
              title: "4. Fragrance Infusion",
              des: "Luxury scents for men and women",
            },

            packaging: {
              title: "5. Packaging",
              des: "Choose from our premium wrapping options",
            },

            personalization: {
              title: "6. Personalization",
              des: "Add a custom card for gifts",
            },

            whatsappCheckout: {
              title: "7. WhatsApp Checkout",
              des: "Easy confirmation via WhatsApp",
            },

            aiAssistance: {
              title: "8. AI Assistance",
              des: "3D avatars guide you in Arabic & English",
            },
          },

          specialists: {
            title: "Meet Our Fabric Specialists",
            description:
              "Our team of garment care experts brings decades of combined experience in handling luxury",
            descriptionSecond: "fabrics",

            ahmed: {
              name: "Ahmed Al-Mansoori",
              post: "Head of Couture Care",
              des: "20+ years in luxury garment care",
            },

            layla: {
              name: "Layla Hassan",
              post: "Fabric Technology Expert",
              des: "Fabric scientist and preservation expert",
            },

            yousef: {
              name: "Yousef Ibrahim",
              post: "Operations Director",
              des: "Ensuring seamless service delivery",
            },
          },
        },

        contactPage: {
          hero: {
            title: "Contact AKOYA",
            description:
              "We’re here to provide exceptional garment care and personalized service.",
            professionalCare: "Professional Garment Care",
            professionalDescription:
              "Expert care for your most delicate and valuable garments.",
            expressService: "Express Laundry Service",
            expressDescription:
              "Fast, reliable, and premium laundry service when you need it.",
          },

          contactUs: "Contact Us",
          getInTouch: "GET IN TOUCH",

          howToReachUs: "How to Reach Us",
          conciergeDescription:
            "Our concierge team is ready to assist you with any questions, bookings, or special garment care requests.",

          location: "Location",
          address: "Doha, Qatar",

          phone: "Phone",
          email: "Email",

          followUs: "Follow Us",

          sendMessage: "Send Us a Message",
          fullName: "Full Name",
          namePlaceholder: "Enter your full name",

          emailAddress: "Email Address",
          emailPlaceholder: "Enter your email address",

          yourMessage: "Your Message",
          messagePlaceholder: "Write your message here...",

          sendMessageButton: "Send Message",
        },

        servicePage: {
          hero: {
            slide1: {
              title: "Premium Garment Care",
              subtitle: "Experience the Akoya difference",
            },

            slide2: {
              title: "Precision Fabric Care",
              subtitle: "Tailored to your garment's needs",
            },

            slide3: {
              title: "Luxury Laundry Services",
              subtitle: "For the most discerning clients",
            },
          },

          bookCollection: "Book a Collection",

          ourServices: "Our Services",
          luxuryGarmentCare: "LUXURY GARMENT CARE",

          categories: {
            All: "All",
            "Dry Cleaning": "Dry Cleaning",
            Pressing: "Pressing",
            Specialty: "Specialty",
            Traditional: "Traditional",
            Express: "Express",
            "Add-On": "Add-On",
          },

          from: "From",
          order: "Order",

          products: {
            "Dry Cleaning": {
              name: "Dry Cleaning",
              description:
                "Expert care for suits and delicate fabrics using eco-friendly solvents",
            },

            "Gent Suit (3pcs)": {
              name: "Gent Suit (3pcs)",
              description:
                "Complete care for 3-piece suits",
            },

            "Dress (Short)": {
              name: "Dress (Short)",
              description:
                "Care for cocktail and summer dresses",
            },

            "Dress (Long)": {
              name: "Dress (Long)",
              description:
                "Specialized care for evening gowns",
            },

            Overcoat: {
              name: "Overcoat",
              description:
                "Winter coat cleaning and preservation",
            },

            "Executive Pressing": {
              name: "Executive Pressing",
              description:
                "Crisp finishes for business attire with precision steam technology",
            },

            "Couture Care": {
              name: "Couture Care",
              description:
                "Hand-cleaning for designer garments and delicate fabrics",
            },

            "Military Uniform": {
              name: "Military Uniform",
              description:
                "Regimental standard cleaning and pressing",
            },

            "Blouse (Special)": {
              name: "Blouse (Special)",
              description:
                "Delicate care for embellished tops",
            },

            "Bath Robe": {
              name: "Bath Robe",
              description:
                "Deep cleaning for plush bathrobes",
            },

            Dishdasha: {
              name: "Dishdasha",
              description:
                "Professional care for men's traditional Qatari garment",
            },

            "Child Dishdasha": {
              name: "Child Dishdasha",
              description:
                "Specialized care for children's traditional garments",
            },

            Bisht: {
              name: "Bisht",
              description:
                "Premium care for ceremonial cloak with gold detailing",
            },

            Ghutra: {
              name: "Ghutra",
              description:
                "Gentle cleaning for traditional headwear",
            },

            Kurta: {
              name: "Kurta",
              description:
                "Care for traditional South Asian tunic",
            },

            "Kurta Pyjama (Set)": {
              name: "Kurta Pyjama (Set)",
              description:
                "Complete set cleaning for traditional attire",
            },

            Kameez: {
              name: "Kameez",
              description:
                "Professional care for traditional long shirts",
            },

            Jalabiya: {
              name: "Jalabiya",
              description:
                "Specialized care for flowing traditional gowns",
            },

            Abaya: {
              name: "Abaya",
              description:
                "Professional cleaning for everyday abayas",
            },

            "Abaya Special": {
              name: "Abaya Special",
              description:
                "Premium care for embellished abayas",
            },

            Hijab: {
              name: "Hijab",
              description:
                "Delicate cleaning for headscarves",
            },

            "Express Service": {
              name: "Express Service",
              description:
                "3-hour turnaround for urgent garment needs",
            },

            "Fragrance Infusion": {
              name: "Fragrance Infusion",
              description:
                "Luxury scent options for your garments",
            },
          },

          personalizedService: {
            title: "Need Personalized Service?",
            description:
              "Our VIP concierge team is available 24/7 to handle special requests, delicate items, or bulk orders for businesses and residences.",
            contactConcierge: "Contact Concierge",
          },
        },

        bookNowPage: {
          title: "AKOYA PREMIUM LAUNDRY",
          step: "Step 1 of 1",

          chooseServiceType: "Choose Service Type:",
          selectItem: "Select item type, then choose service",

          genders: {
            Men: "Men",
            Women: "Women",
            Others: "Others",
            mens: "Men's",
            womens: "Women's",
            others: "Others",
          },

          serviceOptions: {
            washing: "Washing & Ironing",
            washingPerfume:
              "Washing, Ironing, and Perfume Services",
            dryClean: "Dry Clean",
          },

          chooseService: "Choose service for this item",

          items: {
            "👔 Thobe": "👔 Thobe",
            "🧥 Bisht": "🧥 Bisht",
            "🦹🏻‍♂️ Men's Suit": "🦹🏻‍♂️ Men's Suit",
            "👳 Ghutra": "👳 Ghutra",
            "👕 Shirt": "👕 Shirt",
            "👕 T-Shirt": "👕 T-Shirt",
            "🦺 Vest": "🦺 Vest",
            "🧥 Coat": "🧥 Coat",
            "🩳 Pajamas": "🩳 Pajamas",
            "🎖️ Military Uniform": "🎖️ Military Uniform",
            "🎖️1 Military Uniform One Piece":
              "🎖️1 Military Uniform One Piece",
            "🦸🏻 Overalls": "🦸🏻 Overalls",
            "🥼 Lab Coat": "🥼 Lab Coat",
            "👕 UnderShirt": "👕 UnderShirt",
            "👖 Pants": "👖 Pants",
            "🦸🏻 Coverall": "🦸🏻 Coverall",
            "🧥 Wool Sweater": "🧥 Wool Sweater",
            "🦺 Reflective Jacket": "🦺 Reflective Jacket",
            "👛 Sack": "👛 Sack",
            "🧥 Fur": "🧥 Fur",
            "🥻 Woolen": "🥻 Woolen",

            "🧕🏻 Abaya + Sheilah": "🧕🏻 Abaya + Sheilah",
            "🧕🏻 Abaya Only": "🧕🏻 Abaya Only",
            "🧣 Sheilah": "🧣 Sheilah",

            "Double Bed Cover": "Double Bed Cover",
            "Single Bed Cover": "Single Bed Cover",
            "Double Bed Sheet": "Double Bed Sheet",
            "Single Bed Sheet": "Single Bed Sheet",
            "Double Blanket": "Double Blanket",
            "Single Blanket": "Single Blanket",
            "Small Towel": "Small Towel",
            "Large Towel": "Large Towel",
            "Pillowcase": "Pillowcase",
            "Large Feather Pillow": "Large Feather Pillow",
            "Small Curtain Lining": "Small Curtain Lining",
            "Large Curtain Lining": "Large Curtain Lining",
            "Large Curtain": "Large Curtain",
            "Extra Large Curtain": "Extra Large Curtain",
            "Bedspread with Embroidery":
              "Bedspread with Embroidery",
          },

          orderSummary: "Order Summary",
          serviceType: "Service Type:",
          garments: "Garments:",

          coupon: {
            placeholder: "Enter coupon code",
            apply: "Apply Coupon",
            loading: "Loading...",
            enterCode: "Please enter coupon code",
            invalid: "Invalid coupon code",
          },

          finalPrice: "Final Price",
        },
      },
    },

    ar: {
      translation: {
        home: "الرئيسية",
        about: "من نحن",
        contact: "اتصل بنا",
        bookNow: "احجز الآن",
        aboutTitle: "عن أكويا",
        aboutDescription: "نقدم خدمات غسيل فاخرة.",

        services: "الخدمات",
        visionMission: "الرؤية والرسالة",
        clientLogin: "تسجيل دخول العميل",

        signInToAccount:
          "تسجيل الدخول إلى حسابك",
        emailAddress: "البريد الإلكتروني",
        password: "كلمة المرور",
        rememberMe: "تذكرني",
        forgotPassword:
          "هل نسيت كلمة المرور؟",
        signIn: "تسجيل الدخول",
        newToAkoya: "جديد على أكويا؟",
        createYourAccount: "أنشئ حسابك",
        resetYourPassword:
          "إعادة تعيين كلمة المرور",
        sendCode: "إرسال الرمز",
        rememberYourPassword:
          "هل تتذكر كلمة المرور؟",
        createPremiumAccount:
          "أنشئ حسابك المميز",
        fullName: "الاسم الكامل",
        confirmPassword:
          "تأكيد كلمة المرور",
        whatsappPhoneNumber:
          "رقم واتساب",
        enterYourFullName:
          "أدخل اسمك الكامل",
        enterFullWhatsApp:
          "أدخل رقم واتساب الكامل مع رمز الدولة (مثال: +1234567890)",
        termsAndConditions:
          "الشروط والأحكام",
        createAccount:
          "إنشاء الحساب",
        alreadyHaveAccount:
          "لديك حساب بالفعل؟",

        premiumGarmentCare:
          "العناية الفاخرة بالملابس",
        expertCleaning:
          "تنظيف احترافي لأكثر أقمشتك حساسية",
        schedulePickup:
          "جدولة الاستلام",
        ecoConsciousCleaning:
          "تنظيف صديق للبيئة",
        sustainableMethods:
          "طرق مستدامة دون التنازل عن الجودة",

        signatureLines:
          "مجموعاتنا المميزة",
        akoyaCollection:
          "مجموعة أكويا",
        platinumCare:
          "العناية البلاتينية",
        platinumDescription:
          "خدمتنا الأعلى مستوى لملابسك الثمينة. غسيل يدوي، وتبخير، وتغليف بمناديل واقية.",
        discover: "اكتشف ~",
        viewAllCollection:
          "عرض المجموعة كاملة →",

        howWouldYouLikeItWashed:
          "كيف تريد غسل ملابسك؟",
        chooseYourExperience:
          "اختر تجربتك",
        standardWash:
          "الغسيل العادي",
        standardWashDescription:
          "خدمتنا المميزة خلال 48 ساعة مع تنظيف لطيف ومنظفات صديقة للبيئة وطي أساسي.",
        from50Qar:
          "ابتداءً من 50 ريال",
        expressWash:
          "الغسيل السريع",
        expressWashDescription:
          "تحتاجها بسرعة؟ احصل على خدمة خلال 24 ساعة، ومعالجة ذات أولوية وعناية مميزة.",
        from80Qar:
          "ابتداءً من 80 ريال",
        continueGarmentSelection:
          "المتابعة لاختيار الملابس",

        akoyaSignatureFragrances:
          "عطور أكويا المميزة",
        premiumScents:
          "روائح فاخرة مصممة للارتقاء بتجربة غسيل ملابسك",
        add: "إضافة",

        maknoun: "مكنون",
        mad: "ماد",
        lulwa: "لؤلؤة",
        sadf: "صدف",
        marjan: "مرجان",

        maknounDescription:
          "عطر فاخر يجسد سحر الرجل الواثق. مزيج راقٍ من الفواكه الطازجة والزهور الأنيقة وقاعدة دافئة من المسك والعنبر، ليترك بصمة لا تُنسى.",
        madDescription:
          "عطر رجالي قوي ينبض بالفخامة والرقي. تركيبته الفريدة تجمع بين الزعفران والياسمين والبخور، مع قاعدة من العنبر والجلد لحضور خالد.",
        lulwaDescription:
          "عطر الأنوثة المشرقة، يجمع بين الانتعاش العصري والأناقة الخالدة. مزيج رائع من البرغموت والزنجبيل والباتشولي مع لمسة مسكية ناعمة.",
        sadfDescription:
          "عطر منعش للرجال والنساء، يتميز بنفحات الحمضيات المشرقة والزنجبيل الدافئ والعنبر لإضفاء لمسة أنيقة وطويلة الأمد.",
        marjanDescription:
          "عطر مستوحى من أعماق البحر، يبدأ بانتعاش البرغموت الكالابري ولمسة من الفلفل الأسود وفلفل سيشوان الدافئ. في قلبه يمتزج نعومة اللافندر مع أناقة إبرة الراعي لتحقيق توازن ورقي خالد. وتتميز قاعدته بالباتشولي وخشب الأرز الدافئ والفيتيفر والأمبروكسان، مع لمسة فانيليا ناعمة لدفء يدوم طويلًا.",

        perfumePrice:
          "4-8 ريال",

        theFinalTouch:
          "اللمسة الأخيرة",
        packagingOptions:
          "خيارات التغليف",

        plasticWrap:
          "التغليف البلاستيكي",
        plasticWrapDescription:
          "تغليف واقٍ شفاف مع ختمنا الذهبي المنقوش لإضفاء فخامة راقية.",
        included:
          "مشمول",
        medicalGradeTransparency:
          "شفافية بدرجة طبية",
        antiStaticInterior:
          "بطانة داخلية مضادة للكهرباء الساكنة",
        recyclableMaterial:
          "مواد قابلة لإعادة التدوير",
        tamperEvidentClosure:
          "إغلاق يكشف العبث",

        luxuryFabricWrap:
          "التغليف القماشي الفاخر",
        luxuryFabricWrapDescription:
          "غلاف واقٍ مبطن بالكشمير مع إغلاق مغناطيسي وخيار إضافة الأحرف الأولى.",
        plus10Qar:
          "+10 ريال",
        italianWoolExterior:
          "سطح خارجي من الصوف الإيطالي",
        silkLinedInterior:
          "بطانة داخلية من الحرير",
        magneticSeal:
          "إغلاق مغناطيسي",
        reusableDesign:
          "تصميم قابل لإعادة الاستخدام",

        premiumWrappingBox:
          "صندوق التغليف الفاخر",
        premiumWrappingBoxDescription:
          "صندوق عرض خشبي مصنوع يدويًا ببطانة مخملية وكبسولة عطرية.",
        plus4Qar:
          "+4 ريال",
        sandalwoodConstruction:
          "مصنوع من خشب الصندل",
        frenchVelvetLining:
          "بطانة من المخمل الفرنسي",
        integratedScentCapsule:
          "كبسولة عطرية مدمجة",
        heirloomQuality:
          "جودة تدوم للأجيال",

        selected:
          "تم الاختيار",
        bookYourOrder:
          "احجز طلبك",

        howItWorks:
          "كيف تعمل الخدمة",
        seamlessPickupProcess:
          "عملية استلام سلسة",

        scheduleYourPickup:
          "جدولة الاستلام",
        schedulePickupDescription:
          "احجز من خلال تطبيقنا أو واتساب أو موقعنا الإلكتروني. نوفر فترات استلام مرنة لمدة ساعتين.",
        bookingAvailability:
          "الحجز متاح على مدار الساعة",
        recurringPickup:
          "إمكانية جدولة الاستلام المتكرر",

        professionalCollection:
          "الاستلام الاحترافي",
        professionalCollectionDescription:
          "يقوم فريقنا المدرب بجمع ملابسك بعناية من أمام منزلك.",
        convenientPickup:
          "استلام مريح ومتاح",
        professionalDrivers:
          "سائقون محترفون",

        expertProcessing:
          "المعالجة الاحترافية",
        expertProcessingDescription:
          "تتم معالجة ملابسك بعناية باستخدام طرق التنظيف الاحترافية لدينا.",
        advancedGarmentCleaning:
          "تنظيف متقدم للملابس",
        qualityControl:
          "مراقبة الجودة في كل مرحلة",

        luxuryDelivery:
          "التوصيل الفاخر",
        luxuryDeliveryDescription:
          "يتم توصيل الملابس المغلفة بعناية إلى باب منزلك.",
        sameDayDelivery:
          "التوصيل في نفس اليوم متاح",
        longLastingFreshness:
          "نضارة تدوم طويلًا",

        exclusive:
          "حصري",
        akoyaClub:
          "نادي أكويا",
        forTheFewWhoKnow:
          "للقلة الذين يعرفون",
        akoyaClubDescription:
          "يوفر برنامج العضوية الحصري بالدعوة فقط مزايا استثنائية لأولئك الذين يطلبون أعلى مستويات العناية بالملابس والراحة.",

        priorityScheduling:
          "جدولة ذات أولوية مع فترات استلام لمدة ساعتين",
        dedicatedGarmentConcierge:
          "مستشار مخصص للعناية بالملابس",
        complimentaryFragrance:
          "إضافة عطر مجانية",
        luxuryPackaging:
          "تغليف فاخر كمعيار أساسي",
        coutureCare:
          "عناية مجانية بالأزياء الراقية مرتين سنويًا",
        exclusiveSeasonalOffers:
          "عروض موسمية حصرية",

        requestInvitation:
          "طلب دعوة ＋",
        learnMore:
          "اعرف المزيد ⓘ",

        emailRequired:
          "البريد الإلكتروني مطلوب",
        passwordRequired:
          "كلمة المرور مطلوبة",
        fullNameRequired:
          "الاسم الكامل مطلوب",
        confirmPasswordRequired:
          "تأكيد كلمة المرور مطلوب",
        passwordsDoNotMatch:
          "كلمتا المرور غير متطابقتين",
        whatsappRequired:
          "رقم واتساب مطلوب",
        loginSuccessfully:
          "تم تسجيل الدخول بنجاح",
        checkYourInbox:
          "تحقق من بريدك الوارد",
        accountCreatedSuccessfully:
          "تم إنشاء الحساب بنجاح",

        welcomeDearGuests:
          "مرحباً بضيوفنا الكرام",
        welcomeMessage1:
          "يسعدنا أن نرحب بكم في أكويا للمغسلة الفاخرة.",
        welcomeMessage2:
          "استمتعوا بخدماتنا الاستثنائية للعناية بالملابس والغسيل",
        welcomeMessage3:
          "والملابس الفاخرة",
        popupAutoClose:
          "ستُغلق هذه الرسالة تلقائياً خلال 10 ثوانٍ",

        footerDescription:
          "خدمات غسيل وعناية فاخرة بالملابس مصممة لأجود ملابسك.",

        ourServices:
          "خدماتنا",
        premiumLaundry:
          "الغسيل الفاخر",
        dryCleaning:
          "التنظيف الجاف",
        steamPressing:
          "الكي بالبخار",
        fragranceInfusion:
          "إضافة العطر",
        coutureCare:
          "العناية بالأزياء الراقية",
        vipClub:
          "نادي كبار الشخصيات",

        contactUs:
          "اتصل بنا",
        area:
          "المنطقة",
        zone:
          "الزون",
        streetNo:
          "رقم الشارع",
        buildingNo:
          "رقم المبنى",

        newsletter:
          "النشرة البريدية",
        newsletterDescription:
          "اشترك في نشرتنا البريدية للحصول على العروض الحصرية وآخر التحديثات.",
        subscribe:
          "اشترك",

        allRightsReserved:
          "جميع الحقوق محفوظة",
        privacyPolicy:
          "سياسة الخصوصية",
        termsOfServices:
          "شروط الخدمة",
        sitemap:
          "خريطة الموقع",
        poweredBy:
          "بدعم من",

        visionPage: {
          title: "الرؤية والرسالة",
          subtitle: "أكويا للغسيل الفاخر",
          description: "إعادة تعريف العناية بالأقمشة والفخامة الشخصية في قطر",

          excellenceTitle: "التميز في كل تفصيل",
          excellenceSubtitle: "التكنولوجيا، الحرفية، والعناية",

          experienceTitle: "اختبر التميز اليوم",
          bookNow: "احجز الآن",

          ourVision: "رؤيتنا",
          visionText:
            "إعادة تعريف العناية بالأقمشة والفخامة الشخصية في قطر من خلال الابتكار والعطور والخدمة المثالية، لجعل أكويا للغسيل الفاخر رمزًا للأناقة والثقة في كل منزل",

          missionText:
            "في أكويا للغسيل الفاخر، نسعى لتقديم حلول غسيل وتوصيل وعطور مخصصة تجمع بين التكنولوجيا والحرفية والعناية. تتمثل رسالتنا في تحويل الروتين اليومي إلى تجارب راقية من خلال الخدمة الاستثنائية والاهتمام بالتفاصيل والممارسات المستدامة.",

          ourMission: "رسالتنا",

          coreValues: "قيمنا الأساسية",

          core: {
            0: {
              title: "التميز",
              des: "كل قطعة وكل عملية غسيل وكل عطر يلتزم بأعلى معايير الجودة.",
            },
            1: {
              title: "الابتكار",
              des: "نستخدم أنظمة متقدمة ولوجستيات ذكية لتقديم نتائج أسرع وأنظف.",
            },
            2: {
              title: "الاستدامة",
              des: "نلتزم بأساليب صديقة للبيئة وعمليات مسؤولة.",
            },
            3: {
              title: "التركيز على العملاء",
              des: "رضاكم هو ما يدفع كل ما نقوم به.",
            },
          },
        },

        aboutPage: {
          hero: {
            title:
              "غسيل فاخر. بتصوّر جديد.",
            button:
              "احجز موعد الاستلام",
          },

          choose: {
            title:
              "لماذا تختار",

            premiumQuality: {
              title:
                "جودة فائقة",
              des:
                "نستخدم فقط أفضل المنظفات الصديقة للبيئة وأحدث المعدات",
            },

            personalizedService: {
              title:
                "خدمة مخصصة",
              des:
                "حلول مصممة لكل قطعة ملابس مع خبراء متخصصين في الأقمشة",
            },

            convenience: {
              title:
                "الراحة",
              des:
                "حجز على مدار الساعة طوال أيام الأسبوع مع خيارات مرنة للاستلام والتوصيل",
            },
          },

          journey: {
            title:
              "رحلة خدمتنا",

            selectWashType: {
              title:
                "1. اختر نوع الغسيل",
              des:
                "خيارات الغسيل العادي أو السريع لتناسب احتياجاتك",
            },

            chooseGarments: {
              title:
                "2. اختر الملابس",
              des:
                "من الملابس اليومية إلى أزياء الكوتور الفاخرة - نتعامل مع الجميع",
            },

            steamFinishing: {
              title:
                "3. التشطيب بالبخار",
              des:
                "كي احترافي للحصول على نتائج مثالية",
            },

            fragranceInfusion: {
              title:
                "4. إضافة العطر",
              des:
                "روائح فاخرة للرجال والنساء",
            },

            packaging: {
              title:
                "5. التغليف",
              des:
                "اختر من خيارات التغليف الفاخرة لدينا",
            },

            personalization: {
              title:
                "6. التخصيص",
              des:
                "أضف بطاقة مخصصة للهدايا",
            },

            whatsappCheckout: {
              title:
                "7. إتمام الطلب عبر واتساب",
              des:
                "تأكيد سهل عبر واتساب",
            },

            aiAssistance: {
              title:
                "8. المساعدة بالذكاء الاصطناعي",
              des:
                "تساعدك الصور الرمزية ثلاثية الأبعاد باللغتين العربية والإنجليزية",
            },
          },

          specialists: {
            title:
              "تعرّف على خبراء الأقمشة لدينا",

            description:
              "يتمتع فريق خبراء العناية بالملابس لدينا بعقود من الخبرة المشتركة في التعامل مع الأقمشة الفاخرة",

            descriptionSecond:
              "الفاخرة",

            ahmed: {
              name:
                "أحمد المنصوري",
              post:
                "رئيس قسم العناية بالكوتور",
              des:
                "أكثر من 20 عامًا في العناية بالملابس الفاخرة",
            },

            layla: {
              name:
                "ليلى حسن",
              post:
                "خبيرة تكنولوجيا الأقمشة",
              des:
                "عالمة أقمشة وخبيرة في الحفاظ عليها",
            },

            yousef: {
              name:
                "يوسف إبراهيم",
              post:
                "مدير العمليات",
              des:
                "ضمان تقديم خدمة سلسة",
            },
          },
        },

        contactPage: {
          hero: {
            title:
              "تواصل مع أكويا",
            description:
              "نحن هنا لتقديم عناية استثنائية بالملابس وخدمة شخصية مميزة.",
            professionalCare:
              "العناية الاحترافية بالملابس",
            professionalDescription:
              "عناية متخصصة لأكثر ملابسك حساسية وقيمة.",
            expressService:
              "خدمة الغسيل السريع",
            expressDescription:
              "خدمة غسيل سريعة وموثوقة وفاخرة عندما تحتاج إليها.",
          },

          contactUs:
            "اتصل بنا",
          getInTouch:
            "تواصل معنا",

          howToReachUs:
            "كيفية الوصول إلينا",
          conciergeDescription:
            "فريق خدمة العملاء لدينا مستعد لمساعدتك في أي استفسارات أو حجوزات أو طلبات خاصة للعناية بالملابس.",

          location:
            "الموقع",
          address:
            "الدوحة، قطر",

          phone:
            "الهاتف",
          email:
            "البريد الإلكتروني",

          followUs:
            "تابعنا",

          sendMessage:
            "أرسل لنا رسالة",
          fullName:
            "الاسم الكامل",
          namePlaceholder:
            "أدخل اسمك الكامل",

          emailAddress:
            "البريد الإلكتروني",
          emailPlaceholder:
            "أدخل بريدك الإلكتروني",

          yourMessage:
            "رسالتك",
          messagePlaceholder:
            "اكتب رسالتك هنا...",

          sendMessageButton:
            "إرسال الرسالة",
        },

        servicePage: {
          hero: {
            slide1: {
              title:
                "العناية الفاخرة بالملابس",
              subtitle:
                "اكتشف الفرق مع أكويا",
            },

            slide2: {
              title:
                "العناية الدقيقة بالأقمشة",
              subtitle:
                "مصممة لتناسب احتياجات ملابسك",
            },

            slide3: {
              title:
                "خدمات الغسيل الفاخرة",
              subtitle:
                "لأكثر العملاء تميزًا",
            },
          },

          bookCollection:
            "احجز موعد الاستلام",

          ourServices:
            "خدماتنا",

          luxuryGarmentCare:
            "العناية الفاخرة بالملابس",

          categories: {
            All:
              "الكل",
            "Dry Cleaning":
              "التنظيف الجاف",
            Pressing:
              "الكي",
            Specialty:
              "الخدمات الخاصة",
            Traditional:
              "الملابس التقليدية",
            Express:
              "السريع",
            "Add-On":
              "إضافات",
          },

          from:
            "ابتداءً من",
          order:
            "اطلب الآن",

          products: {
            "Dry Cleaning": {
              name:
                "التنظيف الجاف",
              description:
                "عناية احترافية بالبدلات والأقمشة الحساسة باستخدام مذيبات صديقة للبيئة",
            },

            "Gent Suit (3pcs)": {
              name:
                "بدلة رجالية (3 قطع)",
              description:
                "عناية كاملة بالبدلات المكونة من 3 قطع",
            },

            "Dress (Short)": {
              name:
                "فستان (قصير)",
              description:
                "عناية بفساتين الحفلات والفساتين الصيفية",
            },

            "Dress (Long)": {
              name:
                "فستان (طويل)",
              description:
                "عناية متخصصة بفساتين السهرة",
            },

            Overcoat: {
              name:
                "معطف طويل",
              description:
                "تنظيف وحفظ المعاطف الشتوية",
            },

            "Executive Pressing": {
              name:
                "كي تنفيذي",
              description:
                "تشطيبات أنيقة للملابس الرسمية باستخدام تقنية البخار الدقيقة",
            },

            "Couture Care": {
              name:
                "العناية بالأزياء الراقية",
              description:
                "تنظيف يدوي للملابس المصممة والأقمشة الحساسة",
            },

            "Military Uniform": {
              name:
                "الزي العسكري",
              description:
                "تنظيف وكي وفقًا للمعايير العسكرية",
            },

            "Blouse (Special)": {
              name:
                "بلوزة (خاصة)",
              description:
                "عناية لطيفة بالملابس المزينة والتفاصيل الدقيقة",
            },

            "Bath Robe": {
              name:
                "رداء حمام",
              description:
                "تنظيف عميق لملابس الحمام الفاخرة",
            },

            Dishdasha: {
              name:
                "دشداشة",
              description:
                "عناية احترافية بالملابس القطرية التقليدية للرجال",
            },

            "Child Dishdasha": {
              name:
                "دشداشة أطفال",
              description:
                "عناية متخصصة بالملابس التقليدية للأطفال",
            },

            Bisht: {
              name:
                "بشت",
              description:
                "عناية فاخرة بالعباءة الاحتفالية ذات التفاصيل الذهبية",
            },

            Ghutra: {
              name:
                "غترة",
              description:
                "تنظيف لطيف لأغطية الرأس التقليدية",
            },

            Kurta: {
              name:
                "كورتا",
              description:
                "عناية بالسترة التقليدية من جنوب آسيا",
            },

            "Kurta Pyjama (Set)": {
              name:
                "كورتا بيجاما (طقم)",
              description:
                "تنظيف كامل لطقم الملابس التقليدية",
            },

            Kameez: {
              name:
                "قميص",
              description:
                "عناية احترافية بالقمصان التقليدية الطويلة",
            },

            Jalabiya: {
              name:
                "جلابية",
              description:
                "عناية متخصصة بالفساتين التقليدية المنسدلة",
            },

            Abaya: {
              name:
                "عباءة",
              description:
                "تنظيف احترافي للعباءات اليومية",
            },

            "Abaya Special": {
              name:
                "عباءة خاصة",
              description:
                "عناية فاخرة بالعباءات المزينة",
            },

            Hijab: {
              name:
                "حجاب",
              description:
                "تنظيف لطيف لأغطية الرأس",
            },

            "Express Service": {
              name:
                "الخدمة السريعة",
              description:
                "إنجاز الخدمة خلال 3 ساعات للملابس العاجلة",
            },

            "Fragrance Infusion": {
              name:
                "إضافة العطر",
              description:
                "خيارات عطور فاخرة لملابسك",
            },
          },

          personalizedService: {
            title:
              "هل تحتاج إلى خدمة مخصصة؟",
            description:
              "فريق خدمة كبار الشخصيات لدينا متاح على مدار الساعة طوال أيام الأسبوع للتعامل مع الطلبات الخاصة والقطع الحساسة أو الطلبات الكبيرة للشركات والمساكن.",
            contactConcierge:
              "تواصل مع خدمة الكونسيرج",
          },
        },

        bookNowPage: {
          title:
            "مغسلة أكويا الفاخرة",
          step:
            "الخطوة 1 من 1",

          chooseServiceType:
            "اختر نوع الخدمة:",
          selectItem:
            "اختر نوع القطعة، ثم اختر الخدمة",

          genders: {
            Men:
              "الرجال",
            Women:
              "النساء",
            Others:
              "أخرى",
            mens:
              "ملابس الرجال",
            womens:
              "ملابس النساء",
            others:
              "أخرى",
          },

          serviceOptions: {
            washing:
              "غسيل وكي",
            washingPerfume:
              "غسيل وكي وخدمة العطور",
            dryClean:
              "تنظيف جاف",
          },

          chooseService:
            "اختر الخدمة لهذه القطعة",

          items: {
            "👔 Thobe":
              "👔 ثوب",
            "🧥 Bisht":
              "🧥 بشت",
            "🦹🏻‍♂️ Men's Suit":
              "🦹🏻‍♂️ بدلة رجالية",
            "👳 Ghutra":
              "👳 غترة",
            "👕 Shirt":
              "👕 قميص",
            "👕 T-Shirt":
              "👕 تي شيرت",
            "🦺 Vest":
              "🦺 سترة",
            "🧥 Coat":
              "🧥 معطف",
            "🩳 Pajamas":
              "🩳 بيجامة",
            "🎖️ Military Uniform":
              "🎖️ زي عسكري",
            "🎖️1 Military Uniform One Piece":
              "🎖️1 زي عسكري قطعة واحدة",
            "🦸🏻 Overalls":
              "🦸🏻 بدلة عمل",
            "🥼 Lab Coat":
              "🥼 معطف مختبر",
            "👕 UnderShirt":
              "👕 قميص داخلي",
            "👖 Pants":
              "👖 بنطال",
            "🦸🏻 Coverall":
              "🦸🏻 بدلة واقية",
            "🧥 Wool Sweater":
              "🧥 كنزة صوفية",
            "🦺 Reflective Jacket":
              "🦺 سترة عاكسة",
            "👛 Sack":
              "👛 كيس",
            "🧥 Fur":
              "🧥 فرو",
            "🥻 Woolen":
              "🥻 ملابس صوفية",

            "🧕🏻 Abaya + Sheilah":
              "🧕🏻 عباءة + شيلة",
            "🧕🏻 Abaya Only":
              "🧕🏻 عباءة فقط",
            "🧣 Sheilah":
              "🧣 شيلة",

            "Double Bed Cover":
              "غطاء سرير مزدوج",
            "Single Bed Cover":
              "غطاء سرير مفرد",
            "Double Bed Sheet":
              "ملاءة سرير مزدوجة",
            "Single Bed Sheet":
              "ملاءة سرير مفردة",
            "Double Blanket":
              "بطانية مزدوجة",
            "Single Blanket":
              "بطانية مفردة",
            "Small Towel":
              "منشفة صغيرة",
            "Large Towel":
              "منشفة كبيرة",
            "Pillowcase":
              "غطاء وسادة",
            "Large Feather Pillow":
              "وسادة ريش كبيرة",
            "Small Curtain Lining":
              "بطانة ستارة صغيرة",
            "Large Curtain Lining":
              "بطانة ستارة كبيرة",
            "Large Curtain":
              "ستارة كبيرة",
            "Extra Large Curtain":
              "ستارة كبيرة جدًا",
            "Bedspread with Embroidery":
              "غطاء سرير مطرز",
          },

          orderSummary:
            "ملخص الطلب",
          serviceType:
            "نوع الخدمة:",
          garments:
            "الملابس:",

          coupon: {
            placeholder:
              "أدخل رمز الخصم",
            apply:
              "تطبيق الخصم",
            loading:
              "جارٍ التحميل...",
            enterCode:
              "يرجى إدخال رمز الخصم",
            invalid:
              "رمز الخصم غير صالح",
          },

          finalPrice:
            "السعر النهائي",
        },
      },
    },
  },

  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
  document.documentElement.lang = lng;
  document.documentElement.dir =
    lng === "ar" ? "rtl" : "ltr";
});

document.documentElement.lang = i18n.language;
document.documentElement.dir =
  i18n.language === "ar" ? "rtl" : "ltr";

export default i18n;