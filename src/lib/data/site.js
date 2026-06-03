// Single source of truth for practice contact details + primary navigation.

export const practice = {
	name: 'Treehouse Pediatric Dentistry',
	dentist: 'Dr. Priya Raman, DDS',
	phoneDisplay: '(816) 555-0199',
	phoneHref: 'tel:+18165550199',
	street: '5841 Brookside Blvd',
	city: 'Kansas City, MO 64113',
	hours: [
		['Mon–Thu', '8a – 5p'],
		['Fri', '8a – 1p'],
		['Sat–Sun', 'Closed']
	]
};

/** Primary nav — shared by the header and footer. */
export const navLinks = [
	{ href: '/services', label: 'Services' },
	{ href: '/nervous-kids', label: 'Nervous Kids & First Visits' },
	{ href: '/meet-dr-priya', label: 'Meet Dr. Priya' },
	{ href: '/for-parents', label: 'For Parents' },
	{ href: '/reviews', label: 'Reviews' }
];
