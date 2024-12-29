import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Scissors, Users, Award, Smile } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src="/placeholder.svg?height=1000&width=1920"
          alt="Barber Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            About BarberStyle Essentials
          </h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg mb-6">
          BarberStyle Essentials was born out of a passion for the perfect cut
          and a belief that everyone deserves to look and feel their best. Our
          journey began in a small barbershop where we realized that the right
          tools and products can make all the difference.
        </p>
        <p className="text-lg mb-8">
          Today, we're proud to offer a curated selection of premium barber and
          hair care products that meet the exacting standards of professionals
          and enthusiasts alike. From classic straight razors to cutting-edge
          styling products, we've got everything you need to achieve
          barbershop-quality results at home.
        </p>

        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start">
            <Scissors className="h-8 w-8 text-primary mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p>
                We source only the best products, tested and approved by
                professional barbers.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Users className="h-8 w-8 text-primary mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
              <p>
                Our team of experienced barbers is always ready to offer
                guidance and tips.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Award className="h-8 w-8 text-primary mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Satisfaction Guaranteed
              </h3>
              <p>
                We stand behind every product we sell with our 100% satisfaction
                guarantee.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Smile className="h-8 w-8 text-primary mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
              <p>
                We're more than just a store - we're building a community of
                style enthusiasts.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg mb-8">
          Whether you're a seasoned barber or just starting your grooming
          journey, BarberStyle Essentials is here to help you achieve the
          perfect look. Join our community of style enthusiasts and experience
          the difference that premium tools and products can make.
        </p>

        <Button asChild size="lg">
          <Link href="/">Explore Our Products</Link>
        </Button>
      </div>
    </div>
  );
}
