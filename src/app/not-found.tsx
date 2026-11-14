import NyanCat from "@/components/nyan-cat";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import React, { Suspense } from "react";
import { publicPath } from "@/lib/public-path";

const NotFoundPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene={publicPath("/assets/404.spline")} style={{ height: "100vh" }} />
      </Suspense>
    </>
  );
};

export default NotFoundPage;
