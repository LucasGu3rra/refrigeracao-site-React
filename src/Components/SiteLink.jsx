import { Link, useLocation } from 'react-router-dom';
import { getAttributionSearch } from '../utils/attribution';

export default function SiteLink({ to, children, ...props }) {
  const location = useLocation();
  const [pathname, hash] = to.split('#');
  return (
    <Link {...props} to={{ pathname: pathname || location.pathname,
      search: getAttributionSearch(location.search), hash: hash ? `#${hash}` : '' }}>
      {children}
    </Link>
  );
}
