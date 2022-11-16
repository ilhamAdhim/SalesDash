import { BsThreeDotsVertical, BsDiagram3 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { Avatar, Dropdown, Button } from "flowbite-react";
import { HiOutlineSquares2X2, HiArrowsRightLeft } from "react-icons/hi2";
import { SlSocialGithub, SlWallet } from "react-icons/sl";
import { CgShoppingBag } from "react-icons/cg";

function Navbar({ profileName, position }) {
  return (
    <div className="flex sm:justify-between md:justify-between lg:justify-end justify-between">
      <div className="w-fit px-2 sm-block block md:block lg:hidden">
        <Dropdown
          className="w-40"
          arrowIcon={false}
          inline={true}
          label={<HiOutlineMenu style={{ width: "32px", height: "32px" }} />}
        >
          <Dropdown.Item
            href="#"
            className="text-primary border-r-4 border-primary flex justify-start gap-4"
          >
            <HiOutlineSquares2X2 />
            <span className="text-primary"> Dashboard </span>
          </Dropdown.Item>

          <Dropdown.Item className="flex justify-start gap-4">
            <HiArrowsRightLeft />
            <div>Balance</div>
          </Dropdown.Item>
          <Dropdown.Item className="flex justify-start gap-4">
            <SlWallet />
            <div>Transaction</div>
          </Dropdown.Item>
          <Dropdown.Item className="flex justify-start gap-4">
            <CgShoppingBag />
            <div>Product</div>
          </Dropdown.Item>

          <Dropdown.Item className="flex justify-start gap-4">
            <BsDiagram3 />
            <div> Channel </div>
            {/* <Dropdown
              inline={true}
              label={
                <div className="flex justify-between">
                  
                </div>
              }
            >
              <Dropdown.Item href="#">Agent</Dropdown.Item>
              <Dropdown.Item href="#">Balance</Dropdown.Item>
              <Dropdown.Item href="#">Transaction</Dropdown.Item>
            </Dropdown> */}
          </Dropdown.Item>
        </Dropdown>
      </div>

      <Dropdown
        className="w-80"
        arrowIcon={false}
        inline={true}
        label={
          <div className="flex flex-row">
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <div className="lg:flex-col ml-2 sm:hidden hidden md:hidden lg:flex">
              <div className="font-bold"> {profileName} </div>
              <div className="text-secondary font-semibold text-left">
                {" "}
                {position}{" "}
              </div>
            </div>
          </div>
        }
      >
        <Dropdown.Header>
          <span className="block text-sm text-center">{profileName}</span>
          <span className="block truncate text-sm font-medium text-center">
            {position}
          </span>
        </Dropdown.Header>
        <Dropdown.Item className="flex justify-between">
          <div>Total Balance</div>
          <BsThreeDotsVertical style={{ margin: "auto 0" }} />
        </Dropdown.Item>
        <a href="https://github.com/ilhamAdhim/SalesDash" target="_blank">
          <Dropdown.Item className="flex justify-between ">
            <div>See Codes</div>
            <SlSocialGithub style={{ margin: "auto 0" }} />
          </Dropdown.Item>
        </a>
        <Dropdown.Item className="font-bold text-2xl flex justify-center">
          Rp 1.580.000
        </Dropdown.Item>
        <Dropdown.Item className="flex justify-center">
          <Button className="w-full"> Top Up</Button>{" "}
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default Navbar;
