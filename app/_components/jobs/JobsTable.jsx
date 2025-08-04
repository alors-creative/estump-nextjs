import LinkButton from "@/app/_components/buttons/LinkButton";
import styles from "./jobsTable.module.scss";

function JobsTable({ jobs }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col">Job ID</th>
          <th scope="col">Status</th>
          <th scope="col"># of Stumps</th>
          <th scope="col">Payout</th>
          <th scope="col">Address</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {jobs?.map(job => (
          <tr key={`job-${job.id}`}>
            <td>{job.id}</td>
            <td>
              {job?.status?.toLowerCase() === "pending"
                ? "Available"
                : job.status}
            </td>
            <td>{job.stumps.length}</td>
            {/* TODO: Do we want to already subtract the 20% we've taken here?  */}
            <td>{job.price - job.price * 0.2}</td>
            <td>{job.client.address}</td>
            <td>
              <LinkButton link={`/jobs/${job.id}`} color="green">
                View Job
              </LinkButton>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="3"></th>
          <th scope="row" colSpan="2">
            Number of Jobs:
          </th>
          <td>{jobs.length}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default JobsTable;
