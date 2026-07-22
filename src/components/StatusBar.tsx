import type { StatusResponse } from "../types/StatusResponse ";

type StatusBarProps = Pick<StatusResponse, "totalApplicants" | "byTrack">;

function StatusBar({ totalApplicants, byTrack }: StatusBarProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Applicants By Track
      </h2>

      <div className="flex flex-col gap-4">
        {(Object.entries(byTrack) as [string, number][]).map(
          ([track, count]) => (
            <div key={track}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium capitalize text-gray-700">
                  {track}
                </span>

                <span className="text-sm text-gray-500">
                  {count}
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all duration-500"
                  style={{
                    width: totalApplicants
                      ? `${(count / totalApplicants) * 100}%`
                      : "0%",
                  }}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default StatusBar;