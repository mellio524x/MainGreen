import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Wrench, Droplet, Recycle, Clock, AlertTriangle } from "lucide-react";
import { products } from "../mock";

const ProductsPage = () => {
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "surface cleaner": return <Droplet className="h-5 w-5" />;
      case "industrial cleaner": return <Wrench className="h-5 w-5" />;
      case "tank cleaner": return <Recycle className="h-5 w-5" />;
      case "specialty product": return <AlertTriangle className="h-5 w-5" />;
      default: return <Droplet className="h-5 w-5" />;
    }
  };

  const getStatusBadge = (status) => {
    if (status === "coming-soon") {
      return (
        <Badge variant="outline" className="border-amber-300 text-amber-700 bg-amber-50">
          <Clock className="h-3 w-3 mr-1" />
          Coming Soon
        </Badge>
      );
    }
    return (
      <Badge className="bg-emerald-600 text-white">
        Available
      </Badge>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Environmentally friendly, biodegradable solutions for industrial cleaning challenges. 
              Each product is designed for maximum efficiency while maintaining safety standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700">
                        {getCategoryIcon(product.category)}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-slate-800 mb-1">
                          {product.name}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-slate-600 border-slate-300">
                            {product.category}
                          </Badge>
                          {getStatusBadge(product.status)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {product.status === "available" && (
                    <>
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.keyFeatures.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                              <span className="text-slate-600 text-sm">{feature}</span>
                            </li>
                          ))}
                          {product.keyFeatures.length > 4 && (
                            <li className="text-emerald-600 text-sm font-medium">
                              +{product.keyFeatures.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-3">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, index) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="text-emerald-700 border-emerald-300 bg-emerald-50 text-xs"
                            >
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    {product.status === "available" ? (
                      <>
                        <Button 
                          asChild
                          className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1"
                        >
                          <Link to="/contact">Request Demo</Link>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-slate-300 text-slate-700 hover:bg-slate-50 flex-1"
                          onClick={() => {
                            // Create detailed product info text
                            const productDetails = `Product: ${product.name}\n\nDescription: ${product.fullDescription}\n\nKey Features:\n${product.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nApplications: ${product.applications.join(', ')}`;
                            
                            // Open email with product details
                            window.open(`mailto:BSlate@BGreenerCleaners.com?subject=Product Information Request - ${product.name}&body=${encodeURIComponent(productDetails)}`);
                          }}
                        >
                          Get Details
                        </Button>
                      </>
                    ) : (
                      <Button 
                        asChild
                        variant="outline"
                        className="border-amber-300 text-amber-700 hover:bg-amber-50 w-full"
                      >
                        <Link to="/contact">Get Notified When Available</Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Product Details
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Learn more about each product's unique capabilities and applications.
            </p>
          </div>

          <div className="space-y-12">
            {products.filter(p => p.status === "available").map((product) => (
              <div key={product.id} className="border-l-4 border-l-emerald-600 pl-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {product.name} - Detailed Information
                </h3>
                
                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {product.fullDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-4 text-lg">Complete Feature List:</h4>
                    <ul className="space-y-2">
                      {product.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {product.specialFeatures && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-slate-800 mb-3 text-lg">Special Features:</h4>
                        <ul className="space-y-2">
                          {product.specialFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span className="text-slate-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-4 text-lg">Applications & Uses:</h4>
                    <div className="space-y-2">
                      {product.applications.map((app, index) => (
                        <div key={index} className="bg-emerald-50 p-3 rounded border-l-4 border-l-emerald-500">
                          <span className="text-slate-700 font-medium">{app}</span>
                        </div>
                      ))}
                    </div>

                    {product.serviceProcess && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-slate-800 mb-3 text-lg">Service Process:</h4>
                        <ol className="space-y-2">
                          {product.serviceProcess.map((step, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <span className="w-6 h-6 bg-emerald-600 text-white rounded-full text-sm flex items-center justify-center flex-shrink-0 mt-1">
                                {index + 1}
                              </span>
                              <span className="text-slate-600">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Try Our Products?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free demonstration of any of our products. 
            Experience the B-Greener difference for yourself.
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
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;