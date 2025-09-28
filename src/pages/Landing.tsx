import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Users, 
  Building, 
  Settings, 
  BarChart3,
  FileCheck,
  Upload,
  Eye,
  ChevronRight,
  GraduationCap,
  UserCheck,
  School,
  Lock
} from "lucide-react";
import heroImage from "@/assets/hero-verification.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const userRoles = [
    {
      type: 'student',
      title: 'Student Portal',
      description: 'Submit and verify your certificates with advanced security',
      icon: GraduationCap,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      route: '/student'
    },
    {
      type: 'verifier',
      title: 'Verifier Dashboard', 
      description: 'Professional verification tools and fraud detection',
      icon: UserCheck,
      color: 'text-success',
      bgColor: 'bg-success/10',
      route: '/verifier'
    },
    {
      type: 'institution',
      title: 'Institution Panel',
      description: 'Manage certificates and institutional credentials',
      icon: School,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      route: '/institution'
    },
    {
      type: 'admin',
      title: 'Admin Control',
      description: 'System administration and analytics oversight',
      icon: Lock,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      route: '/admin'
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
      description: "Supports students, verifiers, institutions, and system administrators",
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
      {/* Header */}
      <header className="w-full bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 gradient-primary rounded-lg shadow-soft">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CertifySecure</h1>
                <p className="text-xs text-muted-foreground">Smart Certificate Verification</p>
              </div>
            </div>
          </div>
        </div>
      </header>

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

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Government-Grade Security
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Next-Gen Certificate
                  <span className="gradient-text"> Verification</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Advanced multi-layer verification system combining blockchain technology, 
                  AI-powered fraud detection, and institutional trust scoring for absolute authenticity.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white shadow-strong hover:shadow-glow transition-all duration-300"
                  onClick={() => navigate('/student')}
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Start Verification
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/verifier')}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Professional Tools
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Certificate verification process visualization" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Role
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access tailored dashboards designed for your specific needs in the certificate verification ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userRoles.map((role, index) => (
              <Card 
                key={role.type} 
                className="cursor-pointer hover:shadow-strong transition-all duration-300 border-0 bg-card/90 backdrop-blur-sm hover:scale-105"
                onClick={() => navigate(role.route)}
              >
                <CardContent className="pt-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${role.bgColor} mb-4`}>
                    <role.icon className={`w-8 h-8 ${role.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {role.description}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full">
                    Access Dashboard
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="py-16">
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
    </div>
  );
};

export default Landing;