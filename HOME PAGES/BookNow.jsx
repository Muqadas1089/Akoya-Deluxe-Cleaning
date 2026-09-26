import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const BookNow = () => {
  const { t } = useTranslation();
  const [Selected, setSelected] = useState(null);

  const [openItem, setOpenItem] = useState(null);

  const [selectedServices, setSelectedServices] = useState({});

  const [orderItems, setOrderItems] = useState([]);

  const [selectedServiceType, setSelectedServiceType] =
    useState("👕 Washing & Ironing");

  const [coupon, setCoupon] = useState("");
  const [loading, setLoading] = useState(false);
  const [couponError, setCouponError] = useState("");

  const Services = [
    {
      icon: "🧔🏻",
      Gender: "Men",
    },
    {
      icon: "👩🏻",
      Gender: "Women",
    },
    {
      icon: "✨",
      Gender: "Others",
    },
  ];

  const serviceOptions = [
    "👕 Washing & Ironing",
    "✨ Washing, Ironing, and Perfume Services",
    "👔 Dry Clean",
  ];

  const itemPrices = {
    "👔 Thobe": 8,
    "🧥 Bisht": 15,
    "🦹🏻‍♂️ Men's Suit": 20,
    "👳 Ghutra": 8,
    "👕 Shirt": 8,
    "👕 T-Shirt": 8,
    "🦺 Vest": 8,
    "🧥 Coat": 15,
    "🩳 Pajamas": 10,
    "🎖️ Military Uniform": 15,
    "🎖️1 Military Uniform One Piece": 18,
    "🦸🏻 Overalls": 15,
    "🥼 Lab Coat": 12,
    "👕 UnderShirt": 6,
    "👖 Pants": 8,
    "🦸🏻 Coverall": 15,
    "🧥 Wool Sweater": 15,
    "🦺 Reflective Jacket": 12,
    "👛 Sack": 5,
    "🧥 Fur": 20,
    "🥻 Woolen": 15,

    "🧕🏻 Abaya + Sheilah": 20,
    "🧕🏻 Abaya Only": 15,
    "🧣 Sheilah": 8,

    "Double Bed Cover": 15,
    "Single Bed Cover": 12,
    "Double Bed Sheet": 8,
    "Single Bed Sheet": 8,
    "Double Blanket": 18,
    "Single Blanket": 15,
    "Small Towel": 5,
    "Large Towel": 8,
    "Pillowcase": 4,
    "Large Feather Pillow": 10,
    "Small Curtain Lining": 10,
    "Large Curtain Lining": 12,
    "Large Curtain": 15,
    "Extra Large Curtain": 20,
    "Bedspread with Embroidery": 20,
  };

  const selectService = (item, service) => {
    setSelectedServiceType(service);

    setSelectedServices({
      ...selectedServices,
      [item]: service,
    });

    const itemAlreadyExists = orderItems.find(
      (orderItem) => orderItem.item === item
    );

    if (itemAlreadyExists) {
      setOrderItems(
        orderItems.map((orderItem) =>
          orderItem.item === item
            ? {
                ...orderItem,
                service: service,
              }
            : orderItem
        )
      );
    } else {
      setOrderItems([
        ...orderItems,
        {
          item: item,
          service: service,
          quantity: 1,
          price: itemPrices[item] || 0,
        },
      ]);
    }
  };

  const increaseQuantity = (index) => {
    setOrderItems(
      orderItems.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (index) => {
    const updatedItems = orderItems
      .map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setOrderItems(updatedItems);
  };

  const removeItem = (index) => {
    setOrderItems(
      orderItems.filter((_, i) => i !== index)
    );
  };

  const finalPrice = orderItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleCoupon = () => {
    if (coupon === "") {
      setCouponError("Please enter coupon code");
      return;
    }

    setCouponError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setCouponError("Invalid coupon code");
    }, 2000);
  };

  const renderItemCard = (item) => {
    const isOpen = openItem === item;

    const selectedService =
      selectedServices[item] || serviceOptions[0];

    return (
      <div
        key={item}
        onClick={() => {
          if (openItem === item) {
            setOpenItem(null);
          } else {
            setOpenItem(item);
          }
        }}
        className={`
          border-2
          rounded-xl
          pl-[20px]
          pt-[10px]
          pr-[10px]
          cursor-pointer
          transition
          duration-200

          ${
            isOpen
              ? "bg-yellow-100 border-yellow-500"
              : "bg-white border-gray-200"
          }
        `}
      >
        <p className="h-[40px] flex items-center">
          {item}
        </p>

        {isOpen && (
          <div
            className="pb-[12px] mt-[5px]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm mb-[8px]">
              Choose service for this item
            </p>

            <div className="flex flex-wrap gap-[8px]">

              <button
                onClick={() =>
                  selectService(
                    item,
                    serviceOptions[0]
                  )
                }
                className={`
                  border
                  rounded-full
                  px-[12px]
                  py-[6px]
                  text-sm
                  transition

                  ${
                    selectedService ===
                    serviceOptions[0]
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                Washing & Ironing
              </button>

              <button
                onClick={() =>
                  selectService(
                    item,
                    serviceOptions[1]
                  )
                }
                className={`
                  border
                  rounded-full
                  px-[12px]
                  py-[6px]
                  text-sm
                  transition

                  ${
                    selectedService ===
                    serviceOptions[1]
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                Washing, Ironing, and Perfume Services
              </button>

              <button
                onClick={() =>
                  selectService(
                    item,
                    serviceOptions[2]
                  )
                }
                className={`
                  border
                  rounded-full
                  px-[14px]
                  py-[6px]
                  text-sm
                  transition

                  ${
                    selectedService ===
                    serviceOptions[2]
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "bg-white text-yellow-600 border-yellow-500 hover:bg-yellow-50"
                  }
                `}
              >
                Dry Clean
              </button>

            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <section
        className="
          bg-[linear-gradient(to_bottom,#4A3927_0%,#6B5943_35%,#A99A84_65%,#F8F3E8_100%)]
          min-h-[800px]
          w-[94%]
          mx-auto
          pt-[1px]
          flex
          gap-[22px]
          px-[20px]

          max-lg:px-[15px]
          max-lg:gap-[15px]

          max-md:w-full
          max-md:px-[15px]
          max-md:flex-col
          max-md:gap-[20px]
          max-md:pb-[30px]
        "
      >

        <div
          className="
            h-[700px]
            w-[62%]
            bg-white
            rounded-t-xl
            ml-[30px]
            mt-[81px]
            overflow-y-auto
            overflow-x-hidden
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]

            max-lg:ml-0
            max-lg:w-[65%]

            max-md:w-full
            max-md:h-auto
            max-md:max-h-[700px]
            max-md:mt-[40px]
          "
        >

          <div
            className="
              bg-[linear-gradient(to_bottom,#2B1A0F_0%,#3D291A_35%,#604832_65%,#8A765E_100%)]
              h-[120px]
            "
          >
            <p className="h-[8px] w-full bg-yellow-500 rounded-t-xl"></p>

            <p className="text-yellow-500 mt-[30px] text-xl text-center">
              AKOYA PREMIUM LAUNDRY
            </p>

            <p className="mt-[3px] text-center">
              Step 1 of 1
            </p>
          </div>

          <p
            className="
              text-xl
              mt-[27px]
              mx-[27px]
              mb-[30px]
              max-md:mx-[20px]
            "
          >
            Choose Service Type:
          </p>

          <div
            className="
              flex
              gap-3
              mx-[20px]
              flex-wrap
            "
          >
            {Services.map((service) => (
              <div
                key={service.Gender}
                onClick={() => {
                  setSelected(service.Gender);
                  setOpenItem(null);
                }}
                className={`
                  h-[150px]
                  bg-white
                  w-[260px]
                  rounded-xl
                  border-2
                  border-gray-200
                  cursor-pointer
                  hover:shadow-lg
                  hover:scale-[1.03]
                  transition
                  duration-300

                  max-xl:w-[220px]
                  max-lg:w-[calc(50%-6px)]
                  max-md:w-[calc(50%-6px)]
                  max-sm:w-full

                  ${
                    Selected === service.Gender
                      ? "bg-yellow-100 border-yellow-500"
                      : ""
                  }
                `}
              >
                <p className="text-2xl text-center mt-[40px]">
                  {service.icon}
                </p>

                <p className="font-bold text-center mt-[10px]">
                  {service.Gender}
                </p>
              </div>
            ))}
          </div>

          {Selected === "Men" && (
            <div>
              <p className="mt-[30px] text-xl ml-[30px] max-md:ml-[20px]">
                Select item type, then choose service
              </p>

              <p className="mt-[20px] font-bold ml-[35px] text-xl max-md:ml-[25px]">
                Men's
              </p>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-[20px]
                  gap-y-[10px]
                  px-[30px]
                  pb-[20px]
                  max-md:grid-cols-1
                  max-md:px-[20px]
                "
              >
                {[
                  "👔 Thobe",
                  "🧥 Bisht",
                  "🦹🏻‍♂️ Men's Suit",
                  "👳 Ghutra",
                  "👕 Shirt",
                  "👕 T-Shirt",
                  "🦺 Vest",
                  "🧥 Coat",
                  "🩳 Pajamas",
                  "🎖️ Military Uniform",
                  "🎖️1 Military Uniform One Piece",
                  "🦸🏻 Overalls",
                  "🥼 Lab Coat",
                  "👕 UnderShirt",
                  "👖 Pants",
                  "🦸🏻 Coverall",
                  "🧥 Wool Sweater",
                  "🦺 Reflective Jacket",
                  "👛 Sack",
                  "🧥 Fur",
                  "🥻 Woolen",
                ].map((item) =>
                  renderItemCard(item)
                )}
              </div>
            </div>
          )}

          {Selected === "Women" && (
            <div>
              <p className="mt-[30px] text-xl ml-[30px] max-md:ml-[20px]">
                Select item type, then choose service
              </p>

              <p className="mt-[20px] font-bold ml-[35px] text-xl max-md:ml-[25px]">
                Women's
              </p>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-[20px]
                  gap-y-[10px]
                  px-[30px]
                  pb-[20px]
                  max-md:grid-cols-1
                  max-md:px-[20px]
                "
              >
                {[
                  "🧕🏻 Abaya + Sheilah",
                  "🧕🏻 Abaya Only",
                  "🧣 Sheilah",
                  "👳 Ghutra",
                  "👕 Shirt",
                  "👕 T-Shirt",
                  "🦺 Vest",
                  "🧥 Coat",
                  "🩳 Pajamas",
                  "🎖️ Military Uniform",
                  "🎖️1 Military Uniform One Piece",
                  "🦸🏻 Overalls",
                  "🥼 Lab Coat",
                  "👕 UnderShirt",
                  "👖 Pants",
                  "🦸🏻 Coverall",
                  "🧥 Wool Sweater",
                  "🦺 Reflective Jacket",
                  "👛 Sack",
                  "🧥 Fur",
                  "🥻 Woolen",
                ].map((item) =>
                  renderItemCard(item)
                )}
              </div>
            </div>
          )}

          {Selected === "Others" && (
            <div>
              <p className="mt-[30px] text-xl ml-[30px] max-md:ml-[20px]">
                Select item type, then choose service
              </p>

              <p className="mt-[20px] font-bold ml-[35px] text-xl max-md:ml-[25px]">
                Others
              </p>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-[20px]
                  gap-y-[10px]
                  px-[30px]
                  pb-[20px]
                  max-md:grid-cols-1
                  max-md:px-[20px]
                "
              >
                {[
                  "Double Bed Cover",
                  "Single Bed Cover",
                  "Double Bed Sheet",
                  "Single Bed Sheet",
                  "Double Blanket",
                  "Single Blanket",
                  "Small Towel",
                  "Large Towel",
                  "Pillowcase",
                  "Large Feather Pillow",
                  "Small Curtain Lining",
                  "Large Curtain Lining",
                  "Large Curtain",
                  "Extra Large Curtain",
                  "Bedspread with Embroidery",
                ].map((item) =>
                  renderItemCard(item)
                )}
              </div>
            </div>
          )}
        </div>

        <div
          className="
            w-[25%]
            min-h-[370px]
            bg-white
            rounded-xl
            mt-[81px]
            shadow-lg
            sticky
            top-[81px]
            self-start

            max-lg:w-[30%]

            max-md:w-full
            max-md:mt-0
            max-md:sticky
            max-md:top-0
          "
        >

          <div
            className="
              min-h-[74px]
              border-b
              border-gray-200
              flex
              items-center
              justify-center
            "
          >
            <h2 className="text-xl font-bold text-yellow-600 text-center">
              🧾 Order Summary
            </h2>
          </div>

          <div className="mx-[23px] mt-[25px]">

            {Selected && (
              <div className="flex justify-between items-center border-b border-gray-800 py-[10px]">

                <p className="text-sm font-medium">
                  Service Type:
                </p>

                <div className="flex items-center gap-2">

                  <p className="text-sm">
                    {Selected}
                  </p>

                  <button
                    onClick={() => {
                      setSelected(null);
                      setOpenItem(null);
                    }}
                    className="text-red-500 text-lg"
                  >
                    ×
                  </button>

                </div>
              </div>
            )}

            <div className="flex justify-between items-center border-b border-gray-800 py-[10px]">

              <p className="text-sm font-medium">
                Service Type:
              </p>

              <p className="text-sm text-right">
                {selectedServiceType}
              </p>

            </div>

            {orderItems.length > 0 && (
              <div className="mt-[10px]">

                <p className="text-sm font-bold mb-[10px]">
                  Garments:
                </p>

                {orderItems.map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-gray-50
                      rounded-lg
                      p-[10px]
                      mb-[8px]
                    "
                  >

                    <div className="flex justify-between items-center">

                      <p className="text-sm font-medium">
                        {item.item}
                      </p>

                      <button
                        onClick={() =>
                          removeItem(index)
                        }
                        className="text-red-500 text-lg"
                      >
                        ×
                      </button>

                    </div>

                    <p className="text-xs text-gray-500 mt-[5px]">
                      {item.service}
                    </p>

                    <div className="flex justify-between items-center mt-[8px]">

                      <div className="flex items-center gap-[8px]">

                        <button
                          onClick={() =>
                            decreaseQuantity(index)
                          }
                          className="
                            h-[28px]
                            w-[28px]
                            bg-gray-200
                            rounded
                          "
                        >
                          -
                        </button>

                        <p className="text-sm">
                          {item.quantity}
                        </p>

                        <button
                          onClick={() =>
                            increaseQuantity(index)
                          }
                          className="
                            h-[28px]
                            w-[28px]
                            bg-gray-200
                            rounded
                          "
                        >
                          +
                        </button>

                      </div>

                      <p className="text-sm font-medium">
                        {item.price * item.quantity} QAR
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            )}

            <div
              className="
                flex
                gap-2
                mt-[47px]
                max-sm:flex-col
              "
            >

              <input
                type="text"
                value={coupon}
                onChange={(e) => {
                  setCoupon(e.target.value);
                  setCouponError("");
                }}
                placeholder="Enter coupon code"
                className="
                  h-[38px]
                  w-full
                  border
                  border-gray-300
                  rounded-md
                  px-[10px]
                  outline-none
                  focus:border-yellow-500
                "
              />

              <button
                onClick={handleCoupon}
                disabled={loading}
                className="
                  h-[38px]
                  w-[125px]
                  shrink-0
                  bg-yellow-500
                  hover:bg-yellow-600
                  disabled:bg-gray-400
                  text-white
                  rounded-lg
                  font-medium
                  text-xs
                  transition
                  max-sm:w-full
                "
              >
                {loading
                  ? "Loading..."
                  : "Apply Coupon"}
              </button>

            </div>

            {couponError && (
              <p className="text-red-500 text-sm mt-[10px]">
                {couponError}
              </p>
            )}

            <div
              className="
                flex
                justify-between
                items-center
                mt-[18px]
                pb-[20px]
              "
            >
              <p className="font-bold text-lg text-gray-700">
                Final Price
              </p>

              <p className="font-bold text-lg text-yellow-600">
                {finalPrice} QAR
              </p>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default BookNow;