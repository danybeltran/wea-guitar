import { IGuitar } from "@models/index";
import { BsArrowUpDown } from "react-icons/bs";
import Filters from "src/components/Filters";
import ProductPreview from "src/components/ProductPreview";
import { FiltersContext, useFilters } from "src/context";
import useSWR from "swr";

export default function Index() {
  const { data: guitars = [] } = useSWR("/api/guitars");
  const filters = useFilters();
  const { name = "", price = "" } = filters.filters || {};

  const filteredGuitars = guitars.filter((guitar: IGuitar) => {
    if (price.length > 0 && name.length === 0) {
      return guitar.price <= parseFloat(price);
    } else if (name.length > 0) {
      return guitar.title.toLowerCase().match(name.toLowerCase());
    } else {
      return true;
    }
  });

  const mappedGuitars = filteredGuitars.map((guitar) => (
    <ProductPreview key={guitar.id} {...guitar} />
  ));

  return (
    <FiltersContext.Provider value={filters}>
      <div>
        <div className="bg-white">
          <button
            role="filter"
            className="focus:outline-none z-30 bg-white flex-centered space-x-2 uppercase font-semibold text-2xl py-8 w-full justify-center"
            onClick={filters.toggleOpened}
          >
            <span>Filters</span>
            <BsArrowUpDown />
          </button>
          <Filters />
        </div>
        <div className="mt-10">{mappedGuitars}</div>
      </div>
    </FiltersContext.Provider>
  );
}
