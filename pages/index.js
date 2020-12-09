import React, { useState, useEffect } from 'react';

import { api } from './api';
import Filter from '../components/filter/Filter.js';
import Flight from '../components/flight/Flight.js';

const App = () => {
  const [programs, setPrograms] = useState([]);
  const [launchYear, setLaunchYear] = useState('');
  const [successfulLanding, setSuccessfulLanding] = useState('');
  const [successfulLaunch, setSuccessfulLaunch] = useState('');
  const [loader, setLoader] = useState(false);

  const updateFilterType = (filterType, value) => {
    switch (filterType) {
      case 'launch_year':
        setLaunchYear(value);
        break;
      case 'launch_success':
        setSuccessfulLaunch(value);
        break;
      case 'land_success':
        setSuccessfulLanding(value);
        break;
      case 'remove_all':
        setLaunchYear('');
        setSuccessfulLaunch('');
        setSuccessfulLanding('');
        break;
      default:
        break;
    }
  };

  const url = () => {
    const launch_success = successfulLaunch !== '' ? `&launch_success=${successfulLaunch}` : '';
    const land_success = successfulLanding !== '' ? `&land_success=${successfulLanding}` : '';
    const launch_year = launchYear !== '' ? `&launch_year=${launchYear}` : '';
    return`${launch_success}${land_success}${launch_year}`;
  }

  useEffect(() => {
    if (launchYear || successfulLaunch || successfulLanding) {
      setLoader(true);
      api.spacesX.applyFilter(url()).then(res => {
      setLoader(false);
        setPrograms(res);
        window.history.replaceState(null, null, url());
      });
    } else {
      setLoader(true);
      api.spacesX.applyFilter('/').then(res => {
      setLoader(false);
        setPrograms(res);
        window.history.pushState({}, document.title, "/" );
      });
    }
  }, [successfulLaunch, successfulLanding, launchYear]);

  const applyFilter = (filterType, value) => {
    updateFilterType(filterType, value);
  };

  return (
    <div className="SpaceXWrapper">
      <div className="SpaceXContainter">
        <h1>SpaceX Launch Programs</h1>
          <Filter
            applyFilter={applyFilter}
            launchYear={launchYear}
            successfulLanding={successfulLanding}
            successfulLaunch={successfulLaunch}
          />
          {loader === true ? <div className="reset"> loading... </div> : <Flight programs={programs} />}
      </div>
    </div>
  );
};

export default App;