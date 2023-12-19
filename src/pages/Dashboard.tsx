import React, { useState } from "react"
import { Space } from "antd"
import { useAppSelector } from "@hooks/hooks"

const DashboardPage: React.FC = () => {
  const { isExpanded } = useAppSelector((state) => state.common)
  return <Space>Dashboard page {isExpanded}</Space>
}

export default DashboardPage
