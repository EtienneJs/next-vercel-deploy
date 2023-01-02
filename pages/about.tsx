import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { NextComponentType } from "next";
import { AboutProps } from "../components/interface/interfaces";
import JSXStyle from "styled-jsx/style";

export default function About() {
  return (
    <>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/about.tsx</code>
        </p>
        <div>
          <Link href={"/"}>Index</Link>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element | JSX.Element[]) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
