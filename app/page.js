import Terminal from "../components/Terminal";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="MaroonHacks Logo"
          width={50}
          height={50}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
          }}
        />
      </div>
      <div className={styles.container}>
        <h1>
          MaroonHacks:$ <span className={styles.help}>just build things</span>
        </h1>
        <p>
          Type <span style={{ color: "#a5dfee" }}>help</span> to start
        </p>
        <Terminal />
      </div>
    </>
  );
}
