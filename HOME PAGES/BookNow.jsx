
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const BookNow = () => {
  const { t, i18n } = useTranslation();

  const [Selected, setSelected] = useState(null);
  const [openItem, setOpenItem] = useState(null);
  const [selectedServices, setSelectedServices] = useState({});
  const [orderItems, setOrderItems] = useState([]);

  const [selectedServiceType, setSelectedServiceType] =
    useState("👕 Washing & Ironing");

  const [oud, setOud] = useState(null);
  const [perfume, setPerfume] = useState(null);
  const [packaging, setPackaging] = useState({});
  const [sendToFriend, setSendToFriend] = useState(null);

  const [coupon, setCoupon] = useState("");
  const [loading, setLoading] = useState(false);
  const [couponError, setCouponError] = useState("");

  const isArabic = i18n.language === "ar";

  const languageText = (english, arabic) =>
    isArabic ? arabic : english;

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

    "🛏️ Double Bed Cover": 15,
    "🛏️ Single Bed Cover": 12,
    "🛏️ Double Bed Sheet": 8,
    "🛏️ Single Bed Sheet": 8,
    "🛌 Double Blanket": 18,
    "🛌 Single Blanket": 15,
    "🧻 Small Towel": 5,
    "🧻 Large Towel": 8,
    "🛏️ Pillowcase": 4,
    "🪶 Large Feather Pillow": 10,
    "🪟 Small Curtain Lining": 10,
    "🪟 Large Curtain Lining": 12,
    "🪟 Large Curtain": 15,
    "🪟 Extra Large Curtain": 20,
    "🛏️ Bedspread with Embroidery": 20,
  };

  const packagingOptions = [
    {
      name: "Plastic",
      price: 0,
      icon: "🛍️",
    },
    {
      name: "Premium Fabric",
      price: 10,
      icon: "✨",
    },
    {
      name: "Gift Box",
      price: 4,
      icon: "🎁",
    },
  ];

  const getItemLabel = (item) => {
    const otherItems = {
      "🛏️ Double Bed Cover": {
        en: "Double Bed Cover",
        ar: "غطاء سرير مزدوج",
      },
      "🛏️ Single Bed Cover": {
        en: "Single Bed Cover",
        ar: "غطاء سرير مفرد",
      },
      "🛏️ Double Bed Sheet": {
        en: "Double Bed Sheet",
        ar: "ملاءة سرير مزدوجة",
      },
      "🛏️ Single Bed Sheet": {
        en: "Single Bed Sheet",
        ar: "ملاءة سرير مفردة",
      },
      "🛌 Double Blanket": {
        en: "Double Blanket",
        ar: "بطانية مزدوجة",
      },
      "🛌 Single Blanket": {
        en: "Single Blanket",
        ar: "بطانية مفردة",
      },
      "🧻 Small Towel": {
        en: "Small Towel",
        ar: "منشفة صغيرة",
      },
      "🧻 Large Towel": {
        en: "Large Towel",
        ar: "منشفة كبيرة",
      },
      "🛏️ Pillowcase": {
        en: "Pillowcase",
        ar: "غطاء وسادة",
      },
      "🪶 Large Feather Pillow": {
        en: "Large Feather Pillow",
        ar: "وسادة ريش كبيرة",
      },
      "🪟 Small Curtain Lining": {
        en: "Small Curtain Lining",
        ar: "بطانة ستارة صغيرة",
      },
      "🪟 Large Curtain Lining": {
        en: "Large Curtain Lining",
        ar: "بطانة ستارة كبيرة",
      },
      "🪟 Large Curtain": {
        en: "Large Curtain",
        ar: "ستارة كبيرة",
      },
      "🪟 Extra Large Curtain": {
        en: "Extra Large Curtain",
        ar: "ستارة كبيرة جدًا",
      },
      "🛏️ Bedspread with Embroidery": {
        en: "Bedspread with Embroidery",
        ar: "غطاء سرير مطرز",
      },
    };

    if (otherItems[item]) {
      return isArabic
        ? `${item.split(" ")[0]} ${otherItems[item].ar}`
        : item;
    }

    return t(`bookNowPage.items.${item}`);
  };

  const getServiceLabel = (service) => {
    if (service === serviceOptions[0]) {
      return t("bookNowPage.serviceOptions.washing");
    }

    if (service === serviceOptions[1]) {
      return t("bookNowPage.serviceOptions.washingPerfume");
    }

    if (service === serviceOptions[2]) {
      return t("bookNowPage.serviceOptions.dryClean");
    }

    return service;
  };

  const getPackagingLabel = (name) => {
    const labels = {
      Plastic: "بلاستيك",
      "Premium Fabric": "قماش فاخر",
      "Gift Box": "علبة هدايا",
    };

    return isArabic ? labels[name] : name;
  };

  const getColorLabel = (color) => {
    const colors = {
      Gray: "رمادي",
      Cream: "كريمي",
      Black: "أسود",
    };

    return isArabic ? colors[color] : color;
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

  const selectPackaging = (item, type, color = "") => {
    setPackaging({
      ...packaging,
      [item]: {
        type: type,
        color: color,
      },
    });
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

    const remainingItems = updatedItems.map((item) => item.item);
    const updatedPackaging = { ...packaging };

    Object.keys(updatedPackaging).forEach((item) => {
      if (!remainingItems.includes(item)) {
        delete updatedPackaging[item];
      }
    });

    setPackaging(updatedPackaging);
  };

  const removeItem = (index) => {
    const removedItem = orderItems[index].item;

    setOrderItems(
      orderItems.filter((_, i) => i !== index)
    );

    const updatedServices = { ...selectedServices };
    const updatedPackaging = { ...packaging };

    delete updatedServices[removedItem];
    delete updatedPackaging[removedItem];

    setSelectedServices(updatedServices);
    setPackaging(updatedPackaging);
  };

  const itemTotal = orderItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const packagingTotal = orderItems.reduce((total, item) => {
    const selected = packaging[item.item];

    if (!selected) return total;

    const option = packagingOptions.find(
      (option) => option.name === selected.type
    );

    return (
      total +
      (option ? option.price * item.quantity : 0)
    );
  }, 0);

  const finalPrice = itemTotal + packagingTotal;

  const handleCoupon = () => {
    if (coupon === "") {
      setCouponError(t("bookNowPage.coupon.enterCode"));
      return;
    }

    setCouponError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setCouponError(t("bookNowPage.coupon.invalid"));
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
          {getItemLabel(item)}
        </p>

        {isOpen && (
          <div
            className="pb-[12px] mt-[5px]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm mb-[8px]">
              {t("bookNowPage.chooseService")}
            </p>

            <div className="flex flex-wrap gap-[8px]">
              <button
                onClick={() =>
                  selectService(item, serviceOptions[0])
                }
                className={`
                  border
                  rounded-full
                  px-[12px]
                  py-[6px]
                  text-sm
                  transition
                  ${
                    selectedService === serviceOptions[0]
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                {t("bookNowPage.serviceOptions.washing")}
              </button>

              <button
                onClick={() =>
                  selectService(item, serviceOptions[1])
                }
                className={`
                  border
                  rounded-full
                  px-[12px]
                  py-[6px]
                  text-sm
                  transition
                  ${
                    selectedService === serviceOptions[1]
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                {t("bookNowPage.serviceOptions.washingPerfume")}
              </button>

              <button
                onClick={() =>
                  selectService(item, serviceOptions[2])
                }
                className={`
                  border
                  rounded-full
                  px-[14px]
                  py-[6px]
                  text-sm
                  transition
                  ${
                    selectedService === serviceOptions[2]
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "bg-white text-yellow-600 border-yellow-500 hover:bg-yellow-50"
                  }
                `}
              >
                {t("bookNowPage.serviceOptions.dryClean")}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderQuestionButton = (value, selected, onClick) => (
    <button
      onClick={onClick}
      className={`
        h-[80px]
        w-full
        rounded-xl
        border
        text-xl
        transition
        duration-200
        hover:shadow-md
        ${
          selected === value
            ? "bg-[#fff9e8] border-yellow-500 shadow-md"
            : "bg-white border-gray-200"
        }
      `}
    >
      {value
        ? languageText("Yes", "نعم")
        : languageText("No", "لا")}
    </button>
  );

  return (
    <div>
      <section
        className={`
          bg-[linear-gradient(to_bottom,#4A3927_0%,#6B5943_35%,#A99A84_65%,#F8F3E8_100%)]
          min-h-[800px]
          w-full
          mx-0
          pt-[1px]
          flex
          ${isArabic ? "flex-row-reverse" : "flex-row"}
          gap-[22px]
          px-[20px]
          max-lg:px-[15px]
          max-lg:gap-[15px]
          max-md:w-full
          max-md:px-[15px]
          max-md:flex-col
          max-md:gap-[20px]
          max-md:pb-[30px]
        `}
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
              {t("bookNowPage.title")}
            </p>

            <p className="mt-[3px] text-center">
              {t("bookNowPage.step")}
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
            {t("bookNowPage.chooseServiceType")}
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
                  {t(`bookNowPage.genders.${service.Gender}`)}
                </p>
              </div>
            ))}
          </div>

          {Selected === "Men" && (
            <div>
              <p className="mt-[30px] text-xl ml-[30px] max-md:ml-[20px]">
                {t("bookNowPage.selectItem")}
              </p>

              <p className="mt-[20px] font-bold ml-[35px] text-xl max-md:ml-[25px]">
                {t("bookNowPage.genders.mens")}
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
                ].map((item) => renderItemCard(item))}
              </div>
            </div>
          )}

          {Selected === "Women" && (
            <div>
              <p className="mt-[30px] text-xl ml-[30px] max-md:ml-[20px]">
                {t("bookNowPage.selectItem")}
              </p>

              <p className="mt-[20px] font-bold ml-[35px] text-xl max-md:ml-[25px]">
                {t("bookNowPage.genders.womens")}
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
                ].map((item) => renderItemCard(item))}
              </div>
            </div>
          )}

          {Selected === "Others" && (
            <div>
              <p className="mt-[30px] text-xl ml-[30px] max-md:ml-[20px]">
                {t("bookNowPage.selectItem")}
              </p>

              <p className="mt-[20px] font-bold ml-[35px] text-xl max-md:ml-[25px]">
                {t("bookNowPage.genders.others")}
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
                  "🛏️ Double Bed Cover",
                  "🛏️ Single Bed Cover",
                  "🛏️ Double Bed Sheet",
                  "🛏️ Single Bed Sheet",
                  "🛌 Double Blanket",
                  "🛌 Single Blanket",
                  "🧻 Small Towel",
                  "🧻 Large Towel",
                  "🛏️ Pillowcase",
                  "🪶 Large Feather Pillow",
                  "🪟 Small Curtain Lining",
                  "🪟 Large Curtain Lining",
                  "🪟 Large Curtain",
                  "🪟 Extra Large Curtain",
                  "🛏️ Bedspread with Embroidery",
                ].map((item) => renderItemCard(item))}
              </div>
            </div>
          )}

          {orderItems.length > 0 && (
            <div className="px-[30px] pb-[30px] max-md:px-[20px]">

              <div className="mt-[30px]">
                <h2 className="text-2xl font-light text-gray-800 mb-[20px]">
                  {languageText(
                    "Would you like your clothes to be incensed with Oud?",
                    "هل ترغب في تعطير ملابسك بالعود؟"
                  )}
                </h2>

                <div className="grid grid-cols-2 gap-[20px] max-sm:gap-[10px]">
                  {renderQuestionButton(
                    true,
                    oud,
                    () => setOud(true)
                  )}

                  {renderQuestionButton(
                    false,
                    oud,
                    () => setOud(false)
                  )}
                </div>
              </div>

              {oud !== null && (
                <div className="mt-[45px]">
                  <h2 className="text-2xl font-light text-gray-800 mb-[20px]">
                    {languageText(
                      "Would you like your clothes to be perfumed?",
                      "هل ترغب في تعطير ملابسك بالعطر؟"
                    )}
                  </h2>

                  <div className="grid grid-cols-2 gap-[20px] max-sm:gap-[10px]">
                    {renderQuestionButton(
                      true,
                      perfume,
                      () => setPerfume(true)
                    )}

                    {renderQuestionButton(
                      false,
                      perfume,
                      () => setPerfume(false)
                    )}
                  </div>
                </div>
              )}

              {perfume !== null && (
                <div className="mt-[45px]">
                  <h2 className="text-2xl font-light text-gray-800 mb-[10px]">
                    {languageText(
                      "How would you like us to package your garments?",
                      "كيف تفضل تغليف ملابسك؟"
                    )}
                  </h2>

                  <p className="text-gray-600 mb-[30px]">
                    {languageText(
                      "Choose packaging for each garment item individually",
                      "اختر التغليف لكل قطعة ملابس بشكل منفصل"
                    )}
                  </p>

                  <div className="flex flex-col gap-[20px]">
                    {orderItems.map((item) => {
                      const selected = packaging[item.item];

                      return (
                        <div
                          key={item.item}
                          className="
                            border
                            border-gray-200
                            rounded-2xl
                            p-[22px]
                            max-sm:p-[12px]
                          "
                        >
                          <div className="flex justify-between items-center mb-[20px] gap-2">
                            <h3 className="text-xl font-medium">
                              {getItemLabel(item.item)}
                              {" "}#{item.quantity}
                            </h3>

                            <p className="text-sm text-gray-500">
                              {selected
                                ? languageText("Selected", "تم الاختيار")
                                : languageText(
                                    "Select packaging",
                                    "اختر التغليف"
                                  )}
                            </p>
                          </div>

                          <div className="grid grid-cols-3 gap-[10px] max-sm:grid-cols-1">
                            {packagingOptions.map((option) => (
                              <div
                                key={option.name}
                                onClick={() =>
                                  selectPackaging(
                                    item.item,
                                    option.name
                                  )
                                }
                                className={`
                                  min-h-[140px]
                                  border
                                  rounded-xl
                                  p-[16px]
                                  cursor-pointer
                                  transition
                                  duration-200
                                  flex
                                  flex-col
                                  justify-center
                                  ${
                                    selected?.type === option.name
                                      ? "bg-[#fff9e8] border-yellow-500"
                                      : "bg-white border-gray-200 hover:border-yellow-400"
                                  }
                                `}
                              >
                                <p className="font-medium text-lg">
                                  {option.icon} {getPackagingLabel(option.name)}
                                </p>

                                <p className="text-sm text-gray-500 mt-[5px]">
                                  {option.price === 0
                                    ? languageText("Free", "مجاني")
                                    : `+ ${option.price} QAR`}
                                </p>

                                {option.name === "Premium Fabric" && (
                                  <div className="flex flex-wrap gap-[7px] mt-[12px]">
                                    {["Gray", "Cream", "Black"].map(
                                      (color) => (
                                        <button
                                          key={color}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            selectPackaging(
                                              item.item,
                                              "Premium Fabric",
                                              color
                                            );
                                          }}
                                          className={`
                                            rounded-full
                                            border
                                            px-[10px]
                                            py-[5px]
                                            text-xs
                                            ${
                                              selected?.type === "Premium Fabric" &&
                                              selected?.color === color
                                                ? "bg-yellow-500 text-white border-yellow-500"
                                                : "bg-white border-gray-300 text-gray-600"
                                            }
                                          `}
                                        >
                                          {getColorLabel(color)}
                                        </button>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {perfume !== null &&
                orderItems.every((item) => packaging[item.item]) && (
                  <div className="mt-[45px]">
                    <h2 className="text-2xl font-light text-gray-800 mb-[25px]">
                      {languageText(
                        "Do you want to send it to a friend?",
                        "هل تريد إرسالها إلى صديق؟"
                      )}
                    </h2>

                    <div className="grid grid-cols-2 gap-[20px] max-sm:gap-[10px]">
                      <button
                        onClick={() => setSendToFriend(true)}
                        className={`
                          min-h-[190px]
                          rounded-2xl
                          border-2
                          transition
                          duration-200
                          hover:shadow-md
                          ${
                            sendToFriend === true
                              ? "bg-[#fff9e8] border-yellow-500"
                              : "bg-white border-gray-200"
                          }
                        `}
                      >
                        <p className="text-4xl mb-[12px]">🎁</p>
                        <p className="text-xl font-medium">
                          {languageText("Yes", "نعم")}
                        </p>
                        <p className="text-gray-600 mt-[12px]">
                          {languageText(
                            "Deliver to friend with card",
                            "التوصيل إلى صديق مع بطاقة"
                          )}
                        </p>
                      </button>

                      <button
                        onClick={() => setSendToFriend(false)}
                        className={`
                          min-h-[190px]
                          rounded-2xl
                          border-2
                          transition
                          duration-200
                          hover:shadow-md
                          ${
                            sendToFriend === false
                              ? "bg-[#fff9e8] border-yellow-500"
                              : "bg-white border-gray-200"
                          }
                        `}
                      >
                        <p className="text-4xl mb-[12px]">📦</p>
                        <p className="text-xl font-medium">
                          {languageText("No", "لا")}
                        </p>
                        <p className="text-gray-600 mt-[12px]">
                          {languageText(
                            "Deliver to you directly",
                            "التوصيل إليك مباشرةً"
                          )}
                        </p>
                      </button>
                    </div>
                  </div>
                )}
            </div>
          )}

          <div className="bg-gray-50 border-t border-gray-100 py-[30px] px-[20px] text-center">
            <p className="text-gray-700">
              {languageText(
                "Complete your full order in one page: category, item, service, add-ons, packaging, and gifting details",
                "أكمل طلبك بالكامل في صفحة واحدة: الفئة، القطعة، الخدمة، الإضافات، التغليف وتفاصيل الهدية"
              )}
            </p>
          </div>
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
              🧾 {t("bookNowPage.orderSummary")}
            </h2>
          </div>

          <div className="mx-[23px] mt-[25px]">

            {Selected && (
              <div className="flex justify-between items-center border-b border-gray-800 py-[10px]">
                <p className="text-sm font-medium">
                  {t("bookNowPage.serviceType")}
                </p>

                <div className="flex items-center gap-2">
                  <p className="text-sm">
                    {t(`bookNowPage.genders.${Selected}`)}
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

            <div className="flex justify-between items-center border-b border-gray-800 py-[10px] gap-2">
              <p className="text-sm font-medium">
                {t("bookNowPage.serviceType")}
              </p>

              <p className="text-sm text-right">
                {getServiceLabel(selectedServiceType)}
              </p>
            </div>

            {orderItems.length > 0 && (
              <div className="mt-[10px]">
                <p className="text-sm font-bold mb-[10px]">
                  {t("bookNowPage.garments")}
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
                    <div className="flex justify-between items-center gap-2">
                      <p className="text-sm font-medium">
                        {getItemLabel(item.item)}
                      </p>

                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-500 text-lg"
                      >
                        ×
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-[5px]">
                      {getServiceLabel(item.service)}
                    </p>

                    <div className="flex justify-between items-center mt-[8px]">
                      <div className="flex items-center gap-[8px]">
                        <button
                          onClick={() => decreaseQuantity(index)}
                          className="h-[28px] w-[28px] bg-gray-200 rounded"
                        >
                          -
                        </button>

                        <p className="text-sm">
                          {item.quantity}
                        </p>

                        <button
                          onClick={() => increaseQuantity(index)}
                          className="h-[28px] w-[28px] bg-gray-200 rounded"
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

            {oud !== null && (
              <div className="flex justify-between items-center border-b border-gray-800 py-[10px] gap-2">
                <p className="text-sm font-medium">
                  🌿 {languageText("Oud", "العود")}
                </p>

                <p className="text-sm">
                  {oud
                    ? languageText("Yes", "نعم")
                    : languageText("No", "لا")}
                </p>
              </div>
            )}

            {perfume !== null && (
              <div className="flex justify-between items-center border-b border-gray-800 py-[10px] gap-2">
                <p className="text-sm font-medium">
                  🌸 {languageText("Perfume", "العطر")}
                </p>

                <p className="text-sm">
                  {perfume
                    ? languageText("Yes", "نعم")
                    : languageText("No", "لا")}
                </p>
              </div>
            )}

            {orderItems.some((item) => packaging[item.item]) && (
              <div className="mt-[15px] border-b border-gray-800 pb-[10px]">
                <p className="text-sm font-medium mb-[10px]">
                  📦 {languageText("Packaging:", "التغليف:")}
                </p>

                {orderItems.map((item) => {
                  const selected = packaging[item.item];

                  if (!selected) return null;

                  const option = packagingOptions.find(
                    (option) => option.name === selected.type
                  );

                  const price = option
                    ? option.price * item.quantity
                    : 0;

                  return (
                    <div
                      key={item.item}
                      className="flex justify-between items-start gap-2 mb-[10px]"
                    >
                      <div>
                        <p className="text-xs text-gray-600">
                          {getPackagingLabel(selected.type)}
                          {selected.color
                            ? ` - ${getColorLabel(selected.color)}`
                            : ""}
                          {" × "}
                          {item.quantity}
                        </p>

                        <p className="text-xs text-gray-500 mt-[3px]">
                          {getItemLabel(item.item)}
                        </p>
                      </div>

                      <p className="text-sm whitespace-nowrap">
                        {price === 0
                          ? languageText("Free", "مجاني")
                          : `+${price} QAR`}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {sendToFriend !== null && (
              <div className="flex justify-between items-center border-b border-gray-800 py-[10px] gap-2">
                <p className="text-sm font-medium">
                  🎁 {languageText("Gift Delivery", "توصيل كهدية")}
                </p>

                <p className="text-sm text-right">
                  {sendToFriend
                    ? languageText("Yes", "نعم")
                    : languageText("No", "لا")}
                </p>
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
                placeholder={t("bookNowPage.coupon.placeholder")}
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
                  ? t("bookNowPage.coupon.loading")
                  : t("bookNowPage.coupon.apply")}
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
                {t("bookNowPage.finalPrice")}
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
