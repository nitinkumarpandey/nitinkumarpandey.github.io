export const profile = {
  name: 'Nitinkumar S. Pandey',
  title: 'Android Architect / Senior Android Engineer',
  tagline:
    'I design, modernize, and lead Android platforms that stay fast, reliable, and maintainable at consumer scale.',
  summary:
    'Android Architect with 11+ years of experience designing and modernizing scalable mobile applications for enterprise and consumer platforms. Strong expertise in Clean Architecture, MVI, MVVM, modular system design, API-driven UI, and mentoring teams in Agile environments.',
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'highlights', label: 'Projects / Highlights' },
    { id: 'contact', label: 'Contact' }
  ],
  metrics: [
    { value: '11+', label: 'Years experience', icon: 'architecture' },
    { value: '3M+', label: 'Users impacted', icon: 'users' },
    { value: '25%+', label: 'Load-time improvement', icon: 'performance' },
    { value: '99.9%+', label: 'Stability focus', icon: 'stability' }
  ],
  aboutFocus: [
    {
      title: 'Architecture expertise',
      copy: 'Clean Architecture, MVI, MVVM, modularization, shared business layers, and platform patterns for long-lived Android products.',
      icon: 'architecture'
    },
    {
      title: 'Scalable systems',
      copy: 'Experience with API-driven UI, Contentful, SmartEdit, payment gateways, notifications, and cross-app consistency at commerce scale.',
      icon: 'api'
    },
    {
      title: 'Leadership and mentoring',
      copy: 'Acts as an architecture lead, mentors engineers, improves code quality, and turns stakeholder requirements into maintainable delivery plans.',
      icon: 'leadership'
    }
  ],
  skills: [
    { category: 'Languages', items: ['Kotlin', 'Java'], strength: 92, icon: 'code' },
    { category: 'Architecture', items: ['Clean Architecture', 'MVI', 'MVVM', 'VIPER', 'Modularization', 'Design Patterns'], strength: 96, icon: 'architecture' },
    { category: 'Frameworks', items: ['Android SDK', 'Jetpack Compose', 'Material Design', 'Coroutines', 'Flow', 'RxJava'], strength: 90, icon: 'mobile' },
    { category: 'Tools', items: ['Git', 'Gradle', 'CI/CD', 'Google Play Console', 'Play Store Compliance'], strength: 88, icon: 'delivery' },
    { category: 'Integrations', items: ['REST APIs', 'Retrofit', 'OkHttp', 'Payment Gateway', 'Push Notifications', 'WebView Native Bridge'], strength: 91, icon: 'api' },
    { category: 'Quality', items: ['JUnit', 'Espresso', 'Memory Management', 'Performance Optimization', 'Technical Debt Reduction'], strength: 87, icon: 'stability' }
  ],
  experience: [
    {
      company: 'Abylle Solutions Pvt Ltd.',
      client: 'Client: Tata Unistore - Tata CLiQ',
      role: 'Senior Android Developer (Acting Android Architect)',
      duration: 'Oct 2021 - Present',
      achievements: [
        'Led architecture across Tata CLiQ Fashion (2.35M MAU) and Tata CLiQ Luxury (760K MAU) Android applications.',
        'Designed modular layers using Clean Architecture, MVI, and shared business/data components to reduce duplication.',
        'Reduced application load time by 25%+ through startup optimization, memory management, and network efficiency improvements.',
        'Built API-driven UI with Contentful and SmartEdit, enabling dynamic content updates without app releases.',
        'Worked with ExoPlayer-based Brightcove video playback and streaming integrations.',
        'Implemented WebView-Native bridge, payment gateways, and notification systems.',
        'Managed Google Play releases with Play policies, data safety, and privacy compliance.',
        'Mentored engineers, reduced technical debt, and established architecture and code quality practices.'
      ]
    },
    {
      company: 'Qtech Software Pvt. Ltd.',
      role: 'Senior Android Developer / Technical Lead',
      duration: 'Apr 2017 - Sep 2021',
      achievements: [
        'Architected Android applications for travel platforms handling complex booking workflows and high transaction volumes.',
        'Implemented VIPER architecture to improve modularity and separation of concerns.',
        'Integrated third-party APIs and payment systems for booking and transaction processing.',
        'Led end-to-end development from requirement analysis and system design through delivery.',
        'Gained media streaming exposure using ExoPlayer for video playback integration.'
      ]
    },
    {
      company: 'Hands In Technology',
      role: 'Android Developer',
      duration: 'Jan 2015 - Apr 2017',
      achievements: [
        'Developed Android applications across e-commerce, healthcare, and e-voting domains.',
        'Delivered full lifecycle development across requirements, implementation, testing, and release support.'
      ]
    }
  ],
  highlights: [
    {
      title: 'Reduced app load time by 25%+',
      copy: 'Improved startup flow, memory behavior, and network efficiency for better perceived speed.',
      icon: 'performance'
    },
    {
      title: 'Handled apps serving 3M+ users',
      copy: 'Owned architecture and delivery across Tata CLiQ Fashion and Tata CLiQ Luxury Android products.',
      icon: 'users'
    },
    {
      title: 'Led multi-app architecture',
      copy: 'Created shared business and data components that improved consistency and reduced duplication.',
      icon: 'architecture'
    },
    {
      title: 'Enabled dynamic commerce UI',
      copy: 'Built API-driven experiences with Contentful and SmartEdit to support faster product iteration.',
      icon: 'api'
    },
    {
      title: 'Integrated media playback',
      copy: 'Worked on ExoPlayer and Brightcove-based playback for streaming experiences.',
      icon: 'media'
    },
    {
      title: 'Owned Play Store compliance',
      copy: 'Managed releases with attention to Play policies, data safety, and privacy requirements.',
      icon: 'compliance'
    }
  ],
  projects: [
    {
      name: 'Tata CLiQ Fashion',
      scale: '2.35M MAU',
      description:
        'Large-scale commerce Android app with modular architecture, API-driven UI, release governance, and performance-focused engineering.',
      stack: ['Kotlin', 'Clean Architecture', 'MVI', 'Contentful', 'SmartEdit', 'Retrofit', 'OkHttp'],
      impact: 'Improved scalability, release agility, and load performance.'
    },
    {
      name: 'Tata CLiQ Luxury',
      scale: '760K MAU',
      description:
        'Premium commerce Android experience maintained alongside Fashion with shared patterns, stable delivery, and cross-app consistency.',
      stack: ['Kotlin', 'MVVM', 'ExoPlayer', 'Brightcove', 'WebView Bridge', 'Payment Gateway'],
      impact: 'Strengthened reliability and unified engineering practices across apps.'
    }
  ],
  contact: {
    email: 'nitinkumar.pandey@outlook.com',
    phone: '+91-8850883792',
    linkedin: 'https://www.linkedin.com/in/nitinkumar-pandey',
    location: 'Mumbai, India'
  }
};
