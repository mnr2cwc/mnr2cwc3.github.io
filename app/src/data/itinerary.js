export const days = [
  {
    day: 1,
    date: 'Saturday, November 7',
    location: 'San Juan del Sur',
    activity: 'Fly in and transit to San Juan del Sur',
    notes: '',
    link: '',
  },
  {
    day: 2,
    date: 'Sunday, November 8',
    location: 'San Juan del Sur',
    activity: '',
    notes: '',
    link: '',
  },
  {
    day: 3,
    date: 'Monday, November 9',
    location: 'San Juan del Sur',
    activity: '',
    notes: '',
    link: '',
  },
  {
    day: 4,
    date: 'Tuesday, November 10',
    location: 'San Juan del Sur',
    activity: 'Transit to Granada',
    notes: '',
    link: '',
  },
  {
    day: 5,
    date: 'Wednesday, November 11',
    location: 'Lake Nicaragua (Granada / Ometepe)',
    activity: '',
    notes: '',
    link: '',
  },
  {
    day: 6,
    date: 'Thursday, November 12',
    location: 'Lake Nicaragua (Granada / Ometepe)',
    activity: '',
    notes: '',
    link: '',
  },
  {
    day: 7,
    date: 'Friday, November 13',
    location: 'Lake Nicaragua (Granada / Ometepe)',
    activity: '',
    notes: '',
    link: '',
  },
  {
    day: 8,
    date: 'Saturday, November 14',
    location: 'Leon',
    activity: 'Volcano Boarding',
    notes: '5–6 hours including hike up the volcano. Drinks and bonfire with party bus after.',
    link: 'https://www.volcanodaynicaragua.com/tours/volcano-boarding/',
  },
  {
    day: 9,
    date: 'Sunday, November 15',
    location: 'Managua',
    activity: '',
    notes: '',
    link: '',
  },
]

export const locations = {
  'san-juan-del-sur': {
    name: 'San Juan del Sur',
    shortName: 'SJDS',
    description: 'San Juan del Sur is a vibrant beach town on Nicaragua\'s Pacific coast. Known for its laid-back surfer vibe, stunning sunsets, and friendly locals, this coastal paradise offers world-class beach activities and is the perfect base for adventure seekers.',
    longDescription: 'Nestled along Nicaragua\'s Pacific coast, San Juan del Sur is a picturesque beach town that has become a premier destination for travelers seeking adventure, relaxation, and authentic Central American culture. With its beautiful golden-sand beaches, warm tropical waters, and a thriving community of both locals and expats, SJDS offers an incredible mix of activities from water sports to cultural experiences. Whether you\'re looking to catch some waves, explore the nearby national parks, or simply unwind with fresh seafood and sunset views, San Juan del Sur delivers unforgettable memories.',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop',
    ],
    days: [1, 2, 3, 4],
    activities: [
      {
        name: 'Surf Classes',
        description: 'Learn to surf on world-class Pacific waves with experienced instructors.',
        link: 'https://www.tripadvisor.com/AttractionProductReview-g528745-d23696605-2_Hour_Guided_Surf_Lesson_in_Playa_Maderas-San_Juan_del_Sur_Rivas_Department.html',
      },
      {
        name: 'Ziplining',
        description: 'Soar through the jungle canopy on an adrenaline-pumping zipline adventure.',
        link: 'https://www.tripadvisor.com/AttractionProductReview-g528745-d34441551-Ride_the_sky_and_Epic_bicycle_zipline_tour-San_Juan_del_Sur_Rivas_Department.html',
      },
      {
        name: 'Sunday Funday Pool Crawl',
        description: 'Join the social scene with a fun pub crawl visiting different pool venues throughout town.',
        link: 'https://sundayfundaynicaragua.com/',
      },
      {
        name: 'Deep Sea Fishing',
        description: 'Go out on the Pacific for an exciting deep sea fishing expedition. Catch marlin, tuna, and more.',
        link: 'https://www.tripadvisor.com/AttractionProductReview-g528745-d34338449-Relaxed_Coastal_Fishing_Trip_in_San_Juan_del_Sur-San_Juan_del_Sur_Rivas_Department.html',
      },
      {
        name: 'Sunset Catamaran Tour',
        description: 'Sail along the coast as the sun sets over the Pacific. Often includes drinks and snacks.',
        link: 'https://www.wetravel.com/trips/half-day-shared-trip-turismo-del-mar-s-a-san-juan-del-sur-23792511#about-your-trip',
      },
      {
        name: 'Wakeboard Lessons',
        description: 'Learn to wakeboard on the calm bay waters with professional instructors.',
        link: 'https://www.getyourguide.com/san-juan-del-sur-l3439/san-juan-del-sur-private-wakeboarding-session-for-2-t1325976/?ranking_uuid=78833894-ebe3-4bee-b178-aa9040da5c5f&q=sunset+party+catamaran+tour+san+juan+del+sur',
      },
      {
        name: 'Beach Volleyball',
        description: 'Play beach volleyball with locals and other travelers on the sandy shores.',
        link: '',
      },
      {
        name: 'Kayaking',
        description: 'Explore coastal coves and mangrove forests by kayak.',
        link: '',
      },
    ],
  },
  'lake-nicaragua': {
    name: 'Lake Nicaragua (Granada & Ometepe)',
    shortName: 'Lake Nicaragua',
    description: 'Lake Nicaragua is one of Central America\'s most beautiful freshwater lakes, home to the historic colonial city of Granada and the stunning volcanic island of Ometepe. A natural wonder with incredible biodiversity and rich cultural heritage.',
    longDescription: 'Lake Nicaragua (Lago de Nicaragua) is Central America\'s largest freshwater lake and a UNESCO-designated wetland of international importance. Its waters are dotted with over 400 islands, from the tiny isletas near Granada to the distinctive twin-peaked volcano island of Ometepe. The lake region is a gateway to pristine nature, adventure, and culture. Granada, the colonial jewel on the lakeshore, combines Spanish colonial architecture with vibrant Caribbean culture. The lake itself is home to unique wildlife including freshwater sharks, caimans, and countless bird species. This region is perfect for island hopping, volcano hiking, cultural exploration, and simply soaking in the natural beauty.',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1495854035989-cebdbdd97913?w=600&h=400&fit=crop',
    ],
    days: [5, 6, 7],
    activities: [
      {
        name: 'Masaya Volcano National Park',
        description: 'Visit one of Nicaragua\'s most active volcanoes. Hike through the national park and witness the smoking crater.',
        link: '',
      },
      {
        name: 'Granada City Tour',
        description: 'Explore the colorful colonial architecture and vibrant culture of Granada. Visit markets, churches, and historic sites.',
        link: '',
      },
      {
        name: 'Ometepe Island Adventure',
        description: 'Climb the twin volcanoes or relax in natural hot springs on this unique volcanic island.',
        link: '',
      },
      {
        name: 'Isletas Boat Tour',
        description: 'Take a boat tour through the 400+ small islands near Granada. Spot wildlife and visit local communities.',
        link: '',
      },
      {
        name: 'Lake Swimming & Beaches',
        description: 'Swim in the freshwater lake or relax on the small beaches dotted around the region.',
        link: '',
      },
      {
        name: 'Wildlife Spotting',
        description: 'Look for caimans, freshwater sharks, iguanas, sloths, and numerous bird species in their natural habitat.',
        link: '',
      },
      {
        name: 'Kayaking on the Lake',
        description: 'Paddle through the calm waters between islands and along the lakeshore.',
        link: '',
      },
      {
        name: 'Spanish Classes',
        description: 'Take advantage of your time in Granada to improve your Spanish skills with local instructors.',
        link: '',
      },
    ],
  },
  'leon': {
    name: 'Leon',
    shortName: 'Leon',
    description: 'Leon is a historic city known as the gateway to Nicaragua\'s volcanoes. It\'s the home of the thrilling volcano boarding activity on Cerro Negro.',
    longDescription: 'Leon is one of Nicaragua\'s most historic cities and serves as the perfect base for volcano adventures. Perched near several active volcanoes, Leon offers visitors a chance to experience raw natural power in a dramatic landscape. The city itself blends colonial history with vibrant street culture, local cuisine, and colorful architecture. But Leon is most famous as the launching point for volcano boarding—a unique and exhilarating adventure where you ride down the ash slopes of Cerro Negro volcano on a specially designed board. It\'s an unforgettable adrenaline rush set against the backdrop of Nicaragua\'s volcanic landscape.',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506929925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    ],
    days: [8],
    activities: [
      {
        name: 'Volcano Boarding',
        description: 'The main event! Hike up Cerro Negro volcano and board down the ash slopes. An unforgettable rush followed by drinks and a bonfire celebration.',
        link: 'https://www.volcanodaynicaragua.com/tours/volcano-boarding/',
      },
      {
        name: 'Volcano Hiking',
        description: 'Hike various volcanic peaks around Leon for stunning crater views and unique landscapes.',
        link: '',
      },
      {
        name: 'Leon Cathedral Tour',
        description: 'Visit the stunning colonial cathedral in the city center, one of Nicaragua\'s most impressive colonial structures.',
        link: '',
      },
      {
        name: 'Local Market Exploration',
        description: 'Wander the vibrant local markets for authentic food, crafts, and a taste of daily Leon life.',
        link: '',
      },
      {
        name: 'Street Food Tour',
        description: 'Sample traditional Nicaraguan street food and local specialties in Leon.',
        link: '',
      },
    ],
  },
}

export const locationOptions = [
  {
    location: 'San Juan del Sur',
    blurb: 'This is a beach town with tons of stuff to do. Surf classes, Spanish classes, sunset catamaran tours, pool crawls, and more water sports await.',
    activities: [
      {
        name: 'Surf Classes',
        link: 'https://www.tripadvisor.com/AttractionProductReview-g528745-d23696605-2_Hour_Guided_Surf_Lesson_in_Playa_Maderas-San_Juan_del_Sur_Rivas_Department.html',
      },
      {
        name: 'Ziplining',
        link: 'https://www.tripadvisor.com/AttractionProductReview-g528745-d34441551-Ride_the_sky_and_Epic_bicycle_zipline_tour-San_Juan_del_Sur_Rivas_Department.html',
      },
      {
        name: 'Sunday Funday Pool Crawl',
        link: 'https://sundayfundaynicaragua.com/',
      },
      {
        name: 'Deep Sea Fishing',
        link: 'https://www.tripadvisor.com/AttractionProductReview-g528745-d34338449-Relaxed_Coastal_Fishing_Trip_in_San_Juan_del_Sur-San_Juan_del_Sur_Rivas_Department.html',
      },
      {
        name: 'Sunset Catamaran Tour',
        link: 'https://www.wetravel.com/trips/half-day-shared-trip-turismo-del-mar-s-a-san-juan-del-sur-23792511#about-your-trip',
      },
      {
        name: 'Wakeboard Lessons',
        link: 'https://www.getyourguide.com/san-juan-del-sur-l3439/san-juan-del-sur-private-wakeboarding-session-for-2-t1325976/?ranking_uuid=78833894-ebe3-4bee-b178-aa9040da5c5f&q=sunset+party+catamaran+tour+san+juan+del+sur',
      },
    ],
  },
  {
    location: 'Lake Nicaragua (Granada & Ometepe)',
    blurb: 'This region includes the colonial city of Granada, the islands of Ometepe and nearby volcanic islands, plus Masaya Volcano. Tons of activities and exploration opportunities in the surrounding jungle and waterways.',
    activities: [
      {
        name: 'Masaya Volcano',
        link: '',
      },
      {
        name: 'Granada City Tour',
        link: '',
      },
      {
        name: 'Ometepe Island',
        link: '',
      },
    ],
  },
]
