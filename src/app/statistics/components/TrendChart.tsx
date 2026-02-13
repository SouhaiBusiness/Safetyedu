"use client";
import { useState, useEffect } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ChartDataPoint {
  year: string;
  total: number;
  children: number;
}

interface AgeGroupData {
  ageGroup: string;
  accidents: number;
}

interface TrendChartProps {
  type: "line" | "bar";
  data?: ChartDataPoint[] | AgeGroupData[];
  title: string;
  description?: string;
}

export default function TrendChart({ type, data, title, description }: TrendChartProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const defaultLineData: ChartDataPoint[] = [
    { year: "2020", total: 4200, children: 3650 },
    { year: "2021", total: 3980, children: 3420 },
    { year: "2022", total: 3750, children: 3180 },
    { year: "2023", total: 3520, children: 2940 },
    { year: "2024", total: 3280, children: 2700 },
    { year: "2025", total: 3050, children: 2460 },
  ];

  const defaultBarData: AgeGroupData[] = [
    { ageGroup: "0-5 ans", accidents: 420 },
    { ageGroup: "6-10 ans", accidents: 1240 },
    { ageGroup: "11-15 ans", accidents: 1540 },
    { ageGroup: "16-18 ans", accidents: 980 },
  ];

  const chartData = data || (type === "line" ? defaultLineData : defaultBarData);

  if (!isHydrated) {
    return (
      <div className="creative-card p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mb-6">{description}</p>}
        <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Chargement du graphique...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="creative-card p-8">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      {description && <p className="text-sm text-muted-foreground mb-6">{description}</p>}
      
      <ResponsiveContainer width="100%" height={320}>
        {type === "line" ? (
          <LineChart data={chartData as ChartDataPoint[]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="year" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#2E7D32"
              strokeWidth={3}
              name="Total accidents"
              dot={{ fill: "#2E7D32", r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="children"
              stroke="#FFC107"
              strokeWidth={3}
              name="Accidents enfants"
              dot={{ fill: "#FFC107", r: 5 }}
            />
          </LineChart>
        ) : (
          <BarChart data={chartData as AgeGroupData[]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="ageGroup" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="accidents" fill="#2E7D32" name="Accidents" radius={[8, 8, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
      
      {type === "line" && (
        <p className="text-sm text-muted-foreground mt-6 text-center">
          ↓ 18% de réduction globale depuis 2020
        </p>
      )}
      
      {type === "bar" && (
        <p className="text-sm text-muted-foreground mt-6 text-center">
          Les 11-15 ans sont les plus vulnérables - priorité à l'éducation préventive
        </p>
      )}
    </div>
  );
}