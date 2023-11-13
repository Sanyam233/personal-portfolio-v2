import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Description = (props) => {
  const Responsibilities = props.DUTIES.map((duty, idx) => {
    return (
      <div className="job-description" key={idx}>
        <FontAwesomeIcon
          className="job-description-bullets"
          icon="angle-double-right"
        />
        <p>{duty}</p>
      </div>
    );
  });

  return (
    <div className="job-description-container">
      <h3 className="job-description-title">{props.POSITION}</h3>
      <p className="job-description-organization">{props.ORGANIZATION}</p>
      <p className="job-description-dates">{props.PERIOD}</p>
      {Responsibilities}
    </div>
  );
};

export default Description;
