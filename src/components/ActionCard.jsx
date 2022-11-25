const ActionCard = () => {
  return (
    <article className="action-card">
      <div className="action-card__thumbnail"></div>
      <h2>Bake</h2>
      <div className="action-card__dish">
        <p>LASAGNA</p> <p>OVEN1</p>
      </div>
      <div className="action-card__time">
        <p>duration</p>
        <p>start time</p>
      </div>
    </article>
  );
};

export default ActionCard;
