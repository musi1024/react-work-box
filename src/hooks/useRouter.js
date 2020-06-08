import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch
} from 'react-router-dom';
import qs from 'qs';
import { useMemo } from 'react';

function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: qs.parse(location.search.slice(1)),
      params,
      match,
      location,
      history
    };
  }, [history, location, match, params]);
}

export default useRouter;
