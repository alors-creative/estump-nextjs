import { ContractorFormProvider } from "@/app/_context/ContractorFormContext copy";

function JobRequestLayout({ children }) {
  return <ContractorFormProvider>{children}</ContractorFormProvider>;
}

export default JobRequestLayout;
