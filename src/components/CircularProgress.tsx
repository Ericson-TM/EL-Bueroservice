interface CircularProgressProps {
  value: number;
}

export function CircularProgress({ value }: CircularProgressProps) {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}