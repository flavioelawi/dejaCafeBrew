import React from "react";
import styles from "./menu.css";
const Menu = () => (
  <div className={styles.menuContainer}>
    <div className={styles.textContainer}>
      <p className={styles.title}>Menu</p>
      <p className={styles.subtitle}>
        We offer a wide range of foods from classic English breakfast to egg
        benedict, paninis, burgers and even charcoal grill menu. We also have
        chef's special menu everyday including daily soup. Don't forget to
        checkout our specials!
      </p>
      <div className={styles.buttonContainer}>
        <button>
          <a
            className={styles.buttonLike}
            href="src/assets/menu.pdf"
            target="_blank"
          >
            VIEW MENU
          </a>
        </button>

        <button className={styles.specialMenu}>
          <a
            className={styles.buttonLike}
            href="https://www.facebook.com/Deja-Brew-Cafe-Brockley-407394519793712/"
            target="_blank"
          >
            VIEW SPECIALS
          </a>
        </button>
      </div>
    </div>
  </div>
);

export default Menu;
// dejabrewbrockley@gmail.com