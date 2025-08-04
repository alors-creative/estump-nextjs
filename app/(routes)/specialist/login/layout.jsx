import { FormProvider } from "@/app/_context/FormContext";

function LoginLayout({ children }) {
  return <FormProvider>{children}</FormProvider>;
}

export default LoginLayout;
