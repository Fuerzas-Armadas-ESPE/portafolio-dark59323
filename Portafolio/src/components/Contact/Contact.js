import { useRef } from 'react';
import styles from './Contact.module.css';
import { constants } from '../../utils/constants';
import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';
import me from '../../assets/me.webp';

const Contact = () => {
  const sectionRef = useRef();
  const isInViewportOnce = useIsInViewportOnce(sectionRef);

  return (
    <section className={styles.contact} id="contact" ref={sectionRef}>
      <div
        className={`${styles.heading} ${
          isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
        }`}
      >
        <h1>DATOS DE CONTACTO</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.center}>
          <div className={styles.box}>
            <div className={styles.img}>
              <img
                width="300px"
                height="400px"
                src={me}
                alt="antonio Ayola Profile"
              />
            </div>
            <div className={styles.details}>
              <h1>Danny Sebastian Quingaluisa Quispe</h1>
              <p>
                Estoy disponible en casi todas las redes sociales. Puede
                enviarme un mensaje.
              </p>
              <br />
              <p>
                Numero:{' '}
                <a
                  title="contact number whatsapp"
                  href={constants.profilesUrls.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {constants.profilesUrls.number}
                </a>
              </p>
              <p>
                Correo:{' '}
                <a
                  title="contact email"
                  href={`mailto: ${constants.profilesUrls.email}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {constants.profilesUrls.email}
                </a>
              </p>
              <br />

              <span> CONTÁCTAME AQUÍ</span>
              <div className={styles.socialContainer}>
                <a
                  title="contact github"
                  href={constants.profilesUrls.github}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  title="contact linkedin"
                  href={constants.profilesUrls.linkedin}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  title="contact whatsapp"
                  href={constants.profilesUrls.whatsapp}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
