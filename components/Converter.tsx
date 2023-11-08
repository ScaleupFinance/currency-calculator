"use client";

import { useState } from "react";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Header } from "./Header";
import { round } from "@/utils/round";

export const rates = {
  DKK: {
    DKK: "1",
    GBP: "0.11673411164863415",
  },
  GBP: {
    DKK: "8.56747833295657",
    GBP: "1",
  },
};

export const Converter = () => {
  const [base, setBase] = useState("DKK");
  const [target, setTarget] = useState("GBP");

  return (
    <>
      <Header />
      <Form
        rates={rates}
        base={base}
        target={target}
        onChangeBase={setBase}
        onChangeTarget={setTarget}
      />
      <Footer
        baseCurrency={base}
        rate={round(Number(rates[base][target]))}
        targetCurrency={target}
      />
    </>
  );
};
