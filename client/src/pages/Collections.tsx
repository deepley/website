import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Category, Product } from "@shared/schema";
import ProductCard from "@/components/product/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const Collections = () => {
  const [_, params] = useRoute("/collections/:slug?");
  const slug = params?.slug;
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Fetch all categories
  const { 
    data: categories, 
    isLoading: categoriesLoading 
  } = useQuery<Category[]>({
    queryKey: ['/api/categories'],
  });

  // Fetch products (either all or by category)
  const { 
    data: products, 
    isLoading: productsLoading,
    refetch: refetchProducts
  } = useQuery<Product[]>({
    queryKey: [selectedCategory ? `/api/products/category/${selectedCategory}` : '/api/products'],
  });

  // Set the selected category based on the slug
  useEffect(() => {
    if (slug && categories) {
      const category = categories.find(cat => cat.slug === slug);
      setSelectedCategory(category ? category.id : null);
    } else {
      setSelectedCategory(null);
    }
  }, [slug, categories]);

  // Refetch products when selected category changes
  useEffect(() => {
    refetchProducts();
  }, [selectedCategory, refetchProducts]);

  const isLoading = categoriesLoading || productsLoading;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">
          {slug 
            ? `${categories?.find(c => c.slug === slug)?.name || 'Loading...'} Collection` 
            : 'All Collections'
          }
        </h1>
        <div className="w-20 h-1 bg-[#d4af37] mx-auto"></div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <Link href="/collections">
          <Button 
            variant={!selectedCategory ? "default" : "outline"} 
            className={!selectedCategory 
              ? "bg-[#d4af37] hover:bg-[#d4af37]/90" 
              : "hover:text-[#d4af37] hover:border-[#d4af37]"
            }
          >
            All
          </Button>
        </Link>
        
        {categoriesLoading ? (
          Array(4).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-10 w-24" />
          ))
        ) : (
          categories?.map(category => (
            <Link key={category.id} href={`/collections/${category.slug}`}>
              <Button 
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id 
                  ? "bg-[#d4af37] hover:bg-[#d4af37]/90" 
                  : "hover:text-[#d4af37] hover:border-[#d4af37]"
                }
              >
                {category.name}
              </Button>
            </Link>
          ))
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          Array(8).fill(0).map((_, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Skeleton className="aspect-square w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <div className="flex justify-between">
                  <Skeleton className="h-5 w-1/4" />
                  <Skeleton className="h-5 w-1/4" />
                </div>
              </div>
            </div>
          ))
        ) : products?.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-gray-500">No products found.</p>
            <Link href="/collections">
              <Button className="mt-4 bg-[#d4af37] hover:bg-[#d4af37]/90">
                View All Collections
              </Button>
            </Link>
          </div>
        ) : (
          products?.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Collections;
