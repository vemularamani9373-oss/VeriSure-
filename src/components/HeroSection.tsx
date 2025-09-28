import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, Users, TrendingUp, Upload, Search, QrCode } from "lucide-react";
import heroImage from "@/assets/hero-verification.jpg";

const HeroSection = () => {
  const stats = [
    { label: "Certificates Verified", value: "2.1M+", icon: FileCheck, color: "text-success" },
    { label: "Institutions Connected", value: "850+", icon: Users, color: "text-primary" },
    { label: "Fraud Cases Detected", value: "15,247", icon: Shield, color: "text-warning" },
    { label: "Accuracy Rate", value: "99.8%", icon: TrendingUp, color: "text-success" },
  ];

  const verificationMethods = [
    {
      icon: Upload,
      title: "Upload Document",
      description: "Drag & drop PDF or image files for instant verification",
      action: "Upload Now"
    },
    {
      icon: QrCode,
      title: "Scan QR Code",
      description: "Use your device camera to scan certificate QR codes",
      action: "Start Scan"
    },
    {
      icon: Search,
      title: "Search by ID",
      description: "Enter certificate ID and metadata for manual lookup",
      action: "Search"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Main Hero Content */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-pulse-soft">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Trusted by Government & Institutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Secure Certificate
            <br />
            <span className="gradient-hero bg-clip-text text-transparent">
              Verification System
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced multi-layer verification with blockchain validation, forensic analysis, 
            and institutional trust scoring. Built for Smart India Hackathon 2024.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="min-w-48">
              Start Verification
            </Button>
            <Button variant="outline" size="lg" className="min-w-48">
              View Demo
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-medium border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Verification Methods */}
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {verificationMethods.map((method, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="professional" 
                  className="w-full group-hover:bg-primary-light transition-colors duration-300"
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading institutions</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-24 h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium">GOVT</span>
            </div>
            <div className="w-24 h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium">AICTE</span>
            </div>
            <div className="w-24 h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium">UGC</span>
            </div>
            <div className="w-24 h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium">CBSE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;