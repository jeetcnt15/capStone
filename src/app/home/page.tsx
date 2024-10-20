'use client';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
      <p className="text-lg mb-8">Explore our amazing products and find what you love!</p>
    </div>
  );
};

export default LandingPage;
