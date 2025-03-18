import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  jewelryType: z.string().min(1, { message: "Please select a jewelry type" }),
  budget: z.string().min(1, { message: "Please select a budget range" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const CustomOrder = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      jewelryType: "",
      budget: "",
      description: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      const response = await apiRequest("POST", "/api/custom-order", values);
      
      if (response.ok) {
        form.reset();
        toast({
          title: "Custom Order Submitted",
          description: "Thank you for your request. We'll contact you shortly to discuss your custom design.",
        });
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div 
        className="h-64 bg-[#0a2342] relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a2342]/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white text-center">
            Custom Jewelry Design
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-2">
              Create Your Unique Piece
            </h2>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-4"></div>
            <p className="text-gray-600">
              Fill out the form below to start your custom jewelry creation journey. 
              Our expert designers will contact you to discuss your vision in detail.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jewelryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jewelry Type</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select jewelry type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ring">Ring</SelectItem>
                              <SelectItem value="necklace">Necklace</SelectItem>
                              <SelectItem value="earrings">Earrings</SelectItem>
                              <SelectItem value="bracelet">Bracelet</SelectItem>
                              <SelectItem value="pendant">Pendant</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="over10000">Over $10,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Design Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your vision, including materials, stones, style, and any inspiration. The more details you provide, the better we can understand your dream piece."
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit"
                    className="w-full md:w-auto bg-[#d4af37] hover:bg-[#d4af37]/90 text-black py-2 px-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Custom Order Request"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="mt-12 bg-[#fffaf0] p-6 rounded-lg">
            <h3 className="text-xl font-semibold font-serif mb-4">The Custom Design Process</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-[#d4af37] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                <p><strong>Consultation:</strong> After submitting this form, our design team will contact you to discuss your vision in detail.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-[#d4af37] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                <p><strong>Concept & Sketches:</strong> Our designers will create initial sketches based on your ideas.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-[#d4af37] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                <p><strong>Refinement:</strong> We'll refine the design with your feedback until it's perfect.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-[#d4af37] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                <p><strong>Creation:</strong> Our master jewelers handcraft your piece with the finest materials.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-[#d4af37] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</span>
                <p><strong>Delivery:</strong> Your one-of-a-kind creation is delivered in our signature luxury packaging.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomOrder;
