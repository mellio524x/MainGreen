import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, Printer, Building, Clock } from "lucide-react";
import { contactInfo } from "../mock";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to experience our environmentally friendly industrial cleaning solutions? 
              Get in touch for a free demonstration or consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary Contact */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
              Get In Touch
            </h2>
            <Card className="max-w-2xl mx-auto shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-emerald-700" />
                </div>
                <CardTitle className="text-2xl text-slate-800">
                  {contactInfo.contact.name}
                </CardTitle>
                <Badge variant="outline" className="text-emerald-700 border-emerald-300 bg-emerald-50">
                  {contactInfo.contact.title}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <a 
                    href={`tel:${contactInfo.contact.phone}`}
                    className="text-lg text-slate-800 font-medium hover:text-emerald-600 transition-colors"
                  >
                    {contactInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <a 
                    href={`mailto:${contactInfo.contact.email}`}
                    className="text-lg text-slate-800 font-medium hover:text-emerald-600 transition-colors"
                  >
                    {contactInfo.contact.email}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Printer className="h-5 w-5 text-emerald-600" />
                  <span className="text-lg text-slate-600">
                    Fax: {contactInfo.contact.fax}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Locations */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dallas Office */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-800">
                      Dallas Office
                    </CardTitle>
                    <p className="text-slate-600">Mailing Address</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-600 mt-1" />
                  <div className="text-slate-700">
                    <div>{contactInfo.mailingAddress.street}</div>
                    <div>{contactInfo.mailingAddress.suite}</div>
                    <div>
                      {contactInfo.mailingAddress.city}, {contactInfo.mailingAddress.state} {contactInfo.mailingAddress.zip}
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-center space-x-2 text-emerald-800">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium text-sm">Primary Business Location</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing Plant */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-800">
                      Manufacturing Plant
                    </CardTitle>
                    <p className="text-slate-600">Production Facility</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-slate-600 mt-1" />
                  <div className="text-slate-700">
                    <div>{contactInfo.manufacturingPlant.street}</div>
                    <div>
                      {contactInfo.manufacturingPlant.city}, {contactInfo.manufacturingPlant.state} {contactInfo.manufacturingPlant.zip}
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-center space-x-2 text-slate-700">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium text-sm">Manufacturing & Warehouse</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Service Areas & Demonstrations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're based in the greater Dallas area but can arrange demonstrations 
              and consultations across different regions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-emerald-200 bg-emerald-50">
              <CardContent className="p-0 text-center">
                <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Texas Demonstrations
                </h3>
                <p className="text-lg text-slate-700 mb-4">
                  We offer free demonstrations of our NO-B Asphalt Remover/Degreaser 
                  throughout Texas.
                </p>
                <Badge className="bg-emerald-600 text-white">Free in Texas</Badge>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-2 border-slate-200">
              <CardContent className="p-0 text-center">
                <Building className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Consultation Services
                </h3>
                <p className="text-lg text-slate-700 mb-4">
                  Equipment and storage tank cleaning consultations available. 
                  Travel arrangements can be made for other areas.
                </p>
                <Badge variant="outline" className="border-slate-400 text-slate-700">
                  Contact for Details
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Schedule Your Free Demonstration?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact Beth Slate today to discuss your industrial cleaning needs 
            and arrange a free product demonstration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
            <a 
              href={`tel:${contactInfo.contact.phone}`}
              className="flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg transition-colors duration-200 text-lg font-medium w-full sm:w-auto justify-center"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <a 
              href={`mailto:${contactInfo.contact.email}?subject=Free Demonstration Request`}
              className="flex items-center space-x-3 border-2 border-slate-300 hover:border-emerald-400 hover:text-emerald-400 px-8 py-4 rounded-lg transition-colors duration-200 text-lg font-medium w-full sm:w-auto justify-center"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;