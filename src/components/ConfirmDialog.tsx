type ConfirmDialogProps = {
  open: boolean;
  message: string;
  onYes: () => void;
  onNo: () => void;
};

export default function ConfirmDialog({
  open,
  message,
  onYes,
  onNo,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-gray-800">
          Confirm Action
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {message}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onNo}
            className="rounded-lg border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onYes}
            className="rounded-lg bg-amber-400 px-5 py-2 font-semibold text-white shadow transition hover:bg-amber-500 active:scale-95"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}