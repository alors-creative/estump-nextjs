import AsideLinkButton from "@/app/_components/buttons/AsideLinkButton";

function Sidebar() {
  return (
    <aside>
      <AsideLinkButton link="/specialist/dashboard/my-info" color="orange">
        Info
      </AsideLinkButton>
      <AsideLinkButton link="/specialist/dashboard/my-jobs" color="orange">
        My Jobs
      </AsideLinkButton>
      <AsideLinkButton
        link="/specialist/dashboard/available-jobs"
        color="orange">
        Available Jobs
      </AsideLinkButton>
    </aside>
  );
}

export default Sidebar;
