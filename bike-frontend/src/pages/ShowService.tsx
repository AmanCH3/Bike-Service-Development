import React from "react";
import NavBar from "../component/navbar/NavBar";

const ShowService = () => {
  return (
    <div className="w-max[full]">
      <NavBar />

      <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="bg-muted rounded-lg p-6">
              <h2 className="text-2xl font-bold">Bike Tune-Up</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-muted-foreground text-sm">/service</span>
              </div>
              <p className="text-muted-foreground mt-4">
                Our comprehensive bike tune-up service includes a thorough
                inspection, adjustment of all components, and a complete
                cleaning to ensure your bike is running at its best.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h2 className="text-2xl font-bold">Bike Overhaul</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground text-sm">/service</span>
              </div>
              <p className="text-muted-foreground mt-4">
                Our bike overhaul service is designed to restore your bike to
                like-new condition. We'll replace any worn parts, adjust all
                components, and give your bike a thorough cleaning to ensure
                it's running smoothly.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-muted rounded-lg p-6">
              <h2 className="text-2xl font-bold">Wheel Truing</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground text-sm">/wheel</span>
              </div>
              <p className="text-muted-foreground mt-4">
                Our wheel truing service ensures your wheels are perfectly
                aligned and balanced, providing a smooth and stable ride.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h2 className="text-2xl font-bold">Brake Adjustment</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-muted-foreground text-sm">/service</span>
              </div>
              <p className="text-muted-foreground mt-4">
                Our brake adjustment service ensures your brakes are properly
                calibrated and responsive, keeping you safe on the road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowService;
