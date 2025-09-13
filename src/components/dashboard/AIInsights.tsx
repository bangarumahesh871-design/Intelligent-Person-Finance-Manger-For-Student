import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingDown, AlertTriangle, Target } from "lucide-react";

const insights = [
  {
    type: "optimization",
    icon: TrendingDown,
    title: "Reduce Food Spending",
    description: "You've spent 15% more on dining out this month. Consider meal prep to save ~$80.",
    priority: "high",
    action: "Create Meal Plan"
  },
  {
    type: "alert",
    icon: AlertTriangle,
    title: "Budget Alert",
    description: "You're approaching 90% of your entertainment budget. $30 remaining.",
    priority: "medium",
    action: "Adjust Budget"
  },
  {
    type: "goal",
    icon: Target,
    title: "Savings Goal",
    description: "You're on track to save $150 this month. Keep up the great work!",
    priority: "low",
    action: "View Progress"
  },
];

export const AIInsights = () => {
  return (
    <Card className="p-6 shadow-card">
      <div className="mb-6 flex items-center space-x-2">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">AI Insights</h3>
        <Badge variant="secondary" className="text-xs">Powered by AI</Badge>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    insight.priority === 'high' ? 'bg-destructive/10' :
                    insight.priority === 'medium' ? 'bg-warning/10' :
                    'bg-success/10'
                  }`}>
                    <Icon className={`h-4 w-4 ${
                      insight.priority === 'high' ? 'text-destructive' :
                      insight.priority === 'medium' ? 'text-warning' :
                      'text-success'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground">{insight.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  {insight.action}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};