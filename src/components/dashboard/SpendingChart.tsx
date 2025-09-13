import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const spendingData = [
  { month: 'Jan', spending: 1200, budget: 1500 },
  { month: 'Feb', spending: 1350, budget: 1500 },
  { month: 'Mar', spending: 1100, budget: 1500 },
  { month: 'Apr', spending: 1450, budget: 1500 },
  { month: 'May', spending: 1250, budget: 1500 },
  { month: 'Jun', spending: 1380, budget: 1500 },
];

export const SpendingChart = () => {
  return (
    <Card className="p-6 shadow-card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Spending vs Budget</h3>
        <p className="text-sm text-muted-foreground">Monthly overview of your expenses</p>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={spendingData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              className="text-muted-foreground"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              className="text-muted-foreground"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Area
              type="monotone"
              dataKey="budget"
              stackId="1"
              stroke="hsl(var(--muted-foreground))"
              fill="hsl(var(--muted))"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="spending"
              stackId="2"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};