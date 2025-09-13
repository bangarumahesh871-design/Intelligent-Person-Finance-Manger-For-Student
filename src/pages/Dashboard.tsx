import { Navbar } from "@/components/layout/Navbar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { DollarSign, TrendingUp, Target, AlertCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground mt-2">Here's your financial overview for this month</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Balance"
            value="$2,845.67"
            icon={DollarSign}
            trend={{ value: "12% from last month", isPositive: true }}
          />
          <StatsCard
            title="Monthly Spending"
            value="$1,380.45"
            icon={TrendingUp}
            trend={{ value: "8% from last month", isPositive: false }}
          />
          <StatsCard
            title="Savings Goal"
            value="$750.00"
            icon={Target}
            trend={{ value: "75% completed", isPositive: true }}
          />
          <StatsCard
            title="Budget Alerts"
            value="2 Active"
            icon={AlertCircle}
            className="border-warning/20 bg-warning/5"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <SpendingChart />
            <RecentTransactions />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <CategoryBreakdown />
            <AIInsights />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;