import Link from "next/link";
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home
          </Link>
        </li>
        <li>
          <Link href="/components/about">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/components/blog">
            Blog
          </Link>
        </li>
      </ul>
      <div className={styles.container}>{children}</div>
    </div>
  );
}