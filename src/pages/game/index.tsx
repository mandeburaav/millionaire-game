import Head from "next/head";
import Link from 'next/link'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Game() {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.grid}>
          Game 
        </div>
      </main>
    </>
  );
}
