import ActionCard from "./ActionCard";

const ActionList = ({ items }) => {
  return (
    <section className="action-list">
      {items.map((action) => (
        <ActionCard key={action.id} action={action} />
      ))}
    </section>
  );
};

export default ActionList;
