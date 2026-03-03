"use client";

import { useRouter } from "next/navigation";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import StatsCard from "@/components/admin/StatsCard";

const BRAND_PRIMARY = "#1a005d";
const ACCENT = "#ebe8f5";

const AREA_CHART_DATA = [
  { name: "Adobe Illustrator", value: 40000 },
  { name: "Adobe Xd", value: 80000 },
  { name: "Figma", value: 140000 },
  { name: "Adobe Photoshop", value: 180000 },
];

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="flex-1 pt-16 pl-4 pr-4 pb-4 sm:pt-6 sm:pl-6 sm:pr-6 sm:pb-6 lg:pt-8 lg:pl-8 lg:pr-8 lg:pb-8" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="flex-1 min-w-0">
              <h1
                className="text-2xl font-bold text-[#2d3748] sm:text-3xl"
                style={{ fontFamily: "var(--font-family-sans)" }}
              >
                 Dashbord 
              </h1>
              <p
                className="mt-1 text-base text-[#4a5568]"
                style={{ fontFamily: "var(--font-family-sans)" }}
              >
                What software is needed to design?
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2 sm:mt-0">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#4a5568] shadow-sm transition-colors hover:bg-[#1a005d] hover:text-white hover:border-[#1a005d]"
                aria-label="Se déconnecter"
                title="Se déconnecter"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </button>
              <select
                className="shrink-0 rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm text-[#2d3748] focus:border-[#1a005d] focus:outline-none focus:ring-1 focus:ring-[#1a005d]"
                style={{ fontFamily: "var(--font-family-sans)" }}
              >
                <option>For the past 3 years</option>
              </select>
            </div>
          </div>

          {/* Main area chart */}
          <div
            className="mb-6 rounded-2xl bg-white p-6 shadow-sm"
            style={{
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <div className="h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={AREA_CHART_DATA}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="fillArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={BRAND_PRIMARY} stopOpacity={0.4} />
                      <stop offset="100%" stopColor={ACCENT} stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a0aec0", fontSize: 11, fontFamily: "var(--font-family-sans)" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a0aec0", fontSize: 11, fontFamily: "var(--font-family-sans)" }}
                    tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : String(v))}
                    domain={[0, 200000]}
                    ticks={[0, 50000, 100000, 150000, 200000]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={BRAND_PRIMARY}
                    strokeWidth={2.5}
                    fill="url(#fillArea)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <StatsCard type="satisfaction" />
            <StatsCard type="applications" />
          </div>
        </div>
      </div>
    </div>
  );
}
