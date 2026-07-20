import type { Applicant } from "../types/applicant";

interface TableProps {
  data?: Applicant[];
}

function Table({ data }: TableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-left">
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Position
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
               AppliedData
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
               Status
               </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((applicant) => (
              <tr
                key={applicant.id}
                className="border-b border-gray-100 transition hover:bg-gray-50"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {applicant.fullName}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {applicant.email}
                </td>

                 <td className="px-6 py-4 text-sm text-gray-600">
                  {applicant.track}
                </td>
               <td className="px-6 py-4 text-sm text-gray-600">
                   {new Date(applicant.applicationDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <span
                    className={`
                      rounded-full px-3 py-1 text-xs font-medium
                      ${
                        applicant.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : applicant.status === "rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {applicant.status}
                  </span>
                </td>

               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;