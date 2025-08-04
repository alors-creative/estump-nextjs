import Heading from "@/app/_components/heading/Heading";
import Image from "next/image";
import styles from "./styles.module.scss";

function SignUpProcess() {
  return (
    <section className={styles.section}>
      <div className="content">
        <Heading type="h1" color="purple">
          Sign Up Process for Contractors
        </Heading>
        <p>
          Getting started with eStump is simple and straightforward. Here’s what
          you’ll need to do to join our network:
        </p>
        <ol>
          <li>
            Sign Up:{" "}
            <span>
              Begin by signing up through our contractor registration page,
              where you’ll provide basic information about your business and
              experience.
            </span>
          </li>
          <li>
            Submit Compliance Documentation:
            <span>
              To ensure we only work with the best professionals, you’ll need to
              submit compliance documentation, including:
            </span>
            <ul>
              <li>Proof of Insurance</li>
              <li>Business License</li>
            </ul>
          </li>
          <li>
            Compliance Review:
            <span>
              Once your documents are submitted, our team will review them. If
              your documentation is approved, you’ll move on to the next step.
            </span>
          </li>
          <li>
            Schedule a Call:
            <span>
              After your compliance documentation is approved, you’ll schedule a
              call with an eStump team member. During this call, we’ll go over
              the platform, explain the process in detail, and answer any
              questions you have.
            </span>
          </li>
          <li>
            Get Started:
            <span>
              After the call, you’ll be ready to start receiving jobs! You’ll be
              part of a trusted network of stump specialists, and you can begin
              accepting work in your area.
            </span>
          </li>
        </ol>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/photos/stump-and-machine-4.JPG"
          alt="Photo of a tree stump"
          fill
          priority
          sizes="auto"
          style={{
            objectFit: "cover"
          }}
        />
      </div>
    </section>
  );
}

export default SignUpProcess;
