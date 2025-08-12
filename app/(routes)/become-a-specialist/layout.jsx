import { FormProvider } from "@/app/_context/FormContext";

export const metadata = {
  title: "Become a Stump Specialist | Join the eStump Network of Local Pros",
  description:
    "Grow your business by joining eStump. We connect skilled stump removal pros with local homeowners—submit your credentials and start receiving jobs fast."
};

function JobRequestLayout({ children }) {
  return <FormProvider>{children}</FormProvider>;
}

export default JobRequestLayout;
