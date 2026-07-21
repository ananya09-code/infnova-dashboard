import type { Applicant } from "../types/applicant";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
interface TableProps {
  data?: Applicant[];
  selectedDetail?:(value:string)=>void
}




function Table({ data ,selectedDetail}: TableProps) {
const [selectedId, setSelectedId] = useState<string | null>(null);

const handleView = (id: string) => {
  setSelectedId(id);
  selectedDetail?.(id)
};
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
     <div>
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-175 border-collapse">
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
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Viwe
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

                <td className="px-6 py-4">
                
               <button
               onClick={() => 
                 handleView(selectedId === applicant.id ? "" : applicant.id)
                   }>
                       {selectedId === applicant.id ? <EyeOff /> : <Eye />}
                          </button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
        </div>

       <div className="md:hidden space-y-4 p-4">
     {data?.map((applicant) => (
       <div
        key={applicant.id}
        className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
       >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">
            {applicant.fullName}
          </h3>
          <p className="text-sm text-gray-500">
            {applicant.email}
          </p>
        </div>

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
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Position</span>
          <span className="font-medium text-gray-800">
            {applicant.track}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Applied</span>
          <span className="font-medium text-gray-800">
            {new Date(applicant.applicationDate).toLocaleDateString()}
          </span>
        </div>
      </div>

      <button
        onClick={() => {handleView(selectedId===applicant.id?"":applicant.id)}}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-100 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
      >
        {selectedId === applicant.id ? (
          <>
            <EyeOff size={18} />
            Hide Details
          </>
        ) : (
          <>
            <Eye size={18} />
            View Details
          </>
        )}
      </button>
    </div>
  ))}
</div>    
 </div>
    </div>
  );
}

export default Table;