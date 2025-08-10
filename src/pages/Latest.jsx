import React from "react";

const Latest = ({ otherStory }) => {
  const { name, relevantDetail, story, image } = otherStory;

  const trimmedStory = story.split(" ").slice(0, 10).join(" ");

  return (
    <div className="flex items-center cursor-pointer">
      <div className="w-60 ">
        {" "}
        <img src={image} alt="" className="aspect-square rounded-xl" />
      </div>
      <div className="flex flex-col items-start ml-2 gap-1.5">
        <h1 className="font-medium text-muted-foreground">{name}</h1>
        <p className="text-lg font-bold text-accent-foreground">
          {relevantDetail}
        </p>
        <p className="flex-wrap text-sm">{trimmedStory + "...(Read more)"}</p>
      </div>
    </div>
  );
};

export default Latest;
