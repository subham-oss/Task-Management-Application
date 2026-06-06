const cards = [
  {
    title: "Total Tasks",
    value: "124",
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Completed",
    value: "89",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Pending",
    value: "24",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Overdue",
    value: "11",
    color: "from-red-500 to-pink-500",
  },
];

export default function StatCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
        >
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color}`}
          />

          <h3 className="mt-4 text-slate-500">
            {card.title}
          </h3>

          <p className="text-4xl font-bold mt-2">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}