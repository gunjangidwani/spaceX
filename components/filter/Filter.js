import React from 'react';
import { years, landingValue, launchValue } from '../../utils/constant';

const Filter = ({
  applyFilter,
  launchYear,
  successfulLanding,
  successfulLaunch
}) => {
  return (
    <div className="sidebar">
        <h3 className="filter">Filters</h3>
        <button className="reset" onClick={() => applyFilter('remove_all', '')} >Clear All</button>
        <div className="launch">
          <span>Launch Year</span>
          <p className="reset" onClick={() => applyFilter('launch_year', '')} >Clear</p>
          <hr />
          <ul>
            {years.map(yr => (
              <li key={yr.id}>
                <button
                className={`primmaryBtn ${
                  yr.value === launchYear ? 'active' : ''
                }`}
                onClick={() => applyFilter('launch_year', yr.value)}
              >
                {yr.value}
              </button>
              </li>
            ))}
          </ul>
            
        </div>
        <div className="launch">
          <span>Successful Launch</span> 
          <p className="reset" onClick={() => applyFilter('launch_success', '')} >Clear</p>
          <hr />
          <ul>
            {launchValue.map(launch => (
            <li key={launch.id}>
              <button
                className={`primmaryBtn ${
                  launch.value === successfulLaunch ? 'active' : ''
                }`}
                onClick={() => applyFilter('launch_success', launch.value)}
              >
                {launch.value === true ? 'True' : 'False'}
              </button>
                </li>
            ))}
          </ul>
        </div>
        <div className="launch">
          <span>Successful Landing</span>
          <p className="reset" onClick={() => applyFilter('land_success', '')} >Clear</p>
          <hr />
          <ul>
            {landingValue.map(land => (
            <li key={land.id}>
              <button
                className={`primmaryBtn ${
                  land.value === successfulLanding ? 'active' : ''
                }`}
                onClick={() => applyFilter('land_success', land.value)}
              >
                {land.value === true ? 'True' : 'False'}
              </button>
            </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Filter;
