import useGetEvent from "../hooks/events/useGetEvent";
import useGetHero from "../hooks/heroes/useGetHero";
import useGetProducts from "../hooks/products/useGetProduct";

const HomePage = () => {
  const { heroes, herosLoading } = useGetHero();
  const { events, eventsLoading } = useGetEvent();
  const { products, productsLoading } = useGetProducts();
  const hero = heroes?.find((hero) => hero?.selected === true);
  const event = events?.find((hero) => hero?.selected === true);
  const product = products?.find((hero) => hero?.selected === true);

  return (
    <div className="">
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <h3 className="py-8 text-4xl text-white">Displayed Items</h3>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Description-1</th>
                <th>Description-2</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={hero?.image} alt="Hero Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{hero?.title}</div>
                    </div>
                  </div>
                </td>
                <td>{hero?.description1}</td>
                <td>{hero?.description2}</td>
                <th>
                  <img src={hero?.icon} alt="Hero Icon" />
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={event?.image} alt="Event Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{event?.title}</div>
                    </div>
                  </div>
                </td>
                <td>{event?.description1}</td>
                <td>{event?.description2}</td>
                <th>
                  <img src={event?.icon} alt="Event Icon" />
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product?.image} alt="Product Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.title}</div>
                    </div>
                  </div>
                </td>
                <td>{product?.description1}</td>
                <td>{product?.description2}</td>
                <th>
                  <img src={product?.icon} alt="Product Icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
