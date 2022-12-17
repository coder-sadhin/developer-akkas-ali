import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./About.css";
import { FaGraduationCap } from "react-icons/fa"

const Timeline = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="1500" id="timeline">
      <h5>Resume</h5>
      <h2>Educational Qualifications</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className=" timeline"
          contentStyle={{
            background: "var(--color-bg-variant)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--color-bg-variant)",
          }}
          date="2018 - Present"
          iconStyle={{
            background: "var(--color-bg-variant)",
            color: "var(--color-white)",
          }}
          icon={<FaGraduationCap />}
        >
          <h3>Diploma In Computer Engineering</h3>
          <h5 className="">Rajshahi Polytechnic Institute</h5>
          <p className="text-light">
            I'm a Study here and Its my lest semester. I love to this Invironment
            of this campus. I like to learn new thing and also explore new technology.
            I'm much interested to complete my higher studies form China/canada.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=" timeline"
          contentStyle={{
            background: "var(--color-bg-variant)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--color-bg-variant)",
          }}
          date="2016 - 2018"
          iconStyle={{
            background: "var(--color-bg-variant)",
            color: "var(--color-white)",
          }}
          icon={<FaGraduationCap />}
        >
          <h3>Secondary School Certificate "SSC"</h3>
          <h5 className="">Ai Hai High School</h5>
          <p className="text-light">
            Science Group, SSC batch of 2017. In this time my hobby was
            game play and Cycling. I always want to learn and implement newer
            things.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
