// --- data.js ---

// --- CAR DATA: Single Source of Truth ---
const carData = [
    // New SUVs
    { id: 13, name: 'VW T-Roc', color: 'Black', price: 700, transmission: 'Automatic', seats: 5, type: 'suv', img: 'https://i.postimg.cc/d3ySgfyT/IMG-4177.jpg', desc: 'Premium compact crossover, comfortable and stylish for city and highway driving.' },
    { id: 14, name: 'VW Touareg', color: 'Grey', price: 1400, transmission: 'Automatic', seats: 6, type: 'luxury-suv', img: 'https://i.postimg.cc/4NpS5rGj/IMG-4179.webp', desc: 'Full-size luxury SUV, offering ultimate comfort, power, and space for long-distance luxury travel.' }, 
    // Existing SUVs
    { id: 1, name: 'Hyundai Tucson', color: 'Grey', price: 850, transmission: 'Automatic', seats: 6, type: 'suv', img: 'https://i.postimg.cc/DzvHm59V/IMG-4161.jpg', desc: 'Luxury compact SUV, space and comfort for long journeys, perfect for family road trips.' },
    { id: 2, name: 'Hyundai Tucson', color: 'Black', price: 850, transmission: 'Automatic', seats: 6, type: 'suv', img: 'https://i.postimg.cc/HxP2YtgX/IMG-4180.jpg', desc: 'Stylish and powerful SUV, featuring modern technology and excellent handling on Moroccan highways.' },
    { id: 3, name: 'Kia Sportage', color: 'Black', price: 850, transmission: 'Automatic', seats: 6, type: 'suv', img: 'https://i.postimg.cc/7PWswqPy/IMG-4190.jpg', desc: 'Top-rated crossover with excellent handling and spacious interior, making it ideal for adventure.' },
    { id: 4, name: 'Dacia Duster', color: 'Green', price: 500, transmission: 'Manual', seats: 6, type: 'suv', img: 'https://i.postimg.cc/YSDn07Nf/IMG-4181.jpg', desc: 'Tough and reliable compact SUV, offering great value and robustness for varied Moroccan terrains.' },
    // Existing Hatchbacks/Sedans
    { id: 5, name: 'Renault Clio 5', color: 'Black', price: 300, transmission: 'Manual', seats: 5, type: 'hatchback', img: 'https://i.postimg.cc/J43pJZ3f/IMG-4184.webp', desc: 'Modern, fuel-efficient hatchback, easy to park and navigate through city traffic.' },
    { id: 6, name: 'Renault Clio 5', color: 'Grey', price: 300, transmission: 'Manual', seats: 5, type: 'hatchback', img: 'https://i.postimg.cc/Y0Ybdm5z/IMG-4183.webp', desc: 'Stylish and efficient for the urban traveler, offering comfort for daily commutes.' },
    { id: 7, name: 'Peugeot 208', color: 'Black', price: 300, transmission: 'Manual', seats: 5, type: 'hatchback', img: 'https://i.postimg.cc/cJzhZmZ9/IMG-4186.jpg', desc: 'A comfortable and popular compact car, known for its smooth ride and modern design.' },
    { id: 8, name: 'Renault Clio 5', color: 'Black', price: 350, transmission: 'Automatic', seats: 5, type: 'hatchback', img: 'https://i.postimg.cc/J43pJZ3f/IMG-4184.webp', desc: 'The comfort of automatic driving in a reliable, modern Clio, perfect for long drives without fatigue.' },
    { id: 9, name: 'Peugeot 208', color: 'Grey', price: 350, transmission: 'Automatic', seats: 5, type: 'hatchback', img: 'https://i.postimg.cc/VvqWqPtt/IMG-4185.jpg', desc: 'Smooth automatic driving in a stylish compact Peugeot, offering a premium feel.' }, 
    { id: 10, name: 'Dacia Logan', color: 'Black', price: 300, transmission: 'Manual', seats: 5, type: 'sedan', img: 'https://i.postimg.cc/bNLQpT9v/IMG-4188.webp', desc: 'Robust and spacious sedan, excellent value and a large trunk for extra luggage.' },
    { id: 11, name: 'Dacia Logan', color: 'Grey', price: 300, transmission: 'Manual', seats: 5, type: 'sedan', img: 'https://i.postimg.cc/R0W1PHf4/IMG-4189.png', desc: 'A reliable and trusted choice for long trips across Morocco, known for its durability.' },
    { id: 12, name: 'Dacia Logan', color: 'White', price: 300, transmission: 'Manual', seats: 5, type: 'sedan', img: 'https://i.postimg.cc/R0W1PHf4/IMG-4189.png', desc: 'Clean and comfortable, a simple and effective vehicle ready for any Moroccan adventure.' },
    // New Hatchback (Updated price to 250 DH)
    { id: 15, name: 'Dacia Sandero', color: 'Grey', price: 250, transmission: 'Manual', seats: 5, type: 'hatchback', img: 'https://i.postimg.cc/cJtY7NyL/IMG-4191.png', desc: 'Economical and dependable hatchback, perfect for budget-friendly commuting and city errands.' }
];

// --- Translation Data: Single Source of Truth ---
const translations = {
    'en': {
        'nav-fleet': 'Our Fleet', 'nav-why': 'Why Choose Us', 'nav-reviews': 'Reviews', 'nav-contact': 'Contact',
        'h1-hero': 'Explore Morocco. Drive Quality.', 'p-hero': 'Premium cars available across all major Moroccan cities.',
        'h2-reservation': 'Quick Reservation', 'label-pickup-city': 'Pick-up City or Airport', 'label-pickup-date': 'Pick-up Date',
        'label-return-date': 'Return Date', 'btn-search': 'Search Cars', 'h2-fleet': 'Our Fleet', 'car-day': '/ day', 
        'btn-view-all': 'View All Cars', 
        'h2-promise': 'The Black Iris Promise', 'pickup-title': 'Effortless Pickup',
        'pickup-desc': 'Fast service at all major Moroccan airports.', 'insured-title': 'Insured & Ready',
        'insured-desc': 'Comprehensive insurance included for peace of mind.', 'support-title': '24/7 Local Support',
        'support-desc': 'Dedicated support line available around the clock.', 'morocco-title': 'Morocco Ready',
        'morocco-desc': 'Vehicles maintained for all Moroccan terrains and climate.', 'h2-testimonials': 'What Our Clients Say',
        'h4-nav': 'Quick Navigation', 'h4-contact': 'Contact & Booking', 'call-text': '', 'whatsapp-text': 'WhatsApp',
        'address-text': '10 rue ouarzazat hassan rabat', 'copy-right': '2024 BLACK IRIS cars. All rights reserved.', 
        'select-location': 'Select a location', 'manual': 'Manual', 'automatic': 'Automatic', 'btn-book-now': 'Book Now',
        'modal-ac-label-short': 'A/C', 'car-seats-label-spaced': ' Seats', 
        'modal-p': 'Choose contact method:', 'btn-whatsapp': 'WhatsApp', 'btn-email': 'Email',
        'car-seats': '5 Seats', 
        'car-seats-6': '6 Seats', 
        
        // --- MESSAGES FOR AVAILABLE_CARS.HTML (FULL DETAILS) ---
        'book-whatsapp-msg-full': (carName, carPrice, city, pickup, dropoff) => `Hello, I am interested in renting the ${carName} (${carPrice}/day).\n\nBooking Details:\n- Location: ${city || 'N/A'}\n- Pickup Date: ${pickup || 'N/A'}\n- Return Date: ${dropoff || 'N/A'}.\n\nPlease confirm availability and help me proceed with the booking.`,
        'book-email-subj-full': (carName, city) => `Car Reservation Inquiry: ${carName} in ${city || 'N/A'}`,
        'book-email-body-full': (carName, carPrice, city, pickup, dropoff) => `Hello,\n\nI am interested in renting the ${carName} (${carPrice}/day).\n\nDetails:\n- Location: ${city || 'N/A'}\n- Pickup Date: ${pickup || 'N/A'}\n- Return Date: ${dropoff || 'N/A'}\n\nPlease confirm availability and provide the next steps for reservation.`,

        // --- MESSAGES FOR INDEX.HTML (CONCISE/CAR DETAILS ONLY) ---
        'book-whatsapp-msg-concise': (carName, carPrice) => `Hello, I am interested in the ${carName} (${carPrice}/day). Please send me more information about availability and pricing.`,
        'book-email-subj-concise': (carName) => `General Car Inquiry: ${carName}`,
        'book-email-body-concise': (carName, carPrice) => `Hello,\n\nI am interested in the ${carName} (${carPrice}/day) featured on your homepage. Please send me more information about availability and how to book this vehicle.`,
    },
    'fr': {
        'nav-fleet': 'Notre Flotte', 'nav-why': 'Pourquoi Nous Choisir', 'nav-reviews': 'Avis', 'nav-contact': 'Contact',
        'h1-hero': 'Explorez le Maroc. Conduisez la Qualité.', 'p-hero': 'Voitures premium disponibles dans toutes les grandes villes marocaines.',
        'h2-reservation': 'Réservation Rapide', 'label-pickup-city': 'Ville ou Aéroport de Ramassage', 'label-pickup-date': 'Date de Ramassage',
        'label-return-date': 'Date de Retour', 'btn-search': 'Rechercher des Voitures', 'h2-fleet': 'Notre Flotte', 'car-day': '/ jour', 
        'btn-view-all': 'Voir Toutes les Voitures', 
        'h2-promise': 'La Promesse Black Iris', 'pickup-title': 'Ramassage Facile',
        'pickup-desc': 'Service rapide dans tous les principaux aéroports marocains.', 'insured-title': 'Assuré & Prêt',
        'insured-desc': 'Assurance complète incluse pour votre tranquillité d\'esprit.', 'support-title': 'Support Local 24/7',
        'support-desc': 'Ligne d\'assistance dédiée disponible 24 heures sur 24.', 'morocco-title': 'Prêt pour le Maroc',
        'morocco-desc': 'Véhicules entretenus pour tous les terrains et climats marocains.', 'h2-testimonials': 'Ce que disent nos Clients',
        'h4-nav': 'Navigation Rapide', 'h4-contact': 'Contact & Réservation', 'call-text': '', 'whatsapp-text': 'WhatsApp',
        'address-text': '10 rue ouarzazat hassan rabat', 'copy-right': '2024 BLACK IRIS cars. Tous droits réservés.', 
        'select-location': 'Sélectionnez un emplacement', 'manual': 'Manuelle', 'automatic': 'Automatique', 'btn-book-now': 'Réserver Maintenant',
        'modal-ac-label-short': 'Climatisation', 'car-seats-label-spaced': ' Sièges', 
        'modal-p': 'Choisissez la méthode de contact:', 'btn-whatsapp': 'WhatsApp', 'btn-email': 'Email',
        'car-seats': '5 Sièges', 
        'car-seats-6': '6 Sièges', 

        // --- MESSAGES FOR AVAILABLE_CARS.HTML (FULL DETAILS) ---
        'book-whatsapp-msg-full': (carName, carPrice, city, pickup, dropoff) => `Bonjour, je suis intéressé(e) par la location de ${carName} (${carPrice}/jour).\n\nDétails de la réservation:\n- Lieu : ${city || 'N/A'}\n- Date de prise en charge : ${pickup || 'N/A'}\n- Date de retour : ${dropoff || 'N/A'}.\n\nVeuillez confirmer la disponibilité et m'aider à procéder à la réservation.`,
        'book-email-subj-full': (carName, city) => `Demande de réservation pour ${carName} à ${city || 'N/A'}`,
        'book-email-body-full': (carName, carPrice, city, pickup, dropoff) => `Bonjour,\n\nJe suis intéressé(e) par la location de ${carName} (${carPrice}/jour).\n\nDétails:\n- Lieu : ${city || 'N/A'}\n- Date de prise en charge : ${pickup || 'N/A'}\n- Date de retour : ${dropoff || 'N/A'}\n\nVeuillez confirmer la disponibilité et m'indiquer les prochaines étapes pour la réservation.`,

        // --- MESSAGES FOR INDEX.HTML (CONCISE/CAR DETAILS ONLY) ---
        'book-whatsapp-msg-concise': (carName, carPrice) => `Bonjour, je suis intéressé(e) par la ${carName} (${carPrice}/jour). Veuillez m'envoyer plus d'informations sur la disponibilité et les prix.`,
        'book-email-subj-concise': (carName) => `Demande générale de voiture : ${carName}`,
        'book-email-body-concise': (carName, carPrice) => `Bonjour,\n\nJe suis intéressé(e) par la ${carName} (${carPrice}/jour) présentée sur votre page d'accueil. Veuillez m'envoyer plus d'informations sur la disponibilité et la façon de réserver ce véhicule.`,
    },
    'ar': {
        'nav-fleet': 'أسطولنا', 'nav-why': 'لماذا تختارنا', 'nav-reviews': 'التقييمات', 'nav-contact': 'اتصال',
        'h1-hero': 'اكتشف المغرب. قد الجودة.', 'p-hero': 'سيارات فاخرة متوفرة في جميع المدن المغربية الكبرى.',
        'h2-reservation': 'حجز سريع', 'label-pickup-city': 'مدينة أو مطار الاستلام', 'label-pickup-date': 'تاريخ الاستلام',
        'label-return-date': 'تاريخ الإرجاع', 'btn-search': 'البحث عن سيارات', 'h2-fleet': 'أسطولنا', 'car-day': '/ يوم', 
        'btn-view-all': 'عرض جميع السيارات', 
        'h2-promise': 'وعد Black Iris', 'pickup-title': 'استلام سهل',
        'pickup-desc': 'خدمة سريعة في جميع المطارات المغربية الرئيسية.', 'insured-title': 'مؤمنة وجاهزة',
        'insured-desc': 'تأمين شامل متضمن لراحة بالك.', 'support-title': 'دعم محلي 24/7',
        'support-desc': 'خط دعم مخصص متاح على مدار الساعة.', 'morocco-title': 'جاهزية للمغرب',
        'morocco-desc': 'مركبات مجهزة لجميع التضاريس والمناخات المغربية.', 'h2-testimonials': 'ماذا يقول عملاؤنا',
        'h4-nav': 'روابط سريعة', 'h4-contact': 'الاتصال والحجز', 'call-text': '', 'whatsapp-text': 'واتساب',
        'address-text': '10 شارع ورزازات حسان الرباط', 'copy-right': '2024 BLACK IRIS cars. جميع الحقوق محفوظة.', 
        'select-location': 'اختر موقعًا', 'manual': 'يدوي', 'automatic': 'أوتوماتيكي', 'btn-book-now': 'احجز الآن',
        'modal-ac-label-short': 'مكيف', 'car-seats-label-spaced': ' مقاعد',
        'modal-p': 'اختر طريقة الاتصال:', 'btn-whatsapp': 'واتساب', 'btn-email': 'بريد إلكتروني',
        'car-seats': '5 مقاعد', 
        'car-seats-6': '6 مقاعد', 

        // --- MESSAGES FOR AVAILABLE_CARS.HTML (FULL DETAILS) ---
        'book-whatsapp-msg-full': (carName, carPrice, city, pickup, dropoff) => `مرحباً، أنا مهتم باستئجار ${carName} (${carPrice}/يوم).\n\nتفاصيل الحجز:\n- الموقع: ${city || 'N/A'}\n- تاريخ الاستلام: ${pickup || 'N/A'}\n- تاريخ الإرجاع: ${dropoff || 'N/A'}.\n\nالرجاء تأكيد التوفر ومساعدتي في متابعة الحجز.`,
        'book-email-subj-full': (carName, city) => `استفسار حجز سيارة لـ ${carName} في ${city || 'N/A'}`,
        'book-email-body-full': (carName, carPrice, city, pickup, dropoff) => `مرحباً،\n\nأنا مهتم باستئجار ${carName} (${carPrice}/يوم).\n\nالتفاصيل:\n- الموقع: ${city || 'N/A'}\n- تاريخ الاستلام: ${pickup || 'N/A'}\n- تاريخ الإرجاع: ${dropoff || 'N/A'}\n\nالرجاء تأكيد التوفر وتزويدي بالخطوات التالية للحجز.`,
        
        // --- MESSAGES FOR INDEX.HTML (CONCISE/CAR DETAILS ONLY) ---
        'book-whatsapp-msg-concise': (carName, carPrice) => `مرحباً، أنا مهتم بـ ${carName} (${carPrice}/يوم). الرجاء إرسال المزيد من المعلومات حول التوفر والتسعير.`,
        'book-email-subj-concise': (carName) => `استفسار عام عن سيارة: ${carName}`,
        'book-email-body-concise': (carName, carPrice) => `مرحباً،\n\nأنا مهتم بـ ${carName} (${carPrice}/يوم) المعروضة على الصفحة الرئيسية. الرجاء إرسال المزيد من المعلومات حول التوفر وكيفية حجز هذه المركبة.`,
    }
};
