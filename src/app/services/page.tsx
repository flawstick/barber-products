import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Scissors, Book, PenToolIcon as Tool, Video } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src="/placeholder.svg?height=1000&width=1920"
          alt="Barber Tools"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg mb-8 animate-fade-in">
          At BarberStyle Essentials, we're not just about selling products -
          we're about empowering you to achieve professional results. That's why
          we offer a range of services to support your grooming journey.
        </p>
        <ul className="space-y-8 animate-fade-in">
          <li className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center mb-4">
              <Scissors className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-semibold">Product Consultations</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Not sure which products are right for you? Our expert team offers
              personalized consultations to help you find the perfect tools and
              products for your hair type and style goals. We'll take the time
              to understand your needs and recommend the best solutions.
            </p>
            <Button asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </li>
          <li className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center mb-4">
              <Tool className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-semibold">
                Tool Maintenance Workshops
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Keep your tools in top condition with our maintenance workshops.
              Learn how to clean, oil, and sharpen your scissors and clippers to
              ensure they perform at their best for years to come. Our hands-on
              sessions will teach you professional maintenance techniques.
            </p>
            <Button asChild>
              <Link href="/workshops">View Workshop Schedule</Link>
            </Button>
          </li>
          <li className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center mb-4">
              <Video className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-semibold">Styling Tutorials</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Master new techniques and styles with our library of video
              tutorials. From classic cuts to modern fades, our step-by-step
              guides will help you achieve salon-quality results at home. New
              tutorials are added regularly to keep you up-to-date with the
              latest trends.
            </p>
            <Button asChild>
              <Link href="/tutorials">Access Tutorials</Link>
            </Button>
          </li>
          <li className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center mb-4">
              <Book className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-semibold">Product Education</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Stay informed about the latest innovations in barber and hair care
              products. Our product education sessions cover everything from new
              styling technologies to advanced hair care ingredients, helping
              you make informed decisions about your grooming routine.
            </p>
            <Button asChild>
              <Link href="/education">Learn More</Link>
            </Button>
          </li>
        </ul>
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-lg mb-4">
            Ready to take your grooming skills to the next level?
          </p>
          <Button asChild size="lg">
            <Link href="/">Explore Our Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
