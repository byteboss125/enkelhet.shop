export interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  finish: ('oak' | 'ash' | 'walnut' | 'wenge')[];
  series: 'lounge' | 'alabaster' | 'capsule';
  measurements: MeasurementsType;
}

type MeasurementsType = {
  total_height: number;
  seat_height: number;
  width: number;
  depth: number;
};

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['example.jpg', 'example-2.webp'],
      inStock: 7,
      price: 75,
      slug: 'mens_chill_crew_neck_sweatshirt',
      tags: [''],
      title: 'Men’s Chill Crew Neck Sweatshirt',
      series: 'lounge',
      measurements: {
        total_height: 85,
        seat_height: 45,
        width: 60,
        depth: 80,
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 5,
      price: 200,
      slug: 'men_quilted_shirt_jacket',
      tags: [''],
      title: "Men's Quilted Shirt Jacket",
      series: 'alabaster',
      measurements: {
        total_height: 85,
        seat_height: 45,
        width: 60,
        depth: 80,
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
  ],
};
