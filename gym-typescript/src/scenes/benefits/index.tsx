import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Experience excellence like never before at our state-of-the-art gym. Our cutting-edge facilities offer the perfect blend of comfort and performance, providing you with a seamless fitness journey. From top-of-the-line equipment to expert trainers, we're dedicated to helping you achieve your fitness goals. Join us today and unlock your full potential with an unparalleled fitness experience",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Discover an array of over 100 diverse classes that cater to every fitness level and interest. From high-energy cardio to soothing yoga, our expert instructors lead sessions designed to challenge and inspire. Join us to experience a world of fitness possibilities in a supportive and motivating environment.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Our gym boasts a team of expert and pro trainers who are passionate about guiding you on your fitness journey. With personalized workouts, they'll help you set and achieve your goals, while providing valuable tips and motivation along the way. Experience the difference that dedicated trainers can make in transforming your fitness and wellbeing.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* Header */}
        <motion.div 
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world-class fitness equipment, trainers, and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div 
        className="items-center justify-between gap-8 mt-5 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Grapics and Descriptio */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Grapic */}
          <img 
          className="mx-auto"
          alt="benefits-page-graphic"
          src={BenefitsPageGraphic}
          />
          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {""}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
             }}
            >
            <p className="my-5">
            Transforming lives, one member at a time. Our dedicated team of trainers and cutting-edge facilities have helped countless individuals achieve their fitness goals. Join our thriving community today and experience the power of health and happiness.
              </p>
              <p className="mb-5">
              Your journey to a fitter, stronger you starts here! With a wide range of classes, state-of-the-art equipment, and personalized training plans, we tailor our approach to your unique needs. Embrace the support and motivation of like-minded individuals on the same path towards greatness. Be part of our success stories and let us help you unlock your full potential. Together, we'll make every step count on your path to a healthier, happier you!
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
