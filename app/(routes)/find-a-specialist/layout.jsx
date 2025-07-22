import { JobFormProvider } from "@/app/_context/JobFormContext";

function JobRequestLayout({ children }) {
  return <JobFormProvider>{children}</JobFormProvider>;
}

export default JobRequestLayout;
