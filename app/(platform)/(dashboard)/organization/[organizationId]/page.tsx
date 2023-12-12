"use client";

import { OrganizationSwitcher, useAuth } from "@clerk/nextjs";

function OraganizationIdPage() {
  const { userId, orgId } = useAuth();
  return (
    <div>
      <h1>Organization</h1>
      {/* <p>user:{userId}</p>
      <p>org:{orgId}</p> */}
      {/* <OrganizationSwitcher hidePersonal /> */}
    </div>
  );
}

export default OraganizationIdPage;
