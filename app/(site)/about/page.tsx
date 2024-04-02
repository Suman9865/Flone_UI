import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-slate-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1674617405385-5fb6b3079319?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum
              urna, sit amet accumsan velit efficitur sed. Phasellus blandit lacinia
              consequat. Integer auctor, mi id mollis fringilla, magna elit dignissim ex,
              ac vulputate odio justo sed purus. Sed sodales aliquet eleifend. Fusce eget
              fringilla orci. Proin ultricies justo nec efficitur. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam
              nec pulvinar enim. Sed congue magna eget velit ullamcorper fermentum. Vivamus
              sit amet libero malesuada, elementum purus sed, volutpat elit. Nullam vel magna
              vitae libero imperdiet luctus non quis ligula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


