import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  School, 
  Upload, 
  Users, 
  FileCheck, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  Database,
  Settings,
  Award,
  Shield,
  Building,
  BarChart3,
  FileText,
  Clock,
  Star,
  Globe
} from "lucide-react";

const InstitutionDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const recentCertificates = [
    {
      id: "CERT-2024-001",
      studentName: "Rahul Verma",
      course: "B.Tech Computer Science",
      issueDate: "2024-01-15",
      status: "verified",
      verificationCount: 12
    },
    {
      id: "CERT-2024-002", 
      studentName: "Anjali Kumari",
      course: "MBA Finance",
      issueDate: "2024-01-14",
      status: "pending_verification",
      verificationCount: 3
    },
    {
      id: "CERT-2024-003",
      studentName: "Suresh Mahto",
      course: "M.Sc Physics", 
      issueDate: "2024-01-13",
      status: "flagged",
      verificationCount: 8
    }
  ];

  const institutionMetrics = {
    totalCertificates: 15420,
    verifiedCertificates: 14856,
    pendingVerifications: 564,
    trustScore: 94.7,
    verificationRequests: 3250,
    fraudDetected: 15
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'text-success bg-success/10 border-success/20';
      case 'pending_verification': return 'text-warning bg-warning/10 border-warning/20';
      case 'flagged': return 'text-destructive bg-destructive/10 border-destructive/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
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
                <div className="flex items-center justify-center w-10 h-10 bg-warning/10 text-warning rounded-lg">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Institution Panel</h1>
                  <p className="text-xs text-muted-foreground">NIT Jamshedpur - Certificate Management</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium text-foreground">Trust Score: {institutionMetrics.trustScore}%</span>
              </div>
              <Badge className="bg-warning/10 text-warning border-warning/20">
                Verified Institution
              </Badge>
              <Button variant="professional" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Institution Stats */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Certificates</p>
                  <p className="text-2xl font-bold text-foreground">{institutionMetrics.totalCertificates.toLocaleString()}</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Verified</p>
                  <p className="text-2xl font-bold text-success">{institutionMetrics.verifiedCertificates.toLocaleString()}</p>
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
                  <p className="text-2xl font-bold text-warning">{institutionMetrics.pendingVerifications}</p>
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
                  <p className="text-2xl font-bold text-primary">{institutionMetrics.trustScore}%</p>
                </div>
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Verification Requests</p>
                  <p className="text-2xl font-bold text-foreground">{institutionMetrics.verificationRequests.toLocaleString()}</p>
                </div>
                <Globe className="w-8 h-8 text-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Fraud Detected</p>
                  <p className="text-2xl font-bold text-destructive">{institutionMetrics.fraudDetected}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-muted/50">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Certificates</span>
            </TabsTrigger>
            <TabsTrigger value="bulk-upload" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Bulk Upload</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="reputation" className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Reputation</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span>Institution Performance</span>
                  </CardTitle>
                  <CardDescription>
                    Real-time metrics and performance indicators
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Verification Success Rate</span>
                      <span className="text-sm font-medium text-foreground">96.3%</span>
                    </div>
                    <Progress value={96.3} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Trust Score Trend</span>
                      <span className="text-sm font-medium text-success">+2.4%</span>
                    </div>
                    <Progress value={94.7} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Monthly Verifications</span>
                      <span className="text-sm font-medium text-foreground">3,250</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    <span>Alerts & Notifications</span>
                  </CardTitle>
                  <CardDescription>
                    Important updates and system alerts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-warning/10 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Unusual Verification Pattern</p>
                        <p className="text-xs text-muted-foreground">15 rapid verifications from same IP address</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-success/10 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Trust Score Increased</p>
                        <p className="text-xs text-muted-foreground">Monthly evaluation completed successfully</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-primary/10 rounded-lg">
                      <Database className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">System Update Available</p>
                        <p className="text-xs text-muted-foreground">New verification features ready for deployment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Recent Certificate Activity</span>
                </CardTitle>
                <CardDescription>
                  Latest certificates issued and their verification status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCertificates.map((cert, index) => (
                    <div key={cert.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <FileCheck className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{cert.studentName}</h3>
                          <p className="text-sm text-muted-foreground">{cert.course}</p>
                          <p className="text-xs text-muted-foreground">ID: {cert.id} • Issued: {cert.issueDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{cert.verificationCount} verifications</p>
                          <Badge className={getStatusColor(cert.status)}>
                            {cert.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            Update
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bulk-upload" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-primary" />
                  <span>Bulk Certificate Upload</span>
                </CardTitle>
                <CardDescription>
                  Upload multiple certificates and their metadata efficiently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Upload Certificate Batch</h3>
                    <p className="text-muted-foreground mb-4">Drag and drop CSV file or click to browse</p>
                    <Button className="gradient-primary text-white">
                      <Upload className="w-4 h-4 mr-2" />
                      Choose File
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border border-border">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-foreground mb-2">Upload Statistics</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Last Upload:</span>
                            <span className="text-foreground">2024-01-15</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Certificates Processed:</span>
                            <span className="text-foreground">1,250</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Success Rate:</span>
                            <span className="text-success">98.4%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-foreground mb-2">Format Guidelines</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>• CSV format with headers</p>
                          <p>• Maximum 1000 records per batch</p>
                          <p>• Include student ID, course, grade</p>
                          <p>• Ensure data accuracy</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Institution Analytics</span>
                </CardTitle>
                <CardDescription>
                  Detailed insights into certificate verification patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Student Engagement</h4>
                    <p className="text-2xl font-bold text-primary">85%</p>
                    <p className="text-sm text-muted-foreground">Active certificate usage</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success/10 text-success rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Verification Quality</h4>
                    <p className="text-2xl font-bold text-success">96.3%</p>
                    <p className="text-sm text-muted-foreground">Successful verifications</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-warning/10 text-warning rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Growth Rate</h4>
                    <p className="text-2xl font-bold text-warning">+12%</p>
                    <p className="text-sm text-muted-foreground">Monthly increase</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reputation" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Institution Reputation</span>
                </CardTitle>
                <CardDescription>
                  Trust score components and reputation management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">{institutionMetrics.trustScore}%</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Overall Trust Score</h3>
                    <p className="text-muted-foreground">Excellent institutional credibility</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Trust Factors</h4>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Verification Accuracy</span>
                            <span className="text-foreground">96%</span>
                          </div>
                          <Progress value={96} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Response Time</span>
                            <span className="text-foreground">92%</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Data Quality</span>
                            <span className="text-foreground">98%</span>
                          </div>
                          <Progress value={98} className="h-2" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Recent Achievements</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg">
                          <Award className="w-5 h-5 text-success" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Excellence Award</p>
                            <p className="text-xs text-muted-foreground">Top 5% verification quality</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                          <Shield className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Security Certified</p>
                            <p className="text-xs text-muted-foreground">Enhanced security protocols</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InstitutionDashboard;