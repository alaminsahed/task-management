import React from "react";

function ClearkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex justify-center items-center">{children}</div>
  );
}

export default ClearkLayout;
