import { useState } from "react";  
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  UserCheck, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Shield,
  ArrowLeft,
  FileSearch,
  Database,
  Eye,
  Flag,
  Users,
  Building,
  BarChart3,
  Award,
  Target,
  Zap
} from "lucide-react";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";

const VerifierDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("verify");

  const pendingVerifications = [
    {
      id: "VER-001",
      studentName: "Priya Sharma",
      certificate: "M.Tech Computer Science",
      institution: "NIT Jamshedpur",
      submittedDate: "2024-01-15",
      priority: "high",
      flaggedLayers: ["forensic", "database"]
    },
    {
      id: "VER-002", 
      studentName: "Amit Kumar",
      certificate: "Bachelor of Commerce",
      institution: "Ranchi University",
      submittedDate: "2024-01-14",
      priority: "medium",
      flaggedLayers: ["signature"]
    },
    {
      id: "VER-003",
      studentName: "Sunita Devi",
      certificate: "Diploma in Nursing",
      institution: "Jharkhand Health University",
      submittedDate: "2024-01-13", 
      priority: "low",
      flaggedLayers: []
    }
  ];

  const recentCases = [
    { id: "CASE-001", type: "Document Tampering", status: "resolved", severity: "high" },
    { id: "CASE-002", type: "Institutional Mismatch", status: "investigating", severity: "medium" },
    { id: "CASE-003", type: "Signature Forgery", status: "escalated", severity: "high" },
    { id: "CASE-004", type: "Grade Manipulation", status: "resolved", severity: "low" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  const getCaseStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-success bg-success/10 border-success/20';
      case 'investigating': return 'text-warning bg-warning/10 border-warning/20';
      case 'escalated': return 'text-destructive bg-destructive/10 border-destructive/20';
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
                <div className="flex items-center justify-center w-10 h-10 bg-success/10 text-success rounded-lg">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Verifier Dashboard</h1>
                  <p className="text-xs text-muted-foreground">Professional Verification Tools</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-success/10 text-success border-success/20">
                Dr. Anita Singh - Certified Verifier
              </Badge>
              <Button variant="professional" size="sm">
                Case Management
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Verifier Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Cases This Month</p>
                  <p className="text-2xl font-bold text-foreground">156</p>
                </div>
                <Target className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                  <p className="text-2xl font-bold text-success">98.7%</p>
                </div>
                <Award className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Processing</p>
                  <p className="text-2xl font-bold text-warning">2.3h</p>
                </div>
                <Zap className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Fraud Detected</p>
                  <p className="text-2xl font-bold text-destructive">12</p>
                </div>
                <Shield className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="verify" className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Pending Queue</span>
            </TabsTrigger>
            <TabsTrigger value="cases" className="flex items-center space-x-2">
              <Flag className="w-4 h-4" />
              <span>Active Cases</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center space-x-2">
              <FileSearch className="w-4 h-4" />
              <span>Advanced Tools</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="verify" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-primary" />
                  <span>Verification Queue</span>
                </CardTitle>
                <CardDescription>
                  Certificates awaiting professional verification review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingVerifications.map((item, index) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <FileSearch className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.studentName}</h3>
                          <p className="text-sm text-muted-foreground">{item.certificate}</p>
                          <p className="text-xs text-muted-foreground">{item.institution}</p>
                          <p className="text-xs text-muted-foreground">Submitted: {item.submittedDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          {item.flaggedLayers.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-2">
                              {item.flaggedLayers.map(layer => (
                                <Badge key={layer} className="text-xs bg-destructive/10 text-destructive border-destructive/20">
                                  {layer}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <Badge className={getPriorityColor(item.priority)}>
                            {item.priority.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="professional" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Review
                          </Button>
                          <Button variant="outline" size="sm">
                            <Flag className="w-4 h-4 mr-2" />
                            Flag
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cases" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Flag className="w-5 h-5 text-primary" />
                  <span>Active Investigation Cases</span>
                </CardTitle>
                <CardDescription>
                  Fraud cases requiring detailed investigation and resolution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCases.map((case_, index) => (
                    <div key={case_.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center">
                          <AlertTriangle className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{case_.id}</h3>
                          <p className="text-sm text-muted-foreground">{case_.type}</p>
                          <Badge className={`mt-1 text-xs ${case_.severity === 'high' ? 'bg-destructive/10 text-destructive' : case_.severity === 'medium' ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'}`}>
                            {case_.severity} severity
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Badge className={getCaseStatusColor(case_.status)}>
                          {case_.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="professional" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Investigate
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

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Verification Analytics</span>
                </CardTitle>
                <CardDescription>
                  Performance metrics and fraud detection insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnalyticsDashboard />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-primary" />
                    <span>Institutional Lookup</span>
                  </CardTitle>
                  <CardDescription>
                    Cross-reference institutional databases and credibility scores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Institution Name</label>
                      <input 
                        type="text" 
                        placeholder="Search institution..." 
                        className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <Building className="w-4 h-4 mr-2" />
                        Verify Institution
                      </Button>
                      <Button variant="outline" size="sm">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Trust Score
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Forensic Analysis</span>
                  </CardTitle>
                  <CardDescription>
                    Advanced document forensics and tampering detection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-10 h-10" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Upload document for deep forensic analysis
                      </p>
                      <Button className="w-full">
                        <FileSearch className="w-4 h-4 mr-2" />
                        Start Analysis
                      </Button>
                    </div>
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

export default VerifierDashboard;