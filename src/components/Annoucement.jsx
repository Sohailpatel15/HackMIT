import React from "react";

const Announcement = ({ data }) => {
  
  return data.map((announcement, index) => {
    return (
      <div className="max-w-7xl mx-auto" key={announcement.id}>
        <div
          className="flex gap-4 items-center group"
        >
          <div className="relative pr-16 h-32 w-32">
            <div className="bg-hack-300 h-full w-[5px] left-[calc(50%-2.5px)]  absolute" />

            <div className="absolute h-8 w-8 group-hover:w-20 group-hover:h-20 text-xs transition-all p-2 rounded-full text-center items-center flex bg-hack-300 text-white top-[calc(50%-1rem)] left-[calc(50%-1rem)] group-hover:top-[calc(50%-2.5rem)] group-hover:left-[calc(50%-2.5rem)]"></div>
          </div>

          <div className="space-y-1 pl-4">
            <div
              className="font-semibold transition-all text-xl group-hover:text-3xl"
            >
              {announcement.date}
            </div>
            <div
              className="transition-all text-sm text-gray-500 font-light group-hover:text-lg"
            >
              {announcement.description}
            </div>
          </div>  
        </div>
      </div>
    );
  });
};

export default Announcement;
