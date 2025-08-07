import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Users, Award, Target } from "lucide-react";
import { companyInfo, aboutContent } from "../mock";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About B-Greener
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Founded on the premise that environmental preservation and industrial 
              efficiency can work hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                B-Greener Industrial Cleaners, LLC is a company established in 2009 
                and based out of the greater Dallas, Texas. We are a reliable and 
                conscientious business that creates effective, 100% biodegradable 
                products used primarily in industries where heavy oils, tar, grease, 
                asphalt and emulsion build-up can create a problem on tools and equipment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {aboutContent.philosophy}
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-emerald-600">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Our Mission</h3>
                    <p className="text-slate-600 italic">"{aboutContent.mission}"</p>
                  </div>
                </div>
              </Card>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <Card className="p-4">
                  <CardContent className="p-0">
                    <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-800">2009</div>
                    <div className="text-sm text-slate-600">Established</div>
                  </CardContent>
                </Card>
                <Card className="p-4">
                  <CardContent className="p-0">
                    <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-800">100%</div>
                    <div className="text-sm text-slate-600">Biodegradable</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Commitment
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {aboutContent.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Our Customers Choose Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Environmental Focus</h4>
                    <p className="text-slate-600">All products are 100% biodegradable and environmentally safe.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Cost Effective</h4>
                    <p className="text-slate-600">Our efficient products save both time and money for industrial operations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Industry Expertise</h4>
                    <p className="text-slate-600">Specialized solutions for heavy oils, grease, asphalt, and tar removal.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Personal Service</h4>
                    <p className="text-slate-600">One-on-one customer service with free demonstrations available.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Personal Customer Service
              </h3>
              <p className="text-slate-600 mb-6">
                B-Greener Industrial Cleaners is a company that believes in personal, 
                one-on-one customer service.
              </p>
              <ul className="space-y-3">
                {aboutContent.customerService.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                    <span className="text-slate-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
            Certified & Trusted
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {companyInfo.certifications.map((cert, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="text-lg px-6 py-3 border-emerald-300 text-emerald-800 bg-emerald-50"
              >
                {cert}
              </Badge>
            ))}
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our certifications demonstrate our commitment to quality, reliability, 
            and supporting diverse business ownership in the industrial sector.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the B-Greener difference with our environmentally friendly, 
            cost-effective industrial cleaning solutions.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
          >
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;