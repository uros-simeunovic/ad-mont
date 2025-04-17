import { Card, CardContent } from "@/components/ui/card";
import { MapPin, DrillIcon as Drone, Scan } from "lucide-react";

export const Cards = () => {
  return (
    <section className="container mx-auto py-20" id="cards">
      <div className="mb-10 flex flex-col items-center">
        <h2 className="text-4xl text-[#246cb4] font-bold">Naši Servisi</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="mb-4 rounded-full bg-[#246cb4]/10 p-3">
              <Drone className="h-8 w-8 text-[#246cb4]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Lorem</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              perferendis, deleniti sequi perspiciatis ullam ipsam.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="mb-4 rounded-full bg-[#246cb4]/10 p-3">
              <Scan className="h-8 w-8 text-[#246cb4]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Ipsum</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maxime facere facilis unde quae cupiditate?
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="mb-4 rounded-full bg-[#246cb4]/10 p-3">
              <MapPin className="h-8 w-8 text-[#246cb4]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Lorem Ipsum</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              quisquam nesciunt voluptas error laborum magnam.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
