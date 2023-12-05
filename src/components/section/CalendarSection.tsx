import CalCard from "../cards/CalCard";
import CalContent from "../table/CalContent";

const CalendarSection = () => {
  return (
    <div className="container flex items-start gap-8 mb-4">
      <CalContent />
      <CalCard />
    </div>
  );
};

export default CalendarSection;
