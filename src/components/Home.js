import React from "react";
import logo from "../assets/images/postgresql.svg";
import fuel from "../assets/images/pxfuel (3).jpg";
import "./home.css";
import { Dropdown, Card } from "flowbite-react";
import { Link } from "react-router-dom";

// const navigate = useNavigate()
function Home() {
  return (
    <div className="cards ">
      <Card className="body min-h-screen max-w-sm">
        <div className="grid justify-center items-center">
          <div className="flex items-center">
            <img src={logo} className="max-w-20 " />
            <div className="ml-20">
              <Dropdown dismissOnClick={false}>
                <Link to="/">
                  {" "}
                  <Dropdown.Item>Home</Dropdown.Item>
                </Link>
                <Link to="/events">
                  <Dropdown.Item>Past Events</Dropdown.Item>
                </Link>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="mt-5 max-w-sm mx-auto">
          <img src={fuel} className="max-w-full rounded-md" />
          <p className="mt-5 ml-5" style={{ fontFamily: "Roboto, sans-serif" }}>
            Flo event and marketing is a festival style retreat in regional Victoria.
            <br />
            <br />
            An intimate style festival of approx. 800 to 1000 attendees,
            flo event and marketing ltd offers entrepreneurs the ability to connect without fighting
            for space.
            <br />
            <br />
            All participants must offer a safe and welcoming space that gives
            entrepreneurs the freedom to let their guards down and be unashamedly
            themselves.
            <br />
            <br />
            {/* Apply margin-bottom to create space between paragraphs */}
            Applications are opening soon for 2024. <br /> There are many ways
            to be involved including; <br />
            <br /> 1.WORKSHOPS / PRESENTATIONS <br /> 2.STALLHOLDERS
            <br />
            3.FOOD VENDORS <br /> 4.HEALING HAVEN <br />
            4.COMMUNITY ART <br />
            5.COMMUNITY GROUPS / LIVED EXPERIENCE SPACE <br />
            6.VOLUNTEERS <br /> <br /> Want to be involved in other ways? We
            would love to hear from you! <br /> <br /> Please email
            <a
              href="mailto:floeventmarketing@gmail.com"
              style={{
                color: "blue",
                fontWeight: "medium",
                textDecoration: "none",
              }}
            >
              {" "}
              floeventmarketing@gmail.com
            </a>
            <br />
            <br />
            *** Please know that ALL stall holders must have insurance or buy insurance from us at $10. <br /> <br />
            *** There will be no refunds/transfers for change of mind therefore
            please consider this before applying.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default Home;
