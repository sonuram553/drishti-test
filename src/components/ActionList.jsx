import data from "../data";
import ActionCard from "./ActionCard";

const ActionList = () => {
  return (
    <section className="action-list">
      {data.map((action, index) => (
        <ActionCard key={index} />
      ))}
    </section>
  );
};

export default ActionList;
