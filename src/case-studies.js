import screenshots from './project-screenshots.json';

export const caseStudies = {
 'best-store': {
  eyebrow:'BEST STORE / AUTOMOTIVE CATALOGUE',
  headline:'A clear route from vehicle to accessory.',
  summary:'A digital catalogue built around how customers actually shop: choose a vehicle, discover relevant accessories, and find the next step without losing the brand’s character.',
  role:'IT & Digital Solutions Lead · Web application development & interface design',
  scope:'Automotive catalogue, bilingual browsing, store guide',
  delivery:'Live web application',
  screenshots:screenshots['best-store'],
  sections:[
   {title:'The brief',body:'Present a broad car-accessory collection in a way that feels organized, premium, and easy to explore. The experience needed to connect product discovery with the store’s real-world services.'},
   {title:'The experience',body:'Vehicle-based collections provide a natural starting point. Product imagery and clear visual hierarchy keep the catalogue approachable, while Arabic and English browsing make the content accessible to both audiences.'},
   {title:'The details',body:'The interface brings together the home page, car collections, product discovery, and a store guide. Warm gold accents and a dark visual language create a consistent Best Store identity throughout the journey.'},
   {title:'My role at Best Store',body:'I designed and developed the store’s web application as part of my IT responsibilities in Doha. My wider role also includes in-car multimedia and application upgrades, VDS diagnostics and ADAS software updates, plus Photoshop campaigns and creative video ads for social media.'},
  ],
  features:[['Vehicle-based discovery','Browse collections organized around the customer’s car.'],['Arabic & English','A bilingual experience for the store’s audiences.'],['Store guide','A dedicated entry point for finding accessories or making another request.'],['Responsive presentation','Clear layouts and product previews across screen sizes.']],
 },
 'nexusfit': {
  eyebrow:'NEXUSFIT / GYM CRM & ERP',
  headline:'The gym’s daily operations, brought together.',
  summary:'An end-to-end management system I designed and developed for a gym, combining a React interface, business logic, and a locally hosted database on the gym’s PC.',
  role:'Full-stack development & interface design',
  scope:'CRM, memberships, payments, operational dashboard',
  delivery:'Locally hosted application',
  screenshots:screenshots.nexusfit,
  sections:[
   {title:'The brief',body:'Give gym staff one coherent workspace for member administration, subscription periods, payment records, activity pricing, and operational visibility.'},
   {title:'My contribution',body:'I built the complete application: the React interface, administration workflows, business logic, and local data persistence. The system is intended to run on the gym’s own PC with its database hosted locally.'},
   {title:'The details',body:'The dashboard brings membership and revenue information into view alongside a smart calculator. Dedicated sections organize member registration, activity plans, payments, gym hours, trainers, workouts, and nutrition.'},
  ],
  features:[['Operations dashboard','Membership and revenue views, subscription status, and a smart calculator.'],['Member administration','Registration forms, member profiles, membership periods, and subscription tiers.'],['Payments & reporting','A revenue ledger with transaction history, plan periods, payment methods, search, and CSV export.'],['Activity plans','Activity pricing organized by daily, weekly, monthly, and longer subscription periods.'],['Local database','Data persistence hosted on the gym’s PC.'],['One administration workspace','A consistent interface across gym hours, trainers, workouts, nutrition, and settings.']],
 },
};
