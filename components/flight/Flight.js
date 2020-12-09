import React from 'react';

const Flight = ({ programs }) => {
  return (
    <div className="spaceXGallery">
      {programs.length > 0
        ? programs.map(program => (
            <div key={program.flight_number} className="card">
              <div className="thumbnail">
              <img
                loading="lazy"
                src={program.links.mission_patch_small}
                alt={program.flight_number}
              />
              </div>
              <h5 className="missionName">
                {program.mission_name} #{program.flight_number}
              </h5>
              <strong>Mission ids</strong>
              {program.mission_id.length ? (
                <span>
                  {program.mission_id.map(id => (
                    <span key={id}> {id} </span>
                  ))}
                </span>
              ) : null}
              <p><strong>Launch year:</strong> <span> {program.launch_year} </span></p>
              <p>
              <strong>Successful Launch </strong>
              <span>{program.launch_success === true ? 'true' : 'false'}</span>
              </p>
              <p>
                <strong>Successful Landing:</strong>
              <span>{program.launch_landing === true ? 'true' : 'false'}</span>
              </p>
            </div>
          ))
        : 'No Data'}
        <p className="developer">Developed By: <span>Gunjan Gidwani</span></p>
    </div>
  );
};

export default Flight;
