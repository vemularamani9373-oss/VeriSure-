import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText, QrCode, Camera, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadMethod {
  id: string;
  title: string;
  description: string;
  icon: any;
  active: boolean;
}

const CertificateUpload = () => {
  const { toast } = useToast();
  const [selectedMethod, setSelectedMethod] = useState<string>("upload");
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'processing' | 'completed'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadMethods: UploadMethod[] = [
    {
      id: "upload",
      title: "File Upload",
      description: "Upload PDF, JPG, or PNG certificate files",
      icon: Upload,
      active: selectedMethod === "upload"
    },
    {
      id: "qr",
      title: "QR Code Scan",
      description: "Scan certificate QR code with camera",
      icon: QrCode,
      active: selectedMethod === "qr"
    },
    {
      id: "manual",
      title: "Manual Entry",
      description: "Enter certificate ID and details manually",
      icon: FileText,
      active: selectedMethod === "manual"
    }
  ];

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileUpload = (file: File) => {
    if (!file.type.includes('pdf') && !file.type.includes('image')) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF or image file.",
        variant: "destructive",
      });
      return;
    }

    setUploadStatus('uploading');
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus('processing');
          setTimeout(() => {
            setUploadStatus('completed');
            toast({
              title: "Upload Successful",
              description: "Certificate uploaded and verification started.",
              variant: "default",
            });
          }, 2000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const renderUploadArea = () => {
    if (uploadStatus === 'completed') {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle className="w-16 h-16 text-success mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Upload Completed</h3>
          <p className="text-muted-foreground mb-4">Certificate is being verified...</p>
          <Button variant="success" className="mt-2">View Verification Results</Button>
        </div>
      );
    }

    if (uploadStatus === 'processing') {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Clock className="w-16 h-16 text-warning mb-4 animate-pulse-soft" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Processing Certificate</h3>
          <p className="text-muted-foreground">Running multi-layer verification checks...</p>
        </div>
      );
    }

    if (uploadStatus === 'uploading') {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Uploading...</h3>
          <div className="w-full max-w-xs bg-muted rounded-full h-2 mb-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground">{uploadProgress}% complete</p>
        </div>
      );
    }

    return (
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
          dragActive 
            ? 'border-primary bg-primary/5 scale-105' 
            : 'border-border hover:border-primary/50 hover:bg-muted/30'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className={`w-16 h-16 mx-auto mb-4 transition-colors duration-300 ${
          dragActive ? 'text-primary' : 'text-muted-foreground'
        }`} />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {dragActive ? 'Drop your certificate here' : 'Upload Certificate'}
        </h3>
        <p className="text-muted-foreground mb-4">
          Drag and drop your certificate file, or click to browse
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="professional">
            Choose File
          </Button>
          <Button variant="outline">
            <Camera className="w-4 h-4 mr-2" />
            Take Photo
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Supports PDF, JPG, PNG files up to 20MB
        </p>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-strong border-0 bg-card/90 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground">
            Certificate Verification
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Choose your preferred method to verify certificates
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Method Selection */}
          <div className="grid md:grid-cols-3 gap-4">
            {uploadMethods.map((method) => (
              <Card
                key={method.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-medium ${
                  method.active 
                    ? 'border-primary bg-primary/5 shadow-medium' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <CardContent className="p-4 text-center">
                  <method.icon className={`w-8 h-8 mx-auto mb-2 ${
                    method.active ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upload Area */}
          {selectedMethod === "upload" && renderUploadArea()}

          {/* QR Code Scanner */}
          {selectedMethod === "qr" && (
            <div className="text-center py-12">
              <QrCode className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">QR Code Scanner</h3>
              <p className="text-muted-foreground mb-4">Position the QR code within the camera frame</p>
              <Button variant="professional">
                <Camera className="w-4 h-4 mr-2" />
                Open Camera
              </Button>
            </div>
          )}

          {/* Manual Entry */}
          {selectedMethod === "manual" && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cert-id">Certificate ID</Label>
                  <Input id="cert-id" placeholder="Enter certificate ID" />
                </div>
                <div>
                  <Label htmlFor="institution">Institution Name</Label>
                  <Input id="institution" placeholder="Enter institution name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="student-name">Student Name</Label>
                  <Input id="student-name" placeholder="Enter student name" />
                </div>
                <div>
                  <Label htmlFor="issue-date">Issue Date</Label>
                  <Input id="issue-date" type="date" />
                </div>
              </div>
              <Button variant="professional" className="w-full">
                Verify Certificate
              </Button>
            </div>
          )}

          {/* Security Notice */}
          <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-warning mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Security & Privacy</h4>
              <p className="text-sm text-muted-foreground">
                All uploaded certificates are processed using advanced encryption and are automatically 
                deleted after verification. We maintain strict privacy standards and comply with data protection regulations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateUpload;