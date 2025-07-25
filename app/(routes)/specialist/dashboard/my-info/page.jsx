import Image from "next/image";
import styles from "./page.module.scss";

function page() {
  return (
    <section className={styles.myInfo}>
      <div className={styles.imageContainer}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrWoTy5y1JpI8gIRndKtWPvh1diQXNcI20w&s"
          fill
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center"
          }}
          alt="Image of Joe Smith"
        />
      </div>
      <div className={styles.info}>
        <p>
          First Name: <span>Joe</span>
        </p>
        <p>
          Last Name: <span>Smith</span>
        </p>
        <p>
          Compliance Status: <span>Approved</span>
        </p>
        <p>
          Compliance Documents Expire: <span>2/11/2026</span>
        </p>
        <p>
          Revenue Earned: <span>$12,500 </span>
        </p>
      </div>
    </section>
  );
}

export default page;
