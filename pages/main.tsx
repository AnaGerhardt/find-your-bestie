import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { connectToDatabase } from "../lib/db";
import { toast } from "react-toastify";

import {
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
  age: "young" | "adult" | "senior";
  gender: "female" | "male";
  type: "Dog" | "Cat" | "Rabbit" | "Rodent" | "Bird";
  breed: string;
  city: string;
  country: string;
  image: string;
};

export default function Main({ data }) {
  const router = useRouter();
  const [pets, setPets] = useState([]);

  const toastError = () =>
    toast["error"]("No match found :(", { toastId: "toastId" });
  const toastSuccess = () => toast.dismiss("toastId");

  useEffect(() => {
    data.length > 0 ? (setPets(data), toastSuccess()) : toastError();
  }, [data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow />,
  };

  const petFilter = (filter: Pet["type"]) => {
    router.replace({
      query: {
        city: router.query.city,
        country: router.query.country,
        type: filter,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Main | Find Your Bestie!</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.icons}>
          <span onClick={() => petFilter("Dog")}>
            <Dogs />
          </span>
          <span onClick={() => petFilter("Cat")}>
            <Cats />
          </span>
          <span onClick={() => petFilter("Rabbit")}>
            <Rabbits />
          </span>
          <span onClick={() => petFilter("Rodent")}>
            <Rodents />
          </span>
          <span onClick={() => petFilter("Bird")}>
            <Birds />
          </span>
        </div>
        <Slider {...settings}>
          {pets.map((pet: Pet, i: number) => (
            <div
              className={styles.slide}
              onDoubleClick={() =>
                document
                  .getElementById(`btn ${i}`)
                  .classList.toggle(styles.isActive)
              }
              key={i}
            >
              <div className={styles.petLabel}>
                <div className={styles.petLabelText}>
                  <h3>{pet.name}</h3>
                  <p>{pet.age + " " + pet.gender}</p>
                </div>
                <button
                  id={`btn ${i}`}
                  className={styles.heartButton}
                  onClick={(e) =>
                    e.currentTarget.classList.toggle(styles.isActive)
                  }
                >
                  ❤
                </button>
              </div>
              <img src={pet.image} alt="" />
            </div>
          ))}
        </Slider>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { db } = await connectToDatabase();
  const data = await db.collection("pets").find(query).toArray();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};
