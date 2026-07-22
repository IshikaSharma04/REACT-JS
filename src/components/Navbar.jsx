const NAV_ITEMS = ['Home', 'About', 'Contact'];
export const Navbar = () => <nav>{NAV_ITEMS.map(i => <a key={i} href={`#${i}`}>{i}</a>)}</nav>;
