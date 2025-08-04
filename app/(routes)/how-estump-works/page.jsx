import Image from "next/image";
import styles from "./howeStumpWorks.module.scss";
import Heading from "@/app/_components/heading/Heading";

const content = [
  {
    image: "/photos/steps/form.jpg",
    imageAlt:
      "Image of someone sitting at their desk filling out an online form",
    step: "Request a Quote",
    text: "Start by filling out a quote form, including your stump's measurements. Instructions will guide you through the process, ensuring an accurate estimate. You’ll also pay a 20% deposit that goes directly to eStump to secure your booking."
  },
  {
    image: "/photos/steps/handshake.jpg",
    imageAlt:
      "Two people shaking hands, representing getting matched with a stump specialist",
    step: "Get Matched with a Stump Specialist",
    text: "Once your quote is submitted, it gets sent to a pool of trusted stump specialists in your area. They can choose to pick up the job based on your stump’s size and location."
  },
  {
    image: "/photos/steps/schedule.jpg",
    imageAlt:
      "Image of a schedule, representing scheduling an appointment with a stump specialist",
    step: "Schedule a Time with Your Stump Specialist",
    text: "When a stump specialist picks up your job, they’ll have 48 hours to schedule a day that works for both parties. You’ll confirm the date and time that suits your schedule."
  },
  {
    image: "/photos/stump-and-machine-4.JPG",
    imageAlt: "Image of a stump grinder and a tree stump being removed",
    step: "Stump Removal and Payment",
    text: "On the scheduled day, your stump specialist will come to remove the stump. Once the job is complete, they’ll collect the remaining payment directly from you based on their accepted payment methods."
  },
  {
    image: "/photos/steps/beautiful-lawn.jpg",
    imageAlt:
      "Image of a beautiful lawn, representing a a pristine lawn after your unsightly stump has been removed",
    step: "Enjoy Your Stump-Free Yard",
    text: "With your stump gone, enjoy a clean, clear yard. Your stump specialist will mark the job as complete, and you'll be all set to enjoy your beautiful outdoor space."
  }
];

function page() {
  return (
    <section className={styles.howestumpworks}>
      <Heading type="h1" color="orange">
        How eStump Works
      </Heading>
      <div className={styles.steps}>
        {content.map((c, index) => (
          <div
            className={[styles.step, styles[`step-${index + 1}`]].join(" ")}
            key={`step-${index}`}>
            <div className={styles.stepImage}>
              <Image
                src={c.image}
                alt={c.imageAlt}
                fill
                sizes="auto"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.header}>
                <Heading type="h5" color="purple">
                  Step {index + 1}
                </Heading>
                <Heading type="h6" color="orange">
                  {c.step}
                </Heading>
              </div>
              <p className={styles.text}>{c.text}</p>
            </div>
          </div>
        ))}
        <div className={[styles.filler, styles.filler1].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler2].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler3].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler4].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler5].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler6].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler7].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler8].join(" ")}>&nbsp;</div>
        <div
          className={[
            styles.fillerImage,
            styles.fillerImage1,
            styles.fillerImageGreen
          ].join(" ")}>
          <Image
            src="/photos/stump-7-vapproved.JPG"
            alt="photo of a stump"
            sizes="auto"
            fill
            style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
          />
        </div>
        <div
          className={[
            styles.fillerImage,
            styles.fillerImage2,
            styles.fillerImagePurple
          ].join(" ")}>
          <Image
            src="/photos/stump-8-vapproved.JPG"
            alt="photo of a stump"
            sizes="auto"
            fill
            style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
          />
        </div>
        <div
          className={[
            styles.fillerImage,
            styles.fillerImage3,
            styles.fillerImageOrange
          ].join(" ")}>
          <Image
            src="/photos/stump-9-vapproved.JPG"
            alt="photo of a stump"
            sizes="auto"
            fill
            style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
          />
        </div>
      </div>
    </section>
  );
}

export default page;
