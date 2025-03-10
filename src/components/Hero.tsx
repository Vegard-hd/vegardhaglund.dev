export function Hero() {
  return (
    <>
      <h2 className="flex justify-self-center text-3xl mt-25 mb-5  sm:mb-1 text-base-400 font-semibold text-center ">
        My Projects
      </h2>
      <div className="flex w-full flex-col items-center justify-center md:h-96 sm:h-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl min-h-72">
          <div className="card card-side bg-base-300 shadow-sm ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Testing webhooks JSON edit</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-300 shadow-sm ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-300 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
