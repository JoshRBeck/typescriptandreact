import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Unleash your strength and sculpt your physique with our dynamic weight training class. From beginners to advanced, our expert trainers guide you through proper techniques and challenging workouts to build lean muscle, boost metabolism, and achieve your fitness goals. Join now to see real results",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Discover tranquility and balance in our invigorating yoga classes. Strengthen your body, mind, and soul as our experienced instructors lead you through various yoga styles. Improve flexibility, reduce stress, and find inner peace amidst our serene studio. Embrace harmony and join our vibrant yoga community today.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Get ready for a powerful core experience! Our Ab Core class targets and tones your abdominal muscles for a sculpted midsection. Combining effective exercises and engaging routines, this class ensures you're on track to achieving a strong, stable, and confident core. Join us and reveal your inner strength!",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on an exhilarating fitness journey with our Adventure class. Unleash your adventurous spirit as we combine outdoor activities, challenges, and team-based workouts. From hiking to obstacle courses, this class will push your limits and elevate your fitness level. Experience fitness in a whole new thrilling way!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "Our signature Fitness class is designed to suit all levels, from beginners to athletes. Energize your body with a variety of cardio, strength, and functional exercises. Let our motivating trainers guide you to your peak performance, boost your stamina, and unleash your full potential. Elevate your fitness game now!",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Achieve extraordinary results with our personalized Training class. Tailored to your specific goals, our one-on-one training provides a focused and customized approach. Our experienced trainers will motivate, challenge, and support you every step of the way. Elevate your fitness journey with dedicated training today!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 40 },
        }}
        >
          <div className="md:w-3/5">
            <HText> OUR CLASSES</HText>
            <p className="py-5">
            Discover an array of diverse fitness classes designed to challenge and inspire you. From high-energy cardio to soothing yoga, our expert instructors lead sessions that cater to every fitness level and interest. Join us to experience a world of fitness possibilities in a supportive and motivating environment.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflox-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map(( item, index) => (
              <Class 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses