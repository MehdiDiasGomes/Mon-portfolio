const index = ({ icon }) => {
  return (
    <div className="flex  justify-center items-center text-5xl">
      <i
        className={`flex justify-center items-center text-6xl sm:text-4xl  bg-gradient-to-b from-primary to-[rgb(17,17,17)] text-transparent bg-clip-text ${icon}`}
      ></i>
    </div>
  )
}

export default index
