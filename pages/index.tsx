import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Refrigerator as Generator, Tractor, Car, Power } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Zita Tess Tech Ltd - Power Solutions & Automotive</title>
      </Head>

      {/* Hero Section with Video Background */}
      <section className="relative h-[600px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/zvid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Powering Your World Forward
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Your trusted partner for premium generators, tractors, Geely motors, and Mikano products.
            </p>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden group"
              >
                <Link href="/contact">
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-transparent border-white text-white hover:bg-white/20"
              >
                <Link href="/gallery">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Scroll Animations */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div data-aos="zoom-in" data-aos-delay="0">
              <Card className="p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white">
                <Generator className="w-12 h-12 text-[#1a3c8b] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Generators</h3>
                <p className="text-gray-600">
                  High-quality generators for reliable power supply.
                </p>
              </Card>
            </div>

            <div data-aos="zoom-in" data-aos-delay="100">
              <Card className="p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white">
                <Tractor className="w-12 h-12 text-[#1a3c8b] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tractors</h3>
                <p className="text-gray-600">
                  Robust tractors for agricultural excellence.
                </p>
              </Card>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200">
              <Card className="p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white">
                <Car className="w-12 h-12 text-[#1a3c8b] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Geely Motors</h3>
                <p className="text-gray-600">
                  Modern and reliable Geely vehicles.
                </p>
              </Card>
            </div>

            <div data-aos="zoom-in" data-aos-delay="300">
              <Card className="p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white">
                <Power className="w-12 h-12 text-[#1a3c8b] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mikano Products</h3>
                <p className="text-gray-600">
                  Premium power solutions you can trust.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Animations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]" data-aos="fade-right">
              <Image
                src="/founder.jpg"
                alt="Founder"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
            
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to provide top-quality power solutions and automotive products,
                Zita Tess Tech Ltd has grown to become a leading supplier in Nigeria. Our commitment
                to excellence and customer satisfaction sets us apart in the industry.
              </p>
              <Button asChild className="relative overflow-hidden group">
                <Link href="/contact">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-[#1a3c8b] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}