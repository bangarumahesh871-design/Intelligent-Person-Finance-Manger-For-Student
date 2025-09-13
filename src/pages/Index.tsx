import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Brain, Target, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-foreground">FinanceAI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Smart Finance
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Management</span>
              <br />for Students
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI-powered budgeting, expense tracking, and financial insights designed specifically for student life. 
              Take control of your finances with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-primary text-white shadow-glow hover:shadow-hover transition-all duration-300">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Intelligent Features for Student Success
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage your finances smartly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">AI Categorization</h3>
            <p className="text-sm text-muted-foreground">
              Automatically categorize expenses using natural language processing
            </p>
          </Card>

          <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Predictive Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Get insights on future spending patterns and budget optimization
            </p>
          </Card>

          <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-warning" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Goal Tracking</h3>
            <p className="text-sm text-muted-foreground">
              Set and monitor financial goals with progress tracking
            </p>
          </Card>

          <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-secondary-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Smart Alerts</h3>
            <p className="text-sm text-muted-foreground">
              Receive intelligent notifications about spending patterns
            </p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Ready to get started?</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Take Control of Your Student Finances Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of students who are already managing their money smarter with AI
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-primary text-white shadow-glow">
                Start Your Financial Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
