import React from 'react';
import DocumentTitle from 'react-document-title';

import PriceContainer from '../common/PriceContainer';
import ProductFeaturePanel from '../common/ProductFeaturePanel';
import Testimonial from '../common/Testimonial';

import '../../../styles/GymPersonalTraining.scss';
import '../../../styles/GymGroup.scss';

const features = [
  {
    title: 'Specialised Training Plan',
    image: '/public/img/training/training-plan.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
  {
    title: 'Individualized Nutrition Plan',
    image: '/public/img/training/nutrition.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
  {
    title: 'Continous Support',
    image: '/public/img/training/support.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
];

const GymPersonalTraining = () => (
  <DocumentTitle title="Personal Training - Ultra Health And Fitness">
    <div className="pt-container">
      <div className="pt-header-wrapper">
        <img src="/public/img/training/training-banner.png" alt="Personal Training Banner" />
        <div className="pt-header-text"> PERSONAL TRAINING </div>
      </div>

      <div className="testimonials">
        <div className="pt-body">
          <div className="pt-intro">
            <img src="/public/img/training/personal-training.png" alt="Instructor training client" />
            <div className="pt-body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada accumsan sapien at mattis. Etiam
              nisl turpis, elementum eget felis sit amet, molestie pulvinar augue. Etiam nec ex ac lorem tempus
              accumsan. Aliquam rhoncus congue massa viverra facilisis. Nulla pulvinar cursus ex nec molestie.
              Suspendisse ullamcorper urna vitae arcu finibus bibendum. Integer auctor, sem ut scelerisque vulputate,
              justo libero mollis metus, a efficitur nulla massa in ligula. Aenean malesuada accumsan sapien at mattis.
              Etiam nisl turpis, elementum eget felis sit amet, molestie pulvinar augue. Etiam nec ex ac lorem tempus
              accumsan. Aliquam rhoncus congue massa viverra facilisis.
            </div>
          </div>
        </div>
        <ProductFeaturePanel features={features} />

        <Testimonial
          image="/public/img/training/iga-testimonial.png"
          author="Iga"
          authorImage="/public/img/training/iga-image.png"
          side="left"
        >
          As a fashion model who was dealing with the pressures of final year A-Level studies, I was in dire need of a
          professional personal training service to see me through this challenging time as juggling photo shoots with
          study was starting to have a detrimental effect on my figure.
          <br />
          <br />
          Aaron immediately formulated an individualized nutritional plan and training schedule, which was the solution
          to my predicament. I found that Aaron immediately put me at ease and I felt like this was a personal trainer
          who I could trust.
          <br />
          <br />
          I have been immensely impressed with the results and I have since recommended my mother who has a high
          pressured job as a hospital doctor to train with Aaron. In the past my mother has been unable to remain
          consistent with exercise but since finding Ultra her training has been regular and her health and fitness has
          benefited as a result.
          <br />
          <br />
          I find my sessions not only beneficial physically but also mentally. The training sessions have impacted my
          mental health in the best way possible, they're a well needed break from the pressures of daily life. I would
          recommend Aaron to everyone, he will no doubt make a great and positive impact on your life
        </Testimonial>

        <Testimonial
          image="/public/img/training/lisa-testimonial.png"
          author="Lisa"
          authorImage="/public/img/training/lisa-image.png"
          side="right"
        >
          For just over 2 years I have been attending ULTRA Health and Fitness Banbridge. I am indebted to Aaron and his
          staff for the dramatic change in my life style.
          <br />
          <br />
          As a full time nurse and mother of 3 boys it was easy to find excuses to make poor food choices and not to
          participate in regular exercise. Thanks to an easy to follow individual eating plan and a choice of almost 30
          classes per week of which I aim to attend 3, my weight has been reduced by 3 stone and my body fat down to
          14%.
          <br />
          <br />
          I have also received weekly ART and various other soft tissue treatments for the past year, with particular
          emphasis on my back and hips. This has greatly increased my range of movement and in turn my flexibility -
          only a good thing in ones late 40's!
          <br />
          <br />
          The continuous instruction, motivation and support I have received from Aaron, his staff and fellow members is
          such an encouragement. My 10 year old son Harry now does 1-2 PT sessions with Aaron per week. He describes the
          gym as hard fun. He is absolutely right, it is hard work but it is good fun!
        </Testimonial>

        <Testimonial
          authorImage="/public/img/training/brian-image.png"
          image="/public/img/training/brian-testimonial.png"
          author="Brian"
          side="top"
        >
          After a lifetime involved in sport primarily playing, coaching and refereeing rugby at Club and Ulster Under
          Age level, I have reached the ripe old age of 63 playing a game of golf weekly to keep active. However, I have
          always enjoyed going to the gym, albeit on somewhat of an irregular basis as my approach to training was based
          on a younger version of me, which left me stiff & sore for days afterwards.
          <br />
          <br />
          I knew for some time that I needed guidance from an expert personal trainer, if I was to maintain a fitness
          regime into old age that supported good energy levels, health and flexibility. I had heard about Aaron Donaghy
          and Ultra Health & Fitness as a recognised specialist for elite sports training, but it was only when a good
          friend of mine suggested that Aaron's unique knowledge of a holistic approach to health and fitness was what I
          needed, that I decided to have an assessment with him.
          <br />
          <br />
          Aaron and I initially had an honest discussion about my personal objectives which were to attain a healthy
          weight, obtain and keep a lean strong body, along with promoting good energy levels into old age. He gave me a
          thorough assessment of how my body musculature worked, which initially shocked me as he demonstrated to me
          conclusively that he needed to activate muscle groups which had become 'blocked or compromised' through a
          sedentary working life spent sitting at a desk & over a computer screen. He is an expert practitioner in the
          treatment of muscular injuries and posture correction which is a key part of my programme & which means I can
          train without seizing up and feeling sore for days.
          <br />
          <br />
          I have now been attending Aaron's gym and clinic for almost 6 months and I can honestly say that I haven't
          felt as strong or as fit in many many years. I also now understand my body & how it functions better than I
          ever have. My body fat has reduced from 21.9% to 17.4%, I have loads more energy and sleep much better I
          cannot recommend Ultra Health and Fitness more highly than to say, I know I am going to be healthy, strong &
          fit as I grow older, to really enjoy life and its many blessings.
        </Testimonial>
      </div>

      <PriceContainer
        title="IF NOT NOW, WHEN?"
        price="480"
        description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit. Curabitur pretium elementum elementum. Integer elementum ac neque nec faucibus. Sed vestibulum euismod pulvinar. In et iaculis arcu."
        sessions="12"
      />
    </div>
  </DocumentTitle>
);

export default GymPersonalTraining;
