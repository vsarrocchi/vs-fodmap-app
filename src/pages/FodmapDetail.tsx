import { Fragment, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import HighlightedFodmap from '../components/Fodmap/HighlightedFodmap';
// import useHttp from '../hooks/use-http';
// import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const FodmapDetail = () => {
  const params = useParams();

  const { quoteId } = params;

//   const { sendRequest, status, data: loadedQuote, error } = useHttp(
//     getSingleQuote,
//     true
//   );

//   useEffect(() => {
//     sendRequest(quoteId);
//   }, [sendRequest, quoteId]);

//   if (status === 'pending') {
//     return (
//       <div className='centered'>
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   if (error) {
//     return <p className='centered'>{error}</p>;
//   }

//   if (!loadedQuote.text) {
//     return <p>No quote found!</p>;
//   }

  return (
    <Fragment>
      <HighlightedFodmap />
      {/* <HighlightedFodmap text={loadedFodmap.text} author={loadedFodmap.author} /> */}
      <Outlet />
    </Fragment>
  );
};

export default FodmapDetail;