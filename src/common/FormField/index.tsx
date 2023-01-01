/* eslint-disable react/require-default-props */
import React from "react";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

type FormFieldProp = {
  label?: string;
  error?: string;
  children: React.ReactNode;
};

function FormField({ error, label, children }: FormFieldProp) {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

export default FormField;
