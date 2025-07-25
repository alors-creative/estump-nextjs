import LinkButton from "@/app/_components/buttons/LinkButton";

function page() {
  return (
    <section>
      Login
      <LinkButton link="/specialist/dashboard/my-jobs" color="orange">
        Get Started
      </LinkButton>
    </section>
  );
}

export default page;
