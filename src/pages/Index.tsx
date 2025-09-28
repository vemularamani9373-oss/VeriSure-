import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CertificateUpload from "@/components/CertificateUpload";
import VerificationResults from "@/components/VerificationResults";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Building, 
  Settings, 
  BarChart3,
  FileCheck,
  Upload,
  Eye,
  ChevronRight
} from "lucide-react";

const Index = () => {
  const [activeDemo, setActiveDemo] = useState<'hero' | 'upload' | 'results' | 'analytics'>('hero');

  const demoSections = [
    {
      id: 'hero' as const,
      title: 'Platform Overview',
      description: 'Multi-role dashboard and verification system',
      icon: Shield,
      component: <HeroSection />
    },
    {
      id: 'upload' as const,
      title: 'Certificate Upload',
      description: 'Advanced upload with multiple input methods',
      icon: Upload,
      component: <CertificateUpload />
    },
    {
      id: 'results' as const,
      title: 'Verification Results',
      description: 'Multi-layer verification with detailed analysis',
      icon: Eye,
      component: <VerificationResults />
    },
    {
      id: 'analytics' as const,
      title: 'Analytics Dashboard',
      description: 'Real-time fraud detection and institutional insights',
      icon: BarChart3,
      component: <AnalyticsDashboard />
    }
  ];

  const platformFeatures = [
    {
      icon: Shield,
      title: "Multi-Layer Verification",
      description: "Blockchain, forensic analysis, database matching, and digital signature validation",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Supports public users, verifiers, institutions, and system administrators",
      color: "text-success"
    },
    {
      icon: Building,
      title: "Institutional Trust",
      description: "Real-time institution credibility scoring and reputation management",
      color: "text-warning"
    },
    {
      icon: FileCheck,
      title: "Progressive Verification",
      description: "Real-time status updates as verification layers complete processing",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Smart India Hackathon Badge */}
      <div className="bg-gradient-to-r from-primary to-success py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-white text-sm">
            <Badge className="bg-white/20 text-white border-white/30">
              Smart India Hackathon 2024
            </Badge>
            <span>•</span>
            <span>Problem Statement: Advanced Certificate Verification System</span>
            <span>•</span>
            <span>Team: CertifySecure</span>
          </div>
        </div>
      </div>

      {/* Demo Navigation */}
      <div className="bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Interactive Prototype Demo</h2>
              <p className="text-sm text-muted-foreground">
                Explore our comprehensive certificate verification solution
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {demoSections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeDemo === section.id ? "professional" : "outline"}
                  size="sm"
                  onClick={() => setActiveDemo(section.id)}
                  className="flex items-center space-x-2"
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Active Demo Section */}
      <div className="min-h-screen">
        {demoSections.find(section => section.id === activeDemo)?.component}
      </div>

      {/* Features Overview */}
      {activeDemo === 'hero' && (
        <div className="bg-muted/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Our Solution Wins
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our platform addresses real governance challenges with advanced technology, 
                institutional trust scoring, and comprehensive audit trails.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="text-center shadow-medium border-0 bg-card/90 backdrop-blur-sm hover:shadow-strong transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted/50 mb-4`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Implementation Roadmap */}
            <Card className="shadow-strong border-0 bg-card/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Implementation Roadmap
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  From prototype to production-ready government solution
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      1
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Pilot Phase</h4>
                    <p className="text-sm text-muted-foreground">
                      Deploy with 5-10 educational institutions in Jharkhand for initial testing and feedback collection.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      2
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">State Rollout</h4>
                    <p className="text-sm text-muted-foreground">
                      Expand to all major institutions across Jharkhand with enhanced fraud detection and mobile support.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-warning text-warning-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      3
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">National Scale</h4>
                    <p className="text-sm text-muted-foreground">
                      Integration with national education databases and cross-state verification capabilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Navigation Helper */}
      <div className="fixed bottom-6 right-6 z-50">
        <Card className="shadow-strong border-0 bg-card/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-sm">
              <Settings className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Use the demo tabs above to explore</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
