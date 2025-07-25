import { FormProvider } from "@/app/_context/FormContext";

function JobRequestLayout({ children }) {
  return <FormProvider>{children}</FormProvider>;
}

export default JobRequestLayout;
