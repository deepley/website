import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  return (
    <>
      <div 
        className="h-64 bg-[#0a2342] relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a2342]/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white text-center">
            About Elegante<span className="text-[#d4af37]">Jewels</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold font-serif mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-[#d4af37] mb-6"></div>
            <p className="text-gray-700 mb-4">
              Founded in 1985, Elegante Jewels has been crafting timeless pieces of jewelry that celebrate life's most precious moments. What began as a small family workshop has grown into a renowned jewelry house, while maintaining the same dedication to craftsmanship and quality that defined us from the beginning.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, Elizabeth Montrose, established Elegante Jewels with a vision to create pieces that would be cherished for generations. Drawing inspiration from classical design and contemporary trends, Elizabeth pioneered a distinctive style that continues to define our collections today.
            </p>
            <p className="text-gray-700">
              Through the years, we've had the privilege of being part of countless love stories, celebrations, and milestones. Each piece we create is designed to honor these special moments, making them even more unforgettable.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Jewelry artisan at work" 
              className="rounded-lg shadow-md"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#d4af37]/20 rounded-lg -z-10"></div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif mb-4">Our Commitment</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-[#d4af37]/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-serif mb-2 text-center">Exceptional Craftsmanship</h3>
                <p className="text-gray-600 text-center">
                  Each piece is meticulously handcrafted by our skilled artisans, combining traditional techniques with modern innovation to create jewelry of unparalleled quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-[#d4af37]/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-serif mb-2 text-center">Ethical Sourcing</h3>
                <p className="text-gray-600 text-center">
                  We are committed to responsible practices, ensuring all our gemstones and precious metals are ethically sourced and conflict-free, with full transparency throughout our supply chain.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-[#d4af37]/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-serif mb-2 text-center">Customer Experience</h3>
                <p className="text-gray-600 text-center">
                  We believe in creating an exceptional experience from consultation to creation, providing personalized service to ensure each customer finds or creates their perfect piece.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-[#fffaf0] p-8 rounded-lg mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-serif mb-4">Meet Our Artisans</h2>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/43.jpg" 
                  alt="Master Jeweler" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold font-serif text-lg">Michael Thompson</h3>
              <p className="text-[#d4af37]">Master Jeweler</p>
              <p className="text-gray-600 text-sm mt-2">
                With over 25 years of experience, Michael leads our team of craftsmen with precision and artistry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/28.jpg" 
                  alt="Head Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold font-serif text-lg">Sophia Rivera</h3>
              <p className="text-[#d4af37]">Head Designer</p>
              <p className="text-gray-600 text-sm mt-2">
                Sophia's innovative designs have earned international recognition for their elegance and originality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/64.jpg" 
                  alt="Gemologist" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold font-serif text-lg">David Chen</h3>
              <p className="text-[#d4af37]">Gemologist</p>
              <p className="text-gray-600 text-sm mt-2">
                David's expertise in gemstone selection ensures only the finest stones are featured in our collections.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold font-serif mb-4">Experience Elegante Jewels</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Whether you're celebrating a milestone, expressing your love, or simply treating yourself to something beautiful, we invite you to explore our collections and discover the perfect piece to tell your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#d4af37] hover:bg-[#d4af37]/90 text-black py-3 px-8"
            >
              <Link href="/collections">
                Explore Collections
              </Link>
            </Button>
            <Button
              asChild
              className="bg-[#d4af37] hover:bg-[#d4af37]/90 text-black py-3 px-8"
            >
              <Link href="/custom">
                Custom Designs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
