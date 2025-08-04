import JobsTable from "@/app/_components/jobs/JobsTable";
import { getJobs } from "@/app/_lib/data-service";

async function page() {
  const jobs = await getJobs();
  const filteredJobs = jobs.filter(job => job?.contractor?.id === 1);

  return (
    <section>
      <JobsTable jobs={filteredJobs} />
    </section>
  );
}

export default page;
