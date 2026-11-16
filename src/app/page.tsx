import Image from 'next/image';

// path: '/'
export default function Home() {
  return (
    <div>
      <div className="w-50 aspect-square relative">
        <Image
          src="https://images.dog.ceo/breeds/labrador/n02099712_1254.jpg"
          alt="Dog"
          fill
        />
      </div>
      {/* <Image src="/test.jpg" alt="Test" width={800} height={600} />
      <Image src="/test.jpg" alt="Test" width={800} height={600} />
      <Image src="/test.jpg" alt="Test" width={800} height={600} />
      <Image src="/test.jpg" alt="Test" width={800} height={600} />
      <Image src="/test.jpg" alt="Test" width={800} height={600} />
      <Image src="/test.jpg" alt="Test" width={800} height={600} />
      <Image src="/test.jpg" alt="Test" width={800} height={600} />
      <Image src="/test.jpg" alt="Test" width={800} height={600} /> */}
      Home Page
    </div>
  );
}

// Prevent layout shift
// load image in the viewport first
// optimize image size based on device
// - mobile: small size
// - large monitor: may be original size
