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
        included: "مشمول",
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
      },
    },
  },

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;