// Municipality configuration and typed sample content, independent of presentation.
export const city = { name: 'Brookhaven', state: 'Illinois', tagline: 'River roots. Strong neighbors. Bright tomorrows.', address: '301 S. Main Street', postal: 'Brookhaven, Illinois', hours: 'Monday–Friday, 8:00 AM–4:30 PM', isDemo: true } as const;
export const navigation = [{ label: 'Residents', href: '/#services' }, { label: 'Government', href: '/#government' }, { label: 'Community', href: '/#community' }, { label: 'Business', href: '/#business' }, { label: 'Explore', href: '/#parks' }];
export type Service = {
    id: string;
    title: string;
    icon: 'card' | 'trash' | 'file' | 'alert' | 'tree' | 'building';
    description: string;
    keywords: string;
    details: string;
};
export const services: Service[] = [
    { id: 'utility-bill', title: 'Pay a bill', icon: 'card', description: 'Water & sewer payments', keywords: 'utilities water sewer billing payment', details: 'Have your utility account number and service address ready. Online payments are not connected in this fictional demonstration; no account or payment information is collected.' },
    { id: 'trash', title: 'Trash & recycling', icon: 'trash', description: 'Collection & disposal', keywords: 'garbage pickup waste schedule bins', details: 'Find collection days, holiday changes, recycling guidelines, and bulky-item options. Address-based schedules will be available when municipal service data is connected.' },
    { id: 'permits', title: 'Permits & applications', icon: 'file', description: 'Start your next project', keywords: 'building construction zoning business licenses development', details: 'Building improvements, signs, and some events may require a permit. Application guidance and submission will be connected in a later phase.' },
    { id: 'concern', title: 'Report a concern', icon: 'alert', description: 'Help care for our city', keywords: 'pothole streetlight road problem report', details: 'Future requests will support potholes, damaged sidewalks, and streetlights. Reports are not submitted through this demonstration. For an actual emergency, call 911.' },
    { id: 'parks', title: 'Parks & recreation', icon: 'tree', description: 'Find your fresh air', keywords: 'park trails recreation playground sports walking', details: 'Explore Riverside Park, Heritage Grove, and Maplewood Trails below. These are fictional places. Reservations and program registration are planned for a later phase.' },
    { id: 'jobs', title: 'City jobs', icon: 'building', description: 'Make a local difference', keywords: 'employment careers work jobs hiring', details: 'Future listings will include positions, qualifications, and deadlines. There are no actual municipal vacancies or applications on this fictional website.' }
];
export const news = [
    { id: 'main-street', category: 'City improvements', date: '2026-10-05', displayDate: 'October 5, 2026', title: 'A brighter future for Main Street', description: 'New sidewalks, better lighting, and more room to gather. See what’s taking shape downtown.', details: 'The sample Main Street plan prioritizes accessible crossings, shade trees, and pedestrian lighting. This illustrative update does not describe real construction or road closures.' },
    { id: 'council', category: 'Your government', date: '2026-10-02', displayDate: 'October 2, 2026', title: 'From the council table to your neighborhood', description: 'A look at the conversations shaping our community.', details: 'This sample recap highlights neighborhood investment, public spaces, and services. Official agendas and minutes will be published when a real municipality adopts the platform.' },
    { id: 'cleanup', category: 'Community', date: '2026-09-28', displayDate: 'September 28, 2026', title: 'A little time. A cleaner, greener Brookhaven.', description: 'Join your neighbors for our annual Fall Clean-Up Day.', details: 'The fictional Fall Clean-Up Day takes place October 12, from 8 AM to noon. Registration is not open and no real event is being organized.' }
];
export const events = [
    { id: 'market', month: 'OCT', day: '10', date: '2026-10-10', title: 'Downtown Farmers Market', location: 'Main Street Plaza', time: '9:00 AM–1:00 PM', details: 'Local flavors, seasonal produce, and a morning with neighbors. This illustrative event does not represent a real scheduled market.' },
    { id: 'clean-up', month: 'OCT', day: '12', date: '2026-10-12', title: 'Fall Clean-Up Day', location: 'Citywide', time: '8:00 AM–12:00 PM', details: 'A sample volunteer morning caring for parks and shared spaces. Event registration and location assignments are not connected.' },
    { id: 'movie', month: 'OCT', day: '17', date: '2026-10-17', title: 'Movies in the Park', location: 'Riverside Park', time: '7:00 PM', details: 'Bring a blanket for an evening under the stars. This fictional event demonstrates the calendar design; movie selection and reservations are not available.' }
];
export const statuses = [{ icon: 'road', label: 'Roads', value: 'Routine travel' }, { icon: 'trash', label: 'Trash', value: 'On schedule' }, { icon: 'water', label: 'Water', value: 'Normal service' }, { icon: 'tree', label: 'Parks', value: 'Open for play' }] as const;
