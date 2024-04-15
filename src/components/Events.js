import React from "react";
import sam from "../assets/images/sam.jpg";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
function Events() {
  return (
    <div>
      <Link to="/">
        <Button gradientDuoTone="purpleToBlue" className="mb-3 mt-2 ml-2">
          {" "}
          Back
        </Button>
      </Link>

      <div className="grid gap-4 md:grid-cols-4 mx-auto pb-8">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={img1}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            A client interacting with an entrepreneur
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Exploring more than just business opportunities – at Flo Event and Marketing, connections are forged over shared passions and interests. Here, curiosity meets craftsmanship as attendees explore the artisanal offerings
          </p>
        </Card>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={img4}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Entrepreneurs interacting
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Empowerment begins with understanding. At Flo Event and Marketing, entrepreneurs receive the guidance they need to navigate their journey with confidence and also share their skills with others .
          </p>
        </Card>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={img3}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Attendees posed for a picture
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Capturing the vibrant spirit of Flo Event and Marketing, where every moment is a memory waiting to be made. Smiles, laughter, and cherished connections adorn every frame.
          </p>
        </Card>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={img2}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Overview of our events
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          At Flo Event and Marketing, every interaction is infused with warmth and authenticity, creating an environment where connections flourish and dreams take flight join us let's grow together.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Events;
