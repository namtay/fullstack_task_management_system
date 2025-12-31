import PopularProducts from "src/components/dashboard/PopularProducts"
import TotalFollowers from "src/components/dashboard/TotalFollowers"
import TotalIncome from "src/components/dashboard/TotalIncome"



const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-30">
      <div className="lg:col-span-12 col-span-12">
        <div className="grid grid-cols-12 gap-30">
          <div className="col-span-4 mb-30">
            <TotalFollowers />
          </div>
          <div className="col-span-4 mb-30">
            <TotalIncome />
          </div>
        <div className="col-span-4 mb-30">
            <TotalFollowers />
          </div>
        </div>
      </div>
      <div className="lg:col-span-12 col-span-12">
        <PopularProducts />
      </div>
      {/* <div className="lg:col-span-4 col-span-12 flex">
        <EarningReports />
      </div> */}
    </div>
  )
}

export default Dashboard