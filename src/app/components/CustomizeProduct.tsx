"use client";
import { products } from "@wix/stores";
import React, { useState } from "react";

function CustomizeProduct({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  console.log("🚀 ~ variants:", variants);
  console.log("🚀 ~ productOptions:", productOptions);
  console.log("🚀 ~ selectedOptions:", selectedOptions);
  const handleOptions = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = { ...variant.choices };
      if (!variantChoices) return false;
      return (
        Object.entries(choices).every(([key, value]) => {
          return variantChoices[key] === value;
        }) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => {
        return (
          <div className="flex flex-col gap-4" key={option.name}>
            <h4 className="font-medium">Choose {option.name}</h4>
            <ul className="flex items-center gap-3">
              {option.choices?.map((choice) => {
                const disabled = !isVariantInStock({
                  ...selectedOptions,
                  [option.name!]: choice.description!,
                });
                const selected =
                  selectedOptions[option.name!] === choice.description;
                const clickHandler = disabled
                  ? undefined
                  : () => handleOptions(option.name!, choice.description!);
                return option.name === "Color" ? (
                  <li
                    key={choice.value}
                    onClick={clickHandler}
                    className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer bg-red-500 relative"
                    style={{
                      backgroundColor: choice.value,
                      cursor: disabled ? "not-allowed" : "pointer",
                    }}
                  >
                    {selected && (
                      <div className="absolute w-10 h-10 ring-2 rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                    )}
                    {disabled && (
                      <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                    )}
                  </li>
                ) : (
                  <li
                    key={choice.value}
                    className="ring-1 ring-pinkLight text-pinkLight rounded-md py-1 px-4 text-sm cursor-pointer"
                    style={{
                      cursor: disabled ? "not-allowed" : "pointer",
                      backgroundColor: selected
                        ? "#f35c7a"
                        : disabled
                        ? "#FBCFE8"
                        : "white",
                      color: selected || disabled ? "white" : "#f35c7a",
                      boxShadow: disabled ? "none" : "",
                    }}
                    onClick={clickHandler}
                  >
                    {choice.description}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      {/* COLOR
       <ul className="flex items-center gap-3">
              <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer bg-red-500 relative">
                <div className="absolute w-10 h-10 ring-2 rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
              </li>
              <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer bg-blue-500 relative"></li>
              <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed bg-green-500 relative">
                <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
              </li>
            </ul> */}
      {/* <h4 className="font-medium">Choose Size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-pinkLight text-pinkLight rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-pinkLight bg-pinkLight text-white rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-white text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul> */}
    </div>
  );
}

export default CustomizeProduct;
