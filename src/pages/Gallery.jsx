import React from "react";
import GalleryHeader from "../components/GalleryHeader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../assets/styles/Gallery.css";
import introductionImage1 from "../assets/images/introduction/intro1.webp";
import introductionImage2 from "../assets/images/introduction/intro2.webp";
import introductionImage3 from "../assets/images/introduction/intro3.webp";
import introductionImage4 from "../assets/images/introduction/intro4.webp";
import introductionImage5 from "../assets/images/introduction/intro5.webp";
import introductionImage6 from "../assets/images/introduction/intro6.webp";
import introductionImage7 from "../assets/images/introduction/intro7.webp";
import introductionImage10 from "../assets/images/introduction/intro10.webp";
import introductionImage11 from "../assets/images/introduction/intro11.webp";
import introductionImage13 from "../assets/images/introduction/intro13.webp";
import introductionImage16 from "../assets/images/introduction/intro16.webp";
import introductionImage17 from "../assets/images/introduction/intro17.webp";
import introductionImage21 from "../assets/images/introduction/intro21.webp";
import introductionImage23 from "../assets/images/introduction/intro23.webp";
import introductionImage24 from "../assets/images/introduction/intro24.webp";
import proposalImage1 from "../assets/images/proposal/p1.webp";
import proposalImage2 from "../assets/images/proposal/p2.webp";
import proposalImage3 from "../assets/images/proposal/p3.webp";
import proposalImage4 from "../assets/images/proposal/p4.webp";
import proposalImage5 from "../assets/images/proposal/p5.webp";
import proposalImage6 from "../assets/images/proposal/p6.webp";
import proposalImage7 from "../assets/images/proposal/p7.webp";
import proposalImage8 from "../assets/images/proposal/p8.webp";
import proposalImage9 from "../assets/images/proposal/p9.webp";
import proposalImage10 from "../assets/images/proposal/p10.webp";
import proposalImage11 from "../assets/images/proposal/p11.webp";
import proposalImage12 from "../assets/images/proposal/p12.webp";
import courtWedding1 from "../assets/images/ikoyi/ikoyi1.webp";
import courtWedding2 from "../assets/images/ikoyi/ikoyi2.webp";
import courtWedding3 from "../assets/images/ikoyi/ikoyi3.webp";
import courtWedding4 from "../assets/images/ikoyi/ikoyi4.webp";
import courtWedding5 from "../assets/images/ikoyi/ikoyi5.webp";
import courtWedding6 from "../assets/images/ikoyi/ikoyi6.webp";
import courtWedding7 from "../assets/images/ikoyi/ikoyi7.webp";
import courtWedding8 from "../assets/images/ikoyi/ikoyi8.webp";
import courtWedding9 from "../assets/images/ikoyi/ikoyi9.webp";

const Gallery = () => {
  return (
    <div>
      <GalleryHeader />
      <br />
      <br /> <br />
      <Tabs
        defaultActiveKey="home"
        id="fill-tab-example"
        className="mb-3 mt-4"
        fill
      >
        <Tab eventKey="home" title="INTRODUCTION  IMAGES">
          <div className="image-holder-outter">
            <div className="image-holder-inner">
              <img src={introductionImage7} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage11} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage16} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage4} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage17} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage1} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage2} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage13} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage3} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage23} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage6} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage24} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage5} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage21} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={introductionImage10} alt="" className="photos" />
            </div>
          </div>
        </Tab>

        <Tab eventKey="longer-tab" title="PROPOSAL IMAGES">
          <div className="image-holder-outter">
            <div className="image-holder-inner">
              <img src={proposalImage1} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage2} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage3} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage4} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage5} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage6} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage7} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage8} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage9} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage10} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage11} alt="" className="photos" />
            </div>
            <div className="image-holder-inner">
              <img src={proposalImage12} alt="" className="photos" />
            </div>
          </div>
        </Tab>

        <Tab eventKey="court" title="COURT IMAGES">
          <div className="image-holder-outter1">
            <div className="image-holder-inner1">
              <img src={courtWedding7} alt="" className="photos1" />
            </div>
            <div className="image-holder-inner1">
              <img src={courtWedding2} alt="" className="photos1" />
            </div>
            <div className="image-holder-inner1">
              <img src={courtWedding3} alt="" className="photos1" />
            </div>
            <div className="image-holder-inner1">
            <img src={courtWedding6} alt="" className="photos1" />
            </div>
            <div className="image-holder-inner1">
              <img src={courtWedding5} alt="" className="photos1" />
            </div>
            <div className="image-holder-inner1">
            <img src={courtWedding4} alt="" className="photos1" />
            </div>
            <div className="image-holder-inner1">
              <img src={courtWedding1} alt="" className="photos1" />
            </div>
            <div className="image-holder-inner1">
              <img src={courtWedding8} alt="" className="photos1" />
            </div>
            <div className="image-holder-inner1">
              <img src={courtWedding9} alt="" className="photos1" />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Gallery;
