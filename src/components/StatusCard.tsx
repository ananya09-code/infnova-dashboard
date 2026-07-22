import type { StatusResponse } from "../types/StatusResponse ";

type StatusCardProps = Pick<StatusResponse, "totalApplicants" | "byStatus">;

const countColor = {
  pending: "bg-yellow-100 text-yellow-700",
  shortlisted: "bg-blue-100 text-blue-700",
  accepted: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};
function StatusCard({ totalApplicants, byStatus }: StatusCardProps) {
  return (
    <div className="grid gap-4">
      <div className="rounded-xl bg-amber-400 p-5 text-white shadow">
        <p className="text-sm">Total Applicants</p>
        <h2 className="text-3xl font-bold">
          {totalApplicants}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
    {(Object.entries(byStatus) as [string, number][]).map( ([status, count]) => (
      <div
       key={status}
     className={`rounded-xl border p-4 shadow-sm ${
     countColor[status as keyof typeof countColor]}`}>
    <p className="capitalize text-gray-500">
    {status}
     </p>

    <h3 className="mt-2 text-2xl font-bold text-gray-800"> {count} </h3> </div>
  )
)}
      </div>
    </div>
  );
}

export default StatusCard;