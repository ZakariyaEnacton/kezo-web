import CalHead from "./CalHead";
import CalTable from "./CalTable";

const CalContent = () => {
  return (
    <div className="flex p-6 flex-col items-start gap-4 rounded-2xl bg-white shadow-cal container max-w[878px] ">
      <CalHead />
      <CalTable />
    </div>
  );
};

export default CalContent;
