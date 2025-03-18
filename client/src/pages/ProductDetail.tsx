import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import ProductDetail from "@/components/product/ProductDetail";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import NewsletterSection from "@/components/home/NewsletterSection";

const ProductDetailPage = () => {
  const [_, params] = useRoute("/product/:slug");
  const slug = params?.slug;

  const { 
    data: product, 
    isLoading, 
    error 
  } = useQuery<Product>({
    queryKey: [`/api/products/${slug}`],
    enabled: !!slug,
  });

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold font-serif mb-4">Product Not Found</h1>
        <p className="text-gray-600">
          Sorry, the product you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <Card className="p-0 overflow-hidden">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <Skeleton className="aspect-square w-full rounded-lg" />
              <div>
                <Skeleton className="h-8 w-4/5 mb-4" />
                <Skeleton className="h-4 w-32 mb-4" />
                <Skeleton className="h-6 w-1/4 mb-4" />
                <Skeleton className="h-24 w-full mb-6" />
                
                <Skeleton className="h-6 w-1/5 mb-2" />
                <div className="flex gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Skeleton key={i} className="w-10 h-10 rounded-full" />
                  ))}
                </div>
                
                <div className="flex mb-6">
                  <Skeleton className="h-12 w-32 mr-4" />
                  <Skeleton className="h-12 flex-grow" />
                </div>
                
                <div className="flex gap-3 mb-6">
                  <Skeleton className="h-10 w-1/2" />
                  <Skeleton className="h-10 w-1/2" />
                </div>
                
                <Skeleton className="h-0.5 w-full mb-6" />
                
                <Skeleton className="h-5 w-4/5 mb-2" />
                <Skeleton className="h-5 w-4/5 mb-2" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            </div>
          ) : product ? (
            <ProductDetail product={product} />
          ) : null}
        </Card>
      </div>
      <NewsletterSection />
    </>
  );
};

export default ProductDetailPage;
