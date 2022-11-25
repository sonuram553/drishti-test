import data from "../data";
import ActionCard from "./ActionCard";

const ActionList = () => {
  return (
    <section className="action-list">
      {data.map((action) => (
        <ActionCard key={action.id} action={action} />
      ))}
    </section>
  );
};

export default ActionList;
