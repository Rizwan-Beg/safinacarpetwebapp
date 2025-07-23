import React from "react";
import { Card, CardContent } from "../../ui/card";

export const AboutUsSection = () => {
  return (
    <section className="w-full py-12">
      <Card className="mx-auto max-w-6xl bg-white">
        <CardContent className="flex flex-col items-center justify-center py-12 px-4 md:px-8">
          <h3 className="font-['Caveat',Helvetica] font-normal text-m-3refprimaryprimary-30 text-4xl mb-10 text-center">
            A Story Spanning Generations
          </h3>

          <p className="text-center font-['Jost',Helvetica] font-normal text-black text-base leading-7 max-w-4xl">
            Established in 1970, Safina Carpets has its roots in the Mughal era,
            where carpets adorned royal courts and symbolised luxury and
            refinement.
            <br />
            Founded by my grandfather, Sayeed Beg, who handcrafted intricate
            carpets, the tradition grew through the efforts of my father, Sayeed
            Beg, and father, Shahid Beg.
            <br />
            Today, as the fourth generation, I, Rizwan Beg, continue this legacy
            by blending tradition with innovation and bringing it to a global
            audience.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
