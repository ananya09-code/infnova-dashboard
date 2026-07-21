type ScrollBarprop = {
  page: number;
  changepage?: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  limit: number;
  total: number;
};

function ScrollBar({
  page,
  changepage,
  totalPages,
  limit,
  total,
}: ScrollBarprop) {
  return (
    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-sm text-gray-500">
        Showing {limit} of {total} applicants
      </p>


      <div className="flex items-center justify-between gap-2 sm:justify-center">

        <button
          disabled={page === 1}
          onClick={() => changepage?.((prev) => prev - 1)}
          className="
            rounded-lg
            border border-yellow-300
            bg-white
            px-3 py-2
            text-sm font-medium
            text-gray-700
            hover:bg-yellow-100
            disabled:opacity-50
          "
        >
          Previous
        </button>


        <div
          className="
            rounded-lg
            bg-white
            px-3 py-2
            text-sm font-medium
            text-gray-700
            shadow-sm
            whitespace-nowrap
          "
        >
          {page} / {totalPages}
        </div>


        <button
          disabled={page === totalPages}
          onClick={() => changepage?.((prev) => prev + 1)}
          className="
            rounded-lg
            bg-yellow-400
            px-3 py-2
            text-sm font-semibold
            text-gray-900
            hover:bg-yellow-500
            disabled:opacity-50
          "
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default ScrollBar;