const ActionCard = ({ action }) => {
  return (
    <article className="action-card">
      <div className="action-card__thumbnail">{action.action[0]}</div>
      <h2>{action.action.toUpperCase()}</h2>
      <div className="action-card__dish">
        <p>{action.dish.toUpperCase()}</p> <p>{action.station.toUpperCase()}</p>
      </div>
      <div className="action-card__time">
        <p>{action.duration}</p>
        <p>{action.startTime}</p>
      </div>
    </article>
  );
};

export default ActionCard;
