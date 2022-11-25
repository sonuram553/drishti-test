import { actionListData } from "../data";
import ActionCard from "./ActionCard";

const ActionList = () => {
  return (
    <section className="action-list">
      {actionListData.map((action) => (
        <ActionCard key={action.id} action={action} />
      ))}
    </section>
  );
};

export default ActionList;
