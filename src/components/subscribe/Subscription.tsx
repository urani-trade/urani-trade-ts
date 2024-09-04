"use client";

import { Widget } from "@typeform/embed-react";
import { useState } from "react";

import { Button } from "../ui/button";

export default function Subscription() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="mb-16 flex flex-col justify-center mx-auto w-full max-w-screen-lg md:max-w-screen-sm">
      <div className={`flex ${openForm ? "justify-end" : "justify-center"}`}>
        {openForm ? (
          <button
            onClick={() => {
              setOpenForm(false);
            }}
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        ) : (
          <Button
            variant="terciary"
            size="lg"
            onClick={() => setOpenForm(true)}
          >
            Subscribe to our Newsletter
          </Button>
        )}
      </div>

      {openForm && (
        <Widget id="aCYk07Rj" style={{ width: "100%", height: "300px" }} />
      )}
    </div>
  );
}
