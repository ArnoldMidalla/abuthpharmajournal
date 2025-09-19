'use client'

import React from 'react';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PageHeader from '../components/pageHeader';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
            <PageHeader title="Contact" imageUrl="contact_bg.jpg"/>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            For further enquiries, you can reach out to us using any of the following channels below.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">abuthdc@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+2347057372848, +2348033148984</p>
              <p className="text-gray-600">+234 8126490939</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">Department of Pharmaceutical Services, Ahmadu Bello University Teaching Hospital, P.M.B 06 Zaria, Nigeria.</p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input placeholder="First name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Phone" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message here..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="recaptcha"
                        className="w-4 h-4"
                        required
                      />
                      <label htmlFor="recaptcha" className="text-sm text-gray-600">
                        I am not a robot
                      </label>
                    </div>

                    <Button type="submit" className="">
                      Send Us A Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="overflow-hidden rounded-xl shadow border">
                <div className="relative h-[500px] bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.8174386123474!2d7.702463114771289!3d11.111111191076844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2c0f1c8c8c8c8%3A0x1234567890abcdef!2sAhmadu%20Bello%20University%20Teaching%20Hospital%2C%20Zaria!5e0!3m2!1sen!2sng!4v1632123456789!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ABUTH Location"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                What is ABUTH Pharma Journal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                ABUTH Pharma Journal is an open access, peer-reviewed, English language, medical and health scientific journal that was first published in 2023 as a publication of the Pharmacy Information Division of the Department of Pharmaceutical Services, Ahmadu Bello University Teaching Hospital, Zaria. The journal publishes annual scientific manuscripts of clinical for more information.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                Is ABUTH Pharma Journal Open Access?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes, ABUTH Pharma Journal is an open access publication that allows free access to all published articles.
</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                How do I submit my manuscript?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Manuscripts can be submitted through our online submission system. Please ensure your manuscript follows our author guidelines before submission.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                What types of articles can be submitted?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
               We accept original research articles, review articles, case reports, and short communications in pharmaceutical and health sciences.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                What format is acceptable when submitting manuscript?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Manuscripts should be submitted in Microsoft Word format (.doc or .docx) following our specific formatting guidelines. </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                Is there a word or page limit for papers published in ABUTH Pharma Journal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes, there are specific word limits for different types of articles. Please refer to our author guidelines for detailed information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                How do I find author guidelines?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Author guidelines can be found in the Author Guidelines section of our website, which provides comprehensive information on manuscript preparation and submission.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                What are the responsibilities of reviewers?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Reviewers are responsible for providing constructive feedback on manuscripts, ensuring scientific accuracy, and maintaining confidentiality during the review process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                What is the copyright policy of ABUTH Pharma Journal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Authors retain copyright of their work while granting the journal rights to publish and distribute the articles under our open access policy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                How much does it cost to publish a paper in ABUTH Pharma Journal (publication fees)?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Currently, there are no publication fees for authors submitting to ABUTH Pharma Journal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                What is the Copyright policy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Our copyright policy allows authors to retain rights while granting publication rights to the journal under Creative Commons licensing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                How do I become a reviewer for the journal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Interested reviewers can contact us directly with their CV and areas of expertise. We welcome qualified professionals to join our reviewer pool.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-primary">
                How much does publishing a paper cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Publishing in ABUTH Pharma Journal is currently free of charge for all authors.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Contact;