﻿import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { connectToDatabase } from "../lib/db";

import {
  HeartButton,
  SliderArrow,
  Dogs,
  Cats,
  Rabbits,
  Rodents,
  Birds,
} from "components/Icons";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "styles/pages/Main.module.scss";

type Pet = {
  name: string;
  age: string;
  gender: string;
  type: string;
  breed: string;
  city: string;
  country: string;
  image: string;
};

export default function Main({ data }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow />,
  };

  return (
    <>
      <Head>
        <title>Main | Find Your Bestie!</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.icons}>
          <Dogs />
          <Cats />
          <Rabbits />
          <Rodents />
          <Birds />
        </div>
        <Slider {...settings}>
          {data.map((pet: Pet, i: number) => (
            <div key={i}>
              <div className={styles.petLabel}>
                <div className={styles.text}>
                  <h3>{pet.name}</h3>
                  <p>{pet.age + " " + pet.gender}</p>
                </div>
                <HeartButton />
              </div>
              <img src={pet.image} alt="" />
            </div>
          ))}
        </Slider>
      </main>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { db } = await connectToDatabase();

  const data = await db.collection("pets").find(query).toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
