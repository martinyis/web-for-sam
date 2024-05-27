import React from "react";
import Contact from "../components/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Sam for New Hampshire",
  description: "",
};

function Page() {
  return <Contact />;
}

export default Page;
