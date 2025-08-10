import { destinationFilters, destinations } from "@/helpers";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import DestinationsCard from "@/pages/DestinationsCard";

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredDestination, setFilteredDestination] = useState(destinations);

  useEffect(() => {
    switch (selectedCategory) {
      case "popular":
        setFilteredDestination(
          destinations.filter(
            (destination) => destination.category === "popular"
          )
        );
        break;
      case "":
        setFilteredDestination(destinations);
        break;
      case "adventure":
        setFilteredDestination(
          destinations.filter(
            (destination) => destination.category === "adventure"
          )
        );
        break;
      case "cultural":
        setFilteredDestination(
          destinations.filter(
            (destination) => destination.category === "cultural"
          )
        );
        break;
      case "romantic":
        setFilteredDestination(
          destinations.filter(
            (destination) => destination.category === "romantic"
          )
        );
        break;
      case "nature":
        setFilteredDestination(
          destinations.filter(
            (destination) => destination.category === "nature"
          )
        );
        break;
      case "luxury":
        setFilteredDestination(
          destinations.filter(
            (destination) => destination.category === "luxury"
          )
        );
        break;
    }
  }, [selectedCategory]);

  return (
    <div id="destinations" className="flex flex-col gap-3 ">
      <h1 className="font-bold md:text-7xl text-4xl">Top Destinations</h1>
      <div className="flex items-center justify-between w-full">
        {destinationFilters.map((destinationFilter) => (
          <Button
            onClick={() => setSelectedCategory(destinationFilter.id)}
            key={destinationFilter.id}
            className={`bg-transparent text-muted-foreground border-muted-foreground hover:border-black hover:text-black hover:bg-transparent transition-all duration-300 border cursor-pointer ${
              selectedCategory === destinationFilter.id
                ? "border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600 transition-all duration-300"
                : ""
            } `}
          >
            {destinationFilter.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 mt-4 mb-4">
        {filteredDestination.map((destination) => (
          <DestinationsCard filteredDestination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
