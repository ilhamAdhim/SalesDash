import { Sidebar } from "flowbite-react";
import { HiOutlineSquares2X2, HiArrowsRightLeft } from "react-icons/hi2";
import { SlWallet } from "react-icons/sl";
import { BsDiagram3 } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { BsBoxArrowLeft } from "react-icons/bs";

function SidebarPart() {
  return (
    <>
      <div className="text-primary font-bold text-2xl p-4 text-center">
        SalesDash
      </div>
      <Sidebar aria-label="Sidebar SalesDash" className="w-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              icon={HiOutlineSquares2X2}
              className="text-primary border-r-4 border-primary"
            >
              <span className="text-primary"> Dashboard </span>
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={HiArrowsRightLeft}>
              Balance
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={SlWallet}>
              Transaction
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={CgShoppingBag}>
              Product
            </Sidebar.Item>

            <Sidebar.Collapse icon={BsDiagram3} label="Channel">
              <Sidebar.Item href="#">Agent</Sidebar.Item>
              <Sidebar.Item href="#">Balance</Sidebar.Item>
              <Sidebar.Item href="#">Transaction</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={BsBoxArrowLeft}>Logout</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default SidebarPart;
