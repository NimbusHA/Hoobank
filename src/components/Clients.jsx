import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className="slider-container">
      <div className="slider">
        {clients.concat(clients).map((client, index) => (
          <div key={`${client.id}-${index}`} className="slide">
            <img
              src={client.logo}
              alt="client"
              className="logo"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
