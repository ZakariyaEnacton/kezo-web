import { DocumentIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Tables {
  id: number;
  title: string;
  date: string;
  sec: "";
  one: "";
  thir: "";
  four: "";
}

const CalTable: React.FC = () => {
  const TableData: Tables[] = [
    {
      id: 1,
      title: "Fr.",
      date: "01.02.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 2,
      title: "So.",
      date: "03.02.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 3,
      title: "Mo.",
      date: "04.02.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 4,
      title: "Di.",
      date: "10.02.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 5,
      title: "Mi.",
      date: "11.02.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 6,
      title: "Do.",
      date: "17.02.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 7,
      title: "Fr.",
      date: "18.02.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 8,
      title: "Fr.",
      date: "24.02.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 9,
      title: "So.",
      date: "25.02.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 10,
      title: "Fr.",
      date: "01.03.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 11,
      title: "Sa.",
      date: "02.03.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
    {
      id: 12,
      title: "So.",
      date: "03.03.2024",
      sec: "",
      one: "",
      thir: "",
      four: "",
    },
  ];

  const determineRowColor = (id: number) => {
    if (id === 2 || id === 9 || id === 12) {
      return "bg-tert";
    } else if (id === 11) {
      return "bg-gray-100";
    }
    return "bg-white";
  };

  return (
    <div className="flex flex-col items-start rounded-lg border border-select">
      <table>
        <thead>
          <tr className="flex items-start">
            <th className="flex w-[350px] h-[44px] py-3 px-10 justify-center items-center gap-3 border-b border-third bg-primary">
              <span className="text-xs font-normal text-secondary">Kries</span>
            </th>
            <th className="flex w-[120px] h-[44px] py-3 px-9 justify-center items-center gap-3 border-b border-third bg-primary">
              <span className="text-xs font-normal text-secondary">2</span>
            </th>
            <th className="flex w-[120px] h-[44px] py-3 px-9 justify-center items-center gap-3 border-b border-third bg-primary">
              <span className="text-xs font-normal text-secondary">1</span>
            </th>
            <th className="flex w-[120px] h-[44px] py-3 px-9 justify-center items-center gap-3 border-b border-third bg-primary">
              <span className="text-xs font-normal text-secondary">4</span>
            </th>
            <th className="flex w-[120px] h-[44px] py-3 px-9 justify-center items-center gap-3 border-b border-third bg-primary">
              <span className="text-xs font-normal text-secondary">3</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((data) => (
            <tr
              key={data.id}
              className={`${determineRowColor(
                data.id
              )} flex items-start border-b border-third`}
            >
              <td className="flex w-[74px] h-[60px] px-6 py-4 items-center justify-center">
                <span className="text-sm font-normal text-black">
                  {data.title}
                </span>
              </td>
              <td className="flex w-[276px] h-[60px] px-6 py-4 items-center justify-center">
                <span className="text-sm font-normal text-black">
                  {data.date}
                </span>
              </td>
              <td className="flex w-[120px] h-[60px] px-6 py-4 items-center justify-center">
                {data.id === 10 ? (
                  <div className="w-9 h-9 bg-icon_bg_2 rounded-full">
                    <DocumentIcon className="h-6 w-6 font-bold mx-[6px] my-[6px] text-paper" />
                  </div>
                ) : (
                  data.sec
                )}
              </td>
              <td className="flex w-[120px] h-[60px] px-6 py-4 items-center justify-center">
                {data.id === 10 ? (
                  <div className="w-9 h-9 bg-icon_bg_2 rounded-full">
                    <DocumentIcon className="h-6 w-6 font-bold mx-[6px] my-[6px] text-paper" />
                  </div>
                ) : (
                  data.one
                )}
              </td>
              <td className="flex w-[120px] h-[60px] px-6 py-4 items-center justify-center">
                <span className="text-sm font-normal text-black">
                  {data.four}
                </span>
              </td>
              <td className="flex w-[120px] h-[60px] px-6 py-4 items-center justify-center">
                {data.id === 1 ? (
                  <div className="w-9 h-9 bg-icon_bg_3 rounded-full">
                    <TrashIcon className="h-6 w-6 font-bold mx-[6px] my-[6px] text-waste" />
                  </div>
                ) : (
                  data.four
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalTable;
