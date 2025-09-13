import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const categoryData = [
  { name: 'Food & Dining', amount: 450, budget: 500, color: 'hsl(147 69% 37%)' },
  { name: 'Transportation', amount: 180, budget: 200, color: 'hsl(217 71% 53%)' },
  { name: 'Entertainment', amount: 120, budget: 150, color: 'hsl(38 92% 50%)' },
  { name: 'Shopping', amount: 280, budget: 300, color: 'hsl(0 72% 51%)' },
  { name: 'Education', amount: 350, budget: 400, color: 'hsl(142 76% 36%)' },
];

export const CategoryBreakdown = () => {
  return (
    <Card className="p-6 shadow-card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Category Breakdown</h3>
        <p className="text-sm text-muted-foreground">Spending by category this month</p>
      </div>
      
      <div className="space-y-4">
        {categoryData.map((category, index) => {
          const percentage = (category.amount / category.budget) * 100;
          const isOverBudget = percentage > 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{category.name}</span>
                <span className="text-sm text-muted-foreground">
                  ${category.amount} / ${category.budget}
                </span>
              </div>
              <Progress 
                value={Math.min(percentage, 100)} 
                className={`h-2 ${isOverBudget ? 'bg-destructive/10' : ''}`}
              />
              {isOverBudget && (
                <p className="text-xs text-destructive">Over budget by ${category.amount - category.budget}</p>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};