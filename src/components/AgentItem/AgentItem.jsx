function AgentItem({
  company,
  profit,
  sales,
  transaction,
  avatar = "https://picsum.photos/64/64",
}) {
  return (
    <div className="flex justify-center flex-col sm:flex-row md:flex-row lg:flex-row gap-4 mt-3">
      <div className="flex justify-center items-center">
        <img
          src={avatar}
          width={64}
          height={64}
          className="rounded-full align-middle border-primary border-solid border-2"
          alt="avatar agent"
        />
      </div>
      <div>
        <div className="text-primary sm:text-center md:text-justify lg:text-justify font-bold">
          {company}
        </div>
        <div className="flex justify-between gap-4">
          <div className="text-secondary">Profit</div>
          <div className="font-semibold">
            Rp {profit?.toLocaleString().replace(",", ".")}
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="text-secondary">Sales</div>
          <div className="font-semibold">
            Rp {sales?.toLocaleString().replace(",", ".")}
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="text-secondary">Transactions</div>
          <div className="text-sm">{transaction} transactions</div>
        </div>
      </div>
    </div>
  );
}

export default AgentItem;
