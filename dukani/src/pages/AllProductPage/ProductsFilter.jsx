import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Checkbox from "../../components/Helpers/Checkbox"
// import Checkbox from "../Helpers/Checkbox";

export default function ProductsFilter({
  filters,
  checkboxHandler,
  volume,
  volumeHandler,
  storage,
  filterstorage,
  className,
  filterToggle,
  filterToggleHandler,
}) {
  return (
    <>
      <div
        className={`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${
          className || ""
        }  ${filterToggle ? "block" : "hidden lg:block"}`}
      >
        <div className="filter-subject-item pb-10 border-b border-qgray-border">
          <div className="subject-title mb-[30px]">
            <h1 className="text-black text-base font-500">
              Product categories
            </h1>
          </div>
          <div className="filter-items">
            <ul>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="mobileLaptop"
                      name="mobileLaptop"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.mobileLaptop}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobileLaptop"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Wires and Cables
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="gaming"
                      name="gaming"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.gaming}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gaming"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Arrestors
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="imageVideo"
                      name="imageVideo"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.imageVideo}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="imageVideo"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Change Over
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="vehicles"
                      name="vehicles"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.vehicles}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vehicles"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Holders
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="furnitures"
                      name="furnitures"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.furnitures}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="furnitures"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Lugs
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sport"
                      name="sport"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sport}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sport"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Switches
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="foodDrinks"
                      name="foodDrinks"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.foodDrinks}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="foodDrinks"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Multi chargers
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="fashion"
                      name="fashion"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.fashion}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fashion"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Fans
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="makeupCorner"
                      name="makeupCorner"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.makeupCorner}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="makeupCorner"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Freezers and Fridges
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="babyItem"
                      name="babyItem"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.babyItem}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="babyItem"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar TV
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Water Heater
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Batteries
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Charge Controllers
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Invertes
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Bulbs, Lamp and Lights
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Flood Lights
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Lanterns
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Street Lights
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Panels
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Solar Kits
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Water Pumps
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
          <div className="subject-title mb-[30px]">
            <h1 className="text-black text-base font-500">Price Range</h1>
          </div>
          <div className="price-range mb-5">
            <InputRange
              draggableTrack
              maxValue={20000000}
              minValue={0}
              value={volume}
              onChange={volumeHandler}
            />
          </div>
          <p className="text-xs text-qblack font-400">
            Price: TZS{volume.min} - TZS{volume.max}
          </p>
        </div>
        
        
        
        <button
          onClick={filterToggleHandler}
          type="button"
          className="w-10 h-10 fixed top-5 right-5 z-50 rounded  lg:hidden flex justify-center items-center border border-qred text-qred"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
