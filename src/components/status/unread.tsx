function UnreadIndicator({ number }: { number: number }) {
  return (
    <>
      {number > 9 ? (
        <div className=" h-6 w-6 text-sm aspect-square rounded-full bg-red-500 text-white p-1 flex items-center justify-center text-center">
          9+
        </div>
      ) : number < 1 ? (
        <></>
      ) : (
        <div className=" h-5 w-5 aspect-square rounded-full bg-red-500 text-white p-1 flex items-center justify-center text-center">
          {number}
        </div>
      )}
    </>
  );
}

export default UnreadIndicator;
