const Time = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <p className="text-[14px] text-[#1D271F] ">{date}</p>
    </div>
  );
};

export default Time;
