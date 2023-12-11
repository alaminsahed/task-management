import { OrganizationList } from "@clerk/nextjs";

function createOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl="/organization/:id"
      afterSelectOrganizationUrl="/organization/:id"
    />
  );
}

export default createOrganizationPage;
