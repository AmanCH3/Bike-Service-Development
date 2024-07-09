import { BellIcon, UserIcon } from "@heroicons/react/16/solid";
import dashboard from "../assets/dashboard.png";
import order from "../assets/order.png";
export default function Booking() {
  return (
    <div className="flex h-screen font-sans m-3">
      <div className="w-64 bg-white border-r border-border">
        <div className="p-4">
          <h1 className="text-xl font-bold text-primary">Sales Insight</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded size-10">
              <img alt="dashboard-icon" src={dashboard} className="mr-2" />
              Dashboard
            </li>
            <li className="flex items-center p-2 text-primary bg-primary-foreground rounded size-10">
              <img alt="order-icon" src={order} className="mr-2" />
              Order
            </li>
            {/* <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
              <img
                undefinedhidden="true"
                alt="products-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=🛒"
                className="mr-2"
              />
              Products
            </li> */}
            {/* <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
              <img
                undefinedhidden="true"
                alt="transaction-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=💳"
                className="mr-2"
            //   /> */}
            {/* Transaction
            </li>
            <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
              <img
                undefinedhidden="true"
                alt="analytics-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=📈"
                className="mr-2"
              /> */}
            {/* Analytics
            </li>
            <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
              <img
                undefinedhidden="true"
                alt="statistics-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=📊"
                className="mr-2"
              /> */}
            {/* Statistics
            </li>
            <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
              <img
                undefinedhidden="true"
                alt="inbox-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=📥"
                className="mr-2"
              />
              Inbox */}
            {/* </li>
            <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
              <img
                undefinedhidden="true"
                alt="history-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=🕒"
                className="mr-2"
              />
              History
            </li>
          </ul>
          <h2 className="mt-6 px-2 text-sm font-semibold text-muted-foreground">
            ACCOUNT
          </h2>
          <ul> */}
            {/* <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
              <img
                undefinedhidden="true"
                alt="settings-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=⚙️"
                className="mr-2"
              /> */}
            {/* Settings
            </li>
            <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
              <img
                undefinedhidden="true"
                alt="authentication-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=🔒"
                className="mr-2"
              />
              Authentication
            </li>
            <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
              <img
                undefinedhidden="true"
                alt="support-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=🛠️"
                className="mr-2"
              />
              Support
            </li>
          </ul>
        // </nav>
      </div> */}
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-6 bg-white">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground ">Admin</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              New Order
            </button>
            <div className="flex items-center space-x-2">
              <BellIcon className="text- xl" />
            </div>
            <div className="flex items-center space-x-2">
              <UserIcon className="text-l size-10" />
              <div>
                <p className="text-foreground">Aman Cad</p>
              </div>
            </div>
          </div>
        </header>
        <main>
          <h2 className="text-xl font-semibold text-foreground mb-2">Order</h2>
          <p className="text-muted-foreground mb-4">
            Let's check your order details
          </p>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search by invoice id, customer name or others..."
                className="flex-1 p-2 border border-input rounded"
              />
            </div>
            <table className="w-full text-left ">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2">Center ID</th>
                  <th className="py-2">Date of Created</th>
                  <th className="py-2">Customer</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Payment type</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0561</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Esther Howard</td>
                  <td className="py-2">$456</td>
                  <td className="py-2 text-green-500">Bank</td>

                  <td className="py-2 text-yellow-500">Processing</td>
                  <td className="py-2">...</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0562</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Robert Fox</td>
                  <td className="py-2">$257</td>
                  <td className="py-2 text-green-500">Cash</td>

                  <td className="py-2 text-yellow-500">Processing</td>
                  <td className="py-2">...</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0563</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Cameron Williamson</td>
                  <td className="py-2">$89</td>
                  <td className="py-2 text-green-500">Cash</td>

                  <td className="py-2 text-green-500">Delivered</td>
                  <td className="py-2">...</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0564</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Jacob Jones</td>
                  <td className="py-2">$453</td>
                  <td className="py-2 text-blue-500">Card</td>

                  <td className="py-2 text-green-500">Delivered</td>
                  <td className="py-2">...</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0565</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Bessie Cooper</td>
                  <td className="py-2">$121</td>
                  <td className="py-2 text-green-500">Bank</td>

                  <td className="py-2 text-red-500">Cancel</td>
                  <td className="py-2">...</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0566</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Floyd Miles</td>
                  <td className="py-2">$145</td>
                  <td className="py-2 text-green-500">Bank</td>

                  <td className="py-2 text-green-500">Delivered</td>
                  <td className="py-2">...</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0567</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Annette Black</td>
                  <td className="py-2">$155</td>
                  <td className="py-2 text-green-500">Bank</td>

                  <td className="py-2 text-green-500">Delivered</td>
                  <td className="py-2">...</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0568</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Darlene Robertson</td>
                  <td className="py-2">$145</td>
                  <td className="py-2 text-green-500">Bank</td>

                  <td className="py-2 text-green-500">Delivered</td>
                  <td className="py-2">...</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0569</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Marvin McKinney</td>
                  <td className="py-2">$125</td>
                  <td className="py-2 text-green-500">Bank</td>

                  <td className="py-2 text-green-500">Delivered</td>
                  <td className="py-2">...</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">#Inv0570</td>
                  <td className="py-2">18 Nov 2023</td>
                  <td className="py-2">Floyd Miles</td>
                  <td className="py-2">$145</td>
                  <td className="py-2 text-green-500">Bank</td>

                  <td className="py-2 text-green-500">Delivered</td>
                  <td className="py-2">...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
