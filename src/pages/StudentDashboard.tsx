import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  Upload, 
  FileCheck, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Download,
  Share2,
  History,
  GraduationCap,
  Award,
  Shield,
  ArrowLeft,
  QrCode,
  Camera,
  FileText,
  Eye
} from "lucide-react";
import CertificateUpload from "@/components/CertificateUpload";
import VerificationResults from "@/components/VerificationResults";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upload");

  const recentVerifications = [
    {
      id: "CERT-001",
      name: "Bachelor of Engineering - Computer Science",
      institution: "IIT Dhanbad", 
      status: "verified",
      date: "2024-01-15",
      score: 98
    },
    {
      id: "CERT-002", 
      name: "Higher Secondary Certificate",
      institution: "Jharkhand Academic Council",
      status: "pending",
      date: "2024-01-10", 
      score: null
    },
    {
      id: "CERT-003",
      name: "Class 10 Board Certificate", 
      institution: "JAC Board",
      status: "flagged",
      date: "2024-01-08",
      score: 45
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'text-success bg-success/10 border-success/20';
      case 'pending': return 'text-warning bg-warning/10 border-warning/20';
      case 'flagged': return 'text-destructive bg-destructive/10 border-destructive/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'flagged': return <AlertTriangle className="w-4 h-4" />;
      default: return <FileCheck className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Student Portal</h1>
                  <p className="text-xs text-muted-foreground">Certificate Verification Hub</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Rajesh Kumar
              </Badge>
              <Button variant="professional" size="sm">
                Profile Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Certificates</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <Award className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Verified</p>
                  <p className="text-2xl font-bold text-success">8</p>
                </div>
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-warning">3</p>
                </div>
                <Clock className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Trust Score</p>
                  <p className="text-2xl font-bold text-primary">92%</p>
                </div>
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="upload" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Upload Certificate</span>
            </TabsTrigger>
            <TabsTrigger value="verify" className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Verify Results</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <History className="w-4 h-4" />
              <span>My Certificates</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center space-x-2">
              <QrCode className="w-4 h-4" />
              <span>Quick Tools</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-primary" />
                  <span>Submit Certificate for Verification</span>
                </CardTitle>
                <CardDescription>
                  Upload your certificate for comprehensive multi-layer verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CertificateUpload />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verify" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <span>Verification Results</span>
                </CardTitle>
                <CardDescription>
                  Detailed analysis and verification status of your certificates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <VerificationResults />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <History className="w-5 h-5 text-primary" />
                  <span>Certificate History</span>
                </CardTitle>
                <CardDescription>
                  Track all your certificate verifications and their current status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentVerifications.map((cert, index) => (
                    <div key={cert.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <FileCheck className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.institution}</p>
                          <p className="text-xs text-muted-foreground">Submitted: {cert.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {cert.score && (
                          <div className="text-right">
                            <p className="text-sm font-medium text-foreground">{cert.score}%</p>
                            <Progress value={cert.score} className="w-20 h-2" />
                          </div>
                        )}
                        <Badge className={getStatusColor(cert.status)}>
                          {getStatusIcon(cert.status)}
                          <span className="ml-1 capitalize">{cert.status}</span>
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <QrCode className="w-5 h-5 text-primary" />
                    <span>QR Quick Verify</span>
                  </CardTitle>
                  <CardDescription>
                    Instantly verify certificates using QR codes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-4 py-8">
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                      <QrCode className="w-10 h-10" />
                    </div>
                    <Button className="w-full">
                      <Camera className="w-4 h-4 mr-2" />
                      Scan QR Code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span>Certificate ID Lookup</span>
                  </CardTitle>
                  <CardDescription>
                    Verify using certificate ID and institution details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Certificate ID</label>
                      <input 
                        type="text" 
                        placeholder="Enter certificate ID" 
                        className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Institution</label>
                      <input 
                        type="text" 
                        placeholder="Enter institution name" 
                        className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground"
                      />
                    </div>
                    <Button className="w-full">
                      <FileCheck className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;