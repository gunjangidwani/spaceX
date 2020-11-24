import React from 'react';

const Flight = ({programs}) => {
  return (
    <div className="flightContainer">
    {programs.map(program => (
      <div className="cardContainer">
        <img src={program.links.mission_patch_small} alt={program.flight_number} /> <br />
        <h5> {program.mission_name} #{program.flight_number} </h5> <br />
        <strong>Mission ids</strong> <span> {program.mission_id.map(id =>( <span key={id}> {id} </span> ))} </span> <br />
        <strong>Launch year:</strong> <span> {program.launch_year} </span> <br />
        <strong>Successful Launch </strong> <span> {program.launch_success === true ? 'true' : 'false'} </span> <br />
        <strong>Successful Landing:</strong> <span> {program.launch_landing} </span> <br />
      </div>
    ))}
  </div>
  );
};

export default Flight;