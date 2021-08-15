import React, { useMemo } from 'react';

export const App =  ({timestamp}) => {
  const dateString = useMemo(() => {
    const dateObj = new Date(timestamp)
    return `${dateObj.getFullYear()}年${dateObj.getMonth() + 1}月${dateObj.getDate()}日`
  }, [timestamp])
  return (
    <p>日付：{dateString}</p>
  )
}
