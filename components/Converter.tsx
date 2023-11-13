"use client";

import { useState } from "react";
import { Footer } from "./common/Footer";
import { Form } from "./Form";
import { Header } from "./common/Header";
import { round } from "@/utils/round";
import styles from "./Converter.module.css";

export interface Rates {
  [key: string]: {
    [key: string]: number;
  };
}

export const rates: Rates = {
  DKK: {
    DKK: 1,
    GBP: 0.11673411164863415,
  },
  GBP: {
    DKK: 8.56747833295657,
    GBP: 1,
  },
};

export const Converter = () => {
  const [base, setBase] = useState("DKK");
  const [target, setTarget] = useState("GBP");

  return (
    <div className={styles.converter}>
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
    </div>
  );
};
