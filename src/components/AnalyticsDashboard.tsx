import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Shield, 
  AlertTriangle, 
  Users, 
  FileCheck,
  Activity,
  Calendar,
  Download,
  Filter
} from "lucide-react";

const AnalyticsDashboard = () => {
  const kpiData = [
    {
      title: "Total Verifications",
      value: "45,726",
      change: "+12.5%",
      trend: "up",
      icon: FileCheck,
      color: "text-success"
    },
    {
      title: "Success Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: Shield,
      color: "text-success"
    },
    {
      title: "Fraud Detected",
      value: "2,847",
      change: "+8.3%",
      trend: "up",
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      title: "Active Institutions",
      value: "267",
      change: "+5.7%",
      trend: "up",
      icon: Users,
      color: "text-primary"
    }
  ];

  const fraudHotspots = [
    { region: "Maharashtra", cases: 342, risk: "high", trend: "+15%" },
    { region: "Karnataka", cases: 298, risk: "high", trend: "+8%" },
    { region: "Uttar Pradesh", cases: 267, risk: "medium", trend: "-3%" },
    { region: "Tamil Nadu", cases: 198, risk: "medium", trend: "+12%" },
    { region: "Gujarat", cases: 156, risk: "low", trend: "-7%" }
  ];

  const institutionRankings = [
    { name: "IIT Delhi", score: 99.8, verifications: 2847, fraud: 2 },
    { name: "IIT Mumbai", score: 99.6, verifications: 3124, fraud: 3 },
    { name: "NIT Surathkal", score: 98.9, verifications: 1876, fraud: 8 },
    { name: "BITS Pilani", score: 98.7, verifications: 2156, fraud: 12 },
    { name: "VIT Vellore", score: 97.4, verifications: 3456, fraud: 28 }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "High Risk",
      message: "Suspicious certificate pattern detected from Mumbai region",
      time: "2 minutes ago",
      severity: "high"
    },
    {
      id: 2,
      type: "System",
      message: "New institution verification protocol updated",
      time: "15 minutes ago",
      severity: "info"
    },
    {
      id: 3,
      type: "Fraud Alert",
      message: "Forged signature detected in engineering certificates",
      time: "1 hour ago",
      severity: "warning"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'low':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-l-destructive bg-destructive/5';
      case 'warning':
        return 'border-l-warning bg-warning/5';
      case 'info':
        return 'border-l-primary bg-primary/5';
      default:
        return 'border-l-muted';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Real-time verification insights and fraud detection</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="professional" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="shadow-medium border-0 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {kpi.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-success" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive" />
                    )}
                    <span className={`text-sm ${kpi.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-muted/50`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Fraud Hotspots */}
        <Card className="shadow-medium border-0 bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Fraud Hotspots
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Regional fraud detection patterns
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {fraudHotspots.map((hotspot, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-foreground">{hotspot.region}</span>
                    <Badge className={getRiskColor(hotspot.risk)}>
                      {hotspot.risk} risk
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{hotspot.cases} cases detected</p>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${hotspot.trend.includes('+') ? 'text-destructive' : 'text-success'}`}>
                    {hotspot.trend}
                  </div>
                  {hotspot.trend.includes('+') ? (
                    <TrendingUp className="w-4 h-4 text-destructive ml-auto" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-success ml-auto" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Institution Rankings */}
        <Card className="shadow-medium border-0 bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Institution Trust Rankings
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Top performing institutions by accuracy
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {institutionRankings.map((institution, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary font-bold rounded-full text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{institution.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{institution.verifications} verified</span>
                    <span>{institution.fraud} fraud cases</span>
                  </div>
                  <Progress value={institution.score} className="mt-2 h-2" />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-success">{institution.score}%</div>
                  <div className="text-xs text-muted-foreground">Trust Score</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Alerts */}
      <Card className="shadow-medium border-0 bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center space-x-2">
            <Activity className="w-5 h-5" />
            <span>Recent Alerts</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Latest system notifications and fraud alerts
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {recentAlerts.map((alert) => (
            <div key={alert.id} className={`p-4 border-l-4 rounded-r-lg ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {alert.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                  <p className="text-sm text-foreground">{alert.message}</p>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Time Range Selector */}
      <div className="flex justify-center">
        <div className="flex space-x-2 p-1 bg-muted rounded-lg">
          <Button variant="ghost" size="sm" className="text-xs">24H</Button>
          <Button variant="secondary" size="sm" className="text-xs">7D</Button>
          <Button variant="ghost" size="sm" className="text-xs">30D</Button>
          <Button variant="ghost" size="sm" className="text-xs">90D</Button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;