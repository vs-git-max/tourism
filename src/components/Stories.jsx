import React from "react";
import { Button } from "./ui/button";
import { latestStories } from "@/helpers";
import Latest from "@/pages/Latest";

const Stories = () => {
  const latestStory = latestStories.find((story) => story.latest);
  const otherStories = latestStories.slice(0, 3);

  return (
    <div className="mt-10 ">
      <div className="flex flex-col gap-3">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-bold text-4xl md:text-7xl">Latest Stories</h1>
          <Button className="bg-transparent hover:bg-transparent border-black border text-black cursor-pointer">
            Read all Stories
          </Button>
        </div>
        <div className=" flex items-center justify-between gap-3">
          <div className="cursor-pointer flex flex-col items-start justify-between gap-3 w-1/2">
            <div className="w-full h-80 overflow-hidden">
              <img
                src={latestStory.image}
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <p className="font-medium text-muted-foreground text-sm">
              {latestStory.name}
            </p>
            <h1 className="font-bold text-lg text-accent-foreground">
              {latestStory.placeVisited}
            </h1>
            <p className="text-sm font-medium">{latestStory.relevantDetail}</p>
            <p className="text-muted-foreground font-semibold">
              {latestStory.story}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start w-1/2">
            {otherStories.map((otherStory) => (
              <Latest otherStory={otherStory} key={otherStory.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
