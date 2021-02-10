export default function isLoadRoute(prefix) {
  // if prefix is is 'active' always show this route
  // otherwise only show route if url path matches
  return (location) => prefix === 'active' || location.pathname.startsWith(prefix)
};