import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  Lock, 
  Users, 
  Building, 
  AlertTriangle, 
  Shield,
  BarChart3,
  Settings,
  ArrowLeft,
  Database,
  Activity,
  TrendingUp,
  UserCheck,
  FileX,
  Crown,
  Zap,
  Globe,
  Server,
  Eye,
  Flag,
  CheckCircle
} from "lucide-react";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const systemStats = {
    totalUsers: 45280,
    totalInstitutions: 1250,
    totalVerifiers: 89,
    totalCertificates: 2850000,
    dailyVerifications: 15420,
    fraudCasesDetected: 342,
    systemUptime: 99.8,
    avgResponseTime: 0.85
  };

  const recentAlerts = [
    {
      id: "ALERT-001",
      type: "Security",
      message: "Unusual verification pattern detected from IP cluster",
      severity: "high",
      timestamp: "2024-01-15 14:30",
      status: "investigating"
    },
    {
      id: "ALERT-002", 
      type: "Performance",
      message: "Database query response time exceeded threshold",
      severity: "medium",
      timestamp: "2024-01-15 13:45",
      status: "resolved"
    },
    {
      id: "ALERT-003",
      type: "Fraud",
      message: "Multiple fraudulent certificates from same institution",
      severity: "high", 
      timestamp: "2024-01-15 12:20",
      status: "escalated"
    }
  ];

  const institutionRequests = [
    {
      id: "REQ-001",
      institutionName: "Jharkhand Technical University",
      type: "New Registration",
      submittedDate: "2024-01-14",
      status: "pending_review",
      documentsCount: 12
    },
    {
      id: "REQ-002",
      institutionName: "Ranchi College of Engineering", 
      type: "Trust Score Appeal",
      submittedDate: "2024-01-13",
      status: "under_investigation",
      documentsCount: 8
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-success bg-success/10 border-success/20';
      case 'investigating': return 'text-warning bg-warning/10 border-warning/20';
      case 'escalated': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'pending_review': return 'text-primary bg-primary/10 border-primary/20';
      case 'under_investigation': return 'text-warning bg-warning/10 border-warning/20';
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
                <div className="flex items-center justify-center w-10 h-10 bg-destructive/10 text-destructive rounded-lg">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">System Administration</h1>
                  <p className="text-xs text-muted-foreground">CertifySecure Master Control</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">System Healthy</span>
              </div>
              <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                <Crown className="w-3 h-3 mr-1" />
                Super Admin
              </Badge>
              <Button variant="professional" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                System Config
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-foreground">{systemStats.totalUsers.toLocaleString()}</p>
                  <p className="text-xs text-success">+8.2% this month</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Institutions</p>
                  <p className="text-2xl font-bold text-foreground">{systemStats.totalInstitutions.toLocaleString()}</p>
                  <p className="text-xs text-success">+12 new this week</p>
                </div>
                <Building className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Daily Verifications</p>
                  <p className="text-2xl font-bold text-foreground">{systemStats.dailyVerifications.toLocaleString()}</p>
                  <p className="text-xs text-success">+15.4% vs yesterday</p>
                </div>
                <Zap className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                  <p className="text-2xl font-bold text-foreground">{systemStats.systemUptime}%</p>
                  <p className="text-xs text-success">Excellent performance</p>
                </div>
                <Server className="w-8 h-8 text-primary" />
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
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>User Management</span>
            </TabsTrigger>
            <TabsTrigger value="institutions" className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span>Institutions</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    <span>System Alerts</span>
                  </CardTitle>
                  <CardDescription>
                    Critical system notifications requiring attention
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAlerts.map((alert, index) => (
                      <div key={alert.id} className="flex items-start justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                            alert.severity === 'high' ? 'text-destructive' : 
                            alert.severity === 'medium' ? 'text-warning' : 'text-success'
                          }`} />
                          <div>
                            <p className="text-sm font-medium text-foreground">{alert.message}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className={getSeverityColor(alert.severity)}>
                                {alert.severity}
                              </Badge>
                              <Badge className={getStatusColor(alert.status)}>
                                {alert.status}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-primary" />
                    <span>System Health</span>
                  </CardTitle>
                  <CardDescription>
                    Real-time system performance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">CPU Usage</span>
                      <span className="text-sm font-medium text-foreground">23%</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Memory Usage</span>
                      <span className="text-sm font-medium text-foreground">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Database Load</span>
                      <span className="text-sm font-medium text-foreground">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Response Time</span>
                      <span className="text-sm font-medium text-success">{systemStats.avgResponseTime}s</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
                <CardContent className="pt-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Students</h3>
                  <p className="text-2xl font-bold text-primary">42,350</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
                <CardContent className="pt-6 text-center">
                  <UserCheck className="w-8 h-8 text-success mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Verifiers</h3>
                  <p className="text-2xl font-bold text-success">{systemStats.totalVerifiers}</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
                <CardContent className="pt-6 text-center">
                  <Lock className="w-8 h-8 text-destructive mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Admins</h3>
                  <p className="text-2xl font-bold text-destructive">12</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>User Activity Monitoring</span>
                </CardTitle>
                <CardDescription>
                  Recent user registrations and activity patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Database className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">User Management Console</h3>
                  <p className="text-muted-foreground mb-4">Advanced user analytics and management tools</p>
                  <Button className="gradient-primary text-white">
                    <Users className="w-4 h-4 mr-2" />
                    Launch User Console
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="institutions" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-primary" />
                  <span>Institution Registration Requests</span>
                </CardTitle>
                <CardDescription>
                  Pending institution applications requiring review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {institutionRequests.map((request, index) => (
                    <div key={request.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-warning/10 text-warning rounded-lg flex items-center justify-center">
                          <Building className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{request.institutionName}</h3>
                          <p className="text-sm text-muted-foreground">{request.type}</p>
                          <p className="text-xs text-muted-foreground">
                            Submitted: {request.submittedDate} • {request.documentsCount} documents
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(request.status)}>
                          {request.status.replace('_', ' ')}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="professional" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Review
                          </Button>
                          <Button variant="outline" size="sm">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileX className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Security Overview</span>
                  </CardTitle>
                  <CardDescription>
                    System security status and threat monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-sm font-medium text-foreground">Firewall Status</span>
                    </div>
                    <Badge className="bg-success/10 text-success border-success/20">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-sm font-medium text-foreground">SSL Certificates</span>
                    </div>
                    <Badge className="bg-success/10 text-success border-success/20">Valid</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="w-5 h-5 text-warning" />
                      <span className="text-sm font-medium text-foreground">Failed Login Attempts</span>
                    </div>
                    <Badge className="bg-warning/10 text-warning border-warning/20">23 today</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Flag className="w-5 h-5 text-destructive" />
                    <span>Fraud Detection</span>
                  </CardTitle>
                  <CardDescription>
                    Automated fraud detection and prevention metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">{systemStats.fraudCasesDetected}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Fraud Cases Detected</h4>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Detection Accuracy</span>
                      <span className="text-sm font-medium text-foreground">97.8%</span>
                    </div>
                    <Progress value={97.8} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>System Analytics</span>
                </CardTitle>
                <CardDescription>
                  Comprehensive system performance and usage analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnalyticsDashboard />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;