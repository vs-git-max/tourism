import React from "react";

const DestinationsCard = ({ filteredDestination }) => {
  const handleOpenCard = () => {};

  return (
    <div
      className="flex items-center justify-between gap-2 mb-6 cursor-pointer"
      onClick={() => handleOpenCard()}
    >
      <div className="w-full h-80 ">
        <img
          src={filteredDestination.image}
          alt=""
          className="w-full h-full rounded-xl object-cover   aspect-auto"
        />
        <p className="text-sm font-bold">
          {filteredDestination.shortDescription}
        </p>
        <span className="font-bold text-muted-foreground text-sm">
          {filteredDestination.name}
        </span>
      </div>
    </div>
  );
};

export default DestinationsCard;
