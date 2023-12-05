import CalCard from "../cards/CalCard";
import CalTable from "../CalTable";

const CalendarSection = () => {
  return (
    <div className="container flex items-start gap-8">
      <CalTable />
      <CalCard />
    </div>
  );
};

export default CalendarSection;
