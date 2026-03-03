"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const BRAND_PRIMARY = "#1a005d";
const ACCENT = "#ebe8f5";
const LIGHT_GREY = "#e2e8f0";

type SatisfactionData = {
  name: string;
  value: number;
  color: string;
};

type ApplicationsData = {
  label: string;
  short: string;
  value: number;
  fill: string;
};

interface StatsCardProps {
  type: "satisfaction" | "applications";
}

export default function StatsCard({ type }: StatsCardProps) {
  if (type === "satisfaction") {
    const data: SatisfactionData[] = [
      { name: "Successful", value: 189, color: BRAND_PRIMARY },
      { name: "Unsuccessful", value: 1, color: LIGHT_GREY },
    ];

    return (
      <div
        className="rounded-2xl bg-white p-6 shadow-sm"
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <h3
          className="mb-4 text-base font-bold text-[#2d3748]"
          style={{ fontFamily: "var(--font-family-sans)" }}
        >
          Satisfaction
        </h3>
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-6">
          <div className="relative h-40 w-40 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={56}
                  outerRadius={72}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ fontFamily: "var(--font-family-sans)" }}
            >
              <span className="text-2xl font-bold" style={{ color: BRAND_PRIMARY }}>
                98%
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 shrink-0 rounded-sm"
                style={{ backgroundColor: LIGHT_GREY }}
              />
              <span className="text-sm text-[#718096]" style={{ fontFamily: "var(--font-family-sans)" }}>
                1 Unsuccessful
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 shrink-0 rounded-sm"
                style={{ backgroundColor: BRAND_PRIMARY }}
              />
              <span className="text-sm font-medium" style={{ color: BRAND_PRIMARY, fontFamily: "var(--font-family-sans)" }}>
                189 Successful
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const applicationsData: ApplicationsData[] = [
    { label: "Figma", short: "Fg", value: 10, fill: BRAND_PRIMARY },
    { label: "Adobe Photoshop", short: "Ps", value: 50, fill: BRAND_PRIMARY },
    { label: "Adobe Illustrator", short: "Ai", value: 30, fill: BRAND_PRIMARY },
    { label: "Adobe Xd", short: "Xd", value: 100, fill: BRAND_PRIMARY },
  ];

  return (
    <div
      className="rounded-2xl bg-white p-6 shadow-sm"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <h3
        className="mb-4 text-base font-bold text-[#2d3748]"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        Applications
      </h3>
      <div className="h-36">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={applicationsData}
            margin={{ top: 8, right: 8, left: 8, bottom: 4 }}
          >
            <XAxis
              dataKey="short"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#4a5568", fontSize: 11, fontFamily: "var(--font-family-sans)" }}
            />
            <YAxis hide domain={[0, 120]} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={40} label={{ position: "top", fill: "#2d3748", fontSize: 11 }}>
              {applicationsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
        {applicationsData.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 shrink-0 rounded-sm"
              style={{ backgroundColor: BRAND_PRIMARY }}
            />
            <span className="text-xs text-[#4a5568]" style={{ fontFamily: "var(--font-family-sans)" }}>
              {item.label} {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
