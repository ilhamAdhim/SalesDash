function CardItem({ product, amount, transaction }) {
  return (
    <div className="px-0 py-4 rounded-md flex flex-col border-primary border-solid border-2 sm:mt-4">
      <div className="flex flex-col justify-center items-center">
        <div
          style={{
            background: `url("./logo/${product.toLowerCase()}-logo.png") no-repeat`,
            backgroundSize: "64px 64px",
            height: 64,
            width: 64,
          }}
        />
      </div>

      <div className="text-primary font-bold text-center">{product}</div>

      <div className="text-secondary text-center">
        {amount !== "-" ? Number(amount).toLocaleString() : "-"}
      </div>

      <div className="font-bold text-center">
        {transaction} <span className="text-xs"> transactions </span>{" "}
      </div>
    </div>
  );
}

export default CardItem;
