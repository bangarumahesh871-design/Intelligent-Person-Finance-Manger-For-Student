import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Car, Coffee, GraduationCap, Gamepad2 } from "lucide-react";

const transactions = [
  {
    id: 1,
    description: "Grocery Store",
    amount: -45.67,
    category: "Food & Dining",
    date: "Today",
    icon: Coffee,
  },
  {
    id: 2,
    description: "Uber Ride",
    amount: -12.50,
    category: "Transportation",
    date: "Yesterday",
    icon: Car,
  },
  {
    id: 3,
    description: "Online Course",
    amount: -49.99,
    category: "Education",
    date: "2 days ago",
    icon: GraduationCap,
  },
  {
    id: 4,
    description: "Steam Purchase",
    amount: -29.99,
    category: "Entertainment",
    date: "3 days ago",
    icon: Gamepad2,
  },
  {
    id: 5,
    description: "Amazon Order",
    amount: -67.85,
    category: "Shopping",
    date: "4 days ago",
    icon: ShoppingCart,
  },
];

export const RecentTransactions = () => {
  return (
    <Card className="p-6 shadow-card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
        <p className="text-sm text-muted-foreground">Your latest spending activity</p>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;
          return (
            <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{transaction.description}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {transaction.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{transaction.date}</span>
                  </div>
                </div>
              </div>
              <span className={`text-sm font-semibold ${transaction.amount < 0 ? 'text-destructive' : 'text-success'}`}>
                {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};