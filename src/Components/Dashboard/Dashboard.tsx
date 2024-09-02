const Dashboard = () => {
  return (
    <div className="flex flex-col bg-gal sm:w-614 sm:h-280 lg:w-720 lg:h-316 items-center justify-around">
      <nav className="rounded-23 lg:w-614 lg:h-62 bg-nav drop-shadow-nav py-2 px-2">
        <div className="flex h-full gap-1.5 sm:w-496 lg:w-597">
          <div className="w-1/3 flex items-center justify-center bg-slate-500 rounded-20">
            <button className="text-white"> About Me </button>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <button className="text-tex"> Experiences </button>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <button className="text-tex"> Recommended </button>
          </div>
        </div>
      </nav>
      <div className="sm:w-597 lg:w-611 lg:h-175 text-tex flex flex-col gap-4">
        <p>
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
        </p>
        <p>
          I was born and raised in Albany, NY& have been living in Santa Carla
          for the past 10 years my wife Tiffany and my 4 year old twin
          daughters- Emma and Ella. Both of them are just starting school, so my
          calender is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
