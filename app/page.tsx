"use client";

import { useEffect, useState } from "react";
import AppHeader from "@/app/_components/Header/AppHeader";
import { Card } from "@/components/ui/card";
import AppTable from "@/app/_components/Table/AppTable";
import { useTheme } from "next-themes";
import { DeleteDialog } from "./DeleteDialog";
import React from "react";

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-50";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`poppins p-5 ${bgColor} border w-full min-h-screen`}>
      <Card className="flex flex-col shadow-none p-5">
        <DeleteDialog />
        <AppHeader />
        <AppTable />
      </Card>
    </div>
  );
}
