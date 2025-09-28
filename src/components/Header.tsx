import { Button } from "@/components/ui/button";
import { Shield, User, Menu, Bell } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [userRole] = useState<'public' | 'verifier' | 'institution' | 'admin'>('public');
  
  const getRoleDisplay = (role: string) => {
    const roles = {
      public: { label: "Public User", color: "text-muted-foreground" },
      verifier: { label: "Verifier", color: "text-primary" },
      institution: { label: "Institution", color: "text-success" },
      admin: { label: "Administrator", color: "text-warning" }
    };
    return roles[role as keyof typeof roles] || roles.public;
  };

  const roleInfo = getRoleDisplay(userRole);

  return (
    <header className="w-full bg-card border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 gradient-primary rounded-lg shadow-soft">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CertifySecure</h1>
              <p className="text-xs text-muted-foreground">Smart Certificate Verification</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
              Verify
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
              Analytics
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
              Help
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-smooth" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </div>
            
            <div className="flex items-center space-x-2 px-3 py-1 bg-muted rounded-lg">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className={`text-sm font-medium ${roleInfo.color}`}>
                {roleInfo.label}
              </span>
            </div>

            <Button variant="professional" size="sm">
              Sign In
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;