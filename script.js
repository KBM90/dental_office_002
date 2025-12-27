// ===================================
// Multilingual Translations
// ===================================
const translations = {
    fr: {
        // Navigation
        'clinic-name': 'Centre Dentaire – Perfect Smile',
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-services': 'Services',
        'nav-appointment': 'Rendez-vous',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-title': 'Centre Dentaire – Perfect Smile',
        'hero-subtitle': 'Dr. Salma Haddou',
        'hero-slogan': 'Votre sourire, notre priorité. Des soins dentaires professionnels dans un environnement moderne et accueillant.',
        'hero-cta': 'Prendre Rendez-vous',

        // About Section
        'about-title': 'À Propos de Notre Centre',
        'about-p1': 'Bienvenue au Centre Dentaire Perfect Smile, dirigé par le Dr. Salma Haddou, situé au cœur de Berkane, Maroc. Notre mission est de vous offrir des soins dentaires de la plus haute qualité dans un environnement professionnel, moderne et chaleureux.',
        'about-p2': 'Nous mettons l\'accent sur la prévention, l\'hygiène rigoureuse et le confort de nos patients. Notre équipe expérimentée utilise les dernières technologies pour garantir des résultats exceptionnels et un sourire éclatant.',
        'about-p3': 'Que vous ayez besoin de soins dentaires généraux, d\'esthétique du sourire ou de traitements préventifs, nous sommes là pour vous accompagner à chaque étape de votre parcours vers une santé bucco-dentaire optimale.',

        // Services Section
        'services-title': 'Nos Services',
        'service1-title': 'Dentisterie Générale',
        'service1-desc': 'Examens complets, détartrage, plombages et soins dentaires de routine pour maintenir votre santé bucco-dentaire.',
        'service2-title': 'Soins & Traitements',
        'service2-desc': 'Traitements de caries, endodontie, extractions et soins spécialisés adaptés à vos besoins.',
        'service3-title': 'Esthétique du Sourire',
        'service3-desc': 'Blanchiment dentaire, facettes, et solutions esthétiques pour un sourire éclatant et confiant.',
        'service4-title': 'Soins Préventifs',
        'service4-desc': 'Conseils personnalisés, nettoyages professionnels et programmes de prévention pour une santé dentaire durable.',

        // Video Section
        'video-title': 'Découvrez Notre Centre',
        'video-not-supported': 'Votre navigateur ne supporte pas la lecture de vidéos.',

        // Appointment Section
        'appointment-title': 'Prendre Rendez-vous',
        'appointment-subtitle': 'Remplissez le formulaire ci-dessous et nous vous contacterons via WhatsApp',
        'form-name': 'Nom complet',
        'form-phone': 'Téléphone',
        'form-date': 'Date souhaitée',
        'form-service': 'Service (optionnel)',
        'form-service-select': '-- Sélectionnez un service --',
        'form-service-general': 'Dentisterie Générale',
        'form-service-treatment': 'Soins & Traitements',
        'form-service-aesthetic': 'Esthétique du Sourire',
        'form-service-preventive': 'Soins Préventifs',
        'form-description': 'Description (optionnel)',
        'form-submit': 'Envoyer la demande',
        'form-confirmation': '✓ Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.',

        // Map Section
        'map-title': 'Notre Localisation',
        'address': '📍 1er étage, n°74 rue El Moukawama, Berkane 63300',

        // Contact Section
        'contact-title': 'Contactez-nous',
        'contact-phone-label': 'Téléphone',
        'contact-hours-label': 'Horaires',
        'contact-hours': 'Fermé – Ouvre à 9h lundi',
        'contact-instagram-label': 'Instagram',

        // Reviews Section
        'reviews-title': 'Avis de nos Patients',
        'review1-text': 'Service excellent et professionnel. Le Dr. Haddou est très attentive et rassurante. Je recommande vivement !',
        'review1-author': '— Fatima Z.',
        'review2-text': 'مركز رائع ونظيف جدا. الدكتورة سلمى محترفة وتهتم براحة المريض. شكرا جزيلا',
        'review2-author': '— أحمد م.',
        'review3-text': 'Très satisfait du résultat de mon blanchiment dentaire. Équipe accueillante et centre moderne. Merci !',
        'review3-author': '— Karim B.',

        // Footer
        'footer-doctor': 'Dr. Salma Haddou',
        'footer-address-title': 'Adresse',
        'footer-contact-title': 'Contact',
        'footer-copyright': '© 2024 Centre Dentaire Perfect Smile. Tous droits réservés.'
    },

    ar: {
        // Navigation
        'clinic-name': 'مركز الأسنان – الابتسامة المثالية',
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-services': 'الخدمات',
        'nav-appointment': 'حجز موعد',
        'nav-contact': 'اتصل بنا',

        // Hero Section
        'hero-title': 'مركز الأسنان – الابتسامة المثالية',
        'hero-subtitle': 'د. سلمى حدو',
        'hero-slogan': 'ابتسامتك أولويتنا. رعاية أسنان احترافية في بيئة حديثة ومرحبة.',
        'hero-cta': 'احجز موعد',

        // About Section
        'about-title': 'عن مركزنا',
        'about-p1': 'مرحبا بكم في مركز الأسنان الابتسامة المثالية، بإدارة د. سلمى حدو، الواقع في قلب بركان، المغرب. مهمتنا هي تقديم رعاية أسنان عالية الجودة في بيئة احترافية وحديثة ودافئة.',
        'about-p2': 'نركز على الوقاية والنظافة الصارمة وراحة مرضانا. يستخدم فريقنا ذو الخبرة أحدث التقنيات لضمان نتائج استثنائية وابتسامة مشرقة.',
        'about-p3': 'سواء كنت بحاجة إلى رعاية أسنان عامة أو تجميل الابتسامة أو علاجات وقائية، نحن هنا لمرافقتك في كل خطوة من رحلتك نحو صحة الفم المثلى.',

        // Services Section
        'services-title': 'خدماتنا',
        'service1-title': 'طب الأسنان العام',
        'service1-desc': 'فحوصات شاملة، تنظيف الأسنان، حشوات ورعاية أسنان روتينية للحفاظ على صحة فمك.',
        'service2-title': 'الرعاية والعلاجات',
        'service2-desc': 'علاج التسوس، علاج جذور الأسنان، خلع الأسنان ورعاية متخصصة مصممة لاحتياجاتك.',
        'service3-title': 'تجميل الابتسامة',
        'service3-desc': 'تبييض الأسنان، القشور التجميلية، وحلول جمالية لابتسامة مشرقة وواثقة.',
        'service4-title': 'الرعاية الوقائية',
        'service4-desc': 'نصائح شخصية، تنظيف احترافي وبرامج وقائية لصحة أسنان دائمة.',

        // Video Section
        'video-title': 'اكتشف مركزنا',
        'video-not-supported': 'متصفحك لا يدعم تشغيل الفيديو.',

        // Appointment Section
        'appointment-title': 'احجز موعد',
        'appointment-subtitle': 'املأ النموذج أدناه وسنتواصل معك عبر واتساب',
        'form-name': 'الاسم الكامل',
        'form-phone': 'رقم الهاتف',
        'form-date': 'التاريخ المطلوب',
        'form-service': 'الخدمة (اختياري)',
        'form-service-select': '-- اختر خدمة --',
        'form-service-general': 'طب الأسنان العام',
        'form-service-treatment': 'الرعاية والعلاجات',
        'form-service-aesthetic': 'تجميل الابتسامة',
        'form-service-preventive': 'الرعاية الوقائية',
        'form-description': 'الوصف (اختياري)',
        'form-submit': 'إرسال الطلب',
        'form-confirmation': '✓ تم إرسال طلبك بنجاح! سنتواصل معك قريبا.',

        // Map Section
        'map-title': 'موقعنا',
        'address': '📍 الطابق الأول، رقم 74 شارع المقاومة، بركان 63300',

        // Contact Section
        'contact-title': 'اتصل بنا',
        'contact-phone-label': 'الهاتف',
        'contact-hours-label': 'ساعات العمل',
        'contact-hours': 'مغلق – يفتح الساعة 9 صباحا الاثنين',
        'contact-instagram-label': 'إنستغرام',

        // Reviews Section
        'reviews-title': 'آراء مرضانا',
        'review1-text': 'خدمة ممتازة ومهنية. الدكتورة حدو منتبهة جدا ومطمئنة. أوصي بشدة!',
        'review1-author': '— فاطمة ز.',
        'review2-text': 'مركز رائع ونظيف جدا. الدكتورة سلمى محترفة وتهتم براحة المريض. شكرا جزيلا',
        'review2-author': '— أحمد م.',
        'review3-text': 'راض جدا عن نتيجة تبييض أسناني. فريق ترحيبي ومركز حديث. شكرا!',
        'review3-author': '— كريم ب.',

        // Footer
        'footer-doctor': 'د. سلمى حدو',
        'footer-address-title': 'العنوان',
        'footer-contact-title': 'اتصل بنا',
        'footer-copyright': '© 2024 مركز الأسنان الابتسامة المثالية. جميع الحقوق محفوظة.'
    },

    en: {
        // Navigation
        'clinic-name': 'Dental Center – Perfect Smile',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-appointment': 'Appointment',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-title': 'Dental Center – Perfect Smile',
        'hero-subtitle': 'Dr. Salma Haddou',
        'hero-slogan': 'Your smile, our priority. Professional dental care in a modern and welcoming environment.',
        'hero-cta': 'Book Appointment',

        // About Section
        'about-title': 'About Our Center',
        'about-p1': 'Welcome to Perfect Smile Dental Center, led by Dr. Salma Haddou, located in the heart of Berkane, Morocco. Our mission is to provide you with the highest quality dental care in a professional, modern, and warm environment.',
        'about-p2': 'We emphasize prevention, rigorous hygiene, and patient comfort. Our experienced team uses the latest technologies to ensure exceptional results and a radiant smile.',
        'about-p3': 'Whether you need general dental care, smile aesthetics, or preventive treatments, we are here to accompany you every step of your journey to optimal oral health.',

        // Services Section
        'services-title': 'Our Services',
        'service1-title': 'General Dentistry',
        'service1-desc': 'Comprehensive exams, scaling, fillings, and routine dental care to maintain your oral health.',
        'service2-title': 'Care & Treatments',
        'service2-desc': 'Cavity treatments, endodontics, extractions, and specialized care tailored to your needs.',
        'service3-title': 'Smile Aesthetics',
        'service3-desc': 'Teeth whitening, veneers, and aesthetic solutions for a radiant and confident smile.',
        'service4-title': 'Preventive Care',
        'service4-desc': 'Personalized advice, professional cleanings, and prevention programs for lasting dental health.',

        // Video Section
        'video-title': 'Discover Our Center',
        'video-not-supported': 'Your browser does not support video playback.',

        // Appointment Section
        'appointment-title': 'Book an Appointment',
        'appointment-subtitle': 'Fill out the form below and we will contact you via WhatsApp',
        'form-name': 'Full Name',
        'form-phone': 'Phone',
        'form-date': 'Desired Date',
        'form-service': 'Service (optional)',
        'form-service-select': '-- Select a service --',
        'form-service-general': 'General Dentistry',
        'form-service-treatment': 'Care & Treatments',
        'form-service-aesthetic': 'Smile Aesthetics',
        'form-service-preventive': 'Preventive Care',
        'form-description': 'Description (optional)',
        'form-submit': 'Send Request',
        'form-confirmation': '✓ Your request has been sent successfully! We will contact you soon.',

        // Map Section
        'map-title': 'Our Location',
        'address': '📍 1st floor, n°74 El Moukawama Street, Berkane 63300',

        // Contact Section
        'contact-title': 'Contact Us',
        'contact-phone-label': 'Phone',
        'contact-hours-label': 'Hours',
        'contact-hours': 'Closed – Opens 9 AM Monday',
        'contact-instagram-label': 'Instagram',

        // Reviews Section
        'reviews-title': 'Patient Reviews',
        'review1-text': 'Excellent and professional service. Dr. Haddou is very attentive and reassuring. Highly recommend!',
        'review1-author': '— Fatima Z.',
        'review2-text': 'Amazing and very clean center. Dr. Salma is professional and cares about patient comfort. Thank you very much',
        'review2-author': '— Ahmed M.',
        'review3-text': 'Very satisfied with my teeth whitening results. Welcoming team and modern center. Thank you!',
        'review3-author': '— Karim B.',

        // Footer
        'footer-doctor': 'Dr. Salma Haddou',
        'footer-address-title': 'Address',
        'footer-contact-title': 'Contact',
        'footer-copyright': '© 2024 Perfect Smile Dental Center. All rights reserved.'
    },

    es: {
        // Navigation
        'clinic-name': 'Centro Dental – Sonrisa Perfecta',
        'nav-home': 'Inicio',
        'nav-about': 'Acerca de',
        'nav-services': 'Servicios',
        'nav-appointment': 'Cita',
        'nav-contact': 'Contacto',

        // Hero Section
        'hero-title': 'Centro Dental – Sonrisa Perfecta',
        'hero-subtitle': 'Dra. Salma Haddou',
        'hero-slogan': 'Tu sonrisa, nuestra prioridad. Cuidado dental profesional en un ambiente moderno y acogedor.',
        'hero-cta': 'Reservar Cita',

        // About Section
        'about-title': 'Acerca de Nuestro Centro',
        'about-p1': 'Bienvenido al Centro Dental Sonrisa Perfecta, dirigido por la Dra. Salma Haddou, ubicado en el corazón de Berkane, Marruecos. Nuestra misión es ofrecerle atención dental de la más alta calidad en un ambiente profesional, moderno y cálido.',
        'about-p2': 'Enfatizamos la prevención, la higiene rigurosa y la comodidad del paciente. Nuestro equipo experimentado utiliza las últimas tecnologías para garantizar resultados excepcionales y una sonrisa radiante.',
        'about-p3': 'Ya sea que necesite atención dental general, estética de sonrisa o tratamientos preventivos, estamos aquí para acompañarlo en cada paso de su viaje hacia una salud bucal óptima.',

        // Services Section
        'services-title': 'Nuestros Servicios',
        'service1-title': 'Odontología General',
        'service1-desc': 'Exámenes completos, limpieza, empastes y atención dental de rutina para mantener su salud bucal.',
        'service2-title': 'Cuidado y Tratamientos',
        'service2-desc': 'Tratamientos de caries, endodoncia, extracciones y atención especializada adaptada a sus necesidades.',
        'service3-title': 'Estética de Sonrisa',
        'service3-desc': 'Blanqueamiento dental, carillas y soluciones estéticas para una sonrisa radiante y segura.',
        'service4-title': 'Cuidado Preventivo',
        'service4-desc': 'Consejos personalizados, limpiezas profesionales y programas de prevención para una salud dental duradera.',

        // Video Section
        'video-title': 'Descubre Nuestro Centro',
        'video-not-supported': 'Su navegador no admite la reproducción de video.',

        // Appointment Section
        'appointment-title': 'Reservar una Cita',
        'appointment-subtitle': 'Complete el formulario a continuación y nos pondremos en contacto con usted por WhatsApp',
        'form-name': 'Nombre Completo',
        'form-phone': 'Teléfono',
        'form-date': 'Fecha Deseada',
        'form-service': 'Servicio (opcional)',
        'form-service-select': '-- Seleccione un servicio --',
        'form-service-general': 'Odontología General',
        'form-service-treatment': 'Cuidado y Tratamientos',
        'form-service-aesthetic': 'Estética de Sonrisa',
        'form-service-preventive': 'Cuidado Preventivo',
        'form-description': 'Descripción (opcional)',
        'form-submit': 'Enviar Solicitud',
        'form-confirmation': '✓ ¡Su solicitud ha sido enviada con éxito! Nos pondremos en contacto con usted pronto.',

        // Map Section
        'map-title': 'Nuestra Ubicación',
        'address': '📍 1er piso, n°74 calle El Moukawama, Berkane 63300',

        // Contact Section
        'contact-title': 'Contáctenos',
        'contact-phone-label': 'Teléfono',
        'contact-hours-label': 'Horario',
        'contact-hours': 'Cerrado – Abre a las 9 AM lunes',
        'contact-instagram-label': 'Instagram',

        // Reviews Section
        'reviews-title': 'Opiniones de Pacientes',
        'review1-text': 'Servicio excelente y profesional. La Dra. Haddou es muy atenta y tranquilizadora. ¡Muy recomendable!',
        'review1-author': '— Fatima Z.',
        'review2-text': 'Centro increíble y muy limpio. La Dra. Salma es profesional y se preocupa por la comodidad del paciente. Muchas gracias',
        'review2-author': '— Ahmed M.',
        'review3-text': 'Muy satisfecho con los resultados de mi blanqueamiento dental. Equipo acogedor y centro moderno. ¡Gracias!',
        'review3-author': '— Karim B.',

        // Footer
        'footer-doctor': 'Dra. Salma Haddou',
        'footer-address-title': 'Dirección',
        'footer-contact-title': 'Contacto',
        'footer-copyright': '© 2024 Centro Dental Sonrisa Perfecta. Todos los derechos reservados.'
    },

    de: {
        // Navigation
        'clinic-name': 'Zahnzentrum – Perfektes Lächeln',
        'nav-home': 'Startseite',
        'nav-about': 'Über uns',
        'nav-services': 'Dienstleistungen',
        'nav-appointment': 'Termin',
        'nav-contact': 'Kontakt',

        // Hero Section
        'hero-title': 'Zahnzentrum – Perfektes Lächeln',
        'hero-subtitle': 'Dr. Salma Haddou',
        'hero-slogan': 'Ihr Lächeln, unsere Priorität. Professionelle Zahnpflege in einer modernen und einladenden Umgebung.',
        'hero-cta': 'Termin Buchen',

        // About Section
        'about-title': 'Über Unser Zentrum',
        'about-p1': 'Willkommen im Zahnzentrum Perfektes Lächeln, geleitet von Dr. Salma Haddou, im Herzen von Berkane, Marokko. Unsere Mission ist es, Ihnen höchste Qualität der Zahnpflege in einer professionellen, modernen und warmen Umgebung zu bieten.',
        'about-p2': 'Wir legen Wert auf Prävention, strenge Hygiene und Patientenkomfort. Unser erfahrenes Team verwendet die neuesten Technologien, um außergewöhnliche Ergebnisse und ein strahlendes Lächeln zu gewährleisten.',
        'about-p3': 'Ob Sie allgemeine Zahnpflege, Lächeln-Ästhetik oder präventive Behandlungen benötigen, wir sind hier, um Sie auf jedem Schritt Ihrer Reise zu optimaler Mundgesundheit zu begleiten.',

        // Services Section
        'services-title': 'Unsere Dienstleistungen',
        'service1-title': 'Allgemeine Zahnheilkunde',
        'service1-desc': 'Umfassende Untersuchungen, Zahnsteinentfernung, Füllungen und routinemäßige Zahnpflege zur Erhaltung Ihrer Mundgesundheit.',
        'service2-title': 'Pflege & Behandlungen',
        'service2-desc': 'Kariesbehandlungen, Endodontie, Extraktionen und spezialisierte Pflege, die auf Ihre Bedürfnisse zugeschnitten ist.',
        'service3-title': 'Lächeln-Ästhetik',
        'service3-desc': 'Zahnaufhellung, Veneers und ästhetische Lösungen für ein strahlendes und selbstbewusstes Lächeln.',
        'service4-title': 'Präventive Pflege',
        'service4-desc': 'Personalisierte Beratung, professionelle Reinigungen und Präventionsprogramme für dauerhafte Zahngesundheit.',

        // Video Section
        'video-title': 'Entdecken Sie Unser Zentrum',
        'video-not-supported': 'Ihr Browser unterstützt keine Videowiedergabe.',

        // Appointment Section
        'appointment-title': 'Termin Buchen',
        'appointment-subtitle': 'Füllen Sie das Formular unten aus und wir werden Sie über WhatsApp kontaktieren',
        'form-name': 'Vollständiger Name',
        'form-phone': 'Telefon',
        'form-date': 'Gewünschtes Datum',
        'form-service': 'Dienstleistung (optional)',
        'form-service-select': '-- Wählen Sie eine Dienstleistung --',
        'form-service-general': 'Allgemeine Zahnheilkunde',
        'form-service-treatment': 'Pflege & Behandlungen',
        'form-service-aesthetic': 'Lächeln-Ästhetik',
        'form-service-preventive': 'Präventive Pflege',
        'form-description': 'Beschreibung (optional)',
        'form-submit': 'Anfrage Senden',
        'form-confirmation': '✓ Ihre Anfrage wurde erfolgreich gesendet! Wir werden Sie bald kontaktieren.',

        // Map Section
        'map-title': 'Unser Standort',
        'address': '📍 1. Stock, Nr. 74 El Moukawama Straße, Berkane 63300',

        // Contact Section
        'contact-title': 'Kontaktieren Sie Uns',
        'contact-phone-label': 'Telefon',
        'contact-hours-label': 'Öffnungszeiten',
        'contact-hours': 'Geschlossen – Öffnet um 9 Uhr montags',
        'contact-instagram-label': 'Instagram',

        // Reviews Section
        'reviews-title': 'Patientenbewertungen',
        'review1-text': 'Ausgezeichneter und professioneller Service. Dr. Haddou ist sehr aufmerksam und beruhigend. Sehr zu empfehlen!',
        'review1-author': '— Fatima Z.',
        'review2-text': 'Erstaunliches und sehr sauberes Zentrum. Dr. Salma ist professionell und kümmert sich um den Patientenkomfort. Vielen Dank',
        'review2-author': '— Ahmed M.',
        'review3-text': 'Sehr zufrieden mit meinen Zahnaufhellungsergebnissen. Einladendes Team und modernes Zentrum. Danke!',
        'review3-author': '— Karim B.',

        // Footer
        'footer-doctor': 'Dr. Salma Haddou',
        'footer-address-title': 'Adresse',
        'footer-contact-title': 'Kontakt',
        'footer-copyright': '© 2024 Zahnzentrum Perfektes Lächeln. Alle Rechte vorbehalten.'
    }
};

// ===================================
// Language Switching Functionality
// ===================================
let currentLanguage = 'fr';

// Load saved language from localStorage
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
    }
}

// Change language function
function changeLanguage(lang) {
    if (!translations[lang]) return;

    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Set RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
}

// ===================================
// WhatsApp Appointment Integration
// ===================================
function handleAppointmentSubmit(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;
    const description = document.getElementById('description').value;

    // Get service label based on current language
    let serviceLabel = '';
    if (service) {
        const serviceOption = document.querySelector(`#service option[value="${service}"]`);
        serviceLabel = serviceOption ? serviceOption.textContent : service;
    }

    // Construct WhatsApp message based on current language
    let message = '';

    if (currentLanguage === 'ar') {
        message = `طلب موعد جديد\n\n`;
        message += `الاسم: ${name}\n`;
        message += `الهاتف: ${phone}\n`;
        message += `التاريخ: ${date}\n`;
        if (service) message += `الخدمة: ${serviceLabel}\n`;
        if (description) message += `الوصف: ${description}\n`;
    } else if (currentLanguage === 'en') {
        message = `New Appointment Request\n\n`;
        message += `Name: ${name}\n`;
        message += `Phone: ${phone}\n`;
        message += `Date: ${date}\n`;
        if (service) message += `Service: ${serviceLabel}\n`;
        if (description) message += `Description: ${description}\n`;
    } else if (currentLanguage === 'es') {
        message = `Nueva Solicitud de Cita\n\n`;
        message += `Nombre: ${name}\n`;
        message += `Teléfono: ${phone}\n`;
        message += `Fecha: ${date}\n`;
        if (service) message += `Servicio: ${serviceLabel}\n`;
        if (description) message += `Descripción: ${description}\n`;
    } else if (currentLanguage === 'de') {
        message = `Neue Terminanfrage\n\n`;
        message += `Name: ${name}\n`;
        message += `Telefon: ${phone}\n`;
        message += `Datum: ${date}\n`;
        if (service) message += `Dienstleistung: ${serviceLabel}\n`;
        if (description) message += `Beschreibung: ${description}\n`;
    } else {
        // Default French
        message = `Nouvelle demande de rendez-vous\n\n`;
        message += `Nom: ${name}\n`;
        message += `Téléphone: ${phone}\n`;
        message += `Date: ${date}\n`;
        if (service) message += `Service: ${serviceLabel}\n`;
        if (description) message += `Description: ${description}\n`;
    }

    // WhatsApp number (remove leading 0 and add country code)
    const whatsappNumber = '212628144394'; // Morocco country code + number without leading 0

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Construct WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    // Reset form
    document.getElementById('appointmentForm').reset();

    // Hide confirmation after 5 seconds
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
    }, 5000);
}

// ===================================
// Mobile Menu Toggle
// ===================================
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ===================================
// Smooth Scrolling
// ===================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                const navLinks = document.getElementById('navLinks');
                navLinks.classList.remove('active');
            }
        });
    });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards, review cards, and contact cards
    document.querySelectorAll('.service-card, .review-card, .contact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language
    loadSavedLanguage();

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Appointment form submission
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', handleAppointmentSubmit);
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize scroll animations
    initScrollAnimations();

    // Set minimum date for appointment (tomorrow)
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
    }
});
