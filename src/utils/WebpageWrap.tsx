import React from "react";
import Navbar from "../common/Header";
import Footer from "../common/Footer";

type Props = {
  children: React.ReactNode;
};
const LayoutWrapper: React.FC<Props> = props => (
  <>
    <Navbar />
    {props.children}
    <Footer />
  </>
);
export default LayoutWrapper;
