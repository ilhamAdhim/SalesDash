function StatisticItem({ entity, amount, description, color, icon }) {
  return (
    <div className="shadow-md p-4 flex flex-col gap-2">
      <div className="text-secondary font-semibold">{entity}</div>

      <div className="text-2xl font-bold">
        Rp {amount?.toLocaleString().replace(",", ".")}
      </div>

      <div className={`flex justify-end ${color}`}>
        <span className="mr-2">{icon}</span>
        {description}
      </div>
    </div>
  );
}

export default StatisticItem;
