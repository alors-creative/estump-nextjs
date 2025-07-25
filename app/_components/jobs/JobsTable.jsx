function JobsTable({ jobs }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Job ID</th>
          <th scope="col">Status</th>
          <th scope="col"># of Stumps</th>
          <th scope="col">Price</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        {jobs?.map(job => (
          <tr>
            <td>{job.id}</td>
            <td>{job?.status?.toLowerCase() === "pending" && "Available"}</td>
            <td>{job.stumps.length}</td>
            {/* TODO: Do we want to already subtract the 20% we've taken here?  */}
            <td>{job.price}</td>
            <td>{job.client.address}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="2">
            Number of Jobs:
          </th>
          <td>{jobs.length}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default JobsTable;
