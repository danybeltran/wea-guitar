import Link from "next/link";
import styles from "./nav.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Navigation() {
  return (
    <nav role="navigation" className={`${styles.nav} flex-centered`}>
      <div className="px-4">
        <img src="/logo.png" className={styles.logo} />
      </div>
      <div className="flex-centered w-full justify-between">
        <div className={`${styles.items} flex-centered`}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <div className={styles.dot}></div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <button className="rounded-full p-1.5 focus:outline-none hover:bg-gray-100 active:bg-gray-200">
          <BsThreeDotsVertical className="text-xl" />
        </button>
      </div>
    </nav>
  );
}
