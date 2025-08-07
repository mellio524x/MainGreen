import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Leaf, ShieldCheck, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { companyInfo, valuePropositions, services, industries } from "../mock";

const HomePage = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "leaf": return <Leaf className="h-8 w-8" />;
      case "shield-check": return <ShieldCheck className="h-8 w-8" />;
      case "clock": return <Clock className="h-8 w-8" />;
      default: return <Leaf className="h-8 w-8" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Company certifications */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {companyInfo.certifications.map((cert, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="border-emerald-300 text-emerald-100 bg-emerald-900/30"
                >
                  {cert}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-emerald-300">{companyInfo.name.split(' ')[0]}</span>
              <br />
              <span>Industrial Cleaners</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Environmentally friendly cleaning solutions for industrial settings. 
              Safe, effective, and cost-efficient products since {companyInfo.established}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
              >
                <Link to="/contact">Schedule Free Demo</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Why Choose B-Greener?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our products deliver exceptional results while prioritizing safety and environmental responsibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((prop) => (
              <Card key={prop.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-emerald-700">
                      {getIcon(prop.icon)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {prop.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Leading Industrial Cleaning Solutions
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                B-Greener Industrial Cleaners manufactures environmentally friendly products 
                with a focus on safe, green cleaners for industrial settings dealing with 
                asphalts, heavy oils, grease, and tars.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our products are so efficient and user-friendly that they save time and money. 
                <strong className="text-slate-800"> Simpler is Better!</strong>
              </p>
              <Button 
                asChild
                className="bg-slate-800 hover:bg-slate-900 text-white"
              >
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="text-emerald-800 font-medium">
                  "Our mission is to offer the most effective, time saving, low cost, 
                  environmentally friendly products on the market today!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We provide comprehensive solutions and support for all your industrial cleaning needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border border-slate-200 hover:border-emerald-300 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience the B-Greener Difference?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free demonstration and see how our environmentally 
            friendly products can solve your industrial cleaning challenges.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
          >
            <Link to="/contact">Get Your Free Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;