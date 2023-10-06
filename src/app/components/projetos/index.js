"use client";

import '../projetos/style.scss';

import Image from 'next/image';

import { Title } from "../title/title";
import CarouselProjects from '../carouselProjects';

export function Projetos() {
  
  return (
    <div className="container-projetos">
      <Title title="Projetos Pessoais" />
      <div className="container-box-projetos">
      <CarouselProjects />
      </div>
    </div>
  )
}