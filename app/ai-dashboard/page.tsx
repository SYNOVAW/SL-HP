"use client"

import { TrendingUp, Clock, Brain } from "lucide-react"
import { SummaryZone } from "@/components/fd/summary-zone"
import { AgentVotingPanel } from "@/components/fd/agent-voting-panel"
import { VisualDataLayer } from "@/components/fd/visual-data-layer"
import { InsightTabs } from "@/components/fd/insight-tabs"
import { KPISnapshot } from "@/components/fd/kpi-snapshot"
import { NewsTicker } from "@/components/fd/professional/news-ticker"
import { MarketIndices } from "@/components/fd/professional/market-indices"
import { ErrorBoundary } from "@/components/fd/professional/error-boundary"
import { IntegrationTest } from "@/components/fd/professional/integration-test"
import { AdvancedStockChart } from "@/components/fd/charts/advanced-stock-chart"
import { MultiAgentAnalysisPanel } from "@/components/fd/analysis/multi-agent-panel"
import { StockAnalysisCard } from "@/components/fd/analysis/stock-analysis-card"

export default function AIDashboardPage() {
  return (
    <ErrorBoundary>
      <div className="space-y-8 p-6">
        <header className="fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10">
              <TrendingUp className="h-8 w-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Market Dashboard</h1>
              <p className="text-lg text-white/70">Multi-Agent AI Analysis & Real-time Sentiment Visualization</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-sm text-white/70">System Online</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-white/70">Last Update: just now</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-white/70">4 AI Agents Active</span>
            </div>
          </div>
        </header>

        <div className="fade-in">
          <NewsTicker />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div className="xl:col-span-3 space-y-8">
            <ErrorBoundary>
              <SummaryZone />
            </ErrorBoundary>
            <ErrorBoundary>
              <AgentVotingPanel />
            </ErrorBoundary>
            <ErrorBoundary>
              <KPISnapshot />
            </ErrorBoundary>
            <ErrorBoundary>
              <StockAnalysisCard featured={true} />
            </ErrorBoundary>
            <ErrorBoundary>
              <AdvancedStockChart />
            </ErrorBoundary>
            <ErrorBoundary>
              <MultiAgentAnalysisPanel />
            </ErrorBoundary>
            <ErrorBoundary>
              <VisualDataLayer />
            </ErrorBoundary>
            <ErrorBoundary>
              <InsightTabs />
            </ErrorBoundary>
            <ErrorBoundary>
              <IntegrationTest />
            </ErrorBoundary>
          </div>
          <div className="xl:col-span-1 space-y-6">
            <ErrorBoundary>
              <MarketIndices />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
