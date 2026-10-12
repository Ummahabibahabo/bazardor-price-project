const Time = () => {
  const date = new Date().toLocaleString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "long",
    timeStyle: "short",
  });
  return (
    <div>
      <p className="text-[14px] text-[#1D271F] ">{date}</p>
    </div>
  );
};

export default Time;
