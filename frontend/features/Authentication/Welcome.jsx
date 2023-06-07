import { Link } from "react-router-dom";

const Welcome = () => {
  // const date = new Date();
  // const today = new Intl.DateTimeFormat("en-NG", {
  //   dateStyle: "full",
  //   timeStyle: "long",
  // }).format(date);

  const content = (
    <section className="welcome">
      <div className="profile">
        <div className="text">
          <h1>Hello!</h1>
          <p>Let's save the world together</p>
        </div>

        🔔
      </div>

      <p>
        <Link to="/dash/users">View User Settings</Link>
      </p>
    </section>
  );

  return content;
};

export default Welcome;