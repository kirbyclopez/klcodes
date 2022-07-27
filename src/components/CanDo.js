const CanDo = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center max-w-6xl mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-6">What Can I Do?</h1>
        <div>
          <div className="flex flex-row justify-around items-center">
            <div className="flex flex-col justify-center items-center">
              <h3>Web Design</h3>
              <p>This is the description of this tile.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3>Web Development</h3>
              <p>This is the description of this tile.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3>Responsive Design</h3>
              <p>This is the description of this tile.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanDo;
