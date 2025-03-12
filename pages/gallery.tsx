'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const products = {
  generators: [
    {
      id: 1,
      name: 'Industrial Generator',
      image: 'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      name: 'Standby Generator',
      image: 'https://images.unsplash.com/photo-1595241751423-a7b1dd1c6eba?auto=format&fit=crop&q=80',
    },
  ],
  tractors: [
    {
      id: 3,
      name: 'Agricultural Tractor',
      image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      name: 'Heavy Duty Tractor',
      image: 'https://images.unsplash.com/photo-1530267981375-f08d953ffdbf?auto=format&fit=crop&q=80',
    },
  ],
  motors: [
    {
      id: 5,
      name: 'Geely Sedan',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80',
    },
    {
      id: 6,
      name: 'Geely SUV',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
    },
  ],
  mikano: [
    {
      id: 7,
      name: 'Mikano Power Solution',
      image: 'https://images.unsplash.com/photo-1620122303020-87ec826cf70d?auto=format&fit=crop&q=80',
    },
    {
      id: 8,
      name: 'Mikano Equipment',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    },
  ],
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);

  return (
    <>
      <Head>
        <title>Product Gallery - Zita Tess Tech Ltd</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products Gallery</h1>

        <Tabs defaultValue="generators" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="generators">Generators</TabsTrigger>
            <TabsTrigger value="tractors">Tractors</TabsTrigger>
            <TabsTrigger value="motors">Geely Motors</TabsTrigger>
            <TabsTrigger value="mikano">Mikano Products</TabsTrigger>
          </TabsList>

          {Object.entries(products).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((product) => (
                  <div
                    key={product.id}
                    className="relative h-64 cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105"
                    onClick={() => {
                      setSelectedImage(product.image);
                      setSelectedProduct(product);
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                      <div className="flex h-full items-center justify-center">
                        <h3 className="text-white text-xl font-semibold">{product.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={!!selectedImage} onOpenChange={() => {
          setSelectedImage(null);
          setSelectedProduct(null);
        }}>
          <DialogContent className="max-w-4xl">
            <DialogTitle className="text-xl font-semibold mb-4">
              {selectedProduct?.name || 'Product Image'}
            </DialogTitle>
            {selectedImage && (
              <div className="relative h-[600px]">
                <Image
                  src={selectedImage}
                  alt={selectedProduct?.name || 'Selected product'}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}