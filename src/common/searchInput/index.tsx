import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { countriesUrl, getRequest } from "../../utils/apicall";
import { useForm } from "react-hook-form";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import FormField from "../../common/FormField";
import { FcSearch } from "react-icons/fc";
import { InputWrap } from "./styles";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import SearchContext, { pushToLocalStorage } from "../../contexts/ValueContext";
import { ContinentProp } from "./type";

type InputProp = {
  searchValue: string;
};

function SearchInput() {
  const [data, setData] = useState<ContinentProp[]>();
  const { register, handleSubmit, reset } = useForm<InputProp>({});
  const navigate = useNavigate();
  const toast = useToast();
  const { setInputValue } = useContext(SearchContext);

  const continents = [
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];

  useQuery(["countries"], () => getRequest({ url: countriesUrl }), {
    onSuccess(e) {
      setData(e);
    },
    refetchOnWindowFocus: false,
  });
  console.log(data);

  // inputValue validation
  const continentValidation = (avilaInputValue: InputProp) => {
    const words = avilaInputValue.searchValue.split(" ");
    const newValueStrB = words
      .map(word => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    const continentsCheckSearch = continents
      ?.map(item => item)
      ?.includes(newValueStrB);

    if (continentsCheckSearch === true) {
      pushToLocalStorage(newValueStrB);
      setInputValue(newValueStrB);
      navigate("continentsearch");
      return;
    }
    return;
  };

  const nameValidation = (avilaInputValue: InputProp) => {
    const newValueStr =
      avilaInputValue.searchValue.charAt(0).toUpperCase() +
      avilaInputValue.searchValue.slice(1);

    const nameCheckSearch = data
      ?.map(item => item?.name?.common || item?.name?.official)
      ?.toString()
      .includes(newValueStr);
    if (nameCheckSearch === true) {
      pushToLocalStorage(newValueStr);
      setInputValue(newValueStr);
      navigate("/countrysearch");
      return;
    }
  };

  const demonymsValidation = (avilaInputValue: InputProp) => {
    const newValueStr =
      avilaInputValue.searchValue.charAt(0).toUpperCase() +
      avilaInputValue.searchValue.slice(1);

    const demonymsCheckSearch = data
      ?.map(item => item?.demonyms?.eng.f || item?.demonyms?.eng.m)
      ?.toString()
      .includes(newValueStr);
    if (demonymsCheckSearch === true) {
      pushToLocalStorage(newValueStr);
      navigate("countrysearch");
      return;
    }
  };

  const subregionValidation = (avilaInputValue: InputProp) => {
    const newValueStr =
      avilaInputValue.searchValue.charAt(0).toUpperCase() +
      avilaInputValue.searchValue.slice(1);

    const subregionCheckSearch = data
      ?.map(item => item?.subregion)
      ?.toString()
      .includes(newValueStr);
    if (subregionCheckSearch === true) {
      pushToLocalStorage(newValueStr);
      navigate("regionsearch");
      return;
    }
  };

  const submitForm = (avilaInputValue: InputProp) => {
    if (avilaInputValue.searchValue === "") {
      toast({
        description: "The search field is empty. Kindly enter a search name",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    continentValidation(avilaInputValue);
    nameValidation(avilaInputValue);
    subregionValidation(avilaInputValue);

    reset();
  };

  return (
    <InputWrap>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormField>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={
                <FcSearch style={{ marginTop: "6px", marginRight: "20px" }} />
              }
            />
            <Input
              type="text"
              focusBorderColor="none"
              {...register("searchValue")}
            />
          </InputGroup>
        </FormField>
        <div className="btnbox">
          <button className="btn">Search</button>
        </div>
      </form>
    </InputWrap>
  );
}

export default SearchInput;
