export default function ProgressOverview() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6">
      <h2 className="font-semibold text-lg mb-6">
        Progress Overview
      </h2>

      <div className="space-y-6">
        {[
          ["Project Alpha", 80],
          ["Project Beta", 60],
          ["Project Gamma", 40],
        ].map(([name, value]) => (
          <div key={name}>
            <div className="flex justify-between mb-2">
              <span>{name}</span>
              <span>{value}%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-200">
              <div
                style={{ width: `${value}%` }}
                className="h-3 rounded-full bg-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}